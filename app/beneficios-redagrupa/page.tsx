import BeneficiosClient from "./BeneficiosClient"

export const metadata = {
  title: "Beneficios de Salud para Empresas",
  keywords: ["beneficios corporativos salud", "convenios empresas Chile", "bienestar laboral", "vacunación empresas"],
  description:
    "Convenios de salud, bienestar y vacunación corporativa para empresas clientes de RedAgrupa. +9.000 familias protegidas en Chile.",
  alternates: {
    canonical: "https://www.redagrupa.cl/beneficios-redagrupa",
  },
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Beneficios Corporativos de Salud y Bienestar",
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
