import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RedAgrupa — Seguros complementarios para pymes",
    short_name: "RedAgrupa",
    description:
      "Corredor de seguros complementarios de salud para empresas en Chile. Comparamos planes, gestionamos reembolsos y asesoramos sin costo.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#cc0033",
    lang: "es-CL",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
