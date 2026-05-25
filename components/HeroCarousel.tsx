"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useContactModal } from "@/components/ContactModalProvider"

const slides = [
  {
    image: "/images/hero-redagrupa.webp",
    alt: "Equipo de trabajo protegido con seguro complementario de salud RedAgrupa",
    mobileObjectPos: "object-[60%_30%]",
    headline: "Seguro complementario de salud para pymes, desde UF\u00a00,52/mes. Sin trámites, sin papeleo",
    subtitle: "Seguro complementario de salud para pymes desde 5 trabajadores. Comparamos las principales aseguradoras, elegimos el mejor plan y gestionamos todo: cotización, contratación y reembolsos.",
    ctaPrimary: { text: "Cotiza Gratis" },
    ctaSecondary: { text: "Ver Coberturas y Planes", href: "/seguro-complementario", isLink: true },
  },
  {
    image: "/images/hero-slide2.webp",
    alt: "Equipo de trabajo en reunión de planificación de seguros complementarios",
    mobileObjectPos: "object-[70%_25%]",
    headline: "Recupera hasta 40 horas al año en gestión de seguros",
    subtitle: "Nos integramos como el área de seguros de tu empresa. Gestionamos incorporaciones, reembolsos y consultas de tu equipo. +300 empresas ya nos eligen hace más de 10 años.",
    ctaPrimary: { text: "Solicitar Asesoría Gratis" },
    ctaSecondary: { text: "Conoce Nuestra Historia", href: "/nosotros", isLink: true },
  },
  {
    image: "/images/hero-slide3.webp",
    alt: "Asesora de seguros con atención personalizada vía WhatsApp",
    mobileObjectPos: "object-[60%_20%]",
    headline: "Mejor cobertura para tu equipo, cero gestión para ti",
    subtitle: "Tu equipo va al doctor sin preocuparse por el costo. El seguro cubre el copago que Fonasa o Isapre no cubren. Contratación en días, no meses. Proceso 100% gestionado por RedAgrupa.",
    ctaPrimary: { text: "Cotiza Sin Costo" },
    ctaSecondary: { text: "Explorar Servicios", href: "#seccion-aseguradoras" },
  },
]

export default function HeroCarousel() {
  const { openContactModal } = useContactModal()
  const openModal = () =>
    openContactModal({
      pagina: "landing",
      heading: "Compara aseguradoras y encuentra el mejor plan para tu pyme",
    })
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    if (typeof window === "undefined") return
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  // Preload slides 2-3 images after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      slides.slice(1).forEach((slide) => {
        const img = new window.Image()
        img.src = slide.image
      })
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrent(index)
  }, [])

  return (
    <section
      className="relative aspect-[1/2] md:aspect-[16/9] text-white pt-24 overflow-hidden"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Información principal de RedAgrupa"
    >
      {/* Background images — mobile: imagen solo en 58% superior */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 z-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          {/* Imagen: en mobile ocupa solo la parte superior, en desktop ocupa todo */}
          <div className="absolute inset-0 bottom-[42%] md:bottom-0">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className={`object-cover ${slide.mobileObjectPos} md:object-center`}
              {...(i === 0 ? { priority: true } : { loading: "lazy" as const })}
              quality={75}
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{ backgroundImage: "linear-gradient(to bottom, #cc0033 0%, transparent 30%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundImage: "linear-gradient(to top, #cc0033 0%, transparent 50%)" }}
            />
          </div>
          {/* Mobile: franja roja inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-[42%] bg-[#cc0033] md:hidden" />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-6 h-full relative z-10 flex flex-col justify-between lg:block">
        {/* Mobile: título posicionado sobre la imagen (parte inferior de la zona de imagen) */}
        <div className="lg:hidden flex-1 flex items-end pb-4">
          {slides.map((slide, i) => (
            <div
              key={`title-${i}`}
              className={`mobile-text-shadow transition-opacity duration-500 ${
                i === current ? "opacity-100" : "opacity-0 absolute pointer-events-none"
              }`}
            >
              {i === 0 ? (
                <h1 className="text-3xl font-normal leading-[0.95] text-balance tracking-tight">
                  {slide.headline}
                </h1>
              ) : (
                <p className="text-3xl font-normal leading-[0.95] text-balance tracking-tight">
                  {slide.headline}
                </p>
              )}
            </div>
          ))}
        </div>
        {/* Mobile: subtítulo + botón sobre la franja roja */}
        <div className="lg:hidden pb-10">
          {slides.map((slide, i) => (
            <div
              key={`content-${i}`}
              className={`space-y-4 transition-opacity duration-500 ${
                i === current ? "opacity-100" : "opacity-0 absolute pointer-events-none"
              }`}
            >
              <p className="text-base text-white leading-[1.3] max-w-2xl">
                {slide.subtitle}
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent px-6 py-3 text-sm font-normal w-full"
                asChild
              >
                {slide.ctaSecondary.isLink ? (
                  <Link href={slide.ctaSecondary.href}>{slide.ctaSecondary.text}</Link>
                ) : (
                  <a href={slide.ctaSecondary.href}>{slide.ctaSecondary.text}</a>
                )}
              </Button>
            </div>
          ))}
        </div>
        {/* Desktop: layout original */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center h-full">
          <div aria-live="polite">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`space-y-6 md:space-y-8 lg:py-12 transition-opacity duration-500 ${
                  i === current ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              >
                {i === 0 ? (
                  <h1 className="md:text-[2rem] lg:text-[2.75rem] font-normal leading-[0.95] text-balance tracking-tight">
                    {slide.headline}
                  </h1>
                ) : (
                  <p className="md:text-[2rem] lg:text-[2.75rem] font-normal leading-[0.95] text-balance tracking-tight">
                    {slide.headline}
                  </p>
                )}
                <p className="lg:text-lg text-white leading-[1.3] max-w-2xl">
                  {slide.subtitle}
                </p>
                <div className="flex flex-row gap-4 pt-2">
                  <Button
                    onClick={openModal}
                    className="bg-white text-[#cc0033] hover:bg-gray-100 px-8 py-3 text-base font-semibold w-64 shadow-lg"
                  >
                    {slide.ctaPrimary.text}
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent px-8 py-3 text-base font-normal w-64"
                    asChild
                  >
                    {slide.ctaSecondary.isLink ? (
                      <Link href={slide.ctaSecondary.href}>{slide.ctaSecondary.text}</Link>
                    ) : (
                      <a href={slide.ctaSecondary.href}>{slide.ctaSecondary.text}</a>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="relative hidden lg:block lg:h-[700px]" />
        </div>
      </div>

      {/* Mobile: Dot indicators vertical izquierda */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 lg:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Ir a slide ${i + 1}`}
            className={`min-w-[24px] min-h-[24px] bg-clip-content p-[7px] w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white h-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>
      {/* Desktop: Dot indicators + Badges EQUOS y CMF */}
      <div className="absolute bottom-8 left-0 right-0 z-20 hidden lg:flex items-center justify-end gap-3 container mx-auto px-6">
        <a
          href="https://www.segurosequos.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs text-white hover:text-white transition-colors"
        >
          <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">Socio Estratégico: <span className="font-semibold text-white">EQUOS Seguros</span></span>
        </a>
        <a
          href="https://www.cmfchile.cl/institucional/mercados/entidad.php?auth=&send=&mercado=S&rut=77034194&grupo=&tipoentidad=CSJUR&vig=VI&row=AAAwU3AAWAAAWOdAAZ&control=svs&pestania=1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ficha de CJW Seguros en la Comisión para el Mercado Financiero de Chile"
          className="inline-flex items-center text-xs text-white hover:text-white transition-colors"
        >
          <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">Socio Estratégico: <span className="font-semibold text-white">CJW Seguros</span></span>
        </a>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Ir a slide ${i + 1}`}
              className={`min-w-[24px] min-h-[24px] bg-clip-content p-[7px] w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-white w-6" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
