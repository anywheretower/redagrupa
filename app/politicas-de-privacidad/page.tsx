import PoliticasClient from "./PoliticasClient"

export const metadata = {
  title: "Políticas de Privacidad",
  description:
    "Política de privacidad y protección de datos personales de RedAgrupa. Cumplimiento de la Ley 19.628 sobre protección de la vida privada en Chile.",
  alternates: {
    canonical: "https://www.redagrupa.cl/politicas-de-privacidad",
  },
}

export default function PoliticasPage() {
  return <PoliticasClient />
}
