import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <header className="bg-[#cc0033] text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-redagrupa.png"
              alt="RedAgrupa Logo"
              width={160}
              height={40}
              className="h-6 md:h-8 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-white font-medium text-sm hover:text-white/80 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-lg text-center space-y-6">
          <p className="text-6xl font-bold text-[#cc0033]">404</p>
          <h1 className="text-2xl font-bold text-gray-900">
            Página no encontrada
          </h1>
          <p className="text-base text-gray-700 leading-relaxed">
            La página que buscas no existe o fue movida. Te invitamos a explorar
            nuestros servicios:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            <Link
              href="/"
              className="px-6 py-3 bg-[#cc0033] text-white rounded-lg font-medium text-sm hover:bg-[#a30029] transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/seguro-complementario"
              className="px-6 py-3 border border-[#cc0033] text-[#cc0033] rounded-lg font-medium text-sm hover:bg-red-50 transition-colors"
            >
              Seguro Complementario
            </Link>
            <Link
              href="/seguro-complementario-bice-pyme"
              className="px-6 py-3 border border-[#cc0033] text-[#cc0033] rounded-lg font-medium text-sm hover:bg-red-50 transition-colors"
            >
              Planes BICE Pyme
            </Link>
            <Link
              href="/beneficios-redagrupa"
              className="px-6 py-3 border border-[#cc0033] text-[#cc0033] rounded-lg font-medium text-sm hover:bg-red-50 transition-colors"
            >
              Beneficios Empresas
            </Link>
          </div>

          <p className="text-sm text-gray-500 pt-4">
            ¿Necesitas ayuda?{" "}
            <a
              href="https://wa.me/56982414614"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] font-medium hover:underline"
            >
              Escríbenos por WhatsApp
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
