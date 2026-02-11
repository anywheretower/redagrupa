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
  Stethoscope,
  Smile,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/MobileMenu"

export default function SegurosSaludClient() {
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
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/nosotros" className="text-white font-medium text-sm">
              Nosotros
            </Link>
            <Link href="/seguros-salud" className="text-white font-medium text-sm">
              Seguros de Salud
            </Link>
          </nav>
          {/* Desktop Buttons - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-[180px]">
              Agendar orientación
            </Button>
            {/* Updated CRM button to open dashboard in new tab */}
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
      </header>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
        >
          <Facebook className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
        >
          <Instagram className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a
          href="https://linkedin.com"
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
              <h1 className="text-4xl font-bold text-[#cc0033]">Seguro de Salud Fonasa e Isapre</h1>
              <p className="text-base text-gray-700 leading-[1.1]">
                Cuando los trabajadores cuentan con Seguros de Salud Fonasa o Isapre, están mejor protegidos contra
                eventos y situaciones médicas inesperadas. Pueden disponer de una ayuda financiera adicional a las
                necesidades individuales.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                Cada aseguradora presenta una oferta buscando ajustarse mejor a las necesidades de cada persona,
                entregándoles una mayor cobertura en atenciones dentales, médicas, ambulatorias y urgencias, basadas en
                una póliza.
              </p>
              <div className="pt-4">
                <Button onClick={scrollToForm} className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3">
                  Solicitar Asesoría
                </Button>
              </div>
            </div>

            {/* Marquee */}
            <div className="relative overflow-hidden mt-16 py-4">
              <div
                className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(to right, white, transparent)",
                }}
              />
              <div
                className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(to left, white, transparent)",
                }}
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

        {/* Tipos de Seguros Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Tipos de Seguros de Salud Fonasa o Isapre
              </h2>
              <p className="text-base text-gray-700 mb-16 leading-[1.1] text-center max-w-4xl mx-auto">
                Existen diferentes tipos de seguros de salud Fonasa o Isapre, dependiendo tanto de cada aseguradora,
                como también de las necesidades específicas de cada afiliado. Lo que permite una mayor flexibilidad al
                momento de seleccionar la mejor cobertura en casos de eventos inesperados.
              </p>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center space-y-4">
                  <Smile className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-gray-900">Seguro de Salud Dental</h3>
                  <p className="text-base text-gray-700 leading-[1.1]">
                    El seguro complementario dental permite a los asegurados realizarse tratamientos y atenciones
                    dentales de urgencia. Ortodoncia, periodoncia y otros tratamientos son cubiertos, considerando los
                    altos costos, implica un reembolso adicional y ahorro para tus colaboradores.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <Stethoscope className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-gray-900">Seguro de Salud Médico</h3>
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Quienes disponen de un seguro médico complementario están un paso adelante, con amplia cobertura
                    frente a enfermedades y tratamientos médicos, incluyendo medicamentos recetados. Las empresas pueden
                    contratar seguros colectivos, proporcionando tranquilidad a colaboradores y familias.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <Heart className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-gray-900">Seguro de Salud Complementario</h3>
                  <p className="text-base text-gray-700 leading-[1.1]">
                    El seguro complementario de salud puede estar enfocado en posibles gastos por accidentes
                    catastróficos, mientras que un seguro médico complementario puede estar enfocado en cubrir
                    tratamientos médicos específicos, como un seguro médico oncológico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cobertura y Beneficios Section */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 text-center">¿Qué necesita tu empresa?</h2>
              <p className="text-base text-gray-700 leading-[1.1]">
                Los seguros complementarios de salud ofrecen diversas alternativas en sus coberturas. Conocer la
                relación entre los riesgos de la actividad laboral como empresa y las necesidades de sus colaboradores
                es la mejor manera para seleccionar seguros de salud.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                Cada aseguradora dispone de una diversa oferta de seguros de vida y salud, y cada una cuenta con sus
                propios convenios, redes de atención e incluso reembolsos automáticos, como la aplicación de descuentos
                a medicamentos en algunas redes de farmacias.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                RedAgrupa tiene alianzas con las mejores aseguradoras del país. Además, cuenta con una atención
                personalizada que garantiza la mejor cobertura en seguros de salud para los empleados y sus familias.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-[#cc0033]" id="formulario-contacto">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
              {/* Left: Contact Form */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl">
                <h2 className="text-xl lg:text-2xl font-bold text-[#333333] text-center mb-6 leading-snug">
                  Tranquilo, sabemos cómo hacer simples los seguros complementarios, ¡Conversemos!
                </h2>

                <form className="space-y-4">
                  {/* Nombre completo - Full width */}
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre Completo"
                      className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#cc0033]"
                    />
                  </div>

                  {/* Email and Phone - Two columns */}
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

                  {/* Company Name and Industry - Two columns */}
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

                  {/* Number of Employees and Reason - Two columns */}
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

                  {/* Message - Full width */}
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
                    <a href="#" className="text-[#cc0033] underline hover:no-underline">
                      Ver políticas
                    </a>
                  </p>
                </form>
              </div>

              {/* Right: CTA Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">
                  Cotiza la mejor cobertura en seguros de salud para tus colaboradores
                </h2>
                <p className="text-base text-white/90 leading-[1.1]">
                  RedAgrupa destaca por ofrecer la mejor asesoría en materia de pólizas de seguros médicos
                  complementarios, adaptando el plan de acuerdo a las exigencias de las pequeñas empresas en materia de
                  salud.
                </p>
                <p className="text-base text-white/90 leading-[1.1]">
                  Las alianzas con las mejores aseguradoras de salud del país permiten que RedAgrupa pueda enfocarse en
                  apoyar y beneficiar al asegurado. Contactar a los especialistas de RedAgrupa es muy rápido y fácil,
                  siempre están a disposición para resolver cualquier requerimiento.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#cc0033] text-white py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
              <div className="flex items-center justify-center md:justify-start">
                <Image
                  src="/images/logo-20redagrupa-3.png"
                  alt="RedAgrupa"
                  width={160}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div></div>
              <div></div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">Los Militares 5620, of 1011, Las Condes, Santiago, Chile.</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V14a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">Casilla de Reembolsos</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V14a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">+56 (22) 813 2245</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
