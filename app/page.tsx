import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, UsersIcon, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollHeader from "@/components/ScrollHeader"
import MobileMenu from "@/components/MobileMenu"
import Footer from "@/components/Footer"
import HeroCarousel from "@/components/HeroCarousel"
import HomeContent from "./HomeClient"
import StickyMobileCTA from "@/components/StickyMobileCTA"
import DropdownBICE from "@/components/DropdownBICE"
import OpenContactModalButton from "@/components/OpenContactModalButton"
import { getLatestPosts } from "@/lib/blog"

export const metadata = {
  title: "Seguros Complementarios para Pymes en Chile | RedAgrupa",
  keywords: ["seguro complementario de salud", "seguros para pymes", "corredor de seguros Chile", "seguro complementario empresas", "RedAgrupa"],
  description:
    "RedAgrupa, corredor de seguros complementarios de salud para empresas en Chile. Comparamos planes, gestionamos reembolsos y asesoramos sin costo. +10 años, +300 pymes. Cotiza gratis.",
  alternates: {
    canonical: "https://www.redagrupa.cl",
  },
  openGraph: {
    title: "Seguros Complementarios para Pymes en Chile | RedAgrupa",
    description: "RedAgrupa, corredor de seguros complementarios de salud para empresas en Chile. +10 años, +300 pymes, +9.000 familias protegidas. Cotiza gratis.",
    url: "https://www.redagrupa.cl",
    siteName: "RedAgrupa",
    locale: "es_CL",
    type: "website",
    images: [{ url: "/images/og-redagrupa.jpg", width: 1200, height: 630, alt: "RedAgrupa — Seguros complementarios para pymes en Chile" }],
  },
}

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.redagrupa.cl/#organization",
  name: "RedAgrupa",
  url: "https://www.redagrupa.cl",
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Marcela Lorenzo",
        jobTitle: "Partner CEO en JSTL",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
      reviewBody:
        "Llevábamos años buscando un seguro que nos permitiese, como empresa pequeña, tener cobertura adicional. Hemos encontrado asesoría confiable, con profesionales atentos y capacitados para resolver cualquier duda. Excelente servicio, recomiendo RedAgrupa a ojos cerrados.",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Manuel Pamplona",
        jobTitle: "Gerente Regional en EngMe",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
      reviewBody:
        "Contratamos RedAgrupa como beneficio extra para nuestros trabajadores, pero al poco tiempo nos dimos cuenta de que es un gran aliado, tanto para clientes como para empleados. Es un valor agregado de servicio indiscutible.",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Roberto Allaro",
        jobTitle: "Gerente General en SCLatam",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
      reviewBody:
        "Antes no había sido posible conseguir seguro complementario para mis colaboradores, ya que para tratar de una compañía de pocos empleados no cumplíamos con los requisitos. Pero gracias a Redagrupa lo conseguimos.",
    },
  ],
}

export default function HomePage() {
  const latestPosts = getLatestPosts(6)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Seguros Complementarios para Pymes en Chile",
          url: "https://www.redagrupa.cl",
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", "main p:first-of-type"],
          },
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "¿Qué es un seguro complementario de salud?", acceptedAnswer: { "@type": "Answer", text: "Es un seguro que complementa la cobertura de tu Isapre o Fonasa, cubriendo el copago que queda después de la bonificación. Incluye consultas médicas, exámenes, hospitalización, dental y óptico según el plan contratado." }},
            { "@type": "Question", name: "¿Cuántos trabajadores necesita mi pyme para contratar?", acceptedAnswer: { "@type": "Answer", text: "Desde 5 trabajadores puedes acceder a planes colectivos con tarifas preferenciales. Para empresas más pequeñas, también existen opciones individuales o familiares como el seguro BICE Personas." }},
            { "@type": "Question", name: "¿Qué aseguradoras trabajan con RedAgrupa?", acceptedAnswer: { "@type": "Answer", text: "Trabajamos con las principales aseguradoras de Chile: BCI Seguros, BICE Vida, Chilena Consolidada, Consorcio, Help Seguros, MetLife, Bupa, Sura y Vida Security." }},
            { "@type": "Question", name: "¿Cuánto demora el proceso de contratación?", acceptedAnswer: { "@type": "Answer", text: "El proceso es rápido: en pocos días hábiles tu equipo puede estar cubierto. Nosotros nos encargamos de toda la gestión: cotización, comparación de planes, recopilación de documentos y coordinación con la aseguradora." }},
            { "@type": "Question", name: "¿Tiene algún costo la asesoría de RedAgrupa?", acceptedAnswer: { "@type": "Answer", text: "No, nuestra asesoría es completamente gratuita para tu empresa. Somos corredores de seguros, lo que significa que las aseguradoras nos compensan directamente. Tú pagas exactamente lo mismo que pagarías contratando directo." }},
            { "@type": "Question", name: "¿Cómo se gestionan los reembolsos?", acceptedAnswer: { "@type": "Answer", text: "RedAgrupa gestiona los reembolsos por ti. Tus colaboradores envían sus boletas y nosotros nos encargamos del trámite completo con la aseguradora, reduciendo tiempos de espera y papeleo." }},
            { "@type": "Question", name: "¿Cómo elijo el mejor seguro complementario para mi empresa?", acceptedAnswer: { "@type": "Answer", text: "Depende de tres factores: presupuesto por trabajador, nivel de cobertura deseado y tamaño de la empresa. RedAgrupa compara planes de las principales aseguradoras y recomienda la mejor opción. El plan más vendido es Pyme Premium (70% cobertura, $26.750/mes por trabajador)." }},
            { "@type": "Question", name: "¿Cuánto cuesta un seguro complementario para mi empresa?", acceptedAnswer: { "@type": "Answer", text: "Desde $20.718 CLP mensuales por trabajador (Plan Pyme Estándar, 50% cobertura). El costo depende del plan elegido, la edad promedio del grupo y las coberturas opcionales. RedAgrupa cotiza sin costo y sin compromiso." }},
            { "@type": "Question", name: "¿Qué diferencia hay entre contratar directo con la aseguradora y usar un corredor?", acceptedAnswer: { "@type": "Answer", text: "Un corredor como RedAgrupa compara planes de las principales aseguradoras, negocia condiciones, gestiona toda la administración y trámites de reembolso, y brinda asesoría continua sin costo adicional. Contratar directo limita las opciones a una sola aseguradora y el precio es el mismo." }},
          ]
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Cómo contratar un seguro complementario para tu pyme con RedAgrupa",
          description: "En 3 simples pasos tu equipo queda protegido con seguro complementario de salud. RedAgrupa gestiona todo el proceso sin costo.",
          totalTime: "P3D",
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: "Cotiza gratis",
              text: "Cuéntanos sobre tu empresa y te contactamos a la brevedad. Completa el formulario con datos básicos: nombre, empresa, número de trabajadores y teléfono.",
              url: "https://www.redagrupa.cl/#formulario-contacto",
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: "Comparamos las principales aseguradoras",
              text: "Analizamos planes de BCI Seguros, BICE Vida, Consorcio, MetLife, Bupa y más. Negociamos las mejores condiciones de cobertura y precio para tu pyme.",
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: "Tu equipo queda protegido",
              text: "Gestionamos toda la contratación, documentos y coordinación con la aseguradora. Tu equipo queda cubierto en días, no meses. Sin trámites ni papeleo.",
            },
          ],
        }) }}
      />
      <main id="contenido-principal" className="min-h-screen bg-white">
        {/* Header */}
        <ScrollHeader>
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center -ml-2 lg:ml-0">
              <img
                src="/images/logo-redagrupa.png"
                alt="RedAgrupa Logo"
                width={160}
                height={40}
                fetchPriority="high"
                decoding="async"
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
              <DropdownBICE />
              <Link href="/blog" className="text-white hover:text-white/80 transition-colors font-medium text-xs">
                Conocimiento Empresa
              </Link>
              <Link href="/formularios" className="text-white hover:text-white/80 transition-colors font-medium text-xs">
                Formularios
              </Link>
            </nav>
            <div className="hidden lg:flex items-center gap-3">
              <OpenContactModalButton
                pagina="landing"
                heading="Compara aseguradoras y encuentra el mejor plan para tu pyme"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-transparent border-white text-white hover:bg-white/10 w-[180px] h-9 px-4 py-2"
              >
                Solicitar Asesoría
              </OpenContactModalButton>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="/contactos" target="_blank" rel="noopener noreferrer" aria-label="Ver contactos">
                  <UsersIcon className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <MobileMenu />
          </div>
        </ScrollHeader>

        {/* Social Sidebar */}
        <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
          <Link
            href="https://www.facebook.com/RedAgrupa/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#1565C0] transition-colors shadow-lg"
            aria-label="Facebook de RedAgrupa"
          >
            <Facebook className="w-4 h-4 text-white" strokeWidth={1.5} />
          </Link>
          <Link
            href="https://www.instagram.com/redagrupa/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center hover:opacity-85 transition-opacity shadow-lg"
            aria-label="Instagram de RedAgrupa"
          >
            <Instagram className="w-4 h-4 text-white" strokeWidth={1.5} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/redagrupa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-[#0A66C2] rounded-full flex items-center justify-center hover:bg-[#084E96] transition-colors shadow-lg"
            aria-label="LinkedIn de RedAgrupa"
          >
            <Linkedin className="w-4 h-4 text-white" strokeWidth={1.5} />
          </Link>
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

        {/* Hero Carousel — 3 slides con fade */}
        <HeroCarousel />

        {/* Trust Bar — Social Proof */}
        {(() => {
          const logos = [
            { src: "/images/logo-bupa.png", alt: "Logo Bupa, aseguradora partner de RedAgrupa" },
            { src: "/images/logo-bice-vida.avif", alt: "Logo BICE Vida, aseguradora partner de RedAgrupa" },
            { src: "/images/logo-sura.png", alt: "Logo Sura Seguros, aseguradora partner de RedAgrupa" },
            { src: "/images/logo-consorcio.png", alt: "Logo Consorcio, aseguradora partner de RedAgrupa" },
            { src: "/images/logo-metlife.png", alt: "Logo MetLife, aseguradora partner de RedAgrupa" },
            { src: "/images/logo-bci-seguros.png", alt: "Logo BCI Seguros, aseguradora partner de RedAgrupa" },
            { src: "/images/logo-vida-security.png", alt: "Logo Vida Security, aseguradora partner de RedAgrupa" },
            { src: "/images/logo-help-seguros.png", alt: "Logo Help Seguros, aseguradora partner de RedAgrupa" },
            { src: "/images/logo-chilena-consolidada.png", alt: "Logo Chilena Consolidada, aseguradora partner de RedAgrupa" },
          ]
          return (
            <section className="bg-white border-b border-gray-200">
              <div className="container mx-auto px-6 py-8 lg:py-10">
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
                <div className="md:hidden relative overflow-hidden min-h-[40px]">
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

        {/* Proceso + Servicios — combinados */}
        <section id="seccion-aseguradoras" className="py-12 md:py-16 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Izquierda: 3 Pasos */}
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-[#666666] mb-8">
                  Así de simple es proteger a tu equipo
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#cc0033] flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#333333] leading-tight">Cotiza gratis</h3>
                      <p className="text-sm text-[#666666] leading-tight mt-1">Cuéntanos sobre tu empresa y te contactamos a la brevedad.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#cc0033] flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#333333] leading-tight">Comparamos las principales aseguradoras</h3>
                      <p className="text-sm text-[#666666] leading-tight mt-1">Analizamos planes y negociamos las mejores condiciones para tu pyme.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#cc0033] flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#333333] leading-tight">Protegido rápidamente</h3>
                      <p className="text-sm text-[#666666] leading-tight mt-1">Gestionamos toda la contratación. Tu equipo queda cubierto en días, no meses.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <OpenContactModalButton
                    pagina="landing"
                    heading="Compara aseguradoras y encuentra el mejor plan para tu pyme"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#cc0033] text-white hover:bg-[#a30029] px-6 py-3 rounded-lg text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                    Solicitar Asesoría Gratis
                  </OpenContactModalButton>
                  <a
                    href="https://wa.me/56982414614?text=Hola%2C%20quiero%20cotizar%20un%20seguro%20complementario%20de%20salud%20para%20mi%20empresa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1DA851] px-6 py-3 rounded-lg text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Escríbenos Ahora
                  </a>
                </div>
                <p className="text-xs text-[#666666] mt-3 text-center sm:text-left">Te respondemos el mismo día hábil · Sin costo ni compromiso</p>
              </div>
              {/* Derecha: Servicios */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#cc0033] mb-2">Nuestros Servicios</h2>
                <p className="text-base text-[#666666] mb-6">Soluciones de protección para empresas y personas</p>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/seguro-complementario" className="group flex flex-col items-center bg-white rounded-xl p-4 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#cc0033] flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.25-8.25-3.286ZM12 9h.008v.008H12V9Z" /></svg>
                    </div>
                    <h3 className="text-sm font-semibold leading-tight text-[#333333] group-hover:text-[#cc0033] transition-colors mb-1">Seguro Complementario de Salud</h3>
                    <p className="text-xs text-[#666666] leading-tight mt-auto">Complementa tu plan de salud y cubre lo que Fonasa o tu Isapre no alcanza.</p>
                  </Link>
                  <Link href="/beneficios-redagrupa" className="group flex flex-col items-center bg-white rounded-xl p-4 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#cc0033] flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                    </div>
                    <h3 className="text-sm font-semibold leading-tight text-[#333333] group-hover:text-[#cc0033] transition-colors mb-1">Beneficios Corporativos</h3>
                    <p className="text-xs text-[#666666] leading-tight mt-auto">Convenios de salud, bienestar y vacunación para tu empresa y colaboradores.</p>
                  </Link>
                  <Link href="/seguro-complementario-bice-pyme" className="group flex flex-col items-center bg-white rounded-xl p-4 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#cc0033] flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" /></svg>
                    </div>
                    <h3 className="text-sm font-semibold leading-tight text-[#333333] group-hover:text-[#cc0033] transition-colors mb-1">Seguro BICE Pyme</h3>
                    <p className="text-xs text-[#666666] leading-tight mt-auto">4 planes desde UF 0,52/mes por trabajador. Salud + Vida en una sola póliza.</p>
                  </Link>
                  <Link href="/seguro-complementario-bice-personas" className="group flex flex-col items-center bg-white rounded-xl p-4 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#cc0033] flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
                    </div>
                    <h3 className="text-sm font-semibold leading-tight text-[#333333] group-hover:text-[#cc0033] transition-colors mb-1">Seguro BICE Personas</h3>
                    <p className="text-xs text-[#666666] leading-tight mt-auto">Protección individual y familiar. Sin carencias, cobertura nacional, respaldo BICE.</p>
                  </Link>
                </div>
                <div className="text-center mt-4">
                  <Link
                    href="/formularios"
                    className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#cc0033] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    ¿Ya eres cliente? Descarga tus formularios de reembolso e incorporación →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Below-the-fold content (client) */}
        <HomeContent latestPosts={latestPosts.map(p => ({ slug: p.slug, title: p.title, heroImage: p.heroImage, excerpt: p.excerpt }))} />

        {/* Footer */}
        <Footer />

        {/* Sticky CTA Bar - Mobile only */}
        <StickyMobileCTA />
      </main>
    </>
  )
}
