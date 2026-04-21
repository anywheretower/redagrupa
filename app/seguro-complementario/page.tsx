import SegurosSaludClient from "./SegurosSaludClient"

export const metadata = {
  title: "Seguro Complementario de Salud para Empresas",
  keywords: ["seguro complementario de salud", "seguro salud empresas", "cobertura Fonasa Isapre", "copago médico Chile"],
  description:
    "RedAgrupa, corredor de seguros complementarios de salud para empresas en Chile. Comparamos planes de las principales aseguradoras y gestionamos reembolsos sin costo.",
  alternates: {
    canonical: "https://www.redagrupa.cl/seguro-complementario",
  },
  openGraph: {
    title: "Seguro Complementario de Salud para Empresas",
    description:
      "RedAgrupa, corredor de seguros complementarios de salud para empresas en Chile. Comparamos planes de las principales aseguradoras y gestionamos reembolsos sin costo.",
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
    {
      "@type": "Question",
      name: "¿Cuántos trabajadores necesita mi pyme para contratar un seguro complementario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El mínimo para planes colectivos es 5 trabajadores. Para empresas más pequeñas o personas que buscan cobertura individual existe el Seguro BICE Personas, disponible para personas entre 18 y 64 años en Fonasa o Isapre.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tiene algún costo la asesoría de RedAgrupa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La asesoría de RedAgrupa es 100% gratuita y sin compromiso. Como corredora de seguros, RedAgrupa es compensada directamente por las aseguradoras, no por los clientes. El precio del seguro es el mismo si se contrata por RedAgrupa o directo con la aseguradora.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre contratar directo con una aseguradora y usar un corredor como RedAgrupa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un corredor compara planes de múltiples aseguradoras (RedAgrupa trabaja con las principales del mercado chileno), negocia condiciones en base al volumen de su cartera, gestiona toda la administración, incorporaciones, exclusiones y reembolsos, y brinda asesoría continua sin costo adicional. Contratar directo limita las opciones a una sola aseguradora y deja la administración a cargo de la empresa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto demora el proceso de contratación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El proceso es rápido: en pocos días hábiles tu equipo puede estar cubierto. RedAgrupa se encarga de cotizar con las aseguradoras, comparar planes, preparar la propuesta, tramitar la documentación y poner la póliza en vigencia.",
      },
    },
  ],
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.redagrupa.cl/seguro-complementario/#service",
  name: "Seguro Complementario de Salud para Empresas",
  url: "https://www.redagrupa.cl/seguro-complementario",
  inLanguage: "es-CL",
  description: "Asesoría gratuita y gestión integral de seguros complementarios de salud para pymes en Chile. Comparamos planes de las principales aseguradoras.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.redagrupa.cl/#organization",
    name: "RedAgrupa",
  },
  areaServed: { "@type": "Country", name: "Chile" },
  serviceType: "Correduría de Seguros de Salud",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CLP",
    description: "Cotización y asesoría sin costo",
  },
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
