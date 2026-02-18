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
import { format, parseISO } from "date-fns"
import { es } from "date-fns/locale"

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
      <li className="flex items-start gap-3 text-gray-700 leading-relaxed">
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
    <main className="min-h-screen bg-white">
      {/* Fixed Header */}
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
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 w-[180px]"
            >
              Agendar orientación
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <a
                href="https://redagrupa.vercel.app/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
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
      </div>

      {/* Content */}
      <div className="pt-20">
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
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
                {format(parseISO(post.date), "d 'de' MMMM, yyyy", {
                  locale: es,
                })}
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

              {/* Back link bottom */}
              <div className="mt-12 pt-8 border-t border-gray-200">
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
          <section className="py-16 md:py-24 bg-[#f5f5f5] overflow-hidden">
            <h2 className="text-2xl font-bold text-[#333333] text-center mb-16 mt-4">
              Artículos relacionados
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
