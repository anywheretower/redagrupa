"use client"

import Image from "next/image"
import Link from "next/link"
import {
  UsersIcon,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Lock,
  ChevronDown,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Mail,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/MobileMenu"
import Footer from "@/components/Footer"

const planes = [
  {
    nombre: "Pyme Estandar",
    etiqueta: "Mas economico",
    etiquetaColor: "bg-gray-100 text-gray-700",
    precioCLP: "$20.647",
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
    precioCLP: "$26.658",
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
    precioCLP: "$41.651",
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
    precioCLP: "$48.401",
    precioUF: "UF 1,1290",
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
    <main className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#cc0033] text-white shadow-md">
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
              Agendar orientacion
            </Button>
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
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
      </div>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl font-bold text-[#cc0033]">
                Seguro Complementario BICE Pyme
              </h1>
              <Image
                src="/images/logo-bice-vida.avif"
                alt="BICE Vida"
                width={320}
                height={80}
                className="mx-auto h-20 w-auto object-contain"
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
                <Button asChild className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3">
                  <a href={CONTRATA_URL} target="_blank" rel="noopener noreferrer">
                    Contrata Aqui
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Planes */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666]">
                  Seguro de Salud + Seguro de Vida
                </p>
                <h2 className="text-2xl font-bold text-gray-900">
                  Planes BICE Vida para Pymes
                </h2>
                <p className="text-base text-gray-700 max-w-3xl mx-auto leading-[1.1]">
                  Elige el plan que mejor se adapte a las necesidades de tu empresa y tus
                  trabajadores. Todos los precios son mensuales por trabajador, con IVA incluido.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {planes.map((plan) => (
                  <div
                    key={plan.nombre}
                    className={`rounded-2xl p-6 flex flex-col justify-between ${
                      plan.destacado
                        ? "bg-[#1a1a2e] text-white shadow-2xl"
                        : "bg-white border border-gray-200 shadow-sm"
                    }`}
                  >
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
                          plan.destacado ? "text-white/70" : "text-gray-500"
                        }`}
                      >
                        Seguro de Salud + Seguro de Vida
                      </p>

                      <p
                        className={`text-xs mb-1 ${
                          plan.destacado ? "text-white/70" : "text-gray-500"
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
                            plan.destacado ? "text-white/60" : "text-gray-400"
                          }`}
                        >
                          / {plan.precioUF}
                        </span>
                      </div>
                      <p
                        className={`text-xs mb-6 ${
                          plan.destacado ? "text-white/70" : "text-gray-500"
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
                          plan.destacado ? "text-white/70" : "text-gray-500"
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
                              plan.destacado ? "text-white/70" : "text-gray-500"
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
                      Contrata Aqui
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-500 text-center mt-8">
                Precios de planes con IVA incluido. Valor UF: $39.705,63 al 13/02/2026.
              </p>
            </div>
          </div>
        </section>

        {/* Por qué elegir BICE Vida */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                ¿Por que elegir un seguro BICE Vida para tu pyme?
              </h2>
              <p className="text-base text-gray-700 leading-[1.1] text-center mb-12">
                BICE Vida es una de las aseguradoras mas reconocidas de Chile, respaldada por el
                grupo financiero BICE. Contratar un seguro complementario con BICE Vida permite:
              </p>

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
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Image
                src="/images/logo-bice-vida.avif"
                alt="BICE Vida"
                width={180}
                height={50}
                className="mx-auto h-10 w-auto object-contain"
              />
              <h2 className="text-2xl font-bold text-gray-900">
                Contrata tu seguro complementario BICE Pyme
              </h2>
              <p className="text-base text-gray-700 leading-[1.1] max-w-3xl mx-auto">
                Ingresa a la plataforma Mi Pyme Segura de BICE Vida y cotiza el plan ideal
                para tu empresa. Proceso 100% online, rapido y sin papeleos.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3">
                  <a href={CONTRATA_URL} target="_blank" rel="noopener noreferrer">
                    Contrata Aqui
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#cc0033] text-[#cc0033] hover:bg-red-50 px-8 py-3"
                  onClick={scrollToForm}
                >
                  Necesito asesoria
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-[#cc0033]" id="formulario-contacto">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl">
                <h2 className="text-xl lg:text-2xl font-bold text-[#333333] text-center mb-6 leading-snug">
                  Tranquilo, sabemos como hacer simples los seguros complementarios, ¡Conversemos!
                </h2>

                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre Completo"
                      className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#cc0033]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#cc0033]"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Telefono"
                        className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#cc0033]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Nombre Empresa"
                        className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#cc0033]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Rubro"
                        className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#cc0033]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="number"
                        placeholder="Cantidad de Empleados"
                        className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#cc0033]"
                      />
                    </div>
                    <div className="relative">
                      <select className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#cc0033]">
                        <option value="">Motivo</option>
                        <option value="cotizacion">Cotizacion</option>
                        <option value="consulta">Consulta</option>
                        <option value="informacion">Mas informacion</option>
                        <option value="otro">Otro</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cc0033] pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <textarea
                      placeholder="Mensaje"
                      rows={4}
                      className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-sm text-gray-900 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-[#cc0033]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#cc0033] text-white py-3 rounded-full text-sm font-medium hover:bg-[#b30029] transition-colors shadow-lg"
                  >
                    Enviar Mensaje
                  </button>

                  <p className="text-xs text-center text-gray-600 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" />
                    Tus datos estan 100% protegidos.{" "}
                    <a href="/politicas-de-privacidad" className="text-[#cc0033] underline hover:no-underline">
                      Ver politicas
                    </a>
                  </p>
                </form>
              </div>

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
      </div>
    </main>
  )
}
