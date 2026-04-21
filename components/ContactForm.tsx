"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Lock, Loader2, CheckCircle2, X } from "lucide-react"
import { toast, Toaster } from "sonner"
import { contactoSchema, contactoPersonasSchema, type ContactoData, type ContactoPersonasData } from "@/lib/schemas/contacto"

type ContactFormProps = {
  pagina: string
  heading: string
  variant?: "standard" | "personas"
}

type FormData = ContactoData | ContactoPersonasData

export default function ContactForm({ pagina, heading, variant = "standard" }: ContactFormProps) {
  const [showSuccess, setShowSuccess] = useState(false)
  const [loadedAt] = useState(() => Date.now())
  const [honeypot, setHoneypot] = useState("")
  const dialogRef = useRef<HTMLDivElement>(null)

  // A5: Focus trap + ESC key for success dialog
  useEffect(() => {
    if (!showSuccess) return
    const dialog = dialogRef.current
    if (!dialog) return

    // Focus the close button on open
    const closeBtn = dialog.querySelector<HTMLButtonElement>("[data-close-dialog]")
    closeBtn?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowSuccess(false)
        return
      }
      if (e.key !== "Tab") return

      const focusable = dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [showSuccess])
  const isPersonas = variant === "personas"
  const schema = isPersonas ? contactoPersonasSchema : contactoSchema

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { pagina },
  })

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website: honeypot, _t: loadedAt }),
      })

      if (!res.ok) {
        throw new Error("Error al enviar")
      }

      reset()
      setShowSuccess(true)

      // C8: Disparar evento para GA4 (atribución de conversiones)
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "formulario_contacto_enviado",
          pagina,
        })
      }

      // C9: Marcar envío para que ExitIntentPopup no aparezca post-conversión
      sessionStorage.setItem("redagrupa_form_submitted", "true")
    } catch {
      toast.error("Error al enviar el mensaje", {
        description: "Por favor intenta nuevamente.",
      })
    }
  }

  const inputClass =
    "w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#cc0033]"
  const errorClass = "text-xs text-red-500 mt-1"

  return (
    <>
      <Toaster richColors position="top-center" />
      <h2 className="text-xl lg:text-2xl font-bold text-[#333333] text-center mb-2 leading-snug">
        {heading}
      </h2>
      <p className="text-sm text-center text-[#666666] mb-6">Cotización gratuita y sin compromiso</p>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Honeypot anti-bot — invisible para usuarios reales */}
        <div className="absolute opacity-0 h-0 w-0 -z-10 overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        {/* Nombre completo */}
        <div>
          <label htmlFor="nombre" className="sr-only">Nombre completo</label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre Completo *"
            className={inputClass}
            aria-required="true"
            aria-invalid={!!errors.nombre}
            aria-describedby={errors.nombre ? "nombre-error" : undefined}
            {...register("nombre")}
          />
          {errors.nombre && <p id="nombre-error" role="alert" className={errorClass}>{errors.nombre.message}</p>}
        </div>

        {/* Email y Teléfono */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email *"
              className={inputClass}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email && <p id="email-error" role="alert" className={errorClass}>{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="telefono" className="sr-only">Teléfono</label>
            <input
              id="telefono"
              type="tel"
              placeholder="Teléfono (Ej: +56 9 1234 5678) *"
              className={inputClass}
              aria-required="true"
              aria-invalid={!!errors.telefono}
              aria-describedby={errors.telefono ? "telefono-error" : undefined}
              {...register("telefono")}
            />
            {errors.telefono && <p id="telefono-error" role="alert" className={errorClass}>{errors.telefono.message}</p>}
          </div>
        </div>

        {/* Empresa */}
        <div>
          <label htmlFor="empresa" className="sr-only">Nombre empresa{isPersonas ? " (opcional)" : ""}</label>
          <input
            id="empresa"
            type="text"
            placeholder={isPersonas ? "Nombre Empresa (Opcional)" : "Nombre Empresa *"}
            className={inputClass}
            aria-required={!isPersonas}
            aria-invalid={!!(errors as Record<string, unknown>).empresa}
            aria-describedby={(errors as Record<string, unknown>).empresa ? "empresa-error" : undefined}
            {...register("empresa")}
          />
          {"empresa" in errors && errors.empresa && (
            <p id="empresa-error" role="alert" className={errorClass}>{errors.empresa.message}</p>
          )}
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="mensaje" className="sr-only">Mensaje (opcional)</label>
          <textarea
            id="mensaje"
            placeholder="Mensaje (Opcional)"
            rows={2}
            className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-sm text-gray-900 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-[#cc0033]"
            {...register("mensaje")}
          />
          {"mensaje" in errors && errors.mensaje && (
            <p id="mensaje-error" role="alert" className={errorClass}>{errors.mensaje.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#cc0033] text-white py-3 rounded-full text-sm font-medium hover:bg-[#b30029] transition-colors shadow-lg disabled:opacity-70"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Enviando...
            </span>
          ) : (
            "Enviar Mensaje"
          )}
        </button>

        <p className="text-xs text-center text-[#cc0033] font-medium mt-1">
          Recibirás tu cotización personalizada sin costo
        </p>
        <p className="text-xs text-center text-gray-600 flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" aria-hidden="true" />
          Tus datos están 100% protegidos.{" "}
          <Link href="/politicas-de-privacidad" className="text-[#cc0033] underline hover:no-underline">
            Ver políticas
          </Link>
        </p>
        <p className="text-xs text-center text-gray-500 mt-2">
          +300 empresas ya confían en RedAgrupa | +10 años de experiencia
        </p>
      </form>

      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setShowSuccess(false)}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-heading"
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              data-close-dialog
              onClick={() => setShowSuccess(false)}
              aria-label="Cerrar confirmación"
              className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 bg-[#cc0033] rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>

            <h3 id="success-heading" className="text-2xl font-bold text-[#333333] mb-2">
              ¡Mensaje enviado!
            </h3>
            <p className="text-gray-600 mb-6">
              Gracias por contactarnos. Te contactaremos pronto por email o teléfono.
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="bg-[#cc0033] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#a30029] transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  )
}
