"use client"

import Image from "next/image"
import Link from "next/link"
import {
  UsersIcon,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle2,
  BedDouble,
  Stethoscope,
  Siren,
  Pill,
  Smile,
  PawPrint,
  ArrowRightLeft,
  ArrowRight,
  FileCheck,
  ShieldCheck,
  Users,
  Heart,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/MobileMenu"
import DropdownBICE from "@/components/DropdownBICE"
import Footer from "@/components/Footer"
import RevealOnScroll from "@/components/RevealOnScroll"
import Breadcrumbs from "@/components/Breadcrumbs"

const BICE_URL = "https://segurocomplementariosalud.bicevida.cl/?negocio=aEd0TFolRnQjQzY17OVzwP1NaCN6_V6AdjkZ9TXI5bnYVyiV0rM"

export default function BicePersonasClient() {
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
              className="h-6 md:h-8 w-auto"
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
            <DropdownBICE />
            <Link href="/blog" className="text-white hover:text-white/80 transition-colors font-medium text-xs">
              Conocimiento Empresa
            </Link>
            <Link href="/formularios" className="text-white hover:text-white/80 transition-colors font-medium text-xs">
              Formularios
            </Link>
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 w-[180px]"
            >
              <a href={BICE_URL} target="_blank" rel="noopener noreferrer">
                Contrata Aquí
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
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
          href="https://wa.me/56982414614?text=Hola%2C%20quiero%20cotizar%20un%20seguro%20complementario%20de%20salud%20para%20mi%20empresa"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#1DA851] flex items-center justify-center shadow-lg transition-colors"
          aria-label="WhatsApp de RedAgrupa"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>

      <article className="pt-20">
        {/* Hero Section */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ label: "Seguros Salud", href: "/seguro-complementario" }, { label: "BICE Personas" }]} currentPath="/seguro-complementario-bice-personas" />
            <RevealOnScroll className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl font-bold text-[#cc0033]">
                Seguro de Salud Complementario para Personas
              </h1>
              <Image
                src="/images/logo-bice-vida.avif"
                alt="Logo BICE Vida - seguro complementario para personas"
                width={200}
                height={50}
                className="mx-auto h-14 w-auto object-contain -mt-2 mb-1"
              />
              <p className="text-base text-gray-700 leading-[1.1]">
                Complementa tu Isapre o Fonasa y reduce el copago en consultas, exámenes,
                hospitalizaciones, dental y óptico. Contratación 100% online, sin exámenes
                médicos previos.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-[#666666]">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#cc0033]" />Sin carencias</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#cc0033]" />Cobertura nacional</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#cc0033]" />Respaldo BICE Vida</span>
              </div>
              <div className="pt-4 flex justify-center">
                <Button asChild className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3 w-full sm:w-64">
                  <a href={BICE_URL} target="_blank" rel="noopener noreferrer">
                    Contrata Aquí
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Que cubre */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealOnScroll>
                <div className="text-center space-y-4 mb-16">
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666]">
                    Coberturas principales
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900">
                    ¿Que cubre este seguro de salud?
                  </h2>
                  <p className="text-base text-gray-700 max-w-3xl mx-auto leading-[1.1]">
                    Reembolsa gastos por hospitalizacion, consultas, urgencias y medicamentos
                    que tu Isapre o Fonasa no cubren del todo.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto stagger-grid">
                <div className="text-center space-y-3">
                  <BedDouble className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Hospitalizacion</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Cobertura para cirugias, estadias clinicas y procedimientos hospitalarios
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <Stethoscope className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Consultas medicas</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Atencion ambulatoria, consultas con especialistas y examenes
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <Siren className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Urgencias</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Atencion de emergencia en clinicas y hospitales
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <Pill className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Medicamentos</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Reembolso en farmacia segun receta medica
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Para quien es */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <div className="text-center space-y-4 mb-16">
                  <Users className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h2 className="text-2xl font-bold text-gray-900">
                    ¿Para quien es?
                  </h2>
                  <p className="text-base text-gray-700 leading-[1.1] max-w-3xl mx-auto">
                    Pueden acceder personas entre 18 y 64 anos, sus parejas e hijos, esten en
                    Isapre o Fonasa. Un seguro pensado para proteger a toda tu familia.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto stagger-grid">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-[#cc0033] rounded-full flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Titular</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Personas entre 18 y 64 anos
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-[#cc0033] rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Pareja</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Conyuges o convivientes
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-[#cc0033] rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Hijos</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Hijos dependientes del titular
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Como funciona el reembolso */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <div className="text-center space-y-4 mb-16">
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666]">
                    Proceso simple y transparente
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900">
                    ¿Como funciona el reembolso?
                  </h2>
                  <p className="text-base text-gray-700 leading-[1.1] max-w-3xl mx-auto">
                    En simples pasos, te devolvemos un porcentaje de lo que no cubrio tu prevision.
                    Sencillo y transparente.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto stagger-grid">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-[#cc0033] rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Atencion medica</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Acude a tu consulta, hospitalizacion o urgencia como lo haces habitualmente
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-[#cc0033] rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Envia tu solicitud</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Presenta los documentos de respaldo para solicitar el reembolso de tus gastos
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-[#cc0033] rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Recibe tu reembolso</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Te devolvemos el porcentaje correspondiente segun tu plan de forma rapida
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Planes y beneficios adicionales */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <div className="text-center space-y-4 mb-16">
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666]">
                    Desde cobertura estandar a elite
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900">
                    ¿Qué planes y beneficios adicionales ofrece?
                  </h2>
                  <p className="text-base text-gray-700 leading-[1.1] max-w-3xl mx-auto">
                    Desde cobertura estandar a elite, puedes sumar asistencia dental y veterinaria
                    segun el plan que elijas. Elige la proteccion que mejor se adapte a tu necesidad.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto stagger-grid">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#cc0033] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smile className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-1">Asistencia dental completa</h3>
                    <p className="text-sm text-gray-600 leading-snug">
                      Cobertura dental opcional para consultas, tratamientos y procedimientos
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#cc0033] rounded-lg flex items-center justify-center flex-shrink-0">
                    <PawPrint className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-1">Asistencia veterinaria para mascotas</h3>
                    <p className="text-sm text-gray-600 leading-snug">
                      Proteccion para tu mascota incluida en los planes Elite
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#cc0033] rounded-lg flex items-center justify-center flex-shrink-0">
                    <ArrowRightLeft className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-1">Reembolsos rapidos y transparentes</h3>
                    <p className="text-sm text-gray-600 leading-snug">
                      Proceso agil de devolucion sin tramites complicados
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#cc0033] rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-1">Sin tramites complicados</h3>
                    <p className="text-sm text-gray-600 leading-snug">
                      Contratacion y uso simple, sin papeleos innecesarios
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Pricing — Plan Hospitalario */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <div className="text-center space-y-4 mb-12">
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666]">
                    Plan Hospitalario BICE Vida
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900">
                    ¿Cuánto cuesta el seguro?
                  </h2>
                  <p className="text-base text-gray-700 leading-[1.1] max-w-3xl mx-auto">
                    El precio mensual depende de cuántas personas incluyas. Todos los valores incluyen IVA.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll className="overflow-x-auto">
                <table className="w-full max-w-2xl mx-auto text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#1a1a2e] text-white">
                      <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">Cargas familiares</th>
                      <th className="px-4 py-3 text-right font-semibold rounded-tr-lg">Precio mensual (<abbr title="Unidad de Fomento">UF</abbr>)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 text-gray-900 font-medium">Solo titular</td>
                      <td className="px-4 py-3 text-right text-gray-900 font-bold">UF 0,3215</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="px-4 py-3 text-gray-900 font-medium">Titular + 1 carga</td>
                      <td className="px-4 py-3 text-right text-gray-900 font-bold">UF 0,5948</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 text-gray-900 font-medium">Titular + 2 cargas</td>
                      <td className="px-4 py-3 text-right text-gray-900 font-bold">UF 0,8037</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="px-4 py-3 text-gray-900 font-medium">Titular + 3 cargas</td>
                      <td className="px-4 py-3 text-right text-gray-900 font-bold">UF 1,0610</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-900 font-medium rounded-bl-lg">Titular + 4 cargas</td>
                      <td className="px-4 py-3 text-right text-gray-900 font-bold rounded-br-lg">UF 1,2860</td>
                    </tr>
                  </tbody>
                </table>
              </RevealOnScroll>

              <div className="max-w-2xl mx-auto mt-6 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <p className="text-xs text-[#666666] uppercase tracking-wider">Cobertura</p>
                    <p className="text-lg font-bold text-[#cc0033]">50%</p>
                    <p className="text-xs text-gray-500">hospitalización</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <p className="text-xs text-[#666666] uppercase tracking-wider">Límite anual</p>
                    <p className="text-lg font-bold text-[#cc0033]">200 UF</p>
                    <p className="text-xs text-gray-500">por persona</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <p className="text-xs text-[#666666] uppercase tracking-wider">Deducible</p>
                    <p className="text-lg font-bold text-[#cc0033]">0,50 UF</p>
                    <p className="text-xs text-gray-500">por persona/año</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  Valores referenciales en UF. El precio en pesos puede variar según el valor de la UF vigente. Incluye cobertura de maternidad y ambulancia terrestre.
                </p>
              </div>

              {/* Tabla sr-only para AI crawlers */}
              <table className="sr-only" aria-label="Precios Plan Hospitalario BICE Personas">
                <thead>
                  <tr>
                    <th scope="col">Cargas familiares</th>
                    <th scope="col">Precio mensual (UF)</th>
                    <th scope="col">Cobertura hospitalaria</th>
                    <th scope="col">Límite anual</th>
                    <th scope="col">Deducible</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Solo titular</td><td>UF 0,3215</td><td>50%</td><td>200 UF</td><td>0,50 UF</td></tr>
                  <tr><td>Titular + 1 carga</td><td>UF 0,5948</td><td>50%</td><td>200 UF</td><td>0,50 UF</td></tr>
                  <tr><td>Titular + 2 cargas</td><td>UF 0,8037</td><td>50%</td><td>200 UF</td><td>0,50 UF</td></tr>
                  <tr><td>Titular + 3 cargas</td><td>UF 1,0610</td><td>50%</td><td>200 UF</td><td>0,50 UF</td></tr>
                  <tr><td>Titular + 4 cargas</td><td>UF 1,2860</td><td>50%</td><td>200 UF</td><td>0,50 UF</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <RevealOnScroll className="max-w-4xl mx-auto text-center space-y-6">
              <Image
                src="/images/logo-bice-vida.avif"
                alt="Logo BICE Vida - seguro complementario para personas"
                width={180}
                height={50}
                className="mx-auto h-10 w-auto object-contain"
              />
              <h2 className="text-2xl font-bold text-gray-900">
                Cotiza y protege tu salud hoy
              </h2>
              <p className="text-base text-gray-700 leading-[1.1] max-w-3xl mx-auto">
                Cotiza rapido y asegurate con el respaldo de BICE Vida. Da el paso a la
                tranquilidad para ti y tu familia.
              </p>
              <div className="pt-4 flex justify-center">
                <Button asChild className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3 w-full sm:w-64">
                  <a href={BICE_URL} target="_blank" rel="noopener noreferrer">
                    Contrata Aquí
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
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
                <Link href="/seguro-complementario" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#cc0033] transition-colors">Seguro Complementario Salud</h3>
                  <p className="text-sm text-gray-600 mt-2">Cubre gastos que exceden Fonasa o Isapre. +300 pymes confían en RedAgrupa.</p>
                </Link>
                <Link href="/seguro-complementario-bice-pyme" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#cc0033] transition-colors">Seguro BICE Pyme</h3>
                  <p className="text-sm text-gray-600 mt-2">Planes desde UF 0,52/trabajador/mes. Salud + Vida para tu equipo.</p>
                </Link>
                <Link href="/beneficios-redagrupa" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#cc0033] transition-colors">Beneficios Corporativos</h3>
                  <p className="text-sm text-gray-600 mt-2">Convenios de salud, bienestar y vacunación para empresas clientes.</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Preguntas Frecuentes</h2>
              <div className="divide-y divide-gray-200">
                <details className="py-4 group">
                  <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900">
                    ¿Qué cubre este seguro de salud complementario para personas?
                    <ChevronDown className="w-5 h-5 text-[#cc0033] transition-transform group-open:rotate-180 flex-shrink-0 ml-4" />
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    El Plan Hospitalario BICE Personas cubre hospitalización (cirugías, estadías clínicas, procedimientos hospitalarios), maternidad (parto normal, cesárea) y ambulancia terrestre. La cobertura es de 50% con bonificación institucional, con un límite anual de 200 UF por persona.
                  </p>
                </details>
                <details className="py-4 group">
                  <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900">
                    ¿Para quién es el seguro complementario BICE Vida Personas?
                    <ChevronDown className="w-5 h-5 text-[#cc0033] transition-transform group-open:rotate-180 flex-shrink-0 ml-4" />
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    Pueden acceder personas entre 18 y 64 años, sus parejas (cónyuges o convivientes) e hijos dependientes del titular, estén en Isapre o Fonasa. Un seguro pensado para proteger a toda tu familia.
                  </p>
                </details>
                <details className="py-4 group">
                  <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900">
                    ¿Cómo funciona el reembolso del seguro complementario?
                    <ChevronDown className="w-5 h-5 text-[#cc0033] transition-transform group-open:rotate-180 flex-shrink-0 ml-4" />
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    En 3 simples pasos: 1) Acude a tu consulta, hospitalización o urgencia como lo haces habitualmente. 2) Presenta los documentos de respaldo para solicitar el reembolso de tus gastos. 3) Te devolvemos el porcentaje correspondiente según tu plan de forma rápida.
                  </p>
                </details>
                <details className="py-4 group">
                  <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900">
                    ¿Cuánto cuesta el seguro BICE Personas?
                    <ChevronDown className="w-5 h-5 text-[#cc0033] transition-transform group-open:rotate-180 flex-shrink-0 ml-4" />
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    El Plan Hospitalario tiene precios mensuales en UF según las cargas familiares: solo titular UF 0,3215, titular + 1 carga UF 0,5948, titular + 2 cargas UF 0,8037, titular + 3 cargas UF 1,0610, titular + 4 cargas UF 1,2860. Todos los valores incluyen IVA.
                  </p>
                </details>
                <details className="py-4 group">
                  <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900">
                    ¿Tiene período de carencia?
                    <ChevronDown className="w-5 h-5 text-[#cc0033] transition-transform group-open:rotate-180 flex-shrink-0 ml-4" />
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    No, el seguro BICE Personas no tiene período de carencia. La cobertura comienza desde el primer día de vigencia de la póliza.
                  </p>
                </details>
                <details className="py-4 group">
                  <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900">
                    ¿Cubre atención ambulatoria?
                    <ChevronDown className="w-5 h-5 text-[#cc0033] transition-transform group-open:rotate-180 flex-shrink-0 ml-4" />
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    El Plan Hospitalario cubre exclusivamente hospitalización, maternidad y ambulancia terrestre. Para cobertura ambulatoria (consultas, exámenes, medicamentos), existen los planes colectivos para empresas desde 5 trabajadores a través de RedAgrupa.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </article>
    </main>
  )
}
