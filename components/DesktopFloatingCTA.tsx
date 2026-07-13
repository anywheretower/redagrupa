"use client"

import { Mail } from "lucide-react"
import { useContactModal } from "@/components/ContactModalProvider"

// CTA de conversión persistente para escritorio (C7 — auditoría web 2026-06-09).
// Stack de dos vías: "Solicitar Asesoría" abre el modal de contacto que ya existe
// (ContactModalProvider → ContactForm → /api/contacto) y "Cotiza gratis" salta a
// WhatsApp. Van en un contenedor con items-stretch para que ambas píldoras midan
// lo mismo sin fijar un ancho a mano: la más larga manda.
// Solo lg+ — en móvil la conversión la cubre StickyMobileCTA, que abre este mismo
// modal. No se solapa con el sidebar de redes (right-6 top-1/2).
// Montado una sola vez en el layout → aparece en todas las páginas.

const PILL =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#333333] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#cc0033]"

export default function DesktopFloatingCTA() {
  const { openContactModal } = useContactModal()

  return (
    <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col items-stretch gap-3">
      <button
        type="button"
        onClick={() => openContactModal({ pagina: "flotante-desktop" })}
        aria-label="Solicitar asesoría gratis por formulario"
        className={PILL}
      >
        <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        Solicitar Asesoría
      </button>

      <a
        href="https://wa.me/56982414614?text=Hola%2C%20quiero%20cotizar%20un%20seguro%20complementario%20de%20salud%20para%20mi%20empresa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cotiza gratis por WhatsApp"
        className={PILL}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Cotiza gratis
      </a>
    </div>
  )
}
