import BicePymeClient from "./BicePymeClient"

export const metadata = {
  title: "Seguro Complementario BICE Pyme",
  keywords: ["seguro BICE pyme", "seguro complementario BICE Vida", "seguro salud pyme Chile", "Mi Pyme Segura"],
  description:
    "Planes de seguro complementario de salud BICE Vida para pymes. Seguro de Salud + Seguro de Vida desde UF 0,5200 mensual por trabajador.",
  alternates: {
    canonical: "https://www.redagrupa.cl/seguro-complementario-bice-pyme",
  },
  openGraph: {
    title: "Seguro Complementario BICE Pyme",
    description:
      "Planes de seguro complementario de salud BICE Vida para pymes. Seguro de Salud + Seguro de Vida desde UF 0,5200 mensual por trabajador.",
    url: "https://www.redagrupa.cl/seguro-complementario-bice-pyme",
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
      {
        "@type": "Question",
        name: "¿Cuánto cuesta el seguro complementario BICE Vida para pymes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BICE Vida ofrece 4 planes para pymes: Estándar desde $20.718/mes por trabajador (50% cobertura), Plus desde $26.750/mes (70%), Elite desde $41.794/mes (80%) y Elite Plus desde $48.567/mes (80% + mayor seguro de vida). Todos incluyen seguro de salud y seguro de vida.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántos trabajadores necesita mi pyme para contratar BICE Vida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Con BICE Vida puedes contratar desde 5 trabajadores a través de la plataforma Mi Pyme Segura. El proceso es 100% online y no requiere exámenes médicos previos. Para empresas con menos de 5 personas, existen opciones individuales como el seguro BICE Personas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué coberturas incluyen los planes BICE Pyme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Todos los planes incluyen cobertura ambulatoria (consultas, exámenes, medicamentos), hospitalaria y seguro de vida. Los planes Elite y Elite Plus agregan beneficios adicionales como asistencia mascota Pawer. Opcionalmente puedes sumar cobertura dental y catastrófica.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se hacen los reembolsos del seguro BICE Vida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los reembolsos se gestionan a través de RedAgrupa: tus colaboradores envían sus boletas y documentos, y nosotros tramitamos directamente con BICE Vida. El reembolso se deposita en la cuenta del trabajador. Con RedAgrupa el proceso es más rápido y sin papeleo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los planes BICE Pyme cubren cargas familiares?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, los planes BICE Vida para pymes permiten incluir cargas familiares (cónyuge e hijos). La prima adicional por carga depende del plan elegido. Es uno de los beneficios más valorados por los trabajadores, ya que protege a toda la familia.",
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
          image: "https://www.redagrupa.cl/images/logo-bice-vida.avif",
          brand: { "@type": "Brand", name: "BICE Vida" },
          offers: {
            "@type": "Offer",
            price: "20718",
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
          image: "https://www.redagrupa.cl/images/logo-bice-vida.avif",
          brand: { "@type": "Brand", name: "BICE Vida" },
          offers: {
            "@type": "Offer",
            price: "26750",
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
          image: "https://www.redagrupa.cl/images/logo-bice-vida.avif",
          brand: { "@type": "Brand", name: "BICE Vida" },
          offers: {
            "@type": "Offer",
            price: "41794",
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
          image: "https://www.redagrupa.cl/images/logo-bice-vida.avif",
          brand: { "@type": "Brand", name: "BICE Vida" },
          offers: {
            "@type": "Offer",
            price: "48567",
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
