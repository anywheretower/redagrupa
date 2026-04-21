import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Check } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Components } from "react-markdown"
import BlogPostClient from "./BlogPostClient"

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
  tr: ({ children }) => (
    <tr className="border-b border-gray-100 even:bg-gray-50">{children}</tr>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-gray-700">{children}</td>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-[#cc0033] bg-gray-50 rounded-r-lg py-4 px-6 text-gray-700 italic">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => {
    const isInternal = href?.startsWith("/") || href?.startsWith("#")
    if (isInternal) {
      return (
        <Link
          href={href!}
          className="text-[#cc0033] hover:text-[#a30029] underline underline-offset-2 transition-colors"
        >
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        className="text-[#cc0033] hover:text-[#a30029] underline underline-offset-2 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  },
  strong: ({ children }) => (
    <strong className="font-semibold text-[#333333]">{children}</strong>
  ),
  p: ({ children }) => (
    <p className="text-gray-700 leading-relaxed my-4">{children}</p>
  ),
}

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

  const relatedPosts = getRelatedPosts(slug, 2)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `https://www.redagrupa.cl${post.heroImage}`,
    datePublished: post.date,
    dateModified: post.lastModified,
    wordCount: post.wordCount,
    inLanguage: "es-CL",
    articleSection: "Seguros Complementarios de Salud",
    keywords: "seguro complementario de salud, seguros empresas, pymes Chile, coberturas, reembolsos, aseguradoras",
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
        url: "https://www.redagrupa.cl/images/logo-redagrupa.png",
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
      <BlogPostClient post={post} relatedPosts={relatedPosts}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
          {post.content}
        </ReactMarkdown>
      </BlogPostClient>
    </>
  )
}
