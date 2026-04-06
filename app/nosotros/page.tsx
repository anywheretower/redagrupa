import NosotrosClient from "./NosotrosClient"

export const metadata = {
  title: "Sobre Nosotros — Expertos en Seguros Complementarios para Pymes",
  description:
    "Más de 10 años gestionando seguros complementarios de salud para pymes. +300 empresas y +9.000 familias protegidas en Chile.",
  alternates: {
    canonical: "https://www.redagrupa.cl/nosotros",
  },
}

export default function NosotrosPage() {
  return <NosotrosClient />
}
