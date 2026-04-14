import BeneficiosClient from "./BeneficiosClient"

export const metadata = {
  title: "Beneficios de Salud para Empresas",
  keywords: ["beneficios corporativos salud", "convenios empresas Chile", "bienestar laboral", "vacunación empresas"],
  description:
    "Convenios de salud, bienestar y vacunación corporativa para empresas clientes de RedAgrupa. +9.000 familias protegidas en Chile.",
  alternates: {
    canonical: "https://www.redagrupa.cl/beneficios-redagrupa",
  },
  openGraph: {
    title: "Beneficios de Salud para Empresas",
    description:
      "Convenios de salud, bienestar y vacunación corporativa para empresas clientes de RedAgrupa. +9.000 familias protegidas en Chile.",
    url: "https://www.redagrupa.cl/beneficios-redagrupa",
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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.redagrupa.cl/beneficios-redagrupa/#service",
  name: "Beneficios Corporativos de Salud y Bienestar",
  url: "https://www.redagrupa.cl/beneficios-redagrupa",
  description: "Convenios de salud, bienestar, vacunación y plataforma digital de beneficios para empresas clientes de RedAgrupa en Chile.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.redagrupa.cl/#organization",
    name: "RedAgrupa",
  },
  areaServed: { "@type": "Country", name: "Chile" },
  serviceType: "Beneficios Corporativos de Salud",
}

export default function BeneficiosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <BeneficiosClient />
    </>
  )
}
