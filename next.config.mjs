/** Slugs de blog posts archivados — redirigir 301 a /blog */
const prunedBlogSlugs = [
  "espacio-trabajo",
  "imagen-corporativa",
  "elementos-proteccion-personal",
  "reclutamiento-seleccion-personal",
  "pausas-activas",
  "canal-denuncias",
  "multas-direccion-trabajo",
  "entrevista-laboral",
  "proyecto-pretensiones-renta",
  "accidentes-laborales",
  "carta-aviso-despido",
  "causales-de-despido",
  "carta-oferta-laboral",
  "gestion-personal",
  "otec-cursos",
  "teletrabajo",
  "descuento-afc",
  "licencias-medicas",
  "ley-de-conciliacion",
  "capacitaciones-laborales",
  "ley-corta-de-isapres",
  "contrato-de-prestacion-de-servicios",
  "ley-de-inclusion-laboral",
  "ley-karin",
  "correccion-monetaria",
  "libro-de-asistencia",
  "situacion-tributaria-de-terceros",
  "pago-de-remuneraciones",
  "inicio-de-actividades",
  "feriados-chile-2024",
  "carpeta-tributaria",
  "como-crear-una-empresa",
  "calcular-finiquito",
  "perfil-de-cargo",
  "tope-imponible",
  "valor-hora-extra",
  "hora-extra",
  "jornada-laboral",
  "cotizaciones-previsionales",
  "pago-finiquito",
  "aguinaldo",
  "sueldo-bruto-a-liquido",
  "gratificacion-legal",
  "jornada-de-trabajo",
  "liquidaciones-de-sueldo",
  "evaluacion-de-desempeno",
  "gestion-del-desempeno",
  "alza-isapre",
  "beneficios-laborales",
  "incentivos-laborales",
  "rotacion-de-personal",
  "enfermedades-preexistentes",
  "fonasa-o-isapre",
  "proyecto-40-horas",
  "calculo-vacaciones-proporcionales",
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: false,
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
        source: "/:path((?!api|_next).*)",
        headers: [
          { key: "Cache-Control", value: "public, s-maxage=60, stale-while-revalidate=3600" },
        ],
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
    const blogRedirects = prunedBlogSlugs.map((slug) => ({
      source: `/blog/${slug}`,
      destination: "/blog",
      permanent: true,
    }))
    return [
      { source: "/seguros-salud", destination: "/seguro-complementario", permanent: true },
      { source: "/seguro-colectivo", destination: "/seguro-complementario", permanent: true },
      { source: "/seguro-dental", destination: "/seguro-complementario", permanent: true },
      { source: "/seguro-medico", destination: "/seguro-complementario", permanent: true },
      { source: "/seguro-medico/:path*", destination: "/seguro-complementario", permanent: true },
      { source: "/formulario-de-reembolso", destination: "/", permanent: true },
      { source: "/contacto", destination: "/contactos", permanent: true },
      { source: "/web", destination: "/", permanent: true },
      ...blogRedirects,
    ]
  },
}

export default nextConfig
