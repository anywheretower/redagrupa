import { getAllPosts } from "@/lib/blog"
import BlogClient from "./BlogClient"

export const metadata = {
  title: "Conocimiento Pyme — Seguros, Legislación y Gestión de Personas",
  description:
    "Guías y recursos sobre seguros complementarios de salud, legislación laboral y gestión de personas para pymes en Chile. +55 artículos.",
  alternates: {
    canonical: "https://www.redagrupa.cl/blog",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
  return <BlogClient posts={posts} />
}
