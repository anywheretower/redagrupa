import Image from "next/image"
import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#cc0033] text-white py-12 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-10 lg:grid lg:grid-cols-4 lg:gap-12 lg:items-start">
          {/* Col 1: Logo */}
          <div className="flex justify-center lg:justify-start lg:col-span-1">
            <Image
              src="/images/logo-20redagrupa-3.png"
              alt="RedAgrupa Logo"
              width={160}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Col 2: Servicios */}
          <div className="text-center lg:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/seguros-salud" className="text-sm hover:underline text-white/90">
                  Seguro Complementario Salud
                </Link>
              </li>
              <li>
                <Link href="/seguro-complementario-bice-pyme" className="text-sm hover:underline text-white/90">
                  Seguro BICE Pyme
                </Link>
              </li>
              <li>
                <Link href="/seguro-complementario-bice-personas" className="text-sm hover:underline text-white/90">
                  Seguro BICE Personas
                </Link>
              </li>
              <li>
                <Link href="/beneficios-redagrupa" className="text-sm hover:underline text-white/90">
                  Beneficios RedAgrupa
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Empresa */}
          <div className="text-center lg:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-sm hover:underline text-white/90">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:underline text-white/90">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/politicas-de-privacidad" className="text-sm hover:underline text-white/90">
                  Políticas de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto + CTA */}
          <div className="space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            <Link
              href="/#formulario-contacto"
              className="inline-block bg-white text-[#cc0033] font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors"
            >
              Cotiza tu seguro →
            </Link>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contacto</h3>
            <address className="not-italic space-y-3">
              <div className="flex items-center gap-3 max-w-[280px] w-full">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:reembolsos@redagrupa.cl" className="text-sm hover:underline text-left">Casilla de Reembolsos</a>
              </div>
              <div className="flex items-center gap-3 max-w-[280px] w-full">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+56228132245" className="text-sm hover:underline text-left">
                  +56 (22) 813 2245
                </a>
              </div>
              <div className="flex items-center gap-3 max-w-[280px] w-full">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm leading-relaxed text-left">
                  Los Militares 5620, of 1011, Las Condes, Santiago, Chile.
                </p>
              </div>
            </address>
          </div>
        </div>
      </div>
    </footer>
  )
}
