"use client"

import Image from "next/image"
import Link from "next/link"
import {
  UsersIcon,
  Smile,
  Heart,
  Shield,
  Building2,
  Users,
  TrendingUp,
  HandshakeIcon,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Lock,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/MobileMenu"

export default function NosotrosClient() {
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
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl font-bold text-[#cc0033]">
                Seguros Complementarios de Salud para Pequeñas Empresas
              </h1>
              <p className="text-base text-gray-700 leading-[1.1]">
                RedAgrupa es una compañía experta en asesorar, guiar y otorgar el mejor servicio de salud a la hora de
                contratar un seguro complementario de salud para los colaboradores y familiares de pequeñas empresas.
              </p>
              <p className="text-base text-gray-700 leading-[1.1] mt-4">
                La misión es lograr que los clientes puedan contar con el seguro complementario de salud para empresas
                que mejor se ajuste a las necesidades. Además de entregarles la mejor atención para gestionarlo en el
                momento que lo necesiten.
              </p>
              <div className="pt-4">
                <Button
                  onClick={() => {
                    document.getElementById("formulario-contacto")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3"
                >
                  Solicitar Asesoría
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#cc0033] py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-white space-y-6">
                <p className="text-base leading-[1.1] italic">
                  "Hace 10 años quisimos apoyar a las micro y pequeñas empresas, como un soporte fundamental y
                  transversal en sus negocios, esta es nuestra misión y sueño cumplido. Como especialistas en Seguros
                  Complementarios de Salud, confíen en nuestra experiencia y trayectoria de tal forma que ustedes,
                  nuestros clientes, puedan fortalecer los lazos con sus trabajadores y promuevan el crecimiento y la
                  sustentabilidad de sus negocios."
                </p>
                <footer className="text-white/90">
                  <div className="font-bold text-base">Cristóbal Winter</div>
                  <div className="text-white/80 text-base">Socio Fundador y Gerente General de RedAgrupa</div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center space-y-3">
                <TrendingUp className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                <div className="text-4xl font-bold text-[#cc0033]">+10</div>
                <div className="text-base text-gray-700 font-medium">Años de experiencia</div>
                <div className="text-base text-gray-600 leading-[1.1]">Enfocados en las necesidades de las pymes</div>
              </div>
              <div className="text-center space-y-3">
                <Building2 className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                <div className="text-4xl font-bold text-[#cc0033]">+300</div>
                <div className="text-base text-gray-700 font-medium">Empresas</div>
                <div className="text-base text-gray-600 leading-[1.1]">
                  Que confían en nuestro equipo de profesionales
                </div>
              </div>
              <div className="text-center space-y-3">
                <Users className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                <div className="text-4xl font-bold text-[#cc0033]">+9,000</div>
                <div className="text-base text-gray-700 font-medium">Familias</div>
                <div className="text-base text-gray-600 leading-[1.1]">Cubiertas en Chile y el extranjero</div>
              </div>
              <div className="text-center space-y-3">
                <HandshakeIcon className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                <div className="text-4xl font-bold text-[#cc0033]">+1,400</div>
                <div className="text-base text-gray-700 font-medium">Alianzas</div>
                <div className="text-base text-gray-600 leading-[1.1]">Conforman nuestra red de convenios</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">Seguro Complementario de Salud para Empresas</h2>
                <p className="text-base text-gray-700 max-w-3xl mx-auto leading-[1.1]">
                  RedAgrupa facilita el encontrar la mejor cobertura de seguro complementario de salud para la pequeña y
                  mediana empresa. Simplifica la gestión de cada procedimiento de sus clientes respecto a sus reembolsos
                  de atenciones médicas.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <Smile className="w-12 h-12 text-[#cc0033]" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-gray-900">Seguro Dental</h3>
                  <p className="text-base text-gray-700 leading-[1.1]">
                    El seguro complementario dental permite a los asegurados y sus familiares disponer de una ayuda
                    adicional para tratamientos y atenciones dentales. Generando consigo una mejor calidad de vida.
                  </p>
                </div>

                <div className="space-y-4">
                  <Heart className="w-12 h-12 text-[#cc0033]" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-gray-900">Seguro Médico</h3>
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Cuando los colaboradores cuentan con un seguro médico complementario, pueden sentirse tranquilos al
                    saber que disponen de una cobertura ante enfermedades, tratamientos médicos y hospitalizaciones.
                  </p>
                </div>

                <div className="space-y-4">
                  <Shield className="w-12 h-12 text-[#cc0033]" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-gray-900">Seguro Complementario</h3>
                  <p className="text-base text-gray-700 leading-[1.1]">
                    El seguro de salud complementario es la mejor manera de extender una red de ayuda a los empleados de
                    pequeñas empresas, en las atenciones médicas ambulatorias, hospitalizaciones y medicamentos
                    recetados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">Conoce un Ejemplo de Seguros Complementarios</h2>
              </div>
              <div className="space-y-6">
                <p className="text-base text-gray-700 leading-[1.1]">
                  En general, la mejor forma de explicar cómo funciona un seguro complementario de salud para empresas
                  es utilizando un ejemplo práctico.
                </p>
                <div className="border-l-4 border-[#cc0033] pl-6 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Caso: Pyme de Outsourcing</h3>
                  <p className="text-base text-gray-700 leading-[1.1]">
                    Gerente de una pyme de 7 personas donde el rubro es el outsourcing de encuestas telefónicas.
                  </p>
                  <p className="text-base text-gray-700 leading-[1.1]">
                    <strong className="text-[#cc0033]">Solución:</strong> El seguro complementario más pertinente sería
                    una cobertura para consultas médicas y tratamientos, considerando una actividad más bien sedentaria,
                    ya que esto se adapta más a las condiciones y acciones del empleado según su función.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                <h2 className="text-4xl font-bold text-white">Contrata tu Seguro Complementario con RedAgrupa</h2>
                <p className="text-base text-white/90 leading-[1.1]">
                  En RedAgrupa te ayudamos a elegir y contratar el seguro complementario que más se adapte a las
                  necesidades de tu empresa. Nos encargamos de todo el proceso, desde la cotización hasta la
                  implementación, para que tú y tu equipo puedan enfocarse en lo que realmente importa.
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
