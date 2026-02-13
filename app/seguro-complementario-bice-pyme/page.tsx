import BicePymeClient from "./BicePymeClient"

export const metadata = {
  title: "Seguro Complementario BICE Pyme | RedAgrupa",
  description:
    "Planes de seguro complementario de salud BICE Vida para pymes. Seguro de Salud + Seguro de Vida desde UF 0,5200 mensual por trabajador.",
}

export default function BicePymePage() {
  return <BicePymeClient />
}
