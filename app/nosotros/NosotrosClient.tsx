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
import DropdownBICE from "@/components/DropdownBICE"
import Footer from "@/components/Footer"
import dynamic from "next/dynamic"
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false })
import RevealOnScroll from "@/components/RevealOnScroll"
import Breadcrumbs from "@/components/Breadcrumbs"
import { useContactModal } from "@/components/ContactModalProvider"

export default function NosotrosClient() {
  const { openContactModal } = useContactModal()
  const scrollToForm = () =>
    openContactModal({
      pagina: "nosotros",
      heading: "Conversemos sobre cómo proteger a tu equipo",
    })
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
          {/* Desktop Navigation - Hidden on mobile */}
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
          {/* Desktop Buttons - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 w-[180px]"
              onClick={scrollToForm}
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
        {/* Hero/Intro */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ label: "Nosotros" }]} currentPath="/nosotros" />
            <RevealOnScroll className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl font-bold text-[#cc0033]">
                Delega la gestión del Seguro Complementario y enfoca tu empresa en lo estratégico
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
                  onClick={scrollToForm}
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
              <ul className="space-y-4 stagger-grid">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Disminuir la carga operativa del área de RRHH</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Reducir consultas repetitivas y tiempos de respuesta</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Optimizar el uso de coberturas contratadas</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Mejorar la experiencia del colaborador</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Mantener orden y control en la administración del beneficio</span>
                </li>
              </ul>
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
              <ul className="space-y-4 stagger-grid">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Ahorro de tiempo en tareas administrativas</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Mayor eficiencia en procesos relacionados con salud corporativa</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Reducción de fricción interna</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Respaldo técnico especializado permanente</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#cc0033] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-[1.1]">Continuidad operativa sin sobrecargar al equipo</span>
                </li>
              </ul>
            </RevealOnScroll>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <RevealOnScroll className="max-w-5xl mx-auto space-y-10">
              <h2 className="text-4xl font-bold text-[#cc0033] text-center">Nuestro Equipo</h2>
              <p className="text-base text-gray-700 leading-[1.1] text-center max-w-3xl mx-auto">
                Profesionales con experiencia real en seguros complementarios de salud, dedicadas a que cada empresa y cada asegurado reciba atención oportuna y de calidad.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    name: "Mara Martínez",
                    role: "Ejecutiva de Reembolsos",
                    image: "/images/ejecutiva-reembolsos-1.jpg",
                    description: "Más de 10 años en gestión administrativa y atención al cliente. Revisa, valida y da seguimiento a reembolsos de seguros complementarios de salud.",
                  },
                  {
                    name: "Francisca Arregui",
                    role: "Ejecutiva de Reembolsos",
                    image: "/images/ejecutiva-reembolsos-2.jpg",
                    description: "Más de 10 años gestionando reembolsos de gastos médicos. Acompaña a cada asegurado desde la solicitud hasta la resolución.",
                  },
                  {
                    name: "Kerlin Ramírez",
                    role: "Ejecutiva de Gestión de Seguros",
                    image: "/images/kerlin-ramirez.jpg",
                    description: "Ingeniera Industrial con más de 10 años administrando seguros complementarios. Gestiona incorporaciones, coberturas e incidencias.",
                  },
                  {
                    name: "Paulina Herrera",
                    role: "Ejecutiva de Gestión de Seguros",
                    image: "/images/paulina.jpg",
                    description: "Más de 30 años de experiencia en atención al cliente, con compromiso por un servicio de excelencia, amabilidad y empatía.",
                  },
                ].map((member, i) => (
                  <div key={i} className="flex flex-col items-center text-center space-y-3">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-[#cc0033] overflow-hidden flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={144}
                        height={144}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#333333] leading-snug">{member.name}</h3>
                      <p className="text-sm text-[#cc0033] font-medium">{member.role}</p>
                    </div>
                    <p className="text-sm text-[#666666] leading-snug hidden lg:block">{member.description}</p>
                  </div>
                ))}
              </div>
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
                  <footer className="text-white">
                    <div className="font-bold text-base">Cristóbal Winter</div>
                    <div className="text-white/95 text-base">Socio Fundador y Gerente General</div>
                  </footer>
                </blockquote>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Alianza Estratégica */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-xs uppercase tracking-widest text-[#666666]">Alianza Estratégica</p>
              <h2 className="text-2xl font-bold text-[#333333]">
                Parte de la red <a href="https://www.segurosequos.com" target="_blank" rel="noopener noreferrer" className="text-[#cc0033] hover:underline">EQUOS Seguros</a>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                RedAgrupa trabaja en alianza con EQUOS Seguros, una de las corredoras de seguros más importantes de Chile.
                Esta alianza nos permite acceder a mejores condiciones de negociación con las aseguradoras,
                ampliar nuestra cobertura de servicios y ofrecer un respaldo institucional sólido a nuestros clientes.
              </p>
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
                Si tu empresa busca eficiencia, orden y respaldo técnico en la gestión del Seguro Complementario y beneficios de salud, conversemos.
              </p>
              <div className="pt-4">
                <Button
                  onClick={scrollToForm}
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
                  heading="Conversemos sobre cómo proteger a tu equipo"
                />
              </RevealOnScroll>

              {/* Right: CTA Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">Contrata tu Seguro Complementario con RedAgrupa</h2>
                <p className="text-base text-white leading-[1.1]">
                  En RedAgrupa te ayudamos a elegir y contratar el seguro complementario que más se adapte a las
                  necesidades de tu empresa. Nos encargamos de todo el proceso, desde la cotización hasta la
                  implementación, para que tú y tu equipo puedan enfocarse en lo que realmente importa.
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
