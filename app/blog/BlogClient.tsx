"use client"

import Image from "next/image"
import Link from "next/link"
import {
  UsersIcon,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/MobileMenu"
import Footer from "@/components/Footer"

interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  heroImage: string
}

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  return (
    <main className="min-h-screen bg-white">
      {/* Fixed Header */}
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
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl font-bold text-[#cc0033] mb-4">Blog RedAgrupa</h1>
              <p className="text-base text-gray-700 leading-[1.1]">
                Artículos sobre seguros complementarios, legislación laboral,
                gestión de personas y más.
              </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group grid grid-rows-subgrid row-span-4 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <h2 className="px-5 -mt-1 text-lg font-semibold text-[#333333] leading-[1.1] group-hover:text-[#cc0033] transition-colors">
                    {post.title}
                  </h2>
                  <p className="px-5 -mt-5 text-sm text-[#666666] leading-snug line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="px-5 pb-6 -mt-2 self-end text-sm font-medium text-[#cc0033] group-hover:text-[#a30029] transition-colors">
                    Leer más →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
