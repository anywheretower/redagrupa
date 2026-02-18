import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import BlogPostClient from "./BlogPostClient"

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Artículo no encontrado | RedAgrupa" }

  return {
    title: `${post.title} | Blog RedAgrupa`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.heroImage }],
      type: "article",
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(slug, 4)

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />
}
