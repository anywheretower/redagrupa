import PoliticasClient from "./PoliticasClient"

export const metadata = {
  title: "Políticas de Privacidad",
  description:
    "Política de privacidad y protección de datos personales de RedAgrupa. Cumplimiento de la Ley 19.628 sobre protección de la vida privada en Chile.",
  alternates: {
    canonical: "https://www.redagrupa.cl/politicas-de-privacidad",
  },
  openGraph: {
    title: "Políticas de Privacidad",
    description:
      "Política de privacidad y protección de datos personales de RedAgrupa. Cumplimiento de la Ley 19.628 sobre protección de la vida privada en Chile.",
    url: "https://www.redagrupa.cl/politicas-de-privacidad",
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

export default function PoliticasPage() {
  return <PoliticasClient />
}
