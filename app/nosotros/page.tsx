import NosotrosClient from "./NosotrosClient"

export const metadata = {
  title: "Sobre Nosotros — Expertos en Seguros Complementarios para Pymes",
  description:
    "Más de 10 años gestionando seguros complementarios de salud para pymes. +300 empresas y +9.000 familias protegidas en Chile.",
  alternates: {
    canonical: "https://www.redagrupa.cl/nosotros",
  },
  openGraph: {
    title: "Sobre Nosotros — Expertos en Seguros Complementarios para Pymes",
    description:
      "Más de 10 años gestionando seguros complementarios de salud para pymes. +300 empresas y +9.000 familias protegidas en Chile.",
    url: "https://www.redagrupa.cl/nosotros",
    siteName: "RedAgrupa",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://www.redagrupa.cl/images/og-redagrupa.jpg",
        width: 1200,
        height: 630,
        alt: "RedAgrupa — Seguros Complementarios para Pymes en Chile",
      },
    ],
  },
}

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.redagrupa.cl/nosotros#aboutpage",
  name: "Sobre Nosotros — RedAgrupa",
  url: "https://www.redagrupa.cl/nosotros",
  inLanguage: "es-CL",
  description:
    "Más de 10 años gestionando seguros complementarios de salud para pymes. +300 empresas y +9.000 familias protegidas en Chile.",
  mainEntity: { "@id": "https://www.redagrupa.cl/#organization" },
  isPartOf: { "@id": "https://www.redagrupa.cl/#website" },
}

export default function NosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <NosotrosClient />
    </>
  )
}
