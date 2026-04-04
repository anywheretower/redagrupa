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
  if (!post) return { title: "Art\u00edculo no encontrado" }

  const url = `https://www.redagrupa.cl/blog/${slug}`
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
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

  const relatedPosts = getRelatedPosts(slug, 8)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `https://www.redagrupa.cl${post.heroImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "RedAgrupa",
      url: "https://www.redagrupa.cl",
    },
    publisher: {
      "@type": "Organization",
      name: "RedAgrupa",
      logo: {
        "@type": "ImageObject",
        url: "https://www.redagrupa.cl/images/logo-20redagrupa-3.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.redagrupa.cl/blog/${slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  )
}
