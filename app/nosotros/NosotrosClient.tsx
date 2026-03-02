"use client"

import Image from "next/image"
import Link from "next/link"
import {
  UsersIcon,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
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
              <a href="/contactos" target="_blank" rel="noopener noreferrer">
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
        {/* Hero/Intro */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <RevealOnScroll className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl font-bold text-[#cc0033]">
                Delegue la gestión del Seguro Complementario y enfoque su empresa en lo estratégico
              </h1>
              <p className="text-base text-gray-700 leading-[1.1]">
                En RedAgrupa ayudamos a las empresas a ahorrar tiempo y reducir carga administrativa, delegando en especialistas la gestión del Seguro Complementario de Salud y los beneficios asociados.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                Sabemos que para una Gerencia General, RRHH o Administración y Finanzas, el tiempo es un activo crítico. La administración de seguros —incorporaciones, exclusiones, reembolsos, consultas de trabajadores, uso de coberturas y coordinación de beneficios— puede transformarse en una tarea operativa constante que distrae recursos del foco principal del negocio.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                Nuestro propósito es claro: ordenar, gestionar y acompañar, simplificando procesos que suelen ser complejos y altamente demandantes.
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

        {/* Nuestra Misión */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <RevealOnScroll className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-4xl font-bold text-[#cc0033] text-center">Nuestra Misión</h2>
              <p className="text-base text-gray-700 leading-[1.1]">
                Nuestra misión es que cada empresa cuente con un Seguro Complementario de Salud correctamente estructurado y, sobre todo, correctamente gestionado.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                No solo asesoramos en la contratación del seguro. Nos encargamos de acompañar a la empresa en todo su ciclo de vida, asegurando una administración eficiente y una correcta utilización del beneficio por parte de los trabajadores.
              </p>
              <p className="text-base text-gray-700 font-semibold">Esto permite:</p>
              <motion.ul className="space-y-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                <motion.li variants={staggerItem} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Disminuir la carga operativa del área de RRHH</span>
                </motion.li>
                <motion.li variants={staggerItem} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Reducir consultas repetitivas y tiempos de respuesta</span>
                </motion.li>
                <motion.li variants={staggerItem} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Optimizar el uso de coberturas contratadas</span>
                </motion.li>
                <motion.li variants={staggerItem} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Mejorar la experiencia del colaborador</span>
                </motion.li>
                <motion.li variants={staggerItem} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Mantener orden y control en la administración del beneficio</span>
                </motion.li>
              </motion.ul>
            </RevealOnScroll>
          </div>
        </section>

        {/* Gestión Eficiente */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <RevealOnScroll className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-4xl font-bold text-[#cc0033] text-center">Gestión eficiente para equipos que necesitan foco</h2>
              <p className="text-base text-gray-700 leading-[1.1]">
                Las organizaciones necesitan que sus equipos directivos estén concentrados en crecimiento, resultados y sostenibilidad. Externalizar la administración del Seguro Complementario y sus beneficios permite profesionalizar el proceso sin aumentar estructura interna.
              </p>
              <p className="text-base text-gray-700 font-semibold">Delegar en RedAgrupa significa:</p>
              <motion.ul className="space-y-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                <motion.li variants={staggerItem} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Ahorro de tiempo en tareas administrativas</span>
                </motion.li>
                <motion.li variants={staggerItem} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Mayor eficiencia en procesos relacionados con salud corporativa</span>
                </motion.li>
                <motion.li variants={staggerItem} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Reducción de fricción interna</span>
                </motion.li>
                <motion.li variants={staggerItem} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Respaldo técnico especializado permanente</span>
                </motion.li>
                <motion.li variants={staggerItem} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Continuidad operativa sin sobrecargar al equipo</span>
                </motion.li>
              </motion.ul>
            </RevealOnScroll>
          </div>
        </section>

        {/* Nuestro Compromiso */}
        <section className="py-32 bg-[#cc0033]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll className="space-y-6">
                <p className="text-base text-white leading-[1.1]">
                  Trabajamos con un enfoque cercano, profesional y basado en fundamentos técnicos. Creemos que la confianza se construye con claridad, acompañamiento y resultados consistentes.
                </p>
                <blockquote className="text-white space-y-6">
                  <p className="text-base leading-[1.1] italic">
                    &ldquo;Hace más de 10 años quisimos apoyar a las micro y pequeñas empresas, como un soporte fundamental y transversal en sus negocios. Esta es nuestra misión y sueño cumplido. Como especialistas en Seguros Complementarios de Salud, confíen en nuestra experiencia y trayectoria para que ustedes puedan fortalecer los lazos con sus trabajadores y promover el crecimiento y la sustentabilidad de sus negocios.&rdquo;
                  </p>
                  <footer className="text-white/90">
                    <div className="font-bold text-base">Cristóbal Winter</div>
                    <div className="text-white/80 text-base">Socio Fundador y Gerente General</div>
                  </footer>
                </blockquote>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Cierre CTA */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <RevealOnScroll className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-bold text-[#cc0033]">
                RedAgrupa: menos gestión operativa, más foco en el negocio
              </h2>
              <p className="text-base text-gray-700 leading-[1.1]">
                La administración de beneficios no debería consumir tiempo estratégico dentro de la empresa. Ese es nuestro trabajo.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                Si su organización busca eficiencia, orden y respaldo técnico en la gestión del Seguro Complementario y beneficios de salud, conversemos.
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

        {/* Formulario de Contacto */}
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
