"use client"

import Image from "next/image"
import Link from "next/link"
import {
  UsersIcon,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle2,
  Dumbbell,
  Eye,
  Syringe,
  Heart,
  Smartphone,
  Users,
  Handshake,
  MapPin,
  Mail,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/MobileMenu"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import RevealOnScroll from "@/components/RevealOnScroll"
import { motion } from "motion/react"
import { staggerContainer, staggerItem } from "@/lib/animations"

export default function BeneficiosClient() {
  const scrollToForm = () => {
    document.getElementById("formulario-contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#cc0033] text-white shadow-md">
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
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/nosotros" className="text-white font-medium text-sm">
              Nosotros
            </Link>
            <Link href="/seguros-salud" className="text-white font-medium text-sm">
              Seguro Complementario Salud
            </Link>
            <Link href="/beneficios-redagrupa" className="text-white font-medium text-sm">
              Beneficios RedAgrupa
            </Link>
            <Link href="/seguro-complementario-bice-pyme" className="text-white font-medium text-sm">
              Seguro BICE Pyme
            </Link>
            <Link href="/seguro-complementario-bice-personas" className="text-white font-medium text-sm">
              Seguro BICE Personas
            </Link>
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 w-[180px]"
              onClick={scrollToForm}
            >
              Solicitar Asesoría
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="/contactos" target="_blank" rel="noopener noreferrer">
                <UsersIcon className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <MobileMenu />
        </div>
      </header>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
        <a
          href="https://www.facebook.com/RedAgrupa/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
        >
          <Facebook className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a
          href="https://www.instagram.com/redagrupa/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
        >
          <Instagram className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/company/redagrupa"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
        >
          <Linkedin className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
      </div>

      <div>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] lg:min-h-[70vh] flex items-center pt-20">
          <Image
            src="/beneficios-hero.jpg"
            alt="Equipo de trabajo con beneficios corporativos RedAgrupa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-[1] hidden lg:block" style={{ background: "linear-gradient(to right, white 0%, white 25%, transparent 60%)" }} />
          <div className="container mx-auto px-4 relative z-10 hidden lg:block">
            <RevealOnScroll className="max-w-4xl ml-8 lg:ml-16 space-y-3">
              <h1 className="text-4xl font-bold text-[#cc0033] drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">Beneficios de Salud<br />para Empresas</h1>
              <div>
                <Button onClick={scrollToForm} className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3 shadow-lg">
                  Solicitar Asesoría
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Introducción */}
        <section className="py-16 lg:py-32">
          <div className="container mx-auto px-4">
            {/* Título y botón solo en móvil */}
            <div className="lg:hidden max-w-4xl mx-auto space-y-3 mb-8">
              <h1 className="text-3xl font-bold text-[#cc0033]">Beneficios de Salud<br />para Empresas</h1>
              <div>
                <Button onClick={scrollToForm} className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3">
                  Solicitar Asesoría
                </Button>
              </div>
            </div>
            <RevealOnScroll className="max-w-4xl mx-auto space-y-6">
              <p className="text-base text-gray-700 leading-[1.1]">
                Los Beneficios de Salud de RedAgrupa están diseñados para empresas que buscan optimizar la gestión
                de personas, reducir tiempos administrativos y mejorar la productividad, sin aumentar la complejidad
                operativa interna.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                Al ser clientes de RedAgrupa, las empresas acceden a una red estructurada de convenios, servicios
                enfocados en la salud, bienestar y beneficios corporativos, orientados a impactar positivamente en
                la continuidad operativa y el desempeño de los equipos de trabajo.
              </p>
            </RevealOnScroll>

            {/* Marquee */}
            <div className="relative overflow-hidden mt-16 py-4">
              <div
                className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, white, transparent)" }}
              />
              <div
                className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, white, transparent)" }}
              />
              <div className="animate-marquee whitespace-nowrap text-[#cc0033] font-medium">
                <span className="mx-8">
                  Pymes que hoy respiran más tranquilas | Recuperar hasta 40 horas anuales del tiempo de un profesional
                  para retención talento y estrategia. | ¿Sabías que el 70% de los colaboradores no entiende su
                  cobertura?
                </span>
                <span className="mx-8">
                  Pymes que hoy respiran más tranquilas | Recuperar hasta 40 horas anuales del tiempo de un profesional
                  para retención talento y estrategia. | ¿Sabías que el 70% de los colaboradores no entiende su
                  cobertura?
                </span>
                <span className="mx-8">
                  Pymes que hoy respiran más tranquilas | Recuperar hasta 40 horas anuales del tiempo de un profesional
                  para retención talento y estrategia. | ¿Sabías que el 70% de los colaboradores no entiende su
                  cobertura?
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Convenios y Beneficios Corporativos */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <RevealOnScroll className="max-w-4xl mx-auto space-y-8">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666] text-center">
                Beneficios exclusivos para empresas clientes de RedAgrupa
              </p>
              <h2 className="text-2xl font-bold text-gray-900 text-center">
                Convenios y Beneficios Corporativos en Salud y Bienestar
              </h2>
              <p className="text-base text-gray-700 leading-[1.1]">
                RedAgrupa asesora e implementa convenios y beneficios corporativos en salud y bienestar, disponibles
                para empresas de todos los tamaños y rubros, con un modelo de gestión centralizado que reduce la
                carga administrativa para el área de Personas y Administración.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                Estos beneficios complementan los esquemas tradicionales de compensaciones, aumentando el valor
                percibido por los trabajadores sin requerir una gestión operativa compleja por parte de la empresa.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Tipos de convenios */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealOnScroll>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-16">
                  Tipos de convenios de salud disponibles
                </h2>
              </RevealOnScroll>

              <motion.div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                <motion.div variants={staggerItem} className="space-y-4">
                  <Dumbbell className="w-12 h-12 text-[#cc0033]" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-gray-900">Convenios con gimnasios y actividad física</h3>
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Acceso a convenios preferenciales con gimnasios y centros deportivos, promoviendo hábitos
                    saludables que contribuyen a reducir licencias médicas y mejorar el rendimiento laboral.
                  </p>
                </motion.div>

                <motion.div variants={staggerItem} className="space-y-4">
                  <Eye className="w-12 h-12 text-[#cc0033]" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-gray-900">Operativos oftalmológicos en terreno</h3>
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Convenios con redes oftalmológicas que operan tanto en centros externos como mediante operativos
                    en oficinas del cliente, optimizando tiempos del trabajador y evitando ausencias prolongadas por
                    gestiones médicas.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impacto de los convenios */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Impacto de los convenios corporativos en la empresa
                </h2>
                <p className="text-base text-gray-700 leading-[1.1] text-center mb-12">
                  Implementar beneficios de salud a través de RedAgrupa permite:
                </p>
              </RevealOnScroll>

              <RevealOnScroll>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Optimizar el tiempo de gestión del área de RRHH
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Reducir costos indirectos asociados a ausentismo
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Aumentar el valor del paquete de beneficios laborales
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Facilitar el acceso a prestaciones de salud para los equipos
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Mejorar la percepción del empleador sin aumentar dotación administrativa
                  </p>
                </div>
              </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Vacunación Corporativa */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
              <div className="text-center space-y-4 mb-16">
                <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666]">
                  Salud preventiva orientada a continuidad operativa
                </p>
                <h2 className="text-2xl font-bold text-gray-900">
                  Coordinación de Vacunación para Empresas
                </h2>
                <p className="text-base text-gray-700 leading-[1.1] max-w-3xl mx-auto">
                  RedAgrupa coordina productos y servicios de vacunación corporativa, como parte de una estrategia
                  preventiva que busca reducir riesgos sanitarios, ausentismo y contingencias operativas. Este
                  servicio es especialmente valorado por empresas que priorizan la planificación y la productividad
                  de sus equipos.
                </p>
              </div>
              </RevealOnScroll>

              <RevealOnScroll>
              <div className="border-l-4 border-[#cc0033] pl-6">
                <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666] mb-6">
                  Beneficios de la vacunación corporativa
                </p>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="text-base text-gray-700 leading-[1.1]">Reducción de licencias médicas</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="text-base text-gray-700 leading-[1.1]">Prevención de contagios masivos</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="text-base text-gray-700 leading-[1.1]">Mayor continuidad operativa</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="text-base text-gray-700 leading-[1.1]">Mejora en la gestión de riesgos laborales</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="text-base text-gray-700 leading-[1.1]">
                      Ahorro de tiempo para trabajadores y equipos administrativos
                    </p>
                  </div>
                </div>
              </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Entretención y Bienestar Familiar */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
              <div className="text-center space-y-4 mb-16">
                <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666]">
                  Bienestar integral con impacto en clima y productividad
                </p>
                <h2 className="text-2xl font-bold text-gray-900">
                  Beneficios de Entretención y Bienestar Familiar
                </h2>
                <p className="text-base text-gray-700 leading-[1.1] max-w-3xl mx-auto">
                  Como parte de los beneficios disponibles para clientes de RedAgrupa, las empresas pueden ofrecer
                  beneficios de entretención y bienestar familiar, fortaleciendo el equilibrio entre vida laboral y
                  personal. Este tipo de beneficios incide directamente en el compromiso, motivación y clima
                  organizacional.
                </p>
              </div>
              </RevealOnScroll>

              <RevealOnScroll>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">Mejora del clima laboral</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">Aumento del compromiso del trabajador</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">Reducción de rotación</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">Mayor fidelización hacia la empresa</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">Alto valor percibido con bajo costo operativo</p>
                </div>
              </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Plataforma Digital */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
              <div className="text-center space-y-4 mb-16">
                <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666]">
                  Gestión simple, escalable y sin carga administrativa
                </p>
                <h2 className="text-2xl font-bold text-gray-900">
                  Plataforma Digital de Beneficios para Trabajadores
                </h2>
                <p className="text-base text-gray-700 leading-[1.1] max-w-3xl mx-auto">
                  Gracias a una alianza estratégica con un proveedor local, los clientes de RedAgrupa acceden a una
                  plataforma digital de beneficios, con más de 1.500 beneficios disponibles mediante aplicación
                  móvil. Esta solución permite a la empresa ofrecer un amplio abanico de beneficios sin necesidad de
                  gestión interna adicional.
                </p>
              </div>
              </RevealOnScroll>

              <RevealOnScroll>
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Ahorro significativo de tiempo en gestión de beneficios
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Escalabilidad sin impacto en estructura interna
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Alto valor percibido por los colaboradores
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Solución transversal, independiente del tamaño de la empresa
                  </p>
                </div>
              </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <RevealOnScroll className="max-w-4xl mx-auto text-center space-y-6">
              <Handshake className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
              <h2 className="text-2xl font-bold text-gray-900">
                Beneficios de Salud gestionados por RedAgrupa
              </h2>
              <p className="text-base text-gray-700 leading-[1.1] max-w-3xl mx-auto">
                Centralizar los beneficios de salud y bienestar con RedAgrupa permite a la empresa enfocarse en su
                negocio, mientras un equipo especializado gestiona la coordinación, implementación y operación de
                estos servicios.
              </p>
              <div className="pt-4">
                <Button onClick={scrollToForm} className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3">
                  Solicitar Asesoría
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-[#cc0033]" id="formulario-contacto">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
              <RevealOnScroll className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl">
                <ContactForm
                  pagina="beneficios"
                  heading="Tranquilo, sabemos cómo hacer simples los seguros complementarios, ¡Conversemos!"
                />
              </RevealOnScroll>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">
                  Conoce cómo acceder a los Beneficios de Salud exclusivos para clientes de RedAgrupa
                </h2>
                <p className="text-base text-white/90 leading-[1.1]">
                  Optimiza tiempo, productividad y gestión de personas centralizando los beneficios de salud y
                  bienestar de tu empresa con RedAgrupa.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
