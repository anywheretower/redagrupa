import SegurosSaludClient from "./SegurosSaludClient"

export const metadata = {
  title: "Seguro Complementario de Salud para Empresas",
  keywords: ["seguro complementario de salud", "seguro salud empresas", "cobertura Fonasa Isapre", "copago médico Chile"],
  description:
    "Seguro complementario de salud para empresas en Chile. Cubre gastos que exceden Fonasa o Isapre. +300 pymes confían en RedAgrupa. Cotiza sin costo.",
  alternates: {
    canonical: "https://www.redagrupa.cl/seguro-complementario",
  },
  openGraph: {
    title: "Seguro Complementario de Salud para Empresas",
    description:
      "Seguro complementario de salud para empresas en Chile. Cubre gastos que exceden Fonasa o Isapre. +300 pymes confían en RedAgrupa. Cotiza sin costo.",
    url: "https://www.redagrupa.cl/seguro-complementario",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es un Seguro Complementario de Salud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un seguro que cubre total o parcialmente el copago que Fonasa o Isapre no bonifica en prestaciones médicas. La empresa contrata una póliza que define porcentajes de cobertura, topes anuales y condiciones, reduciendo significativamente el gasto de bolsillo del trabajador en consultas, exámenes y hospitalizaciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué coberturas incluye un Seguro Complementario de Salud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las pólizas contemplan coberturas en: Vida, Hospitalización (incluyendo cirugías y estadías clínicas), Atención ambulatoria (consultas médicas, exámenes y procedimientos), Medicamentos (farmacia según receta médica) y Catastrófica (para eventos de alto costo). De forma opcional, pueden incorporar cobertura dental.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son los beneficios del Seguro Complementario de Salud para empresas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contratar un Seguro Complementario de Salud permite a las empresas: reducir el impacto financiero de gastos médicos en sus colaboradores, mejorar el bienestar y la percepción del beneficio laboral, aumentar la fidelización y retención de trabajadores, ofrecer un beneficio competitivo frente al mercado laboral, y ajustar coberturas y capitales a la realidad de la empresa.",
      },
    },
  ],
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Seguro Complementario de Salud para Empresas",
  description: "Asesoría gratuita y gestión integral de seguros complementarios de salud para pymes en Chile. Comparamos planes de las principales aseguradoras.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.redagrupa.cl/#organization",
    name: "RedAgrupa",
  },
  areaServed: { "@type": "Country", name: "Chile" },
  serviceType: "Correduría de Seguros de Salud",
}

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Seguro Complementario de Salud para Empresas",
  url: "https://www.redagrupa.cl/seguro-complementario",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "main p:first-of-type"],
  },
}

export default function SegurosSaludPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <SegurosSaludClient />
    </>
  )
}
