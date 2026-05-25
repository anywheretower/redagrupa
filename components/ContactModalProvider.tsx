"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"
import { CheckCircle2 } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false })

const DEFAULT_HEADING = "Cotiza gratis y sin compromiso"

const PAGES_WITH_INLINE_FORM = new Set([
  "/",
  "/seguro-complementario",
  "/beneficios-redagrupa",
  "/seguro-complementario-bice-pyme",
  "/nosotros",
])

type OpenArgs = {
  pagina: string
  heading?: string
}

type ContactModalContextValue = {
  openContactModal: (args: OpenArgs) => void
  closeContactModal: () => void
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null)

export function useContactModal() {
  const ctx = useContext(ContactModalContext)
  if (!ctx) {
    throw new Error("useContactModal must be used within ContactModalProvider")
  }
  return ctx
}

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [pagina, setPagina] = useState("modal")
  const [heading, setHeading] = useState(DEFAULT_HEADING)
  const [formKey, setFormKey] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const openContactModal = useCallback((args: OpenArgs) => {
    setPagina(args.pagina)
    setHeading(args.heading ?? DEFAULT_HEADING)
    setSubmitted(false)
    setFormKey((k) => k + 1)
    setOpen(true)
  }, [])

  const closeContactModal = useCallback(() => {
    setOpen(false)
  }, [])

  // Reset estado al cerrar (tras la animación)
  const handleOpenChange = (next: boolean) => {
    if (isSubmitting && !next) return
    setOpen(next)
    if (!next) {
      // Pequeño delay para que la animación de cierre termine antes de resetear
      setTimeout(() => {
        setSubmitted(false)
        setIsSubmitting(false)
      }, 200)
    }
  }

  // Hash autodetect: abre modal si llega con #formulario-contacto en página sin form inline
  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.location.hash !== "#formulario-contacto") return
    if (PAGES_WITH_INLINE_FORM.has(pathname ?? "/")) return

    openContactModal({ pagina: "hash-autodetect", heading: DEFAULT_HEADING })
    history.replaceState(null, "", window.location.pathname + window.location.search)
  }, [pathname, openContactModal])

  return (
    <ContactModalContext.Provider value={{ openContactModal, closeContactModal }}>
      {children}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          closeButtonDisabled={isSubmitting}
          onEscapeKeyDown={(e) => {
            if (isSubmitting) e.preventDefault()
          }}
          onPointerDownOutside={(e) => {
            if (isSubmitting) e.preventDefault()
          }}
          onInteractOutside={(e) => {
            if (isSubmitting) e.preventDefault()
          }}
        >
          <DialogTitle className="sr-only">Formulario de contacto</DialogTitle>

          {submitted ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-[#cc0033] rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-2">
                ¡Mensaje enviado!
              </h3>
              <p className="text-gray-600 mb-6">
                Gracias por contactarnos. Te contactaremos pronto por email o teléfono.
              </p>
              <button
                type="button"
                onClick={closeContactModal}
                className="bg-[#cc0033] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#a30029] transition-colors"
              >
                Entendido
              </button>
            </div>
          ) : (
            <ContactForm
              key={formKey}
              pagina={pagina}
              heading={heading}
              variant="standard"
              onSuccess={() => setSubmitted(true)}
              onSubmittingChange={setIsSubmitting}
            />
          )}
        </DialogContent>
      </Dialog>
    </ContactModalContext.Provider>
  )
}
