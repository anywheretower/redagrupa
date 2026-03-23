import BicePymeClient from "./BicePymeClient"

export const metadata = {
  title: "Seguro Complementario BICE Pyme",
  description:
    "Planes de seguro complementario de salud BICE Vida para pymes. Seguro de Salud + Seguro de Vida desde UF 0,5200 mensual por trabajador.",
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Por qué elegir un seguro BICE Vida para tu pyme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BICE Vida es una de las aseguradoras más reconocidas de Chile, respaldada por el grupo financiero BICE. Permite proteger a tus trabajadores con coberturas ambulatorias y hospitalarias desde el primer día, incluir seguro de vida, agregar coberturas opcionales como dental y catastrófica, contratar 100% online a través de la plataforma Mi Pyme Segura, y ofrecer un beneficio competitivo que mejora la retención de talento.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Planes BICE Vida para Pymes",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          name: "Pyme Estándar",
          description: "Seguro de Salud + Seguro de Vida. 50% en atención ambulatoria, 50% en atención hospitalaria, 300 UF tope anual en salud, 500 UF en seguro de vida.",
          offers: {
            "@type": "Offer",
            price: "20647",
            priceCurrency: "CLP",
            priceValidUntil: "2026-12-31",
            availability: "https://schema.org/InStock",
            url: "https://mipymesegura.bicevida.cl/cotizacion/numero-trabajadores?negocio=cjw",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: "Pyme Premium",
          description: "Seguro de Salud + Seguro de Vida. 70% en atención ambulatoria, 70% en atención hospitalaria, 300 UF tope anual en salud, 500 UF en seguro de vida.",
          offers: {
            "@type": "Offer",
            price: "26658",
            priceCurrency: "CLP",
            priceValidUntil: "2026-12-31",
            availability: "https://schema.org/InStock",
            url: "https://mipymesegura.bicevida.cl/cotizacion/numero-trabajadores?negocio=cjw",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Product",
          name: "Pyme Elite",
          description: "Seguro de Salud + Seguro de Vida. 80% en atención ambulatoria, 80% en atención hospitalaria, UF 500 tope anual en salud, UF 500 en seguro de vida. Incluye asistencia mascota Pawer.",
          offers: {
            "@type": "Offer",
            price: "41651",
            priceCurrency: "CLP",
            priceValidUntil: "2026-12-31",
            availability: "https://schema.org/InStock",
            url: "https://mipymesegura.bicevida.cl/cotizacion/numero-trabajadores?negocio=cjw",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Product",
          name: "Pyme Elite Plus",
          description: "Seguro de Salud + Seguro de Vida. 80% en atención ambulatoria, 80% en atención hospitalaria, UF 500 tope anual en salud, UF 1.000 en seguro de vida. Incluye asistencia mascota Pawer.",
          offers: {
            "@type": "Offer",
            price: "48401",
            priceCurrency: "CLP",
            priceValidUntil: "2026-12-31",
            availability: "https://schema.org/InStock",
            url: "https://mipymesegura.bicevida.cl/cotizacion/numero-trabajadores?negocio=cjw",
          },
        },
      },
    ],
  },
]

export default function BicePymePage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <BicePymeClient />
    </>
  )
}
