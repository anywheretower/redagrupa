/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=()" },
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
    ]
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: "/seguro-complementario", destination: "/seguros-salud", permanent: true },
      { source: "/seguro-complementario/", destination: "/seguros-salud", permanent: true },
      { source: "/seguro-complementario/:path*", destination: "/seguros-salud", permanent: true },
      { source: "/seguro-colectivo", destination: "/seguros-salud", permanent: true },
      { source: "/seguro-colectivo/", destination: "/seguros-salud", permanent: true },
      { source: "/seguro-dental", destination: "/seguros-salud", permanent: true },
      { source: "/seguro-dental/", destination: "/seguros-salud", permanent: true },
      { source: "/seguro-medico", destination: "/seguros-salud", permanent: true },
      { source: "/seguro-medico/:path*", destination: "/seguros-salud", permanent: true },
      { source: "/formulario-de-reembolso", destination: "/", permanent: true },
      { source: "/formulario-de-reembolso/", destination: "/", permanent: true },
      { source: "/contacto", destination: "/", permanent: true },
      { source: "/contacto/", destination: "/", permanent: true },
      { source: "/web", destination: "/", permanent: true },
      { source: "/web/", destination: "/", permanent: true },
    ]
  },
}

export default nextConfig
