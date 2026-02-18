"use client"

import Image from "next/image"
import Link from "next/link"
import {
  UsersIcon,
  Facebook,
  Instagram,
  Linkedin,
  ArrowLeft,
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
              <div className="prose prose-lg max-w-none prose-headings:text-[#333333] prose-a:text-[#cc0033] hover:prose-a:text-[#a30029] prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-[#333333] prose-table:text-sm">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
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

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 md:py-24 bg-[#f5f5f5]">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-[#333333] text-center mb-12">
                Artículos relacionados
              </h2>
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={related.heroImage}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
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
