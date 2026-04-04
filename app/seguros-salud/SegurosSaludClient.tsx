"use client"

import Image from "next/image"
import Link from "next/link"
import {
  UsersIcon,
  Facebook,
  Instagram,
  Linkedin,
  Heart,
  BedDouble,
  Stethoscope,
  Pill,
  ShieldAlert,
  Smile,
  CheckCircle2,
  Users,
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

export default function SegurosSaludClient() {
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
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
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
            <Link href="/formularios" className="text-white font-medium text-sm">
              Formularios
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

      <article>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] lg:min-h-[70vh] flex items-center pt-20">
          <Image
            src="/seguros-salud-hero.webp"
            alt="Familia protegida con seguro complementario de salud"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-[1] hidden lg:block" style={{ background: "linear-gradient(to right, white 0%, white 25%, transparent 60%)" }} />
          <div className="container mx-auto px-4 relative z-10 hidden lg:block">
            <RevealOnScroll className="max-w-4xl ml-8 lg:ml-16 space-y-3">
              <p className="text-4xl font-bold text-[#cc0033] drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]" aria-hidden="true">Seguro Complementario<br />de Salud</p>
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
            <Breadcrumbs items={[{ label: "Seguros Salud" }]} />
            {/* Título y botón solo en móvil */}
            <div className="lg:hidden max-w-4xl mx-auto space-y-3 mb-8">
              <h1 className="text-3xl font-bold text-[#cc0033]">Seguro Complementario<br />de Salud</h1>
              <div>
                <Button onClick={scrollToForm} className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3">
                  Solicitar Asesoría
                </Button>
              </div>
            </div>
            <RevealOnScroll className="max-w-4xl mx-auto space-y-6">
              <p className="text-base text-gray-700 leading-[1.1]">
                El Seguro Complementario de Salud es un beneficio altamente valorado por las empresas que buscan
                entregar una mejor protección a sus trabajadores frente a gastos médicos no cubiertos completamente
                por el sistema previsional de salud. Este tipo de seguro cubre, en la proporción y hasta los montos
                establecidos en la póliza, los gastos que exceden la cobertura base de Fonasa o Isapre.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                Para pymes y empresas medianas, el Seguro Complementario de Salud representa una herramienta
                estratégica para fortalecer la propuesta de valor hacia sus colaboradores, mejorar la retención de
                talento y respaldar a los equipos ante eventos de salud imprevistos.
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

        {/* ¿Qué es un Seguro Complementario de Salud? */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <RevealOnScroll className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 text-center">
                ¿Qué es un Seguro Complementario de Salud?
              </h2>
              <p className="text-base text-gray-700 leading-[1.1]">
                En Chile, todas las personas cuentan por ley con un sistema de salud previsional, ya sea Fonasa o
                Isapre, el cual cubre solo un porcentaje del costo total de las prestaciones médicas, generando un
                copago que debe ser asumido por la persona.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                El Seguro Complementario de Salud está diseñado para cubrir total o parcialmente ese copago, de
                acuerdo con los porcentajes, topes y condiciones definidos en la póliza contratada por la empresa,
                reduciendo significativamente el gasto de bolsillo del trabajador.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                Desde un punto de vista técnico, este seguro actúa como una ampliación de la cobertura del sistema
                previsional, aplicable a distintas prestaciones médicas.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Coberturas */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealOnScroll className="text-center space-y-4 mb-16">
                <h2 className="text-2xl font-bold text-gray-900">
                  Coberturas de un Seguro Complementario de Salud
                </h2>
                <p className="text-base text-gray-700 max-w-4xl mx-auto leading-[1.1]">
                  Las pólizas contemplan un conjunto de coberturas orientadas a responder a las principales
                  necesidades de salud de los trabajadores.
                </p>
              </RevealOnScroll>

              {/* Coberturas principales */}
              <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666] mb-8 text-center">
                Coberturas principales
              </p>
              <RevealOnScroll className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16 stagger-grid">
                <div className="text-center space-y-3">
                  <Heart className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Vida</h3>
                </div>
                <div className="text-center space-y-3">
                  <BedDouble className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Hospitalización</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Incluyendo cirugías y estadías clínicas
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <Stethoscope className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Atención ambulatoria</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Consultas médicas, exámenes y procedimientos
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <Pill className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Medicamentos</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Farmacia según receta médica
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <ShieldAlert className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Catastrófica</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Para eventos de alto costo
                  </p>
                </div>
              </RevealOnScroll>

              {/* Coberturas adicionales */}
              <div className="border-l-4 border-[#cc0033] pl-6 max-w-4xl mx-auto">
                <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666] mb-3">
                  Coberturas adicionales
                </p>
                <div className="flex items-start gap-4">
                  <Smile className="w-10 h-10 text-[#cc0033] flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    De forma opcional, las pólizas pueden incorporar <strong className="text-[#cc0033]">cobertura dental</strong>,
                    ya sea mediante redes de prestadores en convenio o bajo modalidad de libre elección con topes definidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios para Empresas */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Beneficios del Seguro Complementario de Salud para Empresas
                </h2>
                <p className="text-base text-gray-700 leading-[1.1] text-center mb-12">
                  Contratar un Seguro Complementario de Salud permite a las empresas:
                </p>
              </RevealOnScroll>

              <RevealOnScroll className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    <strong>Tus trabajadores van al doctor sin preocuparse por el costo:</strong> el seguro cubre el copago que Fonasa o Isapre no cubren, reduciendo gastos de bolsillo hasta un 80%.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    <strong>Tu equipo se siente valorado y se queda:</strong> las empresas con seguro complementario reducen la rotación hasta un 25%, porque el beneficio impacta directo en la calidad de vida.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    <strong>Atraes talento sin competir solo por sueldo:</strong> el seguro complementario es el beneficio más valorado en Chile después del sueldo. Diferencia tu oferta laboral.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    <strong>Una urgencia no se convierte en deuda familiar:</strong> hospitalización, cirugías y eventos catastróficos quedan cubiertos. Tu equipo está protegido ante lo inesperado.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    <strong>Planes adaptados a tu presupuesto real:</strong> desde UF 0,52/mes por trabajador. Eliges coberturas, topes y aseguradora según lo que tu pyme necesita y puede pagar.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Asesoría especializada */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <RevealOnScroll className="max-w-4xl mx-auto text-center space-y-6">
              <Users className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
              <h2 className="text-2xl font-bold text-gray-900">Asesoría especializada para empresas</h2>
              <p className="text-base text-gray-700 leading-[1.1] max-w-3xl mx-auto">
                Cada empresa tiene necesidades distintas según su tamaño, rubro y presupuesto. Contar con asesoría
                especializada permite diseñar una solución alineada con los objetivos del negocio y el perfil de
                los trabajadores.
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
                <Link href="/seguro-complementario-bice-pyme" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#cc0033] transition-colors">Seguro BICE Pyme</h3>
                  <p className="text-sm text-gray-600 mt-2">Planes desde UF 0,52/trabajador/mes. Salud + Vida para tu equipo.</p>
                </Link>
                <Link href="/seguro-complementario-bice-personas" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#cc0033] transition-colors">Seguro BICE Personas</h3>
                  <p className="text-sm text-gray-600 mt-2">Protección individual y familiar. Hospitalización, consultas y medicamentos.</p>
                </Link>
                <Link href="/beneficios-redagrupa" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#cc0033] transition-colors">Beneficios Corporativos</h3>
                  <p className="text-sm text-gray-600 mt-2">Convenios de salud, bienestar y vacunación para empresas clientes.</p>
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
                  pagina="seguros-salud"
                  heading="Tranquilo, sabemos cómo hacer simples los seguros complementarios, ¡Conversemos!"
                />
              </RevealOnScroll>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">
                  Recibe información técnica y una propuesta adecuada para tu empresa
                </h2>
                <p className="text-base text-white/90 leading-[1.1]">
                  Cada empresa tiene necesidades distintas según su tamaño, rubro y presupuesto. Contar con asesoría
                  especializada permite diseñar una solución alineada con los objetivos del negocio y el perfil de
                  los trabajadores.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </article>
    </main>
  )
}
