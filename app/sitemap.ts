import { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"
import fs from "fs"
import path from "path"

function getPageModified(pagePath: string): Date {
  const filePath = path.join(process.cwd(), "app", pagePath, "page.tsx")
  try {
    return fs.statSync(filePath).mtime
  } catch {
    return new Date()
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.redagrupa.cl"

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: getPageModified(""),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/seguro-complementario`,
      lastModified: getPageModified("seguro-complementario"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seguro-complementario-bice-pyme`,
      lastModified: getPageModified("seguro-complementario-bice-pyme"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seguro-complementario-bice-personas`,
      lastModified: getPageModified("seguro-complementario-bice-personas"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/beneficios-redagrupa`,
      lastModified: getPageModified("beneficios-redagrupa"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: getPageModified("nosotros"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: getPageModified("blog"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/formularios`,
      lastModified: getPageModified("formularios"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/politicas-de-privacidad`,
      lastModified: getPageModified("politicas-de-privacidad"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  const blogPosts = getAllPosts()
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
