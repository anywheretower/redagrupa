"use client"

import Image from "next/image"
import Link from "next/link"
import {
  FileText,
  Shield,
  AlertCircle,
  Download,
  ChevronDown,
} from "lucide-react"
import ScrollButton from "@/components/ScrollButton"
import dynamic from "next/dynamic"
import { useState, useEffect, useCallback } from "react"

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false })
const ProblemaCarousel = dynamic(() => import("@/components/ProblemaCarousel"), { ssr: false })
const StatsCarousel = dynamic(() => import("@/components/StatsCarousel"), { ssr: false })
const TestimonialCarousel = dynamic(() => import("@/components/TestimonialCarousel"), { ssr: false })

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

function ProblemaCardExpandable({ icon: Icon, title, text }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-6 space-y-3">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="flex items-center gap-3 text-left w-full">
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-[#cc0033]" />
        </div>
        <h3 className="text-lg font-normal text-white leading-tight flex-1">{title}</h3>
        <ChevronDown className={`w-5 h-5 text-white/90 transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="text-white/95 text-sm leading-snug pt-1">{text}</p>
        </div>
      </div>
    </div>
  )
}

interface LatestPost {
  slug: string
  title: string
  heroImage: string
  excerpt: string
}

function BlogCarousel({ posts }: { posts: LatestPost[] }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % posts.length)
  }, [posts.length])

  useEffect(() => {
    if (paused || posts.length <= 1) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [paused, next, posts.length])

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-xl">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 ${
              i === current ? "opacity-100 relative" : "opacity-0 absolute inset-0"
            }`}
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.heroImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-[#333333] leading-snug group-hover:text-[#cc0033] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {/* Dots */}
      {posts.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-[#cc0033]" : "bg-gray-300"
              }`}
              aria-label={`Ver artículo ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function HomeContent({ latestPosts = [] }: { latestPosts?: LatestPost[] }) {
  return (
    <>
      {/* El Problema Section */}
      <section className="py-8 lg:py-16 relative bg-[#cc0033] overflow-hidden min-h-0 flex flex-col">
        <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col lg:justify-between">
          <div className="text-center max-w-4xl mx-auto pt-0 lg:pt-8 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.1] text-white mb-2">
              Porque la vida no espera
            </h2>
            <p className="hidden lg:block text-base sm:text-lg lg:text-xl text-white/90 leading-[1.3] mb-1 whitespace-nowrap">
              El mejor beneficio es el que se usa. El mejor partner, el que te ayuda a que eso pase
            </p>
            <h3 className="text-xs sm:text-sm uppercase tracking-wider text-white/90 mt-2 lg:mt-6">
              Hoy mismo te ayudamos con:
            </h3>
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden pb-4">
            <ProblemaCarousel />
          </div>
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-6 max-w-6xl mx-auto pb-16 mt-6">
            {problemaCards.map((card, i) => (
              <ProblemaCardExpandable key={i} icon={card.icon} title={card.title} text={card.text} />
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios / Pilares Section */}
      <section className="py-32 md:py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666] mb-4">
                PORQUE ESTAR CUBIERTO NO BASTA… HAY QUE SENTIRSE PROTEGIDO
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.1] text-[#cc0033]">
                Simplificar no es quitar cobertura. Es quitar obstáculos.
              </h2>
              <p className="text-[#666666] text-base sm:text-lg mt-4 leading-snug">
                Nos integramos como el área de seguros complementarios de salud de tu empresa: diseñamos el plan,
                acompañamos a tu equipo y nos hacemos cargo de la relación con las aseguradoras de principio a fin.
              </p>
              <div className="mt-6">
                <ScrollButton
                  targetId="formulario-contacto"
                  className="bg-[#cc0033] text-white px-8 py-3"
                >
                  Solicitar Asesoría
                </ScrollButton>
              </div>
            </div>
            <div>
              <TestimonialCarousel />
            </div>
          </div>

          {/* Marquee */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="relative w-full overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />
              <div className="flex whitespace-nowrap animate-marquee lg:animate-marquee-desktop">
                <span className="inline-block text-[#cc0033] text-base md:text-xl font-medium px-8">
                  Pymes que hoy respiran más tranquilas | Recuperar hasta 40 horas anuales del tiempo de un profesional para retención talento y estrategia |
                </span>
                <span className="inline-block text-[#cc0033] text-base md:text-xl font-medium px-8" aria-hidden="true">
                  Pymes que hoy respiran más tranquilas | Recuperar hasta 40 horas anuales del tiempo de un profesional para retención talento y estrategia |
                </span>
                <span className="inline-block text-[#cc0033] text-base md:text-xl font-medium px-8" aria-hidden="true">
                  Pymes que hoy respiran más tranquilas | Recuperar hasta 40 horas anuales del tiempo de un profesional para retención talento y estrategia |
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative text-white overflow-hidden min-h-0 lg:min-h-screen flex flex-col bg-[#cc0033] lg:bg-transparent py-12 lg:py-4">
        {/* Background Image - Mobile */}
        <div className="absolute inset-0 z-0 lg:hidden">
          <Image
            src="/images/pushpin-movil.webp"
            alt="Gestión de seguros complementarios de salud para pymes en Chile"
            fill
            className="object-cover object-top"
            quality={85}
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, #cc0033 0%, transparent 20%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, #cc0033 0%, #cc0033 35%, transparent 55%)" }}
          />
        </div>
        {/* Background Image - Desktop */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image
            src="/images/proyecto-nuevo-1-4.webp"
            alt="Simplifica los seguros complementarios de salud con RedAgrupa"
            fill
            className="object-cover"
            quality={85}
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, #cc0033 0%, transparent 50%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, #cc0033 0%, transparent 60%)" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col lg:justify-between mobile-text-shadow">
          <div className="text-center max-w-3xl mx-auto pt-4 lg:pt-20">
            <p className="text-xs uppercase tracking-widest text-white mb-6">¿POR QUÉ REDAGRUPA?</p>
            <h2 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-normal mb-8 leading-[0.9] text-white px-4">
              Cuando delegas bien, tu equipo gana confianza… y tú recuperas foco.
            </h2>
            <ScrollButton
              targetId="formulario-contacto"
              className="px-6 sm:px-8 py-3 bg-[#cc0033] text-white hover:bg-[#a30029] transition-colors rounded text-sm sm:text-base"
            >
              Solicitar Asesoría
            </ScrollButton>
          </div>

          {/* Spacer for image visibility - Mobile only */}
          <div className="flex-1 min-h-[50vh] lg:hidden" />

          {/* Stats - Mobile carousel / Desktop grid */}
          <div className="lg:hidden pb-4">
            <StatsCarousel />
          </div>
          <div className="hidden lg:grid grid-cols-4 gap-8 max-w-6xl mx-auto pb-16">
            <div className="pl-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#cc0033] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-white">+10</div>
              <h3 className="text-xl font-semibold text-white">Años de experiencia</h3>
              <p className="text-sm text-white leading-snug">Enfocados en las necesidades de las pymes</p>
            </div>
            <div className="pl-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#cc0033] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-white">+300</div>
              <h3 className="text-xl font-semibold text-white">Empresas</h3>
              <p className="text-sm text-white leading-snug">Que confían en nuestro equipo de profesionales</p>
            </div>
            <div className="pl-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#cc0033] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-white">+9,000</div>
              <h3 className="text-xl font-semibold text-white">Familias</h3>
              <p className="text-sm text-white leading-snug">Cubiertas en Chile y el extranjero</p>
            </div>
            <div className="pl-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#cc0033] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-white">+1,400</div>
              <h3 className="text-xl font-semibold text-white">Alianzas</h3>
              <p className="text-sm text-white leading-snug">Conforman nuestra red de convenios</p>
            </div>
          </div>
        </div>
      </section>

      {/* Todos los Seguros Section */}
      <section id="seccion-aseguradoras" className="pt-24 md:pt-32 pb-24 md:pb-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#cc0033] px-4">
              Formularios de reembolso e incorporación
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Bupa */}
            <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image src="/images/bupa.png" alt="Logo Bupa - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
              <h3 className="text-lg font-semibold text-[#333333]">Seguros Bupa</h3>
              <div className="space-y-2 pt-2">
                <a href="/formularios/bupa-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación Bupa" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Incorporación</span>
                </a>
                <a href="/formularios/bupa-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso dental</span>
                </a>
                <a href="/formularios/bupa-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                </a>
              </div>
            </div>

            {/* Bice Vida */}
            <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image src="/images/logo-bicevida-e1674133440155.png" alt="Logo BICE Vida - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
              <h3 className="text-lg font-semibold text-[#333333]">Bice Vida</h3>
              <div className="space-y-2 pt-2">
                <a href="/formularios/bicevida-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación BICE Vida" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Incorporación</span>
                </a>
                <a href="/formularios/bicevida-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso dental</span>
                </a>
                <a href="/formularios/bicevida-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                </a>
              </div>
            </div>

            {/* Sura */}
            <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image src="/images/sura-seguros300-e1674133176152.png" alt="Logo Sura - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
              <h3 className="text-lg font-semibold text-[#333333]">Seguros Sura</h3>
              <div className="space-y-2 pt-2">
                <a href="/formularios/sura-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación Sura" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Incorporación</span>
                </a>
                <a href="/formularios/sura-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso dental</span>
                </a>
                <a href="/formularios/sura-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                </a>
              </div>
            </div>

            {/* Consorcio */}
            <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image src="/images/consorcio300-e1674133353916.png" alt="Logo Consorcio - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
              <h3 className="text-lg font-semibold text-[#333333]">Consorcio</h3>
              <div className="space-y-2 pt-2">
                <a href="/formularios/consorcio-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación Consorcio" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Incorporación</span>
                </a>
                <a href="/formularios/consorcio-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso dental</span>
                </a>
                <a href="/formularios/consorcio-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                </a>
              </div>
            </div>

            {/* MetLife */}
            <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image src="/images/metlife-logo-e1674133505895.png" alt="Logo MetLife - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
              <h3 className="text-lg font-semibold text-[#333333]">MetLife</h3>
              <div className="space-y-2 pt-2">
                <a href="/formularios/metlife-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación MetLife" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Incorporación</span>
                </a>
                <a href="/formularios/metlife-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso dental</span>
                </a>
                <a href="/formularios/metlife-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                </a>
              </div>
            </div>

            {/* BCI */}
            <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image src="/images/bci-seguros300.png" alt="Logo BCI Seguros - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
              <h3 className="text-lg font-semibold text-[#333333]">BCI Seguros</h3>
              <div className="space-y-2 pt-2">
                <a href="/formularios/bci-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación BCI" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Incorporación</span>
                </a>
                <a href="/formularios/bci-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso dental</span>
                </a>
                <a href="/formularios/bci-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                </a>
              </div>
            </div>

            {/* Vida Security */}
            <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image src="/images/security.png" alt="Logo Vida Security - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
              <h3 className="text-lg font-semibold text-[#333333]">Vida Security</h3>
              <div className="space-y-2 pt-2">
                <a href="/formularios/vidasecurity-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación Vida Security" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Incorporación</span>
                </a>
                <a href="/formularios/vidasecurity-informe-medico-tratante.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Informe médico tratante</span>
                </a>
                <a href="/formularios/vidasecurity-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso dental</span>
                </a>
                <a href="/formularios/vidasecurity-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                </a>
              </div>
            </div>

            {/* Help */}
            <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image src="/images/logo-help1-e1674133566493.png" alt="Logo Help Seguros - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
              <h3 className="text-lg font-semibold text-[#333333]">Help Seguros</h3>
              <div className="space-y-2 pt-2">
                <a href="/formularios/help-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación Help" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Incorporación</span>
                </a>
                <a href="/formularios/help-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso dental</span>
                </a>
                <a href="/formularios/help-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                </a>
              </div>
            </div>

            {/* Chilena Consolidada */}
            <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image src="/images/logo-chilena-consolidada2-e1674133731697.png" alt="Logo Chilena Consolidada - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
              <h3 className="text-lg font-semibold text-[#333333]">Chilena Consolidada</h3>
              <div className="space-y-2 pt-2">
                <a href="/formularios/chilenaconsolidada-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación Chilena Consolidada" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Incorporación</span>
                </a>
                <a href="/formularios/chilenaconsolidada-informe-medico-tratante.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Informe médico tratante</span>
                </a>
                <a href="/formularios/chilenaconsolidada-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso dental</span>
                </a>
                <a href="/formularios/chilenaconsolidada-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conocimiento Pyme + FAQ — Unified Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left: Blog Carousel */}
            <div>
              <h2 className="text-2xl font-bold text-[#cc0033] mb-2">Conocimiento Pyme</h2>
              <p className="text-gray-500 text-sm mb-6">Guías y recursos para tu empresa</p>
              {latestPosts.length > 0 && (
                <BlogCarousel posts={latestPosts} />
              )}
              <div className="mt-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#cc0033] hover:text-[#a30029] transition-colors"
                >
                  Ver todos los artículos →
                </Link>
              </div>
            </div>

            {/* Right: FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-[#cc0033] mb-2">Preguntas frecuentes</h2>
              <p className="text-gray-500 text-sm mb-6">Resolvemos tus dudas sobre seguros complementarios</p>
              <div className="space-y-3">
                {[
                  {
                    q: "¿Qué es un seguro complementario de salud?",
                    a: "Es un seguro que complementa la cobertura de tu Isapre o Fonasa, cubriendo el copago que queda después de la bonificación. Incluye consultas médicas, exámenes, hospitalización, dental y óptico según el plan contratado."
                  },
                  {
                    q: "¿Cuántos trabajadores necesita mi pyme para contratar?",
                    a: "Desde 5 trabajadores puedes acceder a planes colectivos con tarifas preferenciales. Para empresas más pequeñas, también existen opciones individuales o familiares como el seguro BICE Personas."
                  },
                  {
                    q: "¿Qué aseguradoras trabajan con RedAgrupa?",
                    a: "Trabajamos con las principales aseguradoras de Chile: BCI Seguros, BICE Vida, Chilena Consolidada, Consorcio, Help Seguros, MetLife, Bupa, Sura y Vida Security. Comparamos opciones para encontrar la mejor relación cobertura-precio."
                  },
                  {
                    q: "¿Cuánto demora el proceso de contratación?",
                    a: "El proceso completo toma entre 5 y 10 días hábiles. Nosotros nos encargamos de toda la gestión: cotización, comparación de planes, recopilación de documentos y coordinación con la aseguradora."
                  },
                  {
                    q: "¿Tiene algún costo la asesoría de RedAgrupa?",
                    a: "No, nuestra asesoría es completamente gratuita para tu empresa. Somos corredores de seguros, lo que significa que las aseguradoras nos compensan directamente. Tú pagas exactamente lo mismo que pagarías contratando directo."
                  },
                  {
                    q: "¿Cómo se gestionan los reembolsos?",
                    a: "RedAgrupa gestiona los reembolsos por ti. Tus colaboradores envían sus boletas y nosotros nos encargamos del trámite completo con la aseguradora, reduciendo tiempos de espera y papeleo."
                  },
                ].map((item, i) => (
                  <details key={i} className="group rounded-xl overflow-hidden shadow-sm">
                    <summary className="flex items-center justify-between cursor-pointer p-4 text-left font-semibold text-white text-sm bg-[#cc0033] group-open:rounded-b-none">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
                        {item.q}
                      </span>
                      <ChevronDown className="w-4 h-4 text-white flex-shrink-0 ml-3 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-4 py-4 bg-white text-gray-700 text-sm leading-relaxed border border-t-0 border-gray-200 rounded-b-xl">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="formulario-contacto" className="relative min-h-0 lg:min-h-[700px] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/proyecto-nuevo-1-1.webp"
            alt="Formularios de seguros complementarios disponibles para descarga en RedAgrupa"
            fill
            className="object-cover"
            quality={85}
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-x-0 top-0 h-1/2 z-[1] pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #cc0033 0%, transparent 100%)" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-3/5 z-[1] pointer-events-none"
          style={{ background: "linear-gradient(to top, #cc0033 0%, transparent 100%)" }}
        />
        <div className="container mx-auto px-4 sm:px-6 h-full relative z-10">
          <div className="flex items-center min-h-0 lg:min-h-[700px] py-12">
            <div className="max-w-lg w-full bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 shadow-2xl">
              <ContactForm
                pagina="landing"
                heading="Tranquilo, sabemos cómo hacer simples los seguros complementarios, ¡Conversemos!"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
