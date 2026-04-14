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
  ChevronDown,
  Quote,
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
              src="/images/logo-redagrupa.png"
              alt="RedAgrupa Logo"
              width={160}
              height={40}
              priority
              className="h-8 md:h-8 w-auto"
            />
          </Link>
          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-8 ml-auto mr-4">
            <Link href="/nosotros" className="text-white hover:text-white/80 transition-colors font-medium text-xs">
              Nosotros
            </Link>
            <Link href="/seguro-complementario" className="text-white hover:text-white/80 transition-colors font-medium text-xs">
              Seguro Complementario Salud
            </Link>
            <Link href="/beneficios-redagrupa" className="text-white hover:text-white/80 transition-colors font-medium text-xs">
              Beneficios RedAgrupa
            </Link>
            <div className="relative group">
              <button
                aria-haspopup="true"
                aria-expanded="false"
                className="text-white hover:text-white/80 transition-colors font-medium text-xs flex items-center gap-1"
              >
                Seguro BICE
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg py-2 min-w-[200px]" role="menu">
                  <Link href="/seguro-complementario-bice-pyme" role="menuitem" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#cc0033] focus:bg-gray-50 focus:text-[#cc0033] focus:outline-none transition-colors">
                    Seguro BICE Pyme
                  </Link>
                  <Link href="/seguro-complementario-bice-personas" role="menuitem" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#cc0033] focus:bg-gray-50 focus:text-[#cc0033] focus:outline-none transition-colors">
                    Seguro BICE Personas
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/blog" className="text-white hover:text-white/80 transition-colors font-medium text-xs">
              Conocimiento Empresa
            </Link>
            <Link href="/formularios" className="text-white hover:text-white/80 transition-colors font-medium text-xs">
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

      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
        <a
          href="https://www.facebook.com/RedAgrupa/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#1565C0] transition-colors shadow-lg"
          aria-label="Facebook de RedAgrupa"
        >
          <Facebook className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a
          href="https://www.instagram.com/redagrupa/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center hover:opacity-85 transition-opacity shadow-lg"
          aria-label="Instagram de RedAgrupa"
        >
          <Instagram className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/company/redagrupa"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-[#0A66C2] rounded-full flex items-center justify-center hover:bg-[#084E96] transition-colors shadow-lg"
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
        {/* Hero Section — sin RevealOnScroll para visibilidad inmediata */}
        <section className="relative min-h-[50vh] lg:min-h-[70vh] flex items-center pt-20">
          <Image
            src="/seguro-complementario-hero.webp"
            alt="Familia protegida con seguro complementario de salud"
            fill
            sizes="100vw"
            className="object-cover object-[70%_center] lg:object-center"
            priority
          />
          <div className="absolute inset-0 z-[1] hidden lg:block" style={{ background: "linear-gradient(to right, white 0%, white 25%, transparent 60%)" }} />
          <div className="absolute inset-0 z-[1] lg:hidden" style={{ background: "linear-gradient(to right, white 0%, transparent 60%)" }} />
          <div className="container mx-auto px-4 relative z-10 hidden lg:block">
            <div className="max-w-4xl ml-8 lg:ml-16 space-y-4">
              <h1 className="text-4xl font-bold text-[#cc0033] drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">Seguro Complementario<br />de Salud</h1>
              <p className="text-lg text-[#333333] max-w-lg leading-snug">
                Mejor cobertura para tu equipo, <strong className="text-[#cc0033]">cero gestión para ti</strong>. Contratación en días, reembolsos y consultas 100% gestionados por RedAgrupa.
              </p>
              <div className="space-y-3">
                <Button onClick={scrollToForm} className="bg-[#cc0033] hover:bg-[#a30029] text-white px-12 py-3 shadow-lg flex items-center gap-2 text-base">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                  Solicitar Asesoría
                </Button>
                <p className="text-xs text-[#cc0033] font-medium">Cotiza gratis ahora — sin compromiso</p>
                <p className="text-sm text-[#666666]">+300 pymes confían en nosotros</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar — Logos aseguradoras */}
        {(() => {
          const logos = [
            { src: "/images/bupa.png", alt: "Logo Bupa" },
            { src: "/images/logo-bicevida-e1674133440155.png", alt: "Logo BICE Vida" },
            { src: "/images/sura-seguros300-e1674133176152.png", alt: "Logo Sura Seguros" },
            { src: "/images/consorcio300-e1674133353916.png", alt: "Logo Consorcio" },
            { src: "/images/metlife-logo-e1674133505895.png", alt: "Logo MetLife" },
            { src: "/images/bci-seguros300.png", alt: "Logo BCI Seguros" },
            { src: "/images/security.png", alt: "Logo Vida Security" },
            { src: "/images/logo-help1-e1674133566493.png", alt: "Logo Help Seguros" },
            { src: "/images/logo-chilena-consolidada2-e1674133731697.png", alt: "Logo Chilena Consolidada" },
          ]
          return (
            <section className="bg-white border-b border-gray-200">
              <div className="container mx-auto px-6 py-6 lg:py-8">
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#666666] text-center mb-4">Comparamos las principales aseguradoras por ti</p>
                {/* Desktop: logos estáticos centrados */}
                <div className="hidden md:flex items-center justify-center gap-x-11 max-w-full mx-auto">
                  {logos.map((logo) => (
                    <Image
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={40}
                      loading="lazy"
                      className="h-10 w-auto object-contain flex-shrink-0"
                    />
                  ))}
                </div>
                {/* Mobile: marquee automático */}
                <div className="md:hidden relative overflow-hidden min-h-[32px]">
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                  <div className="flex items-center gap-x-8 logo-marquee-track w-max">
                    {[...logos, ...logos].map((logo, i) => (
                      <Image
                        key={`${logo.alt}-${i}`}
                        src={logo.src}
                        alt={i >= logos.length ? "" : logo.alt}
                        width={120}
                        height={40}
                        loading="lazy"
                        className="h-10 w-auto object-contain flex-shrink-0"
                        aria-hidden={i >= logos.length ? true : undefined}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )
        })()}

        {/* Intro + breadcrumbs */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ label: "Seguros Salud" }]} currentPath="/seguro-complementario" />
            {/* Título y botón solo en móvil */}
            <div className="lg:hidden max-w-4xl mx-auto space-y-3 mb-8">
              <p className="text-3xl font-bold text-[#cc0033]" aria-hidden="true">Seguro Complementario<br />de Salud</p>
              <p className="text-base text-[#333333] leading-snug">
                Mejor cobertura para tu equipo, <strong className="text-[#cc0033]">cero gestión para ti</strong>. Contratación en días, reembolsos y consultas 100% gestionados por RedAgrupa.
              </p>
              <div>
                <Button onClick={scrollToForm} className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                  Solicitar Asesoría
                </Button>
                <p className="text-xs text-[#cc0033] font-medium mt-1.5">Cotiza gratis ahora — sin compromiso</p>
                <span className="text-xs text-[#666666] block mt-1">+300 pymes confían en nosotros</span>
              </div>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-base text-gray-700 leading-[1.1]">
                Un seguro complementario de salud es una póliza que <strong className="text-[#cc0033]">cubre los gastos médicos que Fonasa o tu Isapre
                no cubren completamente</strong> — consultas, exámenes, hospitalizaciones y medicamentos. En la práctica,
                el seguro <strong className="text-[#cc0033]">reembolsa el copago</strong> que queda después de la bonificación de tu plan de salud, según los
                porcentajes y topes de la póliza contratada.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                Para pymes y empresas medianas en Chile, contar con un seguro complementario de salud es una de las
                herramientas más efectivas para <strong className="text-[#cc0033]">retener talento</strong>, <strong className="text-[#cc0033]">fortalecer tu propuesta de valor como empleador</strong>
                y <strong className="text-[#cc0033]">proteger a tus equipos</strong> ante gastos de salud imprevistos.
              </p>
            </div>
          </div>
        </section>

        {/* Mini-testimonio — social proof temprano */}
        <section className="py-8 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto flex items-start gap-4">
              <div className="relative flex-shrink-0 mt-1">
                <Image
                  src="/images/marcela-lorenzo-ceo-just4u-baja.jpg"
                  alt="Marcela Lorenzo, Partner CEO en JSTL"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <Quote className="w-5 h-5 text-[#cc0033] absolute -top-1 -right-1 rotate-180 bg-gray-50 rounded-full p-0.5" strokeWidth={2} />
              </div>
              <div>
                <p className="text-base text-[#666666] leading-snug italic">
                  &ldquo;Llevábamos años buscando un seguro que permitiese como empresa pequeña poder tener cobertura adicional.
                  Hemos encontrado asesoría confiable, con profesionales atentos y capacitados. Recomiendo RedAgrupa a ojos cerrados.&rdquo;
                </p>
                <p className="mt-3 text-sm">
                  <span className="font-semibold text-[#333333]">Marcela Lorenzo</span>
                  <span className="text-[#666666]"> — Partner CEO en JSTL</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios para Empresas — ANTES de "¿Qué es?" para tráfico Ads */}
        <section className="py-16 lg:py-24">
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

              <div className="text-center mt-10">
                <Button onClick={scrollToForm} className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3 flex items-center gap-2 mx-auto">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                  Solicitar Asesoría
                </Button>
                <p className="text-xs text-[#cc0033] font-medium mt-1.5">Cotiza gratis ahora — sin compromiso</p>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Qué es un Seguro Complementario de Salud? */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <RevealOnScroll className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 text-center">
                ¿Qué es un Seguro Complementario de Salud?
              </h2>
              <p className="text-base text-gray-700 leading-[1.1]">
                En Chile, todas las personas cuentan por ley con un sistema de salud previsional, ya sea Fonasa o
                Isapre, el cual <strong className="text-[#cc0033]">cubre solo un porcentaje del costo total</strong> de las prestaciones médicas, generando un
                copago que debe ser asumido por la persona.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                El Seguro Complementario de Salud está diseñado para <strong className="text-[#cc0033]">cubrir total o parcialmente ese copago</strong>, de
                acuerdo con los porcentajes, topes y condiciones definidos en la póliza contratada por la empresa,
                <strong className="text-[#cc0033]">reduciendo significativamente el gasto de bolsillo</strong> del trabajador.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                En la práctica, es como <strong className="text-[#cc0033]">ampliar tu cobertura de Fonasa o Isapre</strong>: consultas, exámenes, hospitalización y más quedan cubiertos con <strong className="text-[#cc0033]">menos gasto para tu equipo</strong>.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Coberturas */}
        <section className="py-16 lg:py-24">
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

        {/* Asesoría especializada */}
        <section className="py-16 lg:py-24 bg-gray-50">
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
                <Button onClick={scrollToForm} className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3 flex items-center gap-2 mx-auto">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                  Solicitar Asesoría
                </Button>
                <p className="text-xs text-[#cc0033] font-medium mt-1.5">Cotiza gratis ahora — sin compromiso</p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#cc0033] mb-2 text-center">Preguntas frecuentes</h2>
              <p className="text-gray-500 text-sm mb-6 text-center">Resolvemos tus dudas sobre seguros complementarios</p>
              <div className="space-y-3">
                {[
                  {
                    q: "¿Qué es un Seguro Complementario de Salud?",
                    a: "En Chile, todas las personas cuentan por ley con un sistema de salud previsional, ya sea Fonasa o Isapre, el cual cubre solo un porcentaje del costo total de las prestaciones médicas, generando un copago que debe ser asumido por la persona. El Seguro Complementario de Salud está diseñado para cubrir total o parcialmente ese copago, de acuerdo con los porcentajes, topes y condiciones definidos en la póliza contratada por la empresa, reduciendo significativamente el gasto de bolsillo del trabajador."
                  },
                  {
                    q: "¿Qué coberturas incluye un Seguro Complementario de Salud?",
                    a: "Las pólizas contemplan coberturas en: Vida, Hospitalización (incluyendo cirugías y estadías clínicas), Atención ambulatoria (consultas médicas, exámenes y procedimientos), Medicamentos (farmacia según receta médica) y Catastrófica (para eventos de alto costo). De forma opcional, pueden incorporar cobertura dental."
                  },
                  {
                    q: "¿Cuáles son los beneficios del Seguro Complementario de Salud para empresas?",
                    a: "Contratar un Seguro Complementario de Salud permite a las empresas: reducir el impacto financiero de gastos médicos en sus colaboradores, mejorar el bienestar y la percepción del beneficio laboral, aumentar la fidelización y retención de trabajadores, ofrecer un beneficio competitivo frente al mercado laboral, y ajustar coberturas y capitales a la realidad de la empresa."
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
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-[#cc0033]" id="formulario-contacto">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
              <RevealOnScroll className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl">
                <ContactForm
                  pagina="seguro-complementario"
                  heading="Cotiza tu seguro complementario de salud sin compromiso"
                />
              </RevealOnScroll>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">
                  Recibe información técnica y una propuesta adecuada para tu empresa
                </h2>
                <p className="text-base text-white leading-[1.1]">
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

      {/* Sticky CTA mobile — visible solo en móvil */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToForm}
            className="flex-1 bg-[#cc0033] text-white py-3 rounded-full text-sm font-medium hover:bg-[#a30029] transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
            Solicitar Asesoría Gratis
          </button>
          <a
            href="https://wa.me/56982414614"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1DA851] flex items-center justify-center shadow-lg transition-colors flex-shrink-0"
            aria-label="WhatsApp de RedAgrupa"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
      </div>
    </main>
  )
}
