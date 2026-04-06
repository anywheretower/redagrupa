import FormulariosClient from "./FormulariosClient"

export const metadata = {
  title: "Formularios de Reembolso e Incorporación",
  description:
    "Descarga los formularios de reembolso e incorporación de las principales aseguradoras partner de RedAgrupa: Bupa, BICE Vida, Sura, Consorcio, MetLife, BCI, Vida Security, Help y Chilena Consolidada.",
  alternates: {
    canonical: "https://www.redagrupa.cl/formularios",
  },
  openGraph: {
    title: "Formularios de Reembolso e Incorporación",
    description:
      "Descarga los formularios de reembolso e incorporación de las principales aseguradoras partner de RedAgrupa: Bupa, BICE Vida, Sura, Consorcio, MetLife, BCI, Vida Security, Help y Chilena Consolidada.",
    url: "https://www.redagrupa.cl/formularios",
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

export default function FormulariosPage() {
  return <FormulariosClient />
}
