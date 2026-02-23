"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
  FileText,
  Shield,
  AlertCircle,
  UsersIcon,
  Download,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"
import ScrollButton from "@/components/ScrollButton" // Declare the ScrollButton variable before using it
import MobileMenu from "@/components/MobileMenu" // Declare the MobileMenu variable before using it
import ScrollHeader from "@/components/ScrollHeader" // Declare the ScrollHeader variable before using it
import Footer from "@/components/Footer"
import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { motion, AnimatePresence } from "motion/react"
import RevealOnScroll from "@/components/RevealOnScroll"
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations"

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

const testimonios = [
  {
    texto: "Levábamos años encontrando un seguro que permitiese como empresa pequeña poder tener cobertura adicional. Hemos encontrado asesoría confiable, con profesionales atentos capacitados para resolver cualquier duda. Excelente servicio, recomiendo Redagrupa a ojos cerrados.",
    nombre: "Marcela Lorenzo",
    cargo: "Partner CEO en JSTL",
    foto: "/images/marcela-lorenzo-ceo-just4u-baja.jpg",
  },
  {
    texto: "Contratamos Redagrupa como beneficio extra para trabajadores, pero al poco tiempo nos dimos cuenta que es un gran aliado, tanto clientes como empleados. Es el agregado bien servicio indiscutible con ellos.",
    nombre: "Manuel Pamplona",
    cargo: "Gerente Regional en EngMe",
    foto: "/images/manuel-pamplona-baja.jpg",
  },
  {
    texto: "Antes no había sido posible conseguir seguro complementario para mis colaboradores, ya que para tratar de una compañía de pocos empleados no cumplíamos con los requisitos. Pero gracias a Redagrupa lo conseguimos.",
    nombre: "Roberto Allaro",
    cargo: "Gerente General en SCLatam",
    foto: "/images/roberto-alfaro-gerente-genera-scm-latam-baja.jpg",
  },
]

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonios.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonios[current]

  return (
    <div>
      <div className="relative min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="text-4xl md:text-6xl text-[#cc0033] leading-none">"</div>
            <p className="text-[#666666] text-base leading-snug">{t.texto}</p>
            <div className="pt-4 border-t border-gray-200 flex items-center gap-4">
              <Image
                src={t.foto}
                alt={t.nombre}
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              />
              <div className="text-left">
                <p className="font-semibold text-[#333333]">{t.nombre}</p>
                <p className="text-sm text-[#666666]">{t.cargo}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonios.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#cc0033] w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function StatsCarousel() {
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
          {statsCards.map((card, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full px-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 space-y-3 text-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                  {card.icon}
                </div>
                <div className="text-4xl font-bold text-white">{card.number}</div>
                <h3 className="text-xl font-semibold text-white">{card.label}</h3>
                <p className="text-sm text-white/80 leading-snug">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {statsCards.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${i === selectedIndex ? "bg-white" : "bg-white/40"}`}
            onClick={() => emblaApi?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  )
}

function ProblemaCarousel() {
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
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {problemaCards.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${i === selectedIndex ? "bg-white" : "bg-white/40"}`}
            onClick={() => emblaApi?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  )
}

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
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-white/80 text-sm leading-snug pt-1">{text}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function ProblemaCardExpandable({ icon: Icon, title, text }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div variants={staggerItem} className="p-6 space-y-3">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-3 text-left w-full">
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-[#cc0033]" />
        </div>
        <h3 className="text-lg font-normal text-white leading-tight flex-1">{title}</h3>
        <ChevronDown className={`w-5 h-5 text-white/70 transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-white/80 text-sm leading-snug pt-1">{text}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <ScrollHeader>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center -ml-2 lg:ml-0">
            <Image
              src="/images/logo-20redagrupa-3.png"
              alt="RedAgrupa Logo"
              width={160}
              height={40}
              className="h-6 md:h-8 w-auto"
            />
          </Link>
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/nosotros" className="text-white hover:text-white/80 transition-colors font-medium text-sm">
              Nosotros
            </Link>
            <Link
              href="/seguros-salud"
              className="text-white hover:text-white/80 transition-colors font-medium text-sm"
            >
              Seguro Complementario Salud
            </Link>
            <Link
              href="/beneficios-redagrupa"
              className="text-white hover:text-white/80 transition-colors font-medium text-sm"
            >
              Beneficios RedAgrupa
            </Link>
            <Link
              href="/seguro-complementario-bice-pyme"
              className="text-white hover:text-white/80 transition-colors font-medium text-sm"
            >
              Seguro BICE Pyme
            </Link>
            <Link
              href="/seguro-complementario-bice-personas"
              className="text-white hover:text-white/80 transition-colors font-medium text-sm"
            >
              Seguro BICE Personas
            </Link>
          </nav>
          {/* Desktop Buttons - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-3">
            <ScrollButton
              targetId="formulario-contacto"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 w-[180px]"
            >
              Solicitar Asesoría
            </ScrollButton>
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="https://redagrupa.vercel.app/dashboard" target="_blank" rel="noopener noreferrer">
                <UsersIcon className="h-5 w-5" />
              </a>
            </Button>
          </div>
          {/* Mobile Menu - Only visible on mobile */}
          <MobileMenu />
        </div>
      </ScrollHeader>

      {/* Social Sidebar - Hidden on mobile */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
        <Link
          href="https://www.facebook.com/RedAgrupa/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-[#cc0033] rounded-full flex items-center justify-center hover:bg-[#a00028] transition-colors shadow-lg"
        >
          <Facebook className="w-4 h-4 text-white" strokeWidth={1.5} />
        </Link>
        <Link
          href="https://www.instagram.com/redagrupa/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-[#cc0033] rounded-full flex items-center justify-center hover:bg-[#a00028] transition-colors shadow-lg"
        >
          <Instagram className="w-4 h-4 text-white" strokeWidth={1.5} />
        </Link>
        <Link
          href="https://www.linkedin.com/company/redagrupa"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-[#cc0033] rounded-full flex items-center justify-center hover:bg-[#a00028] transition-colors shadow-lg"
        >
          <Linkedin className="w-4 h-4 text-white" strokeWidth={1.5} />
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen text-white pt-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-redagrupa.webp" 
            alt="Fondo hero" 
            fill 
            className="object-cover" 
            priority 
            quality={85}
            sizes="100vw"
          />
          {/* Gradient from top */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#cc0033] via-transparent to-transparent"
            style={{ backgroundImage: "linear-gradient(to bottom, #cc0033 0%, transparent 30%)" }}
          />
          {/* Gradient from bottom */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#cc0033] via-transparent to-transparent"
            style={{ backgroundImage: "linear-gradient(to top, #cc0033 0%, transparent 50%)" }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 h-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-end lg:items-center min-h-[calc(100vh-6rem)]">
            <motion.div
              className="space-y-6 md:space-y-8 pb-10 lg:py-12 mobile-text-shadow"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 variants={staggerItem} className="text-3xl sm:text-2xl md:text-[2rem] lg:text-[2.75rem] font-normal leading-[0.95] text-balance tracking-tight">
                ¿Listo para Simplificar tus Seguros Complementarios?
              </motion.h1>
              <motion.p variants={staggerItem} className="text-base sm:text-base lg:text-lg text-white/90 leading-[1.3] max-w-2xl">
                RedAgrupa gestiona tus seguros complementarios de salud para que tu pyme y tu equipo estén protegidos,
                sin trámites eternos ni lenguaje técnico imposible.
              </motion.p>
              <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 pt-2">
                <ScrollButton
                  targetId="formulario-contacto"
                  className="bg-[#cc0033] text-white hover:bg-[#a30029] px-6 sm:px-8 py-3 text-sm sm:text-base font-normal w-full sm:w-64"
                >
                  Solicitar Asesoría
                </ScrollButton>
                <ScrollButton
                  targetId="seccion-aseguradoras"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent px-6 sm:px-8 py-3 text-sm sm:text-base font-normal w-full sm:w-64"
                >
                  Descarga Formularios
                </ScrollButton>
              </motion.div>
            </motion.div>
            <div className="relative hidden lg:block lg:h-[700px]">{/* Empty space to maintain layout balance */}</div>
          </div>
        </div>
      </section>

      {/* El Problema Section */}
      <section className="py-8 lg:py-16 relative bg-[#cc0033] overflow-hidden min-h-0 flex flex-col">

        <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col lg:justify-between">
          <RevealOnScroll className="text-center max-w-4xl mx-auto pt-0 lg:pt-8 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.1] text-white mb-2">
              Porque la vida no espera
            </h2>
            <p className="hidden lg:block text-base sm:text-lg lg:text-xl text-white/90 leading-[1.3] mb-1 whitespace-nowrap">
              El mejor beneficio es el que se usa. El mejor partner, el que te ayuda a que eso pase
            </p>
            <h3 className="text-xs sm:text-sm uppercase tracking-wider text-white/90 mt-2 lg:mt-6">
              Hoy mismo te ayudamos con:
            </h3>
          </RevealOnScroll>


          {/* Cards - Mobile: auto-sliding carousel / Desktop: 3-column grid */}
          {/* Mobile Carousel */}
          <div className="lg:hidden pb-4">
            <ProblemaCarousel />
          </div>
          {/* Desktop Grid */}
          <motion.div
            className="hidden lg:grid grid-cols-3 gap-6 max-w-6xl mx-auto pb-16 mt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {problemaCards.map((card, i) => (
              <ProblemaCardExpandable key={i} icon={card.icon} title={card.title} text={card.text} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Beneficios / Pilares Section */}
      <section className="py-32 md:py-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <RevealOnScroll className="text-center lg:text-left">
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
            </RevealOnScroll>

            {/* Right: Testimonials Carousel */}
            <RevealOnScroll delay={0.2}>
              <TestimonialCarousel />
            </RevealOnScroll>
          </div>

          {/* Marquee below */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="relative w-full overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />
              <div className="flex whitespace-nowrap animate-marquee lg:animate-marquee-desktop">
                <span className="inline-block text-[#cc0033] text-base md:text-xl font-medium px-8">
                  Pymes que hoy respiran más tranquilas | Recuperar hasta 40 horas anuales del tiempo de un profesional para retención talento y estrategia |
                </span>
                <span className="inline-block text-[#cc0033] text-base md:text-xl font-medium px-8">
                  Pymes que hoy respiran más tranquilas | Recuperar hasta 40 horas anuales del tiempo de un profesional para retención talento y estrategia |
                </span>
                <span className="inline-block text-[#cc0033] text-base md:text-xl font-medium px-8">
                  Pymes que hoy respiran más tranquilas | Recuperar hasta 40 horas anuales del tiempo de un profesional para retención talento y estrategia |
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section - Lo que pasa cuando los seguros dejan de ser un problema */}
      <section className="relative text-white overflow-hidden min-h-0 lg:min-h-screen flex flex-col bg-[#cc0033] lg:bg-transparent py-12 lg:py-4">
        {/* Background Image - Mobile */}
        <div className="absolute inset-0 z-0 lg:hidden">
          <Image
            src="/images/pushpin-movil.png"
            alt="Equipamiento médico sobre fondo rojo"
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
            alt="Medical equipment on red background"
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
          {/* Top content - centered */}
          <RevealOnScroll className="text-center max-w-3xl mx-auto pt-4 lg:pt-20">
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
          </RevealOnScroll>

          {/* Spacer for image visibility - Mobile only */}
          <div className="flex-1 min-h-[50vh] lg:hidden" />

          {/* Stats - Mobile: carousel / Desktop: 4-column grid */}
          <div className="lg:hidden pb-4">
            <StatsCarousel />
          </div>
          <motion.div
            className="hidden lg:grid grid-cols-4 gap-8 max-w-6xl mx-auto pb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem} className="pl-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#cc0033] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-white">+10</div>
              <h3 className="text-xl font-semibold text-white">Años de experiencia</h3>
              <p className="text-sm text-white leading-snug">Enfocados en las necesidades de las pymes</p>
            </motion.div>
            <motion.div variants={staggerItem} className="pl-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#cc0033] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-white">+300</div>
              <h3 className="text-xl font-semibold text-white">Empresas</h3>
              <p className="text-sm text-white leading-snug">Que confían en nuestro equipo de profesionales</p>
            </motion.div>
            <motion.div variants={staggerItem} className="pl-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#cc0033] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-white">+9,000</div>
              <h3 className="text-xl font-semibold text-white">Familias</h3>
              <p className="text-sm text-white leading-snug">Cubiertas en Chile y el extranjero</p>
            </motion.div>
            <motion.div variants={staggerItem} className="pl-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#cc0033] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-white">+1,400</div>
              <h3 className="text-xl font-semibold text-white">Alianzas</h3>
              <p className="text-sm text-white leading-snug">Conforman nuestra red de convenios</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Todos los Seguros Section */}
      <section id="seccion-aseguradoras" className="pt-24 md:pt-32 pb-24 md:pb-32 bg-white">
        <div className="container mx-auto px-6">
          <RevealOnScroll className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#cc0033] px-4">
              Formularios de reembolso e incorporación
            </h2>
          </RevealOnScroll>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Bupa */}
            <motion.div variants={staggerItem} className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image
                src="/images/bupa.png"
                alt="Seguros Bupa"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <h3 className="text-lg font-semibold text-[#333333]">Seguros Bupa</h3>
              <div className="space-y-2 pt-2">
                <a href="https://redagrupa.cl/bupa-incorporacion/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Incorporación</span>
                </a>
                <a href="https://redagrupa.cl/bupa-reembolso-dental/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso dental</span>
                </a>
                <a href="https://redagrupa.cl/bupa-reembolso-salud/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso de salud</span>
                </a>
              </div>
            </motion.div>

            {/* Bice Vida */}
            <motion.div variants={staggerItem} className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image
                src="/images/logo-bicevida-e1674133440155.png"
                alt="Bice Vida"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <h3 className="text-lg font-semibold text-[#333333]">Bice Vida</h3>
              <div className="space-y-2 pt-2">
                <a href="https://redagrupa.cl/bicevida-incorporacion/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Incorporación</span>
                </a>
                <a href="https://redagrupa.cl/bicevida-reembolso-dental/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso dental</span>
                </a>
                <a href="https://redagrupa.cl/bicevida-reembolso-salud/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso de salud</span>
                </a>
              </div>
            </motion.div>

            {/* Sura */}
            <motion.div variants={staggerItem} className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image
                src="/images/sura-seguros300-e1674133176152.png"
                alt="Seguros Sura"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <h3 className="text-lg font-semibold text-[#333333]">Seguros Sura</h3>
              <div className="space-y-2 pt-2">
                <a href="https://redagrupa.cl/sura-incorporacion/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Incorporación</span>
                </a>
                <a href="https://redagrupa.cl/sura-reembolso-dental/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso dental</span>
                </a>
                <a href="https://redagrupa.cl/sura-reembolso-salud/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso de salud</span>
                </a>
              </div>
            </motion.div>

            {/* Consorcio */}
            <motion.div variants={staggerItem} className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image
                src="/images/consorcio300-e1674133353916.png"
                alt="Consorcio"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <h3 className="text-lg font-semibold text-[#333333]">Consorcio</h3>
              <div className="space-y-2 pt-2">
                <a href="https://redagrupa.cl/consorcio-incorporacion/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Incorporación</span>
                </a>
                <a href="https://redagrupa.cl/consorcio-reembolso-dental/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso dental</span>
                </a>
                <a href="https://redagrupa.cl/consorcio-reembolso-salud/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso de salud</span>
                </a>
              </div>
            </motion.div>

            {/* MetLife */}
            <motion.div variants={staggerItem} className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image
                src="/images/metlife-logo-e1674133505895.png"
                alt="MetLife"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <h3 className="text-lg font-semibold text-[#333333]">MetLife</h3>
              <div className="space-y-2 pt-2">
                <a href="https://redagrupa.cl/metlife-incorporacion/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Incorporación</span>
                </a>
                <a href="https://redagrupa.cl/metlife-reembolso-dental/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso dental</span>
                </a>
                <a href="https://redagrupa.cl/metlife-reembolso-salud/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso de salud</span>
                </a>
              </div>
            </motion.div>

            {/* BCI */}
            <motion.div variants={staggerItem} className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image
                src="/images/bci-seguros300.png"
                alt="BCI Seguros"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <h3 className="text-lg font-semibold text-[#333333]">BCI Seguros</h3>
              <div className="space-y-2 pt-2">
                <a href="https://redagrupa.cl/bci-incorporacion/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Incorporación</span>
                </a>
                <a href="https://redagrupa.cl/bci-reembolso-dental/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso dental</span>
                </a>
                <a href="https://redagrupa.cl/bci-reembolso-salud/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso de salud</span>
                </a>
              </div>
            </motion.div>

            {/* Vida Security */}
            <motion.div variants={staggerItem} className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image
                src="/images/security.png"
                alt="Vida Security"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <h3 className="text-lg font-semibold text-[#333333]">Vida Security</h3>
              <div className="space-y-2 pt-2">
                <a href="https://redagrupa.cl/vidasecurity-incorporacion/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Incorporación</span>
                </a>
                <a href="https://redagrupa.cl/vidasecurity-informe-medico-tratante/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Informe médico tratante</span>
                </a>
                <a href="https://redagrupa.cl/vidasecurity-reembolso-dental/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso dental</span>
                </a>
                <a href="https://redagrupa.cl/vidasecurity-reembolso-salud/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso de salud</span>
                </a>
              </div>
            </motion.div>

            {/* Help */}
            <motion.div variants={staggerItem} className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image
                src="/images/logo-help1-e1674133566493.png"
                alt="Help Seguros"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <h3 className="text-lg font-semibold text-[#333333]">Help Seguros</h3>
              <div className="space-y-2 pt-2">
                <a href="https://redagrupa.cl/help-incorporacion/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Incorporación</span>
                </a>
                <a href="https://redagrupa.cl/help-reembolso-dental/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso dental</span>
                </a>
                <a href="https://redagrupa.cl/help-reembolso-salud/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso de salud</span>
                </a>
              </div>
            </motion.div>

            {/* Chilena Consolidada */}
            <motion.div variants={staggerItem} className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col">
              <Image
                src="/images/logo-chilena-consolidada2-e1674133731697.png"
                alt="Chilena Consolidada"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <h3 className="text-lg font-semibold text-[#333333]">Chilena Consolidada</h3>
              <div className="space-y-2 pt-2">
                <a href="https://redagrupa.cl/chilenaconsolidada-incorporacion/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Incorporación</span>
                </a>
                <a href="https://redagrupa.cl/chilenaconsolidada-informe-medico-tratante/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Informe médico tratante</span>
                </a>
                <a href="https://redagrupa.cl/chilenaconsolidada-reembolso-dental/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso dental</span>
                </a>
                <a href="https://redagrupa.cl/chilenaconsolidada-reembolso-salud/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  <span>Reembolso de salud</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="formulario-contacto" className="relative min-h-0 lg:min-h-[700px] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/proyecto-nuevo-1-1.webp"
            alt="Modern laptop on red gradient background"
            fill
            className="object-cover"
            quality={85}
            sizes="100vw"
          />
        </div>

        {/* Red gradient from top */}
        <div
          className="absolute inset-x-0 top-0 h-1/2 z-[1] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #cc0033 0%, transparent 100%)",
          }}
        />

        {/* Red gradient from bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-3/5 z-[1] pointer-events-none"
          style={{
            background: "linear-gradient(to top, #cc0033 0%, transparent 100%)",
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 h-full relative z-10">
          <div className="flex items-center min-h-0 lg:min-h-[700px] py-12">
            <RevealOnScroll className="max-w-lg w-full bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 shadow-2xl">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#333333] text-center mb-6 leading-snug">
                Tranquilo, sabemos cómo hacer simples los seguros complementarios, ¡Conversemos!
              </h2>

              <form className="space-y-4">
                {/* Nombre completo - Full width */}
                <div>
                  <input
                    type="text"
                    placeholder="Nombre Completo"
                    className="w-full px-4 py-3 text-sm bg-gray-100 text-[#333333] placeholder-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#cc0033] transition-all"
                    required
                  />
                </div>

                {/* Email and Phone - Two columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 text-sm bg-gray-100 text-[#333333] placeholder-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#cc0033] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className="w-full px-4 py-3 text-sm bg-gray-100 text-[#333333] placeholder-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#cc0033] transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Company Name and Industry - Two columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre Empresa"
                      className="w-full px-4 py-3 text-sm bg-gray-100 text-[#333333] placeholder-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#cc0033] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Rubro"
                      className="w-full px-4 py-3 text-sm bg-gray-100 text-[#333333] placeholder-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#cc0033] transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Number of Employees and Reason - Two columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="number"
                      placeholder="Cantidad de Empleados"
                      className="w-full px-4 py-3 text-sm bg-gray-100 text-[#333333] placeholder-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#cc0033] transition-all"
                      required
                    />
                  </div>
                  <div className="relative">
                    <select
                      className="w-full px-4 py-3 text-sm bg-gray-100 text-gray-600 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#cc0033] transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Motivo</option>
                      <option value="cotizacion">Cotización</option>
                      <option value="consulta">Consulta</option>
                      <option value="informacion">Más información</option>
                      <option value="otro">Otro</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#cc0033] pointer-events-none" />
                  </div>
                </div>

                {/* Message - Full width */}
                <div>
                  <textarea
                    placeholder="Mensaje"
                    rows={4}
                    className="w-full px-4 py-3 text-sm bg-gray-100 text-[#333333] placeholder-gray-400 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#cc0033] transition-all resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#cc0033] text-white font-semibold py-3 min-h-[48px] rounded-full hover:bg-[#a00029] transition-colors text-sm"
                >
                  Enviar Mensaje
                </button>

                {/* Privacy Notice */}
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Tus datos estan 100% protegidos.{" "}
                    <a href="/politicas-de-privacidad" className="underline hover:text-[#cc0033]">
                      Ver políticas
                    </a>
                  </span>
                </div>
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
