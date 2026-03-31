"use client"

import Image from "next/image"
import Link from "next/link"
import type { Components } from "react-markdown"
import {
  UsersIcon,
  Facebook,
  Instagram,
  Linkedin,
  ArrowLeft,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/MobileMenu"
import Footer from "@/components/Footer"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Breadcrumbs from "@/components/Breadcrumbs"

interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  heroImage: string
  content: string
}

interface RelatedPost {
  slug: string
  title: string
  date: string
  heroImage: string
  excerpt: string
}

const mdComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mt-10 mb-6">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl md:text-2xl font-bold text-[#333333] mt-12 mb-8 pb-6 border-b border-[#cc0033]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg md:text-xl font-semibold text-[#cc0033] mt-8 mb-3">
      {children}
    </h3>
  ),
  ul: ({ children }) => (
    <ul className="my-4 space-y-2 list-none pl-0">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 space-y-2 list-none pl-0">{children}</ol>
  ),
  li: (props: Record<string, unknown>) => {
    const { children, ordered, index } = props as {
      children: React.ReactNode
      ordered?: boolean
      index?: number
    }
    return (
      <li className="flex items-start gap-3 text-gray-700 leading-relaxed [&_p]:my-0 [&_p]:inline">
        {ordered && typeof index === "number" ? (
          <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#cc0033] flex items-center justify-center text-white text-xs font-bold">
            {index + 1}
          </span>
        ) : (
          <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#cc0033] flex items-center justify-center">
            <Check className="w-3 h-3 text-white" strokeWidth={3} />
          </span>
        )}
        <span className="flex-1">{children}</span>
      </li>
    )
  },
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[#cc0033] text-white">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-semibold text-sm">{children}</th>
  ),
  tr: ({ children, node }) => {
    // We can't easily detect even/odd here so we use CSS even selector via className
    return <tr className="border-b border-gray-100 even:bg-gray-50">{children}</tr>
  },
  td: ({ children }) => (
    <td className="px-4 py-3 text-gray-700">{children}</td>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-[#cc0033] bg-gray-50 rounded-r-lg py-4 px-6 text-gray-700 italic">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[#cc0033] hover:text-[#a30029] underline underline-offset-2 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[#333333]">{children}</strong>
  ),
  p: ({ children }) => (
    <p className="text-gray-700 leading-relaxed my-4">{children}</p>
  ),
}

export default function BlogPostClient({
  post,
  relatedPosts,
}: {
  post: BlogPost
  relatedPosts: RelatedPost[]
}) {
  return (
    <main id="contenido-principal" className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#cc0033] text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center -ml-2 lg:ml-0">
            <Image
              src="/images/logo-20redagrupa-3.png"
              alt="RedAgrupa Logo"
              width={160}
              height={40}
              priority
              className="h-6 md:h-8 w-auto"
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/nosotros" className="text-white font-medium text-sm">
              Nosotros
            </Link>
            <Link
              href="/seguros-salud"
              className="text-white font-medium text-sm"
            >
              Seguro Complementario Salud
            </Link>
            <Link
              href="/beneficios-redagrupa"
              className="text-white font-medium text-sm"
            >
              Beneficios RedAgrupa
            </Link>
            <Link
              href="/seguro-complementario-bice-pyme"
              className="text-white font-medium text-sm"
            >
              Seguro BICE Pyme
            </Link>
            <Link
              href="/seguro-complementario-bice-personas"
              className="text-white font-medium text-sm"
            >
              Seguro BICE Personas
            </Link>
            <Link href="/blog" className="text-white font-medium text-sm">
              Blog
            </Link>
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 w-[180px]"
              asChild
            >
              <Link href="/#formulario-contacto">
                Solicitar Asesoría
              </Link>
            </Button>
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
          <MobileMenu />
        </div>
      </header>

      {/* Fixed RRSS Sidebar */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
        <a
          href="https://www.facebook.com/RedAgrupa/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
          aria-label="Facebook de RedAgrupa"
        >
          <Facebook className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a
          href="https://www.instagram.com/redagrupa/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
          aria-label="Instagram de RedAgrupa"
        >
          <Instagram className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/company/redagrupa"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
          aria-label="LinkedIn de RedAgrupa"
        >
          <Linkedin className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
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

      {/* Content */}
      <div className="pt-20">
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
              {/* Back link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-[#cc0033] hover:text-[#a30029] mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al Blog
              </Link>

              {/* Date */}
              <time className="block text-xs text-[#666666] uppercase tracking-wider mb-4">
                {new Intl.DateTimeFormat("es-CL", { day: "numeric", month: "long", year: "numeric" }).format(new Date(post.date))}
              </time>

              {/* Hero Image */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-10">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>

              {/* Markdown Content */}
              <div className="max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={mdComponents}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* CTA Banner */}
              <div className="mt-12 rounded-2xl bg-[#cc0033] p-6 sm:p-8 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  ¿Tu pyme ya tiene seguro complementario?
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-5">
                  Comparamos planes de 9 aseguradoras para encontrar la mejor cobertura al mejor precio. Asesoría gratuita, sin compromiso.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/#formulario-contacto"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#cc0033] font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
                  >
                    Solicitar Asesoría Gratis
                  </Link>
                  <a
                    href="https://wa.me/56228132245?text=Hola%2C%20quiero%20cotizar%20un%20seguro%20complementario%20para%20mi%20empresa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-white/50 text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Cotizar por WhatsApp
                  </a>
                </div>
              </div>

              {/* Back link bottom */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm text-[#cc0033] hover:text-[#a30029] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver al Blog
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts Carousel */}
        {relatedPosts.length > 0 && (
          <section className="py-12 md:py-16 bg-[#f5f5f5] overflow-hidden">
            <h2 className="text-2xl font-normal text-[#333333] text-center mb-16">
              Más Artículos RedAgrupa
            </h2>
            <div className="relative">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f5f5f5] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f5f5f5] to-transparent z-10" />
              {/* Scrolling track: duplicate items for seamless loop */}
              <div className="flex gap-6 related-track hover:[animation-play-state:paused]">
                {[...relatedPosts, ...relatedPosts].map((related, i) => (
                  <Link
                    key={`${related.slug}-${i}`}
                    href={`/blog/${related.slug}`}
                    className="group flex-shrink-0 w-[280px] bg-white rounded-xl overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={related.heroImage}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="280px"
                      />
                    </div>
                    <div className="px-4 py-5">
                      <h3 className="text-sm font-semibold text-[#333333] leading-[1.1] group-hover:text-[#cc0033] transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </main>
  )
}
