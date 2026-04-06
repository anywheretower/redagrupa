import FormulariosClient from "./FormulariosClient"

export const metadata = {
  title: "Formularios de Reembolso e Incorporación",
  description:
    "Descarga los formularios de reembolso e incorporación de las principales aseguradoras partner de RedAgrupa: Bupa, BICE Vida, Sura, Consorcio, MetLife, BCI, Vida Security, Help y Chilena Consolidada.",
  alternates: {
    canonical: "https://www.redagrupa.cl/formularios",
  },
}

export default function FormulariosPage() {
  return <FormulariosClient />
}
