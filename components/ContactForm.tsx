"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronDown, Lock, Loader2, CheckCircle2, X } from "lucide-react"
import { toast } from "sonner"
import { contactoSchema, contactoPersonasSchema, type ContactoData, type ContactoPersonasData } from "@/lib/schemas/contacto"

type ContactFormProps = {
  pagina: string
  heading: string
  variant?: "standard" | "personas"
}

type FormData = ContactoData | ContactoPersonasData

export default function ContactForm({ pagina, heading, variant = "standard" }: ContactFormProps) {
  const [showSuccess, setShowSuccess] = useState(false)
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
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error("Error al enviar")
      }

      reset()
      setShowSuccess(true)
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
      <h2 className="text-xl lg:text-2xl font-bold text-[#333333] text-center mb-6 leading-snug">
        {heading}
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Nombre completo */}
        <div>
          <input
            type="text"
            placeholder="Nombre Completo"
            className={inputClass}
            {...register("nombre")}
          />
          {errors.nombre && <p className={errorClass}>{errors.nombre.message}</p>}
        </div>

        {/* Email y Teléfono */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className={inputClass}
              {...register("email")}
            />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Teléfono"
              className={inputClass}
              {...register("telefono")}
            />
            {errors.telefono && <p className={errorClass}>{errors.telefono.message}</p>}
          </div>
        </div>

        {isPersonas ? (
          /* Personas: Empresa (opcional) + Motivo */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Nombre Empresa (Opcional)"
                className={inputClass}
                {...register("empresa")}
              />
            </div>
            <div className="relative">
              <select
                className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#cc0033]"
                {...register("motivo")}
              >
                <option value="">Motivo</option>
                <option value="cotizacion">Cotización</option>
                <option value="consulta">Consulta</option>
                <option value="informacion">Más información</option>
                <option value="otro">Otro</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cc0033] pointer-events-none" />
              {errors.motivo && <p className={errorClass}>{errors.motivo.message}</p>}
            </div>
          </div>
        ) : (
          /* Standard: Empresa + Rubro, luego Cantidad Empleados + Motivo */
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Nombre Empresa"
                  className={inputClass}
                  {...register("empresa")}
                />
                {"empresa" in errors && errors.empresa && (
                  <p className={errorClass}>{errors.empresa.message}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Rubro"
                  className={inputClass}
                  {...register("rubro" as keyof FormData)}
                />
                {"rubro" in errors && (errors as Record<string, { message?: string }>).rubro && (
                  <p className={errorClass}>{(errors as Record<string, { message?: string }>).rubro?.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="number"
                  placeholder="Cantidad de Empleados"
                  className={inputClass}
                  {...register("cantidad_empleados" as keyof FormData)}
                />
                {"cantidad_empleados" in errors && (errors as Record<string, { message?: string }>).cantidad_empleados && (
                  <p className={errorClass}>{(errors as Record<string, { message?: string }>).cantidad_empleados?.message}</p>
                )}
              </div>
              <div className="relative">
                <select
                  className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#cc0033]"
                  {...register("motivo")}
                >
                  <option value="">Motivo</option>
                  <option value="cotizacion">Cotización</option>
                  <option value="consulta">Consulta</option>
                  <option value="informacion">Más información</option>
                  <option value="otro">Otro</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cc0033] pointer-events-none" />
                {errors.motivo && <p className={errorClass}>{errors.motivo.message}</p>}
              </div>
            </div>
          </>
        )}

        {/* Mensaje */}
        <div>
          <textarea
            placeholder={isPersonas ? "Mensaje (Opcional)" : "Mensaje"}
            rows={4}
            className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-sm text-gray-900 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-[#cc0033]"
            {...register("mensaje")}
          />
          {"mensaje" in errors && errors.mensaje && (
            <p className={errorClass}>{errors.mensaje.message}</p>
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

        <p className="text-xs text-center text-gray-600 flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" />
          Tus datos están 100% protegidos.{" "}
          <a href="/politicas-de-privacidad" className="text-[#cc0033] underline hover:no-underline">
            Ver políticas
          </a>
        </p>
      </form>

      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setShowSuccess(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 bg-[#cc0033] rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-[#333333] mb-2">
              ¡Mensaje enviado!
            </h3>
            <p className="text-gray-600 mb-6">
              Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad.
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
