import SegurosSaludClient from "./SegurosSaludClient"

export const metadata = {
  title: "Seguro Complementario de Salud para Empresas",
  keywords: ["seguro complementario de salud", "seguro salud empresas", "cobertura Fonasa Isapre", "copago médico Chile"],
  description:
    "Seguro complementario de salud para empresas en Chile. Cubre gastos que exceden Fonasa o Isapre. +300 pymes confían en RedAgrupa. Cotiza sin costo.",
  alternates: {
    canonical: "https://www.redagrupa.cl/seguros-salud",
  },
  openGraph: {
    title: "Seguro Complementario de Salud para Empresas",
    description:
      "Seguro complementario de salud para empresas en Chile. Cubre gastos que exceden Fonasa o Isapre. +300 pymes confían en RedAgrupa. Cotiza sin costo.",
    url: "https://www.redagrupa.cl/seguros-salud",
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
        text: "En Chile, todas las personas cuentan por ley con un sistema de salud previsional, ya sea Fonasa o Isapre, el cual cubre solo un porcentaje del costo total de las prestaciones médicas, generando un copago que debe ser asumido por la persona. El Seguro Complementario de Salud está diseñado para cubrir total o parcialmente ese copago, de acuerdo con los porcentajes, topes y condiciones definidos en la póliza contratada por la empresa, reduciendo significativamente el gasto de bolsillo del trabajador.",
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

export default function SegurosSaludPage() {
  return (
    <>
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
