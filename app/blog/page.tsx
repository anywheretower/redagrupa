import { redirect } from "next/navigation"
import { getAllPosts } from "@/lib/blog"
import BlogClient from "./BlogClient"

const POSTS_PER_PAGE = 12

export const metadata = {
  title: "Blog — Seguros Complementarios de Salud para Empresas",
  description:
    "Guías y comparativas sobre seguros complementarios de salud para pymes en Chile: coberturas, deducibles y beneficios de las principales aseguradoras.",
  alternates: {
    canonical: "https://www.redagrupa.cl/blog",
  },
  openGraph: {
    title: "Blog — Seguros Complementarios de Salud para Empresas",
    description: "Guías y comparativas sobre seguros complementarios de salud para pymes en Chile: coberturas, deducibles y beneficios de las principales aseguradoras.",
    url: "https://www.redagrupa.cl/blog",
    siteName: "RedAgrupa",
    locale: "es_CL",
    type: "website",
    images: [{ url: "https://www.redagrupa.cl/images/og-redagrupa.jpg", width: 1200, height: 630, alt: "Conocimiento Empresa — Blog de RedAgrupa" }],
  },
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const posts = getAllPosts()
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const params = await searchParams
  const rawPage = params.page

  // If page param exists, validate it
  if (rawPage !== undefined) {
    const pageStr = Array.isArray(rawPage) ? rawPage[0] : rawPage
    const pageNum = Number(pageStr)

    // Redirect to /blog if non-numeric, less than 1, greater than total pages, or not an integer
    if (!pageStr || !Number.isInteger(pageNum) || pageNum < 1 || pageNum > totalPages) {
      redirect("/blog")
    }

    // Page 1 is the canonical /blog — redirect to avoid duplicate
    if (pageNum === 1) {
      redirect("/blog")
    }

    return <BlogClient posts={posts} initialPage={pageNum} />
  }

  return <BlogClient posts={posts} initialPage={1} />
}
