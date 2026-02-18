import { getAllPosts } from "@/lib/blog"
import BlogClient from "./BlogClient"

export const metadata = {
  title: "Blog | RedAgrupa",
  description:
    "Artículos sobre seguros complementarios de salud, legislación laboral, gestión de personas y más. Información útil para pymes en Chile.",
}

export default function BlogPage() {
  const posts = getAllPosts()
  return <BlogClient posts={posts} />
}
