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
import { motion } from "motion/react"
import RevealOnScroll from "@/components/RevealOnScroll"
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations"

const problemaCards = [
  {
    icon: FileText,
    title: "Complejidad administrativa que te consume",
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
          {problemaCards.map((card, i) => {
            const Icon = card.icon
            return (
              <div key={i} className="min-w-0 shrink-0 grow-0 basis-full px-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 space-y-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white leading-snug">{card.title}</h3>
                  <p className="text-white/80 text-sm leading-snug">{card.text}</p>
                </div>
              </div>
            )
          })}
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <ScrollHeader>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
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
              Agendar orientación
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
              <motion.h1 variants={staggerItem} className="text-2xl sm:text-[2rem] md:text-[2.5rem] lg:text-[3.75rem] font-normal leading-[0.95] text-balance tracking-tight">
                ¿Listo para Simplificar tus Seguros Complementarios?
              </motion.h1>
              <motion.p variants={staggerItem} className="text-base sm:text-lg lg:text-xl text-white/90 leading-[1.3] max-w-2xl">
                RedAgrupa gestiona tus seguros complementarios de salud para que tu pyme y tu equipo estén protegidos,
                sin trámites eternos ni lenguaje técnico imposible.
              </motion.p>
              <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 pt-2">
                <ScrollButton
                  targetId="formulario-contacto"
                  className="bg-[#cc0033] text-white hover:bg-[#a30029] px-6 sm:px-8 py-3 text-sm sm:text-base font-normal w-full sm:w-64"
                >
                  Solicita Orientación Sin Costo
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
      <section className="py-8 lg:py-16 relative bg-[#cc0033] lg:bg-[#333333] overflow-hidden min-h-0 lg:min-h-screen flex flex-col">
        {/* Background Image - Mobile */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/images/reloj-movil.png"
            alt="Reloj cronómetro"
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
        {/* Background Image - Desktop only */}
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src="/images/proyecto-nuevo-1-3.webp"
            alt="Chrome stopwatch on red gradient background"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#cc0033] via-transparent to-transparent"
            style={{ backgroundSize: "100% 50%", backgroundRepeat: "no-repeat", backgroundPosition: "top" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#cc0033] via-transparent to-transparent"
            style={{ backgroundSize: "100% 80%", backgroundRepeat: "no-repeat", backgroundPosition: "bottom" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col lg:justify-between mobile-text-shadow">
          <RevealOnScroll className="text-center max-w-3xl mx-auto pt-0 lg:pt-8 px-4">
            <h2 className="text-2xl sm:text-[2rem] md:text-[2.5rem] lg:text-[3.75rem] font-normal leading-[0.95] text-white mb-2 text-balance tracking-tight">
              Porque la vida no espera
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-[1.3] mb-1 max-w-6xl mx-auto">
              El mejor beneficio es el que se usa. El mejor partner, el que te ayuda a que eso pase.
            </p>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-snug text-white text-balance">
              Hoy mismo te ayudamos con:
            </h3>
          </RevealOnScroll>

          {/* Spacer for stopwatch visibility - Mobile only */}
          <div className="flex-1 min-h-[50vh] lg:hidden" />

          {/* Cards - Mobile: auto-sliding carousel / Desktop: 3-column grid */}
          {/* Mobile Carousel */}
          <div className="lg:hidden pb-4">
            <ProblemaCarousel />
          </div>
          {/* Desktop Grid */}
          <motion.div
            className="hidden lg:grid grid-cols-3 gap-6 max-w-6xl mx-auto pb-4 mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem} className="p-6 space-y-3">
              <div className="w-10 h-10 bg-[#cc0033] rounded-lg flex items-center justify-center mb-2">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white leading-snug">
                Complejidad administrativa que te consume
              </h3>
              <p className="text-white/80 text-sm leading-snug">
                Formularios, correos con la aseguradora, llamadas de colaboradores y plazos que nadie recuerda. Cada
                reembolso o incorporación termina siendo una mini-operación administrativa dentro de tu negocio.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="p-6 space-y-3">
              <div className="w-10 h-10 bg-[#cc0033] rounded-lg flex items-center justify-center mb-2">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white leading-snug">Equipos expuestos a gastos imprevistos</h3>
              <p className="text-white/80 text-sm leading-snug">
                Una urgencia médica puede transformarse en deuda familiar si nadie sabe cómo usar el seguro o qué cubre
                realmente el plan complementario. El beneficio existe, pero no se usa a tiempo.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="p-6 space-y-3">
              <div className="w-10 h-10 bg-[#cc0033] rounded-lg flex items-center justify-center mb-2">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white leading-snug">
                Beneficios que se pagan, pero no se entienden
              </h3>
              <p className="text-white/80 text-sm leading-snug">
                Colaboradores que sienten que 'tienen un seguro', pero no saben dónde llamar, qué papeles guardar o cómo
                hacer un reclamo. Resultado: pagan de su bolsillo algo que la empresa ya está financiando.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Beneficios / Pilares Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="p-2 px-4">
          <RevealOnScroll className="text-center mb-12">
            <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666] mb-4">
              PORQUE ESTAR CUBIERTO NO BASTA… HAY QUE SENTIRSE PROTEGIDO
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#cc0033]">
              Simplificar no es quitar cobertura. Es quitar obstáculos.
            </h2>
            <p className="text-[#666666] text-base sm:text-lg max-w-3xl mx-auto">
              Nos integramos como el área de seguros complementarios de salud de tu empresa: diseñamos el plan,
              acompañamos a tu equipo y nos hacemos cargo de la relación con las aseguradoras de principio a fin.
            </p>
            <div className="mt-6">
              <ScrollButton
                targetId="formulario-contacto"
                className="bg-[#cc0033] text-white px-8 py-3"
              >
                Quiero simplificar mi seguro ahora
              </ScrollButton>
            </div>
          </RevealOnScroll>

          <div className="max-w-6xl mx-auto mt-24">
            <div className="relative w-full overflow-hidden mb-4">
              {/* Gradient fade masks on both sides */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

              {/* Scrolling content */}
              <div className="flex whitespace-nowrap animate-marquee lg:animate-marquee-desktop">
                <span className="inline-block text-[#cc0033] text-base md:text-xl font-medium px-8">
                  Pymes que hoy respiran más tranquilas | Recuperar hasta 40 horas anuales del tiempo de un profesional
                  para retención talento y estrategia. | ¿Sabías que el 70% de los colaboradores no entiende su
                  cobertura?
                </span>
                <span className="inline-block text-[#cc0033] text-base md:text-xl font-medium px-8">
                  Pymes que hoy respiran más tranquilas | Recuperar hasta 40 horas anuales del tiempo de un profesional
                  para retención talento y estrategia. | ¿Sabías que el 70% de los colaboradores no entiende su
                  cobertura?
                </span>
                <span className="inline-block text-[#cc0033] text-base md:text-xl font-medium px-8">
                  Pymes que hoy respiran más tranquilas | Recuperar hasta 40 horas anuales del tiempo de un profesional
                  para retención talento y estrategia. | ¿Sabías que el 70% de los colaboradores no entiende su
                  cobertura?
                </span>
              </div>
            </div>

            {/* Testimonials Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              {/* Testimonio 1 - Marcela Lorenzo */}
              <motion.div variants={staggerItem} className="flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-4xl md:text-6xl text-[#cc0033] leading-none">"</div>
                  <p className="text-[#666666] text-base leading-snug mt-6">
                    Levábamos años encontrando un seguro que permitiese como empresa pequeña poder tener cobertura
                    adicional. Hemos encontrado asesoría confiable, con profesionales atentos capacitados para resolver
                    cualquier duda. Excelente servicio, recomiendo Redagrupa a ojos cerrados.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200 flex items-center gap-4">
                  <Image
                    src="/images/marcela-lorenzo-ceo-just4u-baja.jpg"
                    alt="Marcela Lorenzo"
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-[#333333]">Marcela Lorenzo</p>
                    <p className="text-sm text-[#666666]">Partner CEO en JSTL</p>
                  </div>
                </div>
              </motion.div>

              {/* Testimonio 2 - Manuel Pamplona */}
              <motion.div variants={staggerItem} className="flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-4xl md:text-6xl text-[#cc0033] leading-none">"</div>
                  <p className="text-[#666666] text-base leading-snug mt-6">
                    Contratamos Redagrupa como beneficio extra para trabajadores, pero al poco tiempo nos dimos cuenta
                    que es un gran aliado, tanto clientes como empleados. Es el agregado bien servicio indiscutible con
                    ellos.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200 flex items-center gap-4">
                  <Image
                    src="/images/manuel-pamplona-baja.jpg"
                    alt="Manuel Pamplona"
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-[#333333]">Manuel Pamplona</p>
                    <p className="text-sm text-[#666666]">Gerente Regional en EngMe</p>
                  </div>
                </div>
              </motion.div>

              {/* Testimonio 3 - Roberto Allaro */}
              <motion.div variants={staggerItem} className="flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-4xl md:text-6xl text-[#cc0033] leading-none">"</div>
                  <p className="text-[#666666] text-base leading-snug mt-6">
                    Antes no había sido posible conseguir seguro complementario para mis colaboradores, ya que para
                    tratar de una compañía de pocos empleados no cumplíamos con los requisitos. Pero gracias a Redagrupa
                    lo conseguimos.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200 flex items-center gap-4">
                  <Image
                    src="/images/roberto-alfaro-gerente-genera-scm-latam-baja.jpg"
                    alt="Roberto Allaro"
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-[#333333]">Roberto Allaro</p>
                    <p className="text-sm text-[#666666]">Gerente General en SCLatam</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section - Lo que pasa cuando los seguros dejan de ser un problema */}
      <section className="relative text-white overflow-hidden min-h-0 lg:min-h-screen flex flex-col bg-[#cc0033] lg:bg-transparent py-8 lg:py-0">
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
              ¿Quieres una asesoría personalizada?
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
      <section id="seccion-aseguradoras" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <RevealOnScroll className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#cc0033] px-4">
              Formularios de reembolso e incorporación.
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
                <a href="https://redagrupa.cl/consorcio-reembolso-denta/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
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
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#cc0033] pointer-events-none" />
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
