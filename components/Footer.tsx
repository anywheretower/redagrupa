import Image from "next/image"
import { MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#cc0033] text-white py-12 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-4 lg:gap-12 lg:items-start">
          <div className="flex justify-center lg:justify-start lg:col-span-1">
            <Image
              src="/images/logo-20redagrupa-3.png"
              alt="RedAgrupa Logo"
              width={160}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>

          <div className="space-y-4 text-center lg:text-left lg:col-span-1">
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                Los Militares 5620, of 1011, Las Condes, Santiago, Chile.
              </p>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">Casilla de Reembolsos</p>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <a href="tel:+56228132245" className="text-sm hover:underline">
                +56 (22) 813 2245
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
