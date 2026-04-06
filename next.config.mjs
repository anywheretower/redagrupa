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
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=(), serial=(), hid=(), idle-detection=(), screen-wake-lock=()" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
      { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
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
      { source: "/seguros-salud", destination: "/seguro-complementario", permanent: true },
      { source: "/seguros-salud/", destination: "/seguro-complementario", permanent: true },
      { source: "/seguro-colectivo", destination: "/seguro-complementario", permanent: true },
      { source: "/seguro-colectivo/", destination: "/seguro-complementario", permanent: true },
      { source: "/seguro-dental", destination: "/seguro-complementario", permanent: true },
      { source: "/seguro-dental/", destination: "/seguro-complementario", permanent: true },
      { source: "/seguro-medico", destination: "/seguro-complementario", permanent: true },
      { source: "/seguro-medico/:path*", destination: "/seguro-complementario", permanent: true },
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
