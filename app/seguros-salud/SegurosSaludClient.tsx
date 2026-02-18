"use client"

import Image from "next/image"
import Link from "next/link"
import {
  UsersIcon,
  Facebook,
  Instagram,
  Linkedin,
  Lock,
  ChevronDown,
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
import RevealOnScroll from "@/components/RevealOnScroll"
import { motion } from "motion/react"
import { staggerContainer, staggerItem } from "@/lib/animations"

export default function SegurosSaludClient() {
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
              Agendar orientación
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
      </div>

      <div>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] lg:min-h-[70vh] flex items-center pt-20">
          <Image
            src="/seguros-salud-hero.jpg"
            alt="Familia protegida con seguro complementario de salud"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-[1] hidden lg:block" style={{ background: "linear-gradient(to right, white 0%, white 25%, transparent 60%)" }} />
          <div className="container mx-auto px-4 relative z-10 hidden lg:block">
            <RevealOnScroll className="max-w-4xl ml-8 lg:ml-16 space-y-3">
              <h1 className="text-4xl font-bold text-[#cc0033] drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">Seguro Complementario<br />de Salud</h1>
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
              <motion.div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                <motion.div variants={staggerItem} className="text-center space-y-3">
                  <Heart className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Vida</h3>
                </motion.div>
                <motion.div variants={staggerItem} className="text-center space-y-3">
                  <BedDouble className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Hospitalización</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Incluyendo cirugías y estadías clínicas
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="text-center space-y-3">
                  <Stethoscope className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Atención ambulatoria</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Consultas médicas, exámenes y procedimientos
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="text-center space-y-3">
                  <Pill className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Medicamentos</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Farmacia según receta médica
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="text-center space-y-3">
                  <ShieldAlert className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Catastrófica</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Para eventos de alto costo
                  </p>
                </motion.div>
              </motion.div>

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
                    Reducir el impacto financiero de gastos médicos en sus colaboradores
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Mejorar el bienestar y la percepción del beneficio laboral
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Aumentar la fidelización y retención de trabajadores
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Ofrecer un beneficio competitivo frente al mercado laboral
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Ajustar coberturas y capitales a la realidad de la empresa
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
                  Recibe una propuesta para tu empresa
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
                <h2 className="text-xl lg:text-2xl font-bold text-[#333333] text-center mb-6 leading-snug">
                  Tranquilo, sabemos cómo hacer simples los seguros complementarios, ¡Conversemos!
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
                        placeholder="Teléfono"
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
                        <option value="cotizacion">Cotización</option>
                        <option value="consulta">Consulta</option>
                        <option value="informacion">Más información</option>
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
                    Tus datos están 100% protegidos.{" "}
                    <a href="/politicas-de-privacidad" className="text-[#cc0033] underline hover:no-underline">
                      Ver políticas
                    </a>
                  </p>
                </form>
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
      </div>
    </main>
  )
}
