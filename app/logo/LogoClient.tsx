"use client"

import { useState } from "react"
import { formatearPeso, type LogoGrupoResuelto, type LogoResuelto } from "@/lib/logos-compartido"

type Grupo = LogoGrupoResuelto

function BotonCopiar({ texto, etiqueta = "Copiar" }: { texto: string; etiqueta?: string }) {
  const [copiado, setCopiado] = useState(false)

  async function copiar() {
    try {
      await navigator.clipboard.writeText(texto)
    } catch {
      // Navegadores sin permiso de portapapeles: seleccionar a mano sigue
      // funcionando, así que no vale la pena un mensaje de error.
      return
    }
    setCopiado(true)
    setTimeout(() => setCopiado(false), 1800)
  }

  return (
    <button
      type="button"
      onClick={copiar}
      className="shrink-0 rounded-md bg-[#cc0033] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#a80029] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cc0033] focus-visible:ring-offset-2"
      aria-live="polite"
    >
      {copiado ? "¡Copiado!" : etiqueta}
    </button>
  )
}

function Tarjeta({ item }: { item: LogoResuelto }) {
  const oscuro = item.fondo === "oscuro"
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div
        className={`flex h-36 items-center justify-center px-6 ${
          oscuro ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/logo/${item.archivo}`}
          alt={item.archivo}
          className="max-h-20 w-auto max-w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <code className="text-sm font-semibold text-gray-900">{item.archivo}</code>
            {item.recomendado && (
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                recomendado
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-600">{item.uso}</p>
        </div>

        <dl className="grid grid-cols-3 gap-2 text-[11px] text-gray-500">
          <div>
            <dt className="font-medium text-gray-700">Tamaño</dt>
            <dd>
              {item.ancho} × {item.alto} px
            </dd>
          </div>
          <div>
            <dt className="font-medium text-gray-700">Peso</dt>
            <dd>{formatearPeso(item.bytes)}</dd>
          </div>
          <div>
            <dt className="font-medium text-gray-700">
              {item.anchoDisplay === null ? "Para" : "Ancho sugerido"}
            </dt>
            <dd>{item.anchoDisplay === null ? "imprenta / piezas grandes" : `${item.anchoDisplay} px`}</dd>
          </div>
        </dl>

        <div className="mt-auto flex items-center gap-2 rounded-lg bg-gray-50 p-2">
          <code className="min-w-0 flex-1 truncate text-[11px] text-gray-600" title={item.url}>
            {item.url}
          </code>
          <BotonCopiar texto={item.url} />
        </div>
      </div>
    </div>
  )
}

export default function LogoClient({ grupos }: { grupos: Grupo[] }) {
  const ejemplo = `<img src="https://www.redagrupa.cl/logo/redagrupa-imagotipo.png"
     alt="RedAgrupa"
     width="300"
     style="display:block; border:0; outline:none; text-decoration:none;">`

  return (
    <main className="min-h-screen bg-white">
      <header className="bg-[#cc0033] text-white">
        <div className="container mx-auto max-w-5xl px-6 py-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/redagrupa-imagotipo-blanco.png"
            alt="RedAgrupa"
            width={220}
            className="h-7 w-auto"
          />
          <h1 className="mt-6 text-3xl font-bold">Logos RedAgrupa</h1>
          <p className="mt-2 max-w-2xl text-white/90">
            Cada archivo tiene una dirección pública y permanente. Copiá la dirección y pegala en el{" "}
            <code className="rounded bg-white/15 px-1.5 py-0.5 text-sm">src</code> de la imagen en tu
            plantilla de correo: no hace falta adjuntar nada.
          </p>
        </div>
      </header>

      <div className="container mx-auto max-w-5xl px-6 py-10">
        <section className="mb-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <h2 className="text-sm font-bold text-amber-900">Usá siempre la dirección con “www”</h2>
            <p className="mt-1 text-sm text-amber-800">
              <code className="text-[12px]">redagrupa.cl</code> sin www redirige a{" "}
              <code className="text-[12px]">www.redagrupa.cl</code>. Un correo que apunte a la versión
              corta funciona, pero paga un salto extra en cada apertura y hay programas de correo que no
              lo siguen. Las direcciones de esta página ya vienen con www.
            </p>
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <h2 className="text-sm font-bold text-sky-900">Por qué el archivo mide el doble</h2>
            <p className="mt-1 text-sm text-sky-800">
              Las pantallas de celular y los Mac muestran el doble de puntos por pulgada. Por eso cada
              archivo viene al doble del tamaño en que conviene mostrarlo: poné en{" "}
              <code className="text-[12px]">width</code> el “ancho sugerido”, no el tamaño del archivo, y
              el logo se ve nítido en todos lados.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900">Cuál elegir</h2>
          <div className="mt-3 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-2.5 font-semibold">Si el fondo del correo es…</th>
                  <th className="px-4 py-2.5 font-semibold">Usá</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-2.5 text-gray-600">Blanco o muy claro</td>
                  <td className="px-4 py-2.5">
                    <code className="text-[12px]">redagrupa-imagotipo.png</code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-gray-600">Oscuro, rojo o de color</td>
                  <td className="px-4 py-2.5">
                    <code className="text-[12px]">redagrupa-imagotipo-blanco.png</code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-gray-600">
                    No sabés, o el correo lo abren en Outlook viejo
                  </td>
                  <td className="px-4 py-2.5">
                    <code className="text-[12px]">redagrupa-imagotipo.jpg</code>{" "}
                    <span className="text-gray-500">(trae fondo blanco propio)</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-gray-600">
                    Necesitás algo cuadrado y chico (ícono, avatar, firma)
                  </td>
                  <td className="px-4 py-2.5">
                    <code className="text-[12px]">redagrupa-isotipo.png</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Las versiones <strong>.png</strong> tienen el fondo transparente: toman el color que haya
            detrás. Ojo con una consecuencia: en la versión de color, el interior de la{" "}
            <strong>R</strong> también es transparente, así que sobre un fondo oscuro se ve oscuro —
            para esos casos va la versión blanca, no la de color.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900">Ejemplo listo para pegar</h2>
          <p className="mt-1 text-sm text-gray-600">
            El logo en el encabezado de un correo, mostrado a 300 px de ancho.
          </p>
          <div className="mt-3 overflow-hidden rounded-xl border border-gray-200 bg-gray-900">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
              <span className="text-xs font-medium text-gray-300">Código HTML</span>
              <BotonCopiar texto={ejemplo} etiqueta="Copiar código" />
            </div>
            <pre className="overflow-x-auto px-4 py-3 text-[12px] leading-relaxed text-gray-100">
              <code>{ejemplo}</code>
            </pre>
          </div>
        </section>

        {grupos.map((grupo) => (
          <section key={grupo.titulo} className="mb-12">
            <h2 className="text-xl font-bold text-gray-900">{grupo.titulo}</h2>
            <p className="mt-1 text-sm text-gray-600">{grupo.descripcion}</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {grupo.items.map((item) => (
                <Tarjeta key={item.archivo} item={item} />
              ))}
            </div>
          </section>
        ))}

        <footer className="border-t border-gray-200 pt-6 text-sm text-gray-500">
          <p>
            ¿Necesitás un tamaño o un formato que no está acá? Escribinos y lo agregamos a esta misma
            página.
          </p>
        </footer>
      </div>
    </main>
  )
}
