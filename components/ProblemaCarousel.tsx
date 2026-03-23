"use client"

import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { FileText, Shield, AlertCircle, ChevronDown } from "lucide-react"

const problemaCards = [
  {
    icon: FileText,
    title: "Complejidad administrativa que abruma",
    text: "Formularios, correos con la aseguradora, llamadas de colaboradores y plazos que nadie recuerda. Cada reembolso o incorporación termina siendo una mini-operación administrativa dentro de tu negocio.",
  },
  {
    icon: Shield,
    title: "Equipos expuestos a gastos imprevistos",
    text: "Una urgencia médica puede transformarse en deuda familiar si nadie sabe cómo usar el seguro o qué cubre realmente el plan complementario. El beneficio existe, pero no se usa a tiempo.",
  },
  {
    icon: AlertCircle,
    title: "Beneficios que se pagan, pero no se entienden",
    text: "Colaboradores que sienten que 'tienen un seguro', pero no saben dónde llamar, qué papeles guardar o cómo hacer un reclamo. Resultado: pagan de su bolsillo algo que la empresa ya está financiando.",
  },
]

function ProblemaCarouselCard({ icon: Icon, title, text }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-w-0 shrink-0 grow-0 basis-full px-6 py-6">
      <div className="rounded-2xl p-5 space-y-3">
        <button onClick={() => setOpen(!open)} className="flex items-center gap-3 text-left w-full">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-[#cc0033]" />
          </div>
          <h3 className="text-lg font-normal text-white leading-tight flex-1">{title}</h3>
          <ChevronDown className={`w-5 h-5 text-white/70 transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`} />
        </button>
        <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
          <div className="overflow-hidden">
            <p className="text-white/80 text-sm leading-snug pt-1">{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProblemaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi, onSelect])

  return (
    <div>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {problemaCards.map((card, i) => (
            <ProblemaCarouselCard key={i} icon={card.icon} title={card.title} text={card.text} />
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {problemaCards.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir a problema ${i + 1}`}
            className={`min-w-[24px] min-h-[24px] bg-clip-content p-[7px] w-2 h-2 rounded-full transition-colors ${i === selectedIndex ? "bg-white" : "bg-white/40"}`}
            onClick={() => emblaApi?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  )
}
