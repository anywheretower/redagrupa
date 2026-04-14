"use client"

import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const statsCards = [
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    number: "+10",
    label: "Años de experiencia",
    text: "Enfocados en las necesidades de las pymes",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    number: "+300",
    label: "Empresas",
    text: "Que confían en nuestro equipo de profesionales",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    number: "+9,000",
    label: "Familias",
    text: "Cubiertas en Chile y el extranjero",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    number: "+1,400",
    label: "Alianzas",
    text: "Conforman nuestra red de convenios",
  },
]

export default function StatsCarousel() {
  const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, prefersReduced ? [] : [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
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
    <div role="region" aria-label="Estadísticas de RedAgrupa" aria-roledescription="carrusel">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex" aria-live="polite" aria-atomic="false">
          {statsCards.map((card, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full px-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 space-y-3 text-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                  {card.icon}
                </div>
                <div className="text-4xl font-bold text-white">{card.number}</div>
                <h3 className="text-xl font-semibold text-white">{card.label}</h3>
                <p className="text-sm text-white/95 leading-snug">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {statsCards.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir a estadística ${i + 1}`}
            className={`min-w-[24px] min-h-[24px] bg-clip-content p-[7px] w-2 h-2 rounded-full transition-colors ${i === selectedIndex ? "bg-white" : "bg-white/60"}`}
            onClick={() => emblaApi?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  )
}
