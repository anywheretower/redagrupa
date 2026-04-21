import BicePersonasClient from "./BicePersonasClient"

export const metadata = {
  title: "Seguro Complementario BICE Personas",
  description:
    "Seguro de salud complementario BICE Vida para personas. Protege tu salud y la de tu familia con coberturas en hospitalización, consultas, urgencias y medicamentos.",
  alternates: {
    canonical: "https://www.redagrupa.cl/seguro-complementario-bice-personas",
  },
  openGraph: {
    title: "Seguro Complementario BICE Personas",
    description:
      "Seguro de salud complementario BICE Vida para personas. Protege tu salud y la de tu familia con coberturas en hospitalización, consultas, urgencias y medicamentos.",
    url: "https://www.redagrupa.cl/seguro-complementario-bice-personas",
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

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Seguro Complementario BICE Personas",
  url: "https://www.redagrupa.cl/seguro-complementario-bice-personas",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "main p:first-of-type"],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué cubre este seguro de salud complementario para personas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Plan Hospitalario BICE Personas cubre hospitalización (cirugías, estadías clínicas, procedimientos hospitalarios), maternidad (parto normal, cesárea) y ambulancia terrestre. La cobertura es de 50% con bonificación institucional, con un límite anual de 200 UF por persona.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para quién es el seguro complementario BICE Vida Personas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pueden acceder personas entre 18 y 64 años, sus parejas (cónyuges o convivientes) e hijos dependientes del titular, estén en Isapre o Fonasa. Un seguro pensado para proteger a toda tu familia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona el reembolso del seguro complementario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En 3 simples pasos: 1) Acude a tu consulta, hospitalización o urgencia como lo haces habitualmente. 2) Presenta los documentos de respaldo para solicitar el reembolso de tus gastos. 3) Te devolvemos el porcentaje correspondiente según tu plan de forma rápida.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el seguro BICE Personas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Plan Hospitalario tiene precios mensuales en UF según las cargas familiares: solo titular UF 0,3215, titular + 1 carga UF 0,5948, titular + 2 cargas UF 0,8037, titular + 3 cargas UF 1,0610, titular + 4 cargas UF 1,2860. Todos los valores incluyen IVA.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tiene período de carencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, el seguro BICE Personas no tiene período de carencia. La cobertura comienza desde el primer día de vigencia de la póliza.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cubre atención ambulatoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Plan Hospitalario cubre exclusivamente hospitalización, maternidad y ambulancia terrestre. Para cobertura ambulatoria (consultas, exámenes, medicamentos), existen los planes colectivos para empresas desde 5 trabajadores a través de RedAgrupa.",
      },
    },
  ],
}

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Plan Hospitalario BICE Personas",
  inLanguage: "es-CL",
  description:
    "Seguro complementario de salud individual BICE Vida. Cobertura hospitalaria 50%, límite anual 200 UF por persona, sin carencias. Incluye maternidad y ambulancia terrestre.",
  image: "https://www.redagrupa.cl/images/logo-bice-vida.avif",
  brand: { "@type": "Brand", name: "BICE Vida" },
  offers: {
    "@type": "Offer",
    price: "12807",
    priceCurrency: "CLP",
    priceValidUntil: `${new Date().getFullYear()}-12-31`,
    availability: "https://schema.org/InStock",
    url: "https://segurocomplementariosalud.bicevida.cl/?negocio=aEd0TFolRnQjQzY17OVzwP1NaCN6_V6AdjkZ9TXI5bnYVyiV0rM",
  },
}

export default function BicePersonasPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <BicePersonasClient />
    </>
  )
}
