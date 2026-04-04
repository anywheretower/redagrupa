import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, UsersIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollButton from "@/components/ScrollButton"
import ScrollHeader from "@/components/ScrollHeader"
import MobileMenu from "@/components/MobileMenu"
import Footer from "@/components/Footer"
import HomeContent from "./HomeClient"
import { getAllPosts } from "@/lib/blog"

export const metadata = {
  title: "RedAgrupa - Gestión de Seguros Complementarios para Pymes",
  description:
    "Gestión integral de seguros complementarios de salud para pymes en Chile. +10 años de experiencia, +300 empresas clientes, +9.000 familias protegidas. Sin trámites eternos ni lenguaje técnico.",
}

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RedAgrupa",
  url: "https://www.redagrupa.cl",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    ratingCount: "3",
    reviewCount: "3",
  },
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
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Levábamos años encontrando un seguro que permitiese como empresa pequeña poder tener cobertura adicional. Hemos encontrado asesoría confiable, con profesionales atentos capacitados para resolver cualquier duda. Excelente servicio, recomiendo Redagrupa a ojos cerrados.",
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
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Contratamos Redagrupa como beneficio extra para trabajadores, pero al poco tiempo nos dimos cuenta que es un gran aliado, tanto clientes como empleados. Es el agregado bien servicio indiscutible con ellos.",
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
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Antes no había sido posible conseguir seguro complementario para mis colaboradores, ya que para tratar de una compañía de pocos empleados no cumplíamos con los requisitos. Pero gracias a Redagrupa lo conseguimos.",
    },
  ],
}

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3)
  return (
    <>
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
            { "@type": "Question", name: "¿Cuánto demora el proceso de contratación?", acceptedAnswer: { "@type": "Answer", text: "El proceso completo toma entre 5 y 10 días hábiles. Nosotros nos encargamos de toda la gestión: cotización, comparación de planes, recopilación de documentos y coordinación con la aseguradora." }},
            { "@type": "Question", name: "¿Tiene algún costo la asesoría de RedAgrupa?", acceptedAnswer: { "@type": "Answer", text: "No, nuestra asesoría es completamente gratuita para tu empresa. Somos corredores de seguros, lo que significa que las aseguradoras nos compensan directamente. Tú pagas exactamente lo mismo que pagarías contratando directo." }},
            { "@type": "Question", name: "¿Cómo se gestionan los reembolsos?", acceptedAnswer: { "@type": "Answer", text: "RedAgrupa gestiona los reembolsos por ti. Tus colaboradores envían sus boletas y nosotros nos encargamos del trámite completo con la aseguradora, reduciendo tiempos de espera y papeleo." }},
            { "@type": "Question", name: "¿Cómo elijo el mejor seguro complementario para mi empresa?", acceptedAnswer: { "@type": "Answer", text: "Depende de tres factores: presupuesto por trabajador, nivel de cobertura deseado y tamaño de la empresa. RedAgrupa compara planes de 9 aseguradoras y recomienda la mejor opción. El plan más vendido es Pyme Premium (70% cobertura, $26.658/mes por trabajador)." }},
            { "@type": "Question", name: "¿Cuánto cuesta un seguro complementario para mi empresa?", acceptedAnswer: { "@type": "Answer", text: "Desde $20.647 CLP mensuales por trabajador (Plan Pyme Estándar, 50% cobertura). El costo depende del plan elegido, la edad promedio del grupo y las coberturas opcionales. RedAgrupa cotiza sin costo y sin compromiso." }},
            { "@type": "Question", name: "¿Qué diferencia hay entre contratar directo con la aseguradora y usar un corredor?", acceptedAnswer: { "@type": "Answer", text: "Un corredor como RedAgrupa compara planes de 9 aseguradoras, negocia condiciones, gestiona toda la administración y trámites de reembolso, y brinda asesoría continua sin costo adicional. Contratar directo limita las opciones a una sola aseguradora y el precio es el mismo." }},
          ]
        }) }}
      />
      <main id="contenido-principal" className="min-h-screen bg-white">
        {/* Header */}
        <ScrollHeader>
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center -ml-2 lg:ml-0">
              <img
                src="/images/logo-20redagrupa-3.png"
                alt="RedAgrupa Logo"
                width={160}
                height={40}
                fetchPriority="high"
                decoding="sync"
                className="h-6 md:h-8 w-auto"
              />
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/nosotros" className="text-white hover:text-white/80 transition-colors font-medium text-sm">
                Nosotros
              </Link>
              <Link href="/seguros-salud" className="text-white hover:text-white/80 transition-colors font-medium text-sm">
                Seguro Complementario Salud
              </Link>
              <Link href="/beneficios-redagrupa" className="text-white hover:text-white/80 transition-colors font-medium text-sm">
                Beneficios RedAgrupa
              </Link>
              <div className="relative group">
                <button
                  aria-haspopup="true"
                  className="text-white hover:text-white/80 transition-colors font-medium text-sm flex items-center gap-1"
                >
                  Seguro BICE
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-lg py-2 min-w-[200px]" role="menu">
                    <Link href="/seguro-complementario-bice-pyme" role="menuitem" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#cc0033] focus:bg-gray-50 focus:text-[#cc0033] focus:outline-none transition-colors">
                      Seguro BICE Pyme
                    </Link>
                    <Link href="/seguro-complementario-bice-personas" role="menuitem" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#cc0033] focus:bg-gray-50 focus:text-[#cc0033] focus:outline-none transition-colors">
                      Seguro BICE Personas
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/blog" className="text-white hover:text-white/80 transition-colors font-medium text-sm">
                Conocimiento Pyme
              </Link>
            </nav>
            <div className="hidden lg:flex items-center gap-3">
              <ScrollButton
                targetId="formulario-contacto"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 w-[180px]"
              >
                Solicitar Asesoría
              </ScrollButton>
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
            className="w-11 h-11 bg-[#cc0033] rounded-full flex items-center justify-center hover:bg-[#a00028] transition-colors shadow-lg"
            aria-label="Facebook de RedAgrupa"
          >
            <Facebook className="w-4 h-4 text-white" strokeWidth={1.5} />
          </Link>
          <Link
            href="https://www.instagram.com/redagrupa/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-[#cc0033] rounded-full flex items-center justify-center hover:bg-[#a00028] transition-colors shadow-lg"
            aria-label="Instagram de RedAgrupa"
          >
            <Instagram className="w-4 h-4 text-white" strokeWidth={1.5} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/redagrupa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-[#cc0033] rounded-full flex items-center justify-center hover:bg-[#a00028] transition-colors shadow-lg"
            aria-label="LinkedIn de RedAgrupa"
          >
            <Linkedin className="w-4 h-4 text-white" strokeWidth={1.5} />
          </Link>
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

        {/* Hero Section — Server Rendered (no JS hydration needed for LCP) */}
        <section className="relative min-h-screen text-white pt-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-redagrupa.webp"
              alt="Equipo de trabajo protegido con seguro complementario de salud RedAgrupa"
              fill
              className="object-cover"
              priority
              quality={85}
              sizes="100vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#cc0033] via-transparent to-transparent"
              style={{ backgroundImage: "linear-gradient(to bottom, #cc0033 0%, transparent 30%)" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#cc0033] via-transparent to-transparent"
              style={{ backgroundImage: "linear-gradient(to top, #cc0033 0%, transparent 50%)" }}
            />
          </div>
          <div className="container mx-auto px-6 h-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-end lg:items-center min-h-[calc(100vh-6rem)]">
              <div className="space-y-6 md:space-y-8 pb-10 lg:py-12 mobile-text-shadow">
                <h1 className="animate-fade-in-up text-3xl sm:text-2xl md:text-[2rem] lg:text-[2.75rem] font-normal leading-[0.95] text-balance tracking-tight">
                  Seguros Complementarios para tu Pyme desde UF&nbsp;0,52/mes
                </h1>
                <p className="animate-fade-in-up-d1 text-base sm:text-base lg:text-lg text-white/90 leading-[1.3] max-w-2xl">
                  Comparamos 9 aseguradoras y gestionamos todo por ti: cotización, contratación y reembolsos.
                  Sin trámites eternos ni lenguaje técnico. Tu equipo protegido en 10 días.
                </p>
                <div className="animate-fade-in-up-d2 flex flex-col sm:flex-row gap-4 pt-2">
                  <ScrollButton
                    targetId="formulario-contacto"
                    className="bg-white text-[#cc0033] hover:bg-gray-100 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold w-full sm:w-64 shadow-lg"
                  >
                    Solicitar Asesoría Gratis
                  </ScrollButton>
                  <ScrollButton
                    targetId="seccion-aseguradoras"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent px-6 sm:px-8 py-3 text-sm sm:text-base font-normal w-full sm:w-64"
                  >
                    Conoce las Aseguradoras
                  </ScrollButton>
                </div>
              </div>
              <div className="relative hidden lg:block lg:h-[700px]" />
            </div>
          </div>
        </section>

        {/* Trust Bar — Social Proof */}
        <section className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 py-8 lg:py-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            {/* Stats — 1/3 */}
            <div className="flex items-center justify-center gap-8 sm:gap-12 lg:w-1/2 lg:border-r lg:border-gray-200 lg:pr-10">
              <dl className="flex items-center justify-center gap-8 sm:gap-12">
              <div className="flex items-center gap-2.5">
                <span className="w-12 h-12 rounded-full bg-[#cc0033] flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></span>
                <div>
                  <dd className="text-3xl font-bold text-[#cc0033] leading-none">+10</dd>
                  <dt className="text-xs uppercase tracking-wider text-gray-500">años</dt>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-12 h-12 rounded-full bg-[#cc0033] flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg></span>
                <div>
                  <dd className="text-3xl font-bold text-[#cc0033] leading-none">+300</dd>
                  <dt className="text-xs uppercase tracking-wider text-gray-500">empresas</dt>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-12 h-12 rounded-full bg-[#cc0033] flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg></span>
                <div>
                  <dd className="text-3xl font-bold text-[#cc0033] leading-none">+9.000</dd>
                  <dt className="text-xs uppercase tracking-wider text-gray-500">familias</dt>
                </div>
              </div>
              </dl>
            </div>
            {/* Logos — 2/3 */}
            <div className="lg:w-1/2 lg:pl-10">
              <div className="grid grid-cols-5 items-center justify-items-center gap-x-2 gap-y-5 lg:gap-x-3 max-w-lg lg:max-w-xl mx-auto">
                {[
                  { src: "/images/bupa.png", alt: "Logo Bupa, aseguradora partner de RedAgrupa" },
                  { src: "/images/logo-bicevida-e1674133440155.png", alt: "Logo BICE Vida, aseguradora partner de RedAgrupa" },
                  { src: "/images/sura-seguros300-e1674133176152.png", alt: "Logo Sura Seguros, aseguradora partner de RedAgrupa" },
                  { src: "/images/consorcio300-e1674133353916.png", alt: "Logo Consorcio, aseguradora partner de RedAgrupa" },
                  { src: "/images/metlife-logo-e1674133505895.png", alt: "Logo MetLife, aseguradora partner de RedAgrupa" },
                  { src: "/images/bci-seguros300.png", alt: "Logo BCI Seguros, aseguradora partner de RedAgrupa" },
                  { src: "/images/security.png", alt: "Logo Vida Security, aseguradora partner de RedAgrupa" },
                  { src: "/images/logo-help1-e1674133566493.png", alt: "Logo Help Seguros, aseguradora partner de RedAgrupa" },
                  { src: "/images/logo-chilena-consolidada2-e1674133731697.png", alt: "Logo Chilena Consolidada, aseguradora partner de RedAgrupa" },
                ].map((logo) => (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={40}
                    loading="lazy"
                    className="h-10 w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Proceso 3 Pasos */}
        <section className="py-12 md:py-16 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center text-xs sm:text-sm uppercase tracking-widest text-[#666666] mb-8">
                Así de simple es proteger a tu equipo
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#cc0033] flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#333333]">Cotiza gratis</h3>
                  <p className="text-sm text-[#666666] leading-snug">Cuéntanos sobre tu empresa y te contactamos en menos de 24 hrs.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#cc0033] flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#333333]">Comparamos 9 aseguradoras</h3>
                  <p className="text-sm text-[#666666] leading-snug">Analizamos planes y negociamos las mejores condiciones para tu pyme.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#cc0033] flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#333333]">Protegido en 10 días</h3>
                  <p className="text-sm text-[#666666] leading-snug">Gestionamos toda la contratación. Tu equipo queda cubierto sin complicaciones.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Below-the-fold content (client) */}
        <HomeContent latestPosts={latestPosts.map(p => ({ slug: p.slug, title: p.title, heroImage: p.heroImage, excerpt: p.excerpt }))} />

        {/* Footer */}
        <Footer />

        {/* WhatsApp Floating Button - Mobile only */}
        <a
          href="https://wa.me/56982414614"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden fixed right-4 bottom-20 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1DA851] flex items-center justify-center shadow-xl transition-colors"
          aria-label="WhatsApp de RedAgrupa"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>

        {/* Sticky CTA Bar - Mobile only */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
          <ScrollButton
            targetId="formulario-contacto"
            className="w-full bg-[#cc0033] text-white hover:bg-[#a30029] py-3 rounded-full text-sm font-semibold shadow-md"
          >
            Solicitar Asesoría Gratis
          </ScrollButton>
        </div>
      </main>
    </>
  )
}
