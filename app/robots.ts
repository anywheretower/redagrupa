import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/contactos"],
      },
    ],
    sitemap: "https://www.redagrupa.cl/sitemap.xml",
  }
}
