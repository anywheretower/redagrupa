import SegurosSaludClient from "./SegurosSaludClient"

export const metadata = {
  title: "Seguro Complementario de Salud para Empresas | RedAgrupa",
  description:
    "Seguro complementario de salud para empresas en Chile. Cubre gastos que exceden Fonasa o Isapre. +300 pymes confían en RedAgrupa. Cotiza sin costo.",
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

export default function SegurosSaludPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SegurosSaludClient />
    </>
  )
}
