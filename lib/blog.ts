import fs from "fs"
import path from "path"

const BLOG_DIR = path.join(process.cwd(), "blog-content")

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  heroImage: string
  content: string
}

interface PostIndex {
  slug: string
  date: string
}

function parseIndex(): PostIndex[] {
  const indexPath = path.join(BLOG_DIR, "INDICE.md")
  const raw = fs.readFileSync(indexPath, "utf-8")
  const lines = raw.split("\n")
  const posts: PostIndex[] = []

  for (const line of lines) {
    // Match table rows: | # | YYYY-MM-DD | slug | [file](link) |
    const match = line.match(
      /^\|\s*\d+\s*\|\s*(\d{4}-\d{2}-\d{2})\s*\|\s*([\w-]+)\s*\|/
    )
    if (match) {
      posts.push({ date: match[1], slug: match[2] })
    }
  }

  return posts
}

function parseMarkdown(slug: string): {
  title: string
  heroImage: string
  content: string
  excerpt: string
} {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  const raw = fs.readFileSync(filePath, "utf-8")
  const lines = raw.split("\n")

  // First line: hero image ![...](./images/slug.ext)
  let heroImage = `/blog/${slug}.jpg`
  const imgMatch = lines[0]?.match(/!\[.*?\]\(\.\/images\/(.*?)\)/)
  if (imgMatch) {
    heroImage = `/blog/${imgMatch[1]}`
  }

  // Find H1 title
  let title = slug
  let titleIndex = -1
  for (let i = 1; i < lines.length; i++) {
    const h1Match = lines[i].match(/^#\s+(.+)/)
    if (h1Match) {
      title = h1Match[1].trim()
      titleIndex = i
      break
    }
  }

  // Extract excerpt: first non-empty paragraph after title
  let excerpt = ""
  if (titleIndex >= 0) {
    for (let i = titleIndex + 1; i < lines.length; i++) {
      const line = lines[i].trim()
      if (line && !line.startsWith("#") && !line.startsWith("!")) {
        excerpt = line.slice(0, 160)
        if (line.length > 160) excerpt += "..."
        break
      }
    }
  }

  // Content: everything after the hero image line
  const contentLines = lines.slice(1)
  const content = contentLines.join("\n").trim()

  return { title, heroImage, content, excerpt }
}

export function getAllPosts(): BlogPost[] {
  const index = parseIndex()
  return index.map(({ slug, date }) => {
    const { title, heroImage, content, excerpt } = parseMarkdown(slug)
    return { slug, date, title, heroImage, content, excerpt }
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  const index = parseIndex()
  const entry = index.find((p) => p.slug === slug)
  if (!entry) return null

  const { title, heroImage, content, excerpt } = parseMarkdown(slug)
  return { slug, date: entry.date, title, heroImage, content, excerpt }
}

export function getRelatedPosts(slug: string, count = 4): BlogPost[] {
  const index = parseIndex()
  const currentIdx = index.findIndex((p) => p.slug === slug)
  if (currentIdx === -1) return []

  // Pick adjacent posts by date (neighbors in the sorted index)
  const candidates: PostIndex[] = []
  let before = currentIdx - 1
  let after = currentIdx + 1

  while (candidates.length < count && (before >= 0 || after < index.length)) {
    if (after < index.length) candidates.push(index[after++])
    if (candidates.length < count && before >= 0) candidates.push(index[before--])
  }

  return candidates.map(({ slug: s, date }) => {
    const { title, heroImage, content, excerpt } = parseMarkdown(s)
    return { slug: s, date, title, heroImage, content, excerpt }
  })
}

export function getAllSlugs(): string[] {
  return parseIndex().map((p) => p.slug)
}
