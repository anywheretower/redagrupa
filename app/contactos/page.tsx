import type { Metadata } from "next"
import ContactosClient from "./ContactosClient"

export const metadata: Metadata = {
  title: "Contactos | RedAgrupa",
  robots: { index: false, follow: false },
}

export default function ContactosPage() {
  return <ContactosClient />
}
