import HomeClient from "./HomeClient"

export const metadata = {
  title: "RedAgrupa - Gestión de Seguros Complementarios para Pymes",
  description:
    "Gestión integral de seguros complementarios de salud para pymes en Chile. +10 años de experiencia, +300 empresas clientes, +9.000 familias protegidas. Sin trámites eternos ni lenguaje técnico.",
}

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RedAgrupa",
  url: "https://www.redagrupa.cl",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    ratingCount: "3",
    reviewCount: "3",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Marcela Lorenzo",
        jobTitle: "Partner CEO en JSTL",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Levábamos años encontrando un seguro que permitiese como empresa pequeña poder tener cobertura adicional. Hemos encontrado asesoría confiable, con profesionales atentos capacitados para resolver cualquier duda. Excelente servicio, recomiendo Redagrupa a ojos cerrados.",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Manuel Pamplona",
        jobTitle: "Gerente Regional en EngMe",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Contratamos Redagrupa como beneficio extra para trabajadores, pero al poco tiempo nos dimos cuenta que es un gran aliado, tanto clientes como empleados. Es el agregado bien servicio indiscutible con ellos.",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Roberto Allaro",
        jobTitle: "Gerente General en SCLatam",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Antes no había sido posible conseguir seguro complementario para mis colaboradores, ya que para tratar de una compañía de pocos empleados no cumplíamos con los requisitos. Pero gracias a Redagrupa lo conseguimos.",
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <link rel="preload" as="image" href="/images/hero-redagrupa.webp" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <HomeClient />
    </>
  )
}
