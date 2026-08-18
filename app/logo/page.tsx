import { resolver } from "@/lib/logos"
import LogoClient from "./LogoClient"

// Se prerenderiza en el build: `resolver()` lee public/logo del disco, y en
// runtime ese directorio no está garantizado.
export const dynamic = "force-static"

export const metadata = {
  title: "Logos RedAgrupa",
  description:
    "Archivos del logo RedAgrupa alojados con URL pública y estable, para referenciarlos desde plantillas de correo y sistemas externos.",
  alternates: {
    canonical: "https://www.redagrupa.cl/logo",
  },
  // Es una página de recursos para uso interno del cliente y sus proveedores,
  // no contenido de marketing: no tiene por qué competir en el buscador.
  robots: { index: false, follow: false },
}

export default function LogoPage() {
  return <LogoClient grupos={resolver()} />
}
