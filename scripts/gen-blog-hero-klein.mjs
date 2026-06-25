#!/usr/bin/env node
// =============================================================================
// gen-blog-hero-klein.mjs — Generador canónico de imágenes hero del blog
// =============================================================================
// PROTOCOLO: TODA imagen de un artículo del blog RedAgrupa se genera con
// FLUX.2 [klein] (ComfyUI en PC-2), NUNCA con otro motor. Ver CLAUDE.md →
// "Protocolo de imágenes del blog".
//
// - Motor: FLUX.2 klein 4B (Apache 2.0, comercial-safe). 9B es non-commercial.
// - Salida: 16:9 1536×864 webp q82 → public/blog/<slug>.webp + blog-content/images/<slug>.webp
// - Gate visual OBLIGATORIO: por defecto escribe a tmp-blog-hero/ para revisar
//   con los ojos antes de embeber. Pasar --final para escribir a las rutas reales.
// - Reproducible: el par (prompt, seed) regenera el mismo hero. Registrar ambos.
//
// Requisitos: PC-2 ComfyUI accesible (COMFY_HOST, default http://192.168.1.26:8188)
// con los modelos flux-2-klein-*-fp8 + flux2-vae cargados. `sharp` (ya en deps).
//
// Uso:
//   node scripts/gen-blog-hero-klein.mjs --slug=mi-articulo --prompt-file=prompt.txt --seed=70425
//   node scripts/gen-blog-hero-klein.mjs --slug=mi-articulo --prompt-file=prompt.txt --seed=70425 --final
//
// Flags: --slug= (req) · --prompt-file= | --prompt= (req) · --seed= (def 70425)
//        --model=4b|9b (def 4b) · --final (escribe a rutas reales) · --host=
// =============================================================================

import { randomUUID } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, "..");

// ---- args --------------------------------------------------------------------
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/);
    return m ? [m[1], m[2] ?? true] : [a, true];
  })
);
const SLUG = args.slug;
const SEED = Number(args.seed) || 70425;
const MODEL = args.model === "9b" ? "9b" : "4b";
const FINAL = !!args.final;
const HOST = args.host || process.env.COMFY_HOST || "http://192.168.1.26:8188";
const PROMPT = args["prompt-file"]
  ? fs.readFileSync(args["prompt-file"], "utf-8").trim()
  : typeof args.prompt === "string"
    ? args.prompt
    : null;

if (!SLUG || !PROMPT) {
  console.error("Uso: --slug=<slug> --prompt-file=<path>|--prompt=<txt> [--seed=N] [--model=4b|9b] [--final]");
  process.exit(1);
}

// ---- FLUX.2 klein graph (topología canónica NORA, verificada en PC-2) --------
const MODELS = {
  "4b": { unet: "flux-2-klein-4b-fp8.safetensors", clip: "qwen_3_4b.safetensors", steps: 4 },
  "9b": { unet: "flux-2-klein-9b-fp8.safetensors", clip: "qwen_3_8b_fp8mixed.safetensors", steps: 6 },
};
const VAE = "flux2-vae.safetensors";
const W = 1536, H = 864; // 16:9, múltiplos de 16

function buildGraph({ prompt, seed, model }) {
  const m = MODELS[model];
  return {
    "1": { class_type: "UNETLoader", inputs: { unet_name: m.unet, weight_dtype: "default" } },
    "2": { class_type: "CLIPLoader", inputs: { clip_name: m.clip, type: "flux2" } },
    "3": { class_type: "VAELoader", inputs: { vae_name: VAE } },
    "4": { class_type: "CLIPTextEncode", inputs: { text: prompt, clip: ["2", 0] } },
    "5": { class_type: "ConditioningZeroOut", inputs: { conditioning: ["4", 0] } },
    "6": { class_type: "EmptyFlux2LatentImage", inputs: { width: W, height: H, batch_size: 1 } },
    "7": { class_type: "Flux2Scheduler", inputs: { steps: m.steps, width: W, height: H } },
    "8": { class_type: "RandomNoise", inputs: { noise_seed: seed } },
    "9": { class_type: "KSamplerSelect", inputs: { sampler_name: "euler" } },
    "10": { class_type: "CFGGuider", inputs: { model: ["1", 0], positive: ["4", 0], negative: ["5", 0], cfg: 1 } },
    "11": { class_type: "SamplerCustomAdvanced", inputs: { noise: ["8", 0], guider: ["10", 0], sampler: ["9", 0], sigmas: ["7", 0], latent_image: ["6", 0] } },
    "12": { class_type: "VAEDecode", inputs: { samples: ["11", 0], vae: ["3", 0] } },
    "13": { class_type: "SaveImage", inputs: { images: ["12", 0], filename_prefix: `redagrupa-blog-${SLUG}` } },
  };
}

// ---- ComfyUI HTTP (POST /prompt → poll /history → GET /view) -----------------
async function queue(graph) {
  const r = await fetch(`${HOST}/prompt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: graph, client_id: randomUUID() }),
  });
  if (!r.ok) throw new Error(`/prompt ${r.status}: ${await r.text()}`);
  const j = await r.json();
  if (j.node_errors && Object.keys(j.node_errors).length) throw new Error(`node_errors: ${JSON.stringify(j.node_errors).slice(0, 500)}`);
  return j.prompt_id;
}
async function poll(id, timeoutMs = 5 * 60 * 1000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const r = await fetch(`${HOST}/history/${id}`);
    if (r.ok) {
      const e = (await r.json())[id];
      if (e) {
        const s = e.status || {};
        if (s.completed || s.status_str === "success") return e;
        if (s.status_str === "error") throw new Error(`render error: ${JSON.stringify((s.messages || []).slice(-3)).slice(0, 500)}`);
      }
    }
    await new Promise((res) => setTimeout(res, 2000));
  }
  throw new Error(`poll timeout ${timeoutMs / 1000}s`);
}
async function firstImage(entry) {
  for (const out of Object.values(entry.outputs || {})) {
    for (const f of out.images || []) {
      const p = new URLSearchParams({ filename: f.filename, subfolder: f.subfolder || "", type: f.type || "output" });
      const r = await fetch(`${HOST}/view?${p}`);
      if (r.ok) return Buffer.from(await r.arrayBuffer());
    }
  }
  throw new Error("sin imágenes en el output");
}

// ---- run ---------------------------------------------------------------------
console.log(`FLUX.2 klein ${MODEL} · seed ${SEED} · ${W}×${H} · ${HOST}`);
const id = await queue(buildGraph({ prompt: PROMPT, seed: SEED, model: MODEL }));
console.log(`encolado ${id} — renderizando...`);
const png = await firstImage(await poll(id));
const webp = await sharp(png).resize(W, H, { fit: "cover" }).webp({ quality: 82 }).toBuffer();

let outs;
if (FINAL) {
  outs = [path.join(REPO, "public/blog", `${SLUG}.webp`), path.join(REPO, "blog-content/images", `${SLUG}.webp`)];
} else {
  const tmp = path.join(REPO, "tmp-blog-hero");
  fs.mkdirSync(tmp, { recursive: true });
  outs = [path.join(tmp, `${SLUG}-seed${SEED}.webp`)];
}
for (const o of outs) fs.writeFileSync(o, webp);
console.log(`OK ${(webp.length / 1024).toFixed(0)}KB${FINAL ? " [FINAL]" : " [gate visual — revisar antes de --final]"}`);
outs.forEach((o) => console.log(`  ${o}`));
console.log(`\nReproducible → seed=${SEED} model=${MODEL}. Registrar el par (prompt, seed).`);
