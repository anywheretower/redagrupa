"use client"

import Image from "next/image"
import Link from "next/link"
import {
  UsersIcon,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
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

const planes = [
  {
    nombre: "Pyme Estandar",
    etiqueta: "Mas economico",
    etiquetaColor: "bg-gray-100 text-gray-700",
    precioCLP: "$20.718",
    precioUF: "UF 0,5200",
    coberturas: [
      { bold: "50%", texto: "en atencion ambulatoria" },
      { bold: "50%", texto: "en atencion hospitalaria" },
      { bold: "300 UF", texto: "tope anual en salud" },
      { bold: "500 UF", texto: "en seguro de vida" },
    ],
    asistencia: false,
    destacado: false,
  },
  {
    nombre: "Pyme Premium",
    etiqueta: "Mas vendido",
    etiquetaColor: "bg-yellow-100 text-yellow-800",
    precioCLP: "$26.750",
    precioUF: "UF 0,6714",
    coberturas: [
      { bold: "70%", texto: "en atencion ambulatoria" },
      { bold: "70%", texto: "en atencion hospitalaria" },
      { bold: "300 UF", texto: "tope anual en salud" },
      { bold: "500 UF", texto: "en seguro de vida" },
    ],
    asistencia: false,
    destacado: false,
  },
  {
    nombre: "Pyme Elite",
    etiqueta: "Mayor cobertura",
    etiquetaColor: "bg-blue-100 text-blue-800",
    precioCLP: "$41.794",
    precioUF: "UF 1,0490",
    coberturas: [
      { bold: "80%", texto: "en atencion ambulatoria" },
      { bold: "80%", texto: "en atencion hospitalaria" },
      { bold: "UF 500", texto: "tope anual en salud" },
      { bold: "UF 500", texto: "en seguro de vida" },
    ],
    asistencia: true,
    destacado: false,
  },
  {
    nombre: "Pyme Elite Plus",
    etiqueta: "Mayor cobertura vida",
    etiquetaColor: "bg-[#cc0033] text-white",
    precioCLP: "$48.567",
    precioUF: "UF 1,2190",
    coberturas: [
      { bold: "80%", texto: "en atencion ambulatoria" },
      { bold: "80%", texto: "en atencion hospitalaria" },
      { bold: "UF 500", texto: "tope anual en salud" },
      { bold: "UF 1.000", texto: "en seguro de vida" },
    ],
    asistencia: true,
    destacado: true,
  },
]

const CONTRATA_URL =
  "https://mipymesegura.bicevida.cl/cotizacion/numero-trabajadores?negocio=cjw"

export default function BicePymeClient() {
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
          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-8">
            <Link href="/nosotros" className="text-white font-medium text-sm">
              Nosotros
            </Link>
            <Link href="/seguro-complementario" className="text-white font-medium text-sm">
              Seguro Complementario Salud
            </Link>
            <Link href="/beneficios-redagrupa" className="text-white font-medium text-sm">
              Beneficios RedAgrupa
            </Link>
            <div className="relative group">
              <button
                aria-haspopup="true"
                aria-expanded="false"
                className="text-white font-medium text-sm flex items-center gap-1"
              >
                Seguro BICE
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg py-2 min-w-[200px]" role="menu">
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

      <article className="pt-20">
        {/* Hero Section */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ label: "Seguros Salud", href: "/seguro-complementario" }, { label: "BICE Pyme" }]} />
            <RevealOnScroll className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl font-bold text-[#cc0033]">
                Seguro Complementario BICE Pyme
              </h1>
              <Image
                src="/images/logo-bice-vida.avif"
                alt="Logo BICE Vida - seguro complementario para pymes"
                width={200}
                height={50}
                className="mx-auto h-14 w-auto object-contain -mt-2 mb-1"
              />
              <p className="text-base text-gray-700 leading-[1.1]">
                BICE Vida ofrece planes de seguro complementario de salud especialmente
                disenados para pymes, combinando Seguro de Salud + Seguro de Vida en una
                sola poliza. Protege a tu equipo con coberturas ambulatorias, hospitalarias
                y de vida, con precios accesibles desde UF 0,52 mensual por trabajador.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                Todos los planes incluyen cobertura ambulatoria, hospitalaria y seguro de vida,
                con la posibilidad de agregar coberturas opcionales dental y catastrofica.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3 w-full sm:w-64">
                  <a href={CONTRATA_URL} target="_blank" rel="noopener noreferrer">
                    Contrata Aquí
                  </a>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Planes */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealOnScroll>
                <div className="text-center space-y-4 mb-16">
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666]">
                    Seguro de Salud + Seguro de Vida
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900">
                    ¿Qué planes BICE Vida existen para pymes?
                  </h2>
                  <p className="text-base text-gray-700 max-w-3xl mx-auto leading-[1.1]">
                    Elige el plan que mejor se adapte a las necesidades de tu empresa y tus
                    trabajadores. Todos los precios son mensuales por trabajador, con IVA incluido.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-grid">
                {planes.map((plan) => (
                  <div
                    key={plan.nombre}
                    className={`rounded-2xl p-6 flex flex-col justify-between relative ${
                      plan.destacado
                        ? "bg-[#1a1a2e] text-white shadow-2xl"
                        : plan.nombre === "Pyme Premium"
                        ? "bg-white border-2 border-[#cc0033] shadow-lg"
                        : "bg-white border border-gray-200 shadow-sm"
                    }`}
                  >
                    {plan.nombre === "Pyme Premium" && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#cc0033] text-white text-xs font-semibold px-4 py-1 rounded-full">
                        Recomendado
                      </span>
                    )}
                    <div>
                      <span
                        className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 ${plan.etiquetaColor}`}
                      >
                        {plan.etiqueta}
                      </span>
                      <h3
                        className={`text-xl font-bold mb-1 ${
                          plan.destacado ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {plan.nombre}
                      </h3>
                      <p
                        className={`text-sm mb-4 ${
                          plan.destacado ? "text-white/90" : "text-gray-500"
                        }`}
                      >
                        Seguro de Salud + Seguro de Vida
                      </p>

                      <p
                        className={`text-xs mb-1 ${
                          plan.destacado ? "text-white/90" : "text-gray-500"
                        }`}
                      >
                        Desde
                      </p>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span
                          className={`text-3xl font-bold ${
                            plan.destacado ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {plan.precioCLP}
                        </span>
                        <span
                          className={`text-sm ${
                            plan.destacado ? "text-white/90" : "text-gray-400"
                          }`}
                        >
                          / {plan.precioUF}
                        </span>
                      </div>
                      <p
                        className={`text-xs mb-6 ${
                          plan.destacado ? "text-white/90" : "text-gray-500"
                        }`}
                      >
                        Mensual por trabajador
                      </p>

                      <p
                        className={`text-sm font-semibold mb-3 ${
                          plan.destacado ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Coberturas incluidas:
                      </p>
                      <div className="space-y-2.5 mb-6">
                        {plan.coberturas.map((cob, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2
                              className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                plan.destacado ? "text-green-400" : "text-green-500"
                              }`}
                              strokeWidth={2}
                            />
                            <p
                              className={`text-sm leading-snug ${
                                plan.destacado ? "text-white/90" : "text-gray-700"
                              }`}
                            >
                              <strong>{cob.bold}</strong> {cob.texto}
                            </p>
                          </div>
                        ))}
                      </div>

                      <p
                        className={`text-sm font-semibold mb-2 ${
                          plan.destacado ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Coberturas opcionales
                      </p>
                      <p
                        className={`text-sm leading-snug mb-6 ${
                          plan.destacado ? "text-white/90" : "text-gray-500"
                        }`}
                      >
                        Puedes incluir en el plan Coberturas Dental y Catastrofica.
                      </p>

                      {plan.asistencia && (
                        <div className="mb-6">
                          <p
                            className={`text-sm font-semibold mb-2 ${
                              plan.destacado ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Asistencias con este plan
                          </p>
                          <p
                            className={`text-sm leading-snug ${
                              plan.destacado ? "text-white/90" : "text-gray-500"
                            }`}
                          >
                            Asistencia medica para tu mascota con <strong>Pawer.</strong>
                          </p>
                        </div>
                      )}
                    </div>

                    <a
                      href={CONTRATA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold transition-colors ${
                        plan.destacado
                          ? "text-[#cc0033] bg-white hover:bg-gray-100"
                          : "text-[#cc0033] hover:bg-red-50"
                      }`}
                    >
                      Contrata Aquí
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </RevealOnScroll>

              {/* Tabla comparativa para AI crawlers y screen readers */}
              <table className="sr-only" aria-label="Comparación de planes BICE Vida para pymes">
                <caption>Planes de Seguro Complementario BICE Vida para Pymes — Precios mensuales por trabajador con IVA incluido</caption>
                <thead>
                  <tr>
                    <th scope="col">Plan</th>
                    <th scope="col">Precio mensual (CLP)</th>
                    <th scope="col">Precio mensual (UF)</th>
                    <th scope="col">Cobertura ambulatoria</th>
                    <th scope="col">Cobertura hospitalaria</th>
                    <th scope="col">Tope anual salud</th>
                    <th scope="col">Seguro de vida</th>
                    <th scope="col">Asistencia mascota</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Pyme Estándar</td><td>$20.718</td><td>UF 0,5200</td><td>50%</td><td>50%</td><td>300 UF</td><td>500 UF</td><td>No</td></tr>
                  <tr><td>Pyme Premium</td><td>$26.750</td><td>UF 0,6714</td><td>70%</td><td>70%</td><td>300 UF</td><td>500 UF</td><td>No</td></tr>
                  <tr><td>Pyme Elite</td><td>$41.794</td><td>UF 1,0490</td><td>80%</td><td>80%</td><td>500 UF</td><td>500 UF</td><td>Sí (Pawer)</td></tr>
                  <tr><td>Pyme Elite Plus</td><td>$48.567</td><td>UF 1,2190</td><td>80%</td><td>80%</td><td>500 UF</td><td>1.000 UF</td><td>Sí (Pawer)</td></tr>
                </tbody>
              </table>

              <p className="text-sm text-gray-500 text-center mt-8">
                Precios de planes con IVA incluido. Valores referenciales en UF. El precio en pesos puede variar según el valor de la UF vigente.
              </p>
              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
                <span className="font-semibold text-[#cc0033]">+300 empresas</span> confían en RedAgrupa
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline">+10 años de experiencia</span>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué elegir BICE Vida */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  ¿Por que elegir un seguro BICE Vida para tu pyme?
                </h2>
                <p className="text-base text-gray-700 leading-[1.1] text-center mb-12">
                  BICE Vida es una de las aseguradoras mas reconocidas de Chile, respaldada por el
                  grupo financiero BICE. Contratar un seguro complementario con BICE Vida permite:
                </p>
              </RevealOnScroll>

              <RevealOnScroll>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Proteger a tus trabajadores con coberturas ambulatorias y hospitalarias desde el primer dia
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Incluir seguro de vida para mayor tranquilidad del equipo y sus familias
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Agregar coberturas opcionales como dental y catastrofica segun las necesidades
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Contratar 100% online a traves de la plataforma Mi Pyme Segura de BICE Vida
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Ofrecer un beneficio competitivo que mejora la retencion de talento
                  </p>
                </div>
              </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Image
                src="/images/logo-bice-vida.avif"
                alt="Logo BICE Vida - seguro complementario para pymes"
                width={180}
                height={50}
                className="mx-auto h-10 w-auto object-contain"
              />
              <h2 className="text-2xl font-bold text-gray-900">
                ¿Cómo contratar tu seguro complementario BICE Pyme?
              </h2>
              <p className="text-base text-gray-700 leading-[1.1] max-w-3xl mx-auto">
                Ingresa a la plataforma Mi Pyme Segura de BICE Vida y cotiza el plan ideal
                para tu empresa. Proceso 100% online, rapido y sin papeleos.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3 w-full sm:w-64">
                  <a href={CONTRATA_URL} target="_blank" rel="noopener noreferrer">
                    Contrata Aquí
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#cc0033] text-[#cc0033] hover:bg-red-50 px-8 py-3 w-full sm:w-64"
                  onClick={scrollToForm}
                >
                  Solicitar Asesoría
                </Button>
              </div>
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

        {/* Preguntas Frecuentes */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <RevealOnScroll>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  Preguntas frecuentes sobre BICE Pyme
                </h2>
                <p className="text-gray-500 text-sm text-center mb-8">
                  Resolvemos tus dudas sobre los planes de seguro complementario BICE Vida para pymes
                </p>
              </RevealOnScroll>
              <div className="space-y-3">
                {[
                  {
                    q: "¿Cuánto cuesta el seguro complementario BICE Vida para pymes?",
                    a: "BICE Vida ofrece 4 planes para pymes: Estándar desde $20.718/mes por trabajador (50% cobertura), Plus desde $26.750/mes (70%), Elite desde $41.794/mes (80%) y Elite Plus desde $48.567/mes (80% + mayor seguro de vida). Todos incluyen seguro de salud y seguro de vida."
                  },
                  {
                    q: "¿Cuántos trabajadores necesita mi pyme para contratar BICE Vida?",
                    a: "Con BICE Vida puedes contratar desde 5 trabajadores a través de la plataforma Mi Pyme Segura. El proceso es 100% online y no requiere exámenes médicos previos. Para empresas con menos de 5 personas, existen opciones individuales como el seguro BICE Personas."
                  },
                  {
                    q: "¿Qué coberturas incluyen los planes BICE Pyme?",
                    a: "Todos los planes incluyen cobertura ambulatoria (consultas, exámenes, medicamentos), hospitalaria y seguro de vida. Los planes Elite y Elite Plus agregan beneficios adicionales como asistencia mascota Pawer. Opcionalmente puedes sumar cobertura dental y catastrófica."
                  },
                  {
                    q: "¿Cómo se hacen los reembolsos del seguro BICE Vida?",
                    a: "Los reembolsos se gestionan a través de RedAgrupa: tus colaboradores envían sus boletas y documentos, y nosotros tramitamos directamente con BICE Vida. El reembolso se deposita en la cuenta del trabajador. Con RedAgrupa el proceso es más rápido y sin papeleo."
                  },
                  {
                    q: "¿Los planes BICE Pyme cubren cargas familiares?",
                    a: "Sí, los planes BICE Vida para pymes permiten incluir cargas familiares (cónyuge e hijos). La prima adicional por carga depende del plan elegido. Es uno de los beneficios más valorados por los trabajadores, ya que protege a toda la familia."
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
                  pagina="bice-pyme"
                  heading="Tranquilo, sabemos cómo hacer simples los seguros complementarios, ¡Conversemos!"
                />
              </RevealOnScroll>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">
                  ¿Necesitas ayuda para elegir el plan BICE Vida ideal para tu pyme?
                </h2>
                <p className="text-base text-white/90 leading-[1.1]">
                  Nuestro equipo de asesores te orienta sin costo para que elijas la
                  cobertura que mejor se adapte a tu empresa y tu presupuesto.
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
