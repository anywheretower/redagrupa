"use client"

import Image from "next/image"
import Link from "next/link"
import {
  UsersIcon,
  Building2,
  Users,
  TrendingUp,
  HandshakeIcon,
  Facebook,
  Instagram,
  Linkedin,
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

export default function NosotrosClient() {
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
          {/* Desktop Navigation - Hidden on mobile */}
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
          {/* Desktop Buttons - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 w-[180px]"
              onClick={() => {
                document.getElementById("formulario-contacto")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Solicitar Asesoría
            </Button>
            {/* Updated CRM button to open dashboard in new tab */}
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="/contactos">
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

      <div className="pt-20">
        <section className="py-32">
          <div className="container mx-auto px-4">
            <RevealOnScroll className="max-w-4xl mx-auto text-center space-y-6">
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
            </RevealOnScroll>
          </div>
        </section>

        <section className="bg-[#cc0033] py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
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
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
              <motion.div variants={staggerItem} className="text-center space-y-3">
                <TrendingUp className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                <div className="text-4xl font-bold text-[#cc0033]">+10</div>
                <div className="text-base text-gray-700 font-medium">Años de experiencia</div>
                <div className="text-base text-gray-600 leading-[1.1]">Enfocados en las necesidades de las pymes</div>
              </motion.div>
              <motion.div variants={staggerItem} className="text-center space-y-3">
                <Building2 className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                <div className="text-4xl font-bold text-[#cc0033]">+300</div>
                <div className="text-base text-gray-700 font-medium">Empresas</div>
                <div className="text-base text-gray-600 leading-[1.1]">
                  Que confían en nuestro equipo de profesionales
                </div>
              </motion.div>
              <motion.div variants={staggerItem} className="text-center space-y-3">
                <Users className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                <div className="text-4xl font-bold text-[#cc0033]">+9,000</div>
                <div className="text-base text-gray-700 font-medium">Familias</div>
                <div className="text-base text-gray-600 leading-[1.1]">Cubiertas en Chile y el extranjero</div>
              </motion.div>
              <motion.div variants={staggerItem} className="text-center space-y-3">
                <HandshakeIcon className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                <div className="text-4xl font-bold text-[#cc0033]">+1,400</div>
                <div className="text-base text-gray-700 font-medium">Alianzas</div>
                <div className="text-base text-gray-600 leading-[1.1]">Conforman nuestra red de convenios</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-32 bg-[#cc0033]" id="formulario-contacto">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
              {/* Left: Contact Form */}
              <RevealOnScroll className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl">
                <ContactForm
                  pagina="nosotros"
                  heading="Tranquilo, sabemos cómo hacer simples los seguros complementarios, ¡Conversemos!"
                />
              </RevealOnScroll>

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

        <Footer />
      </div>
    </main>
  )
}
