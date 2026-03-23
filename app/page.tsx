import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, UsersIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollButton from "@/components/ScrollButton"
import ScrollHeader from "@/components/ScrollHeader"
import MobileMenu from "@/components/MobileMenu"
import Footer from "@/components/Footer"
import HomeContent from "./HomeClient"

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
  return (
    <>
      <link rel="preload" as="image" href="/images/hero-redagrupa.webp" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <div id="contenido-principal" className="min-h-screen bg-white">
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
              <Link href="/seguro-complementario-bice-pyme" className="text-white hover:text-white/80 transition-colors font-medium text-sm">
                Seguro BICE Pyme
              </Link>
              <Link href="/seguro-complementario-bice-personas" className="text-white hover:text-white/80 transition-colors font-medium text-sm">
                Seguro BICE Personas
              </Link>
              <Link href="/blog" className="text-white hover:text-white/80 transition-colors font-medium text-sm">
                Blog
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
                  ¿Listo para Simplificar tus Seguros Complementarios?
                </h1>
                <p className="animate-fade-in-up-d1 text-base sm:text-base lg:text-lg text-white/90 leading-[1.3] max-w-2xl">
                  RedAgrupa gestiona tus seguros complementarios de salud para que tu pyme y tu equipo estén protegidos,
                  sin trámites eternos ni lenguaje técnico imposible.
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

        {/* Below-the-fold content (client) */}
        <HomeContent />

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
      </div>
    </>
  )
}
