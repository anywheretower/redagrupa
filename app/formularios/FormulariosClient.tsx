"use client"

import Image from "next/image"
import Link from "next/link"
import {
  UsersIcon,
  Facebook,
  Instagram,
  Linkedin,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/MobileMenu"
import Footer from "@/components/Footer"
import Breadcrumbs from "@/components/Breadcrumbs"

export default function FormulariosClient() {
  return (
    <main id="contenido-principal" className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#cc0033] text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center -ml-2 lg:ml-0">
            <Image
              src="/images/logo-20redagrupa-3.png"
              alt="RedAgrupa Logo"
              width={160}
              height={40}
              priority
              className="h-6 md:h-8 w-auto"
            />
          </Link>
          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-8">
            <Link href="/nosotros" className="text-white font-medium text-sm">
              Nosotros
            </Link>
            <Link href="/seguro-complementario" className="text-white font-medium text-sm">
              Seguro Complementario Salud
            </Link>
            <Link href="/beneficios-redagrupa" className="text-white font-medium text-sm">
              Beneficios RedAgrupa
            </Link>
            <div className="relative group">
              <button
                aria-haspopup="true"
                aria-expanded="false"
                className="text-white font-medium text-sm flex items-center gap-1"
              >
                Seguro BICE
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg py-2 min-w-[200px]" role="menu">
                  <Link href="/seguro-complementario-bice-pyme" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#cc0033] transition-colors">
                    Seguro BICE Pyme
                  </Link>
                  <Link href="/seguro-complementario-bice-personas" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#cc0033] transition-colors">
                    Seguro BICE Personas
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/blog" className="text-white font-medium text-sm">
              Conocimiento Empresa
            </Link>
            <Link href="/formularios" className="text-white font-medium text-sm">
              Formularios
            </Link>
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 w-[180px]"
              asChild
            >
              <Link href="/#formulario-contacto">
                Solicitar Asesoría
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="/contactos" target="_blank" rel="noopener noreferrer">
                <UsersIcon className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <MobileMenu />
        </div>
      </header>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
        <a href="https://www.facebook.com/RedAgrupa/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#1565C0] transition-colors shadow-lg" aria-label="Facebook de RedAgrupa">
          <Facebook className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a href="https://www.instagram.com/redagrupa/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center hover:opacity-85 transition-opacity shadow-lg" aria-label="Instagram de RedAgrupa">
          <Instagram className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a href="https://www.linkedin.com/company/redagrupa" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[#0A66C2] rounded-full flex items-center justify-center hover:bg-[#084E96] transition-colors shadow-lg" aria-label="LinkedIn de RedAgrupa">
          <Linkedin className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a href="https://wa.me/56982414614" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#1DA851] flex items-center justify-center shadow-lg transition-colors" aria-label="WhatsApp de RedAgrupa">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>

      <div className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ label: "Formularios" }]} />
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl font-bold text-[#cc0033] mb-4">
                Formularios de reembolso e incorporación
              </h1>
              <p className="text-base text-gray-700 leading-[1.1]">
                Descarga los formularios de tus aseguradoras. Si necesitas ayuda con un reembolso o incorporación,
                escríbenos por <a href="https://wa.me/56982414614" className="text-[#cc0033] underline hover:no-underline">WhatsApp</a> o al <a href="mailto:cwinter@redagrupa.cl" className="text-[#cc0033] underline hover:no-underline">correo</a>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {/* Bupa */}
              <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col border border-gray-100 rounded-xl">
                <Image src="/images/bupa.png" alt="Logo Bupa - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
                <h2 className="text-lg font-semibold text-[#333333]">Seguros Bupa</h2>
                <div className="space-y-2 pt-2">
                  <a href="/formularios/bupa-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación Bupa" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Incorporación</span>
                  </a>
                  <a href="/formularios/bupa-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso dental</span>
                  </a>
                  <a href="/formularios/bupa-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                  </a>
                </div>
              </div>

              {/* Bice Vida */}
              <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col border border-gray-100 rounded-xl">
                <Image src="/images/logo-bicevida-e1674133440155.png" alt="Logo BICE Vida - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
                <h2 className="text-lg font-semibold text-[#333333]">Bice Vida</h2>
                <div className="space-y-2 pt-2">
                  <a href="/formularios/bicevida-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación BICE Vida" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Incorporación</span>
                  </a>
                  <a href="/formularios/bicevida-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso dental</span>
                  </a>
                  <a href="/formularios/bicevida-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                  </a>
                </div>
              </div>

              {/* Sura */}
              <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col border border-gray-100 rounded-xl">
                <Image src="/images/sura-seguros300-e1674133176152.png" alt="Logo Sura - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
                <h2 className="text-lg font-semibold text-[#333333]">Seguros Sura</h2>
                <div className="space-y-2 pt-2">
                  <a href="/formularios/sura-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación Sura" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Incorporación</span>
                  </a>
                  <a href="/formularios/sura-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso dental</span>
                  </a>
                  <a href="/formularios/sura-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                  </a>
                </div>
              </div>

              {/* Consorcio */}
              <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col border border-gray-100 rounded-xl">
                <Image src="/images/consorcio300-e1674133353916.png" alt="Logo Consorcio - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
                <h2 className="text-lg font-semibold text-[#333333]">Consorcio</h2>
                <div className="space-y-2 pt-2">
                  <a href="/formularios/consorcio-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación Consorcio" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Incorporación</span>
                  </a>
                  <a href="/formularios/consorcio-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso dental</span>
                  </a>
                  <a href="/formularios/consorcio-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                  </a>
                </div>
              </div>

              {/* MetLife */}
              <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col border border-gray-100 rounded-xl">
                <Image src="/images/metlife-logo-e1674133505895.png" alt="Logo MetLife - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
                <h2 className="text-lg font-semibold text-[#333333]">MetLife</h2>
                <div className="space-y-2 pt-2">
                  <a href="/formularios/metlife-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación MetLife" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Incorporación</span>
                  </a>
                  <a href="/formularios/metlife-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso dental</span>
                  </a>
                  <a href="/formularios/metlife-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                  </a>
                </div>
              </div>

              {/* BCI */}
              <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col border border-gray-100 rounded-xl">
                <Image src="/images/bci-seguros300.png" alt="Logo BCI Seguros - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
                <h2 className="text-lg font-semibold text-[#333333]">BCI Seguros</h2>
                <div className="space-y-2 pt-2">
                  <a href="/formularios/bci-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación BCI" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Incorporación</span>
                  </a>
                  <a href="/formularios/bci-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso dental</span>
                  </a>
                  <a href="/formularios/bci-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                  </a>
                </div>
              </div>

              {/* Vida Security */}
              <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col border border-gray-100 rounded-xl">
                <Image src="/images/security.png" alt="Logo Vida Security - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
                <h2 className="text-lg font-semibold text-[#333333]">Vida Security</h2>
                <div className="space-y-2 pt-2">
                  <a href="/formularios/vidasecurity-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación Vida Security" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Incorporación</span>
                  </a>
                  <a href="/formularios/vidasecurity-informe-medico-tratante.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Informe médico tratante</span>
                  </a>
                  <a href="/formularios/vidasecurity-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso dental</span>
                  </a>
                  <a href="/formularios/vidasecurity-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                  </a>
                </div>
              </div>

              {/* Help */}
              <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col border border-gray-100 rounded-xl">
                <Image src="/images/logo-help1-e1674133566493.png" alt="Logo Help Seguros - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
                <h2 className="text-lg font-semibold text-[#333333]">Help Seguros</h2>
                <div className="space-y-2 pt-2">
                  <a href="/formularios/help-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación Help" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Incorporación</span>
                  </a>
                  <a href="/formularios/help-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso dental</span>
                  </a>
                  <a href="/formularios/help-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                  </a>
                </div>
              </div>

              {/* Chilena Consolidada */}
              <div className="bg-white p-6 space-y-4 min-h-0 md:min-h-[280px] flex flex-col border border-gray-100 rounded-xl">
                <Image src="/images/logo-chilena-consolidada2-e1674133731697.png" alt="Logo Chilena Consolidada - aseguradora partner de RedAgrupa" width={120} height={32} className="h-8 w-auto object-contain" />
                <h2 className="text-lg font-semibold text-[#333333]">Chilena Consolidada</h2>
                <div className="space-y-2 pt-2">
                  <a href="/formularios/chilenaconsolidada-incorporacion.pdf" target="_blank" rel="noopener noreferrer" aria-label="Incorporación Chilena Consolidada" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Incorporación</span>
                  </a>
                  <a href="/formularios/chilenaconsolidada-informe-medico-tratante.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Informe médico tratante</span>
                  </a>
                  <a href="/formularios/chilenaconsolidada-reembolso-dental.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso dental</span>
                  </a>
                  <a href="/formularios/chilenaconsolidada-reembolso-salud.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#cc0033] text-sm hover:gap-3 transition-all">
                    <Download className="w-4 h-4" /><span>Reembolso de salud</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
