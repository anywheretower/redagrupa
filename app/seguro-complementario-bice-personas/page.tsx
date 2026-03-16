import BicePersonasClient from "./BicePersonasClient"

export const metadata = {
  title: "Seguro Complementario BICE Personas | RedAgrupa",
  description:
    "Seguro de salud complementario BICE Vida para personas. Protege tu salud y la de tu familia con coberturas en hospitalización, consultas, urgencias y medicamentos.",
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
        text: "Reembolsa gastos por hospitalización (cirugías, estadías clínicas y procedimientos hospitalarios), consultas médicas (atención ambulatoria, consultas con especialistas y exámenes), urgencias (atención de emergencia en clínicas y hospitales) y medicamentos (reembolso en farmacia según receta médica).",
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
  ],
}

export default function BicePersonasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BicePersonasClient />
    </>
  )
}
