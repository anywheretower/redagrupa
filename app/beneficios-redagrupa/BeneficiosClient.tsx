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
import dynamic from "next/dynamic"
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false })
import RevealOnScroll from "@/components/RevealOnScroll"
import Breadcrumbs from "@/components/Breadcrumbs"

export default function BeneficiosClient() {
  const scrollToForm = () => {
    document.getElementById("formulario-contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main id="contenido-principal" className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#cc0033] text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center -ml-2 lg:ml-0">
            <Image
              src="/images/logo-20redagrupa-3.png"
              alt="RedAgrupa Logo"
              width={160}
              height={40}
              priority
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
            <div className="relative group">
              <button className="text-white font-medium text-sm flex items-center gap-1">
                Seguro BICE
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
                  <Link href="/seguro-complementario-bice-pyme" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#cc0033] transition-colors">
                    Seguro BICE Pyme
                  </Link>
                  <Link href="/seguro-complementario-bice-personas" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#cc0033] transition-colors">
                    Seguro BICE Personas
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/blog" className="text-white font-medium text-sm">
              Conocimiento Pyme
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
          className="w-11 h-11 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
          aria-label="Facebook de RedAgrupa"
        >
          <Facebook className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a
          href="https://www.instagram.com/redagrupa/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
          aria-label="Instagram de RedAgrupa"
        >
          <Instagram className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/company/redagrupa"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
          aria-label="LinkedIn de RedAgrupa"
        >
          <Linkedin className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a
          href="https://wa.me/56982414614"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#1DA851] flex items-center justify-center shadow-lg transition-colors"
          aria-label="WhatsApp de RedAgrupa"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
            <Breadcrumbs items={[{ label: "Beneficios" }]} />
            {/* Título y botón solo en móvil */}
            <div className="lg:hidden max-w-4xl mx-auto space-y-3 mb-8">
              <p className="text-3xl font-bold text-[#cc0033]" aria-hidden="true">Beneficios de Salud<br />para Empresas</p>
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
                ¿Qué convenios y beneficios corporativos incluye RedAgrupa?
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
                  ¿Qué tipos de convenios de salud están disponibles?
                </h2>
              </RevealOnScroll>

              <RevealOnScroll className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto stagger-grid">
                <div className="space-y-4">
                  <Dumbbell className="w-12 h-12 text-[#cc0033]" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-gray-900">Convenios con gimnasios y actividad física</h3>
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Los clientes de RedAgrupa acceden a convenios preferenciales con gimnasios y centros deportivos
                    a lo largo de Chile. Estos convenios forman parte del modelo de gestión centralizada de beneficios:
                    RedAgrupa negocia las condiciones, coordina la implementación y la empresa solo comunica el
                    beneficio a sus colaboradores, sin carga administrativa adicional. La actividad física regular
                    contribuye a reducir licencias médicas y mejorar el rendimiento laboral, impactando directamente
                    en la continuidad operativa de la empresa.
                  </p>
                </div>

                <div className="space-y-4">
                  <Eye className="w-12 h-12 text-[#cc0033]" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-gray-900">Operativos oftalmológicos en terreno</h3>
                  <p className="text-base text-gray-700 leading-[1.1]">
                    RedAgrupa coordina convenios con redes oftalmológicas que operan en dos modalidades: atención en
                    centros externos con tarifas preferenciales, y operativos directamente en las oficinas del cliente.
                    Esta segunda modalidad es especialmente valorada por pymes, ya que evita ausencias prolongadas
                    por gestiones médicas y permite que los trabajadores accedan a exámenes de vista, lentes y
                    tratamientos sin salir de su lugar de trabajo. La coordinación completa queda a cargo de RedAgrupa,
                    desde la agenda de profesionales hasta la entrega de resultados.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Impacto de los convenios */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  ¿Cuál es el impacto de los convenios corporativos en tu empresa?
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
                    <strong className="text-gray-900">Optimizar el tiempo de gestión del área de RRHH.</strong> RedAgrupa
                    se encarga de la coordinación con aseguradoras, la gestión de reembolsos y la implementación de
                    convenios, liberando al equipo de Personas para enfocarse en tareas estratégicas.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    <strong className="text-gray-900">Reducir costos indirectos asociados a ausentismo.</strong> Los
                    convenios de salud preventiva (vacunación, oftalmología, actividad física) están orientados a
                    disminuir licencias médicas y mantener la continuidad operativa de los equipos.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    <strong className="text-gray-900">Aumentar el valor del paquete de beneficios laborales.</strong> Los
                    beneficios complementan el seguro de salud con convenios de gimnasio, entretención familiar y
                    una plataforma digital con más de 1.500 beneficios disponibles.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    <strong className="text-gray-900">Facilitar el acceso a prestaciones de salud.</strong> RedAgrupa
                    trabaja con 9 aseguradoras (BCI Seguros, BICE Vida, Consorcio, MetLife, Bupa, entre otras) y
                    coordina operativos en terreno para que los colaboradores accedan sin trámites complejos.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    <strong className="text-gray-900">Mejorar la percepción del empleador sin aumentar dotación.</strong> Todo
                    el modelo opera de forma externalizada: RedAgrupa gestiona los beneficios y la empresa solo comunica.
                    No se requiere contratar personal adicional ni crear áreas nuevas.
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
                  ¿Cómo funciona la coordinación de vacunación para empresas?
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
                    <p className="text-base text-gray-700 leading-[1.1]">
                      <strong className="text-gray-900">Reducción de licencias médicas</strong> al proteger a los
                      equipos antes de los períodos de mayor riesgo sanitario.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="text-base text-gray-700 leading-[1.1]">
                      <strong className="text-gray-900">Prevención de contagios masivos</strong> que pueden afectar
                      la operación completa de una pyme con equipos reducidos.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="text-base text-gray-700 leading-[1.1]">
                      <strong className="text-gray-900">Mayor continuidad operativa</strong> al reducir ausencias
                      imprevistas por enfermedades estacionales.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="text-base text-gray-700 leading-[1.1]">
                      <strong className="text-gray-900">Mejora en la gestión de riesgos laborales</strong> con un
                      enfoque preventivo coordinado por RedAgrupa.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="text-base text-gray-700 leading-[1.1]">
                      <strong className="text-gray-900">Ahorro de tiempo</strong> para trabajadores y equipos
                      administrativos, ya que RedAgrupa coordina la logística completa del operativo.
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
                  ¿Qué es la plataforma digital de beneficios para trabajadores?
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

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Servicios relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Link href="/seguros-salud" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#cc0033] transition-colors">Seguro Complementario Salud</h3>
                  <p className="text-sm text-gray-600 mt-2">Cubre gastos que exceden Fonasa o Isapre. +300 pymes confían en RedAgrupa.</p>
                </Link>
                <Link href="/seguro-complementario-bice-pyme" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#cc0033] transition-colors">Seguro BICE Pyme</h3>
                  <p className="text-sm text-gray-600 mt-2">Planes desde UF 0,52/trabajador/mes. Salud + Vida para tu equipo.</p>
                </Link>
                <Link href="/seguro-complementario-bice-personas" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#cc0033] transition-colors">Seguro BICE Personas</h3>
                  <p className="text-sm text-gray-600 mt-2">Protección individual y familiar. Hospitalización, consultas y medicamentos.</p>
                </Link>
              </div>
            </div>
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
