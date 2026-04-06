"use client"

import Image from "next/image"
import Link from "next/link"
import {
  UsersIcon,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/MobileMenu"
import Footer from "@/components/Footer"
import RevealOnScroll from "@/components/RevealOnScroll"
import Breadcrumbs from "@/components/Breadcrumbs"

export default function PoliticasClient() {
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
            <Link href="/seguros-salud" className="text-white font-medium text-sm">
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
              Conocimiento Pyme
            </Link>
            <Link href="/formularios" className="text-white font-medium text-sm">
              Formularios
            </Link>
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-[180px]" asChild>
              <Link href="/">Volver al inicio</Link>
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
        <a
          href="https://www.facebook.com/RedAgrupa/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
          aria-label="Facebook de RedAgrupa"
        >
          <Facebook className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a
          href="https://www.instagram.com/redagrupa/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
          aria-label="Instagram de RedAgrupa"
        >
          <Instagram className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/company/redagrupa"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
          aria-label="LinkedIn de RedAgrupa"
        >
          <Linkedin className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a
          href="https://wa.me/56982414614"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#1DA851] flex items-center justify-center shadow-lg transition-colors"
          aria-label="WhatsApp de RedAgrupa"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>

      <div className="pt-20">
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Breadcrumbs items={[{ label: "Políticas de Privacidad" }]} />
              <RevealOnScroll>
                <h1 className="text-4xl font-bold text-[#cc0033] text-center mb-4">
                  Política de Privacidad
                </h1>
                <p className="text-sm text-gray-500 text-center mb-16">
                  Ultima actualizacion: febrero 2026
                </p>
              </RevealOnScroll>

              <div className="space-y-10 text-base text-gray-700 leading-[1.6]">
                {/* 1 */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduccion</h2>
                  <p>
                    RedAgrupa, con domicilio en Los Militares 5620, oficina 1011, Las Condes,
                    Santiago, Chile, se compromete a proteger la privacidad de los datos
                    personales de sus usuarios, clientes y visitantes del sitio web
                    redagrupa.vercel.app (en adelante, el &quot;Sitio&quot;).
                  </p>
                  <p className="mt-3">
                    La presente Politica de Privacidad describe como recopilamos, utilizamos,
                    almacenamos y protegemos su informacion personal, en cumplimiento de la Ley
                    N° 19.628 sobre Proteccion de la Vida Privada de Chile y demas normativa
                    aplicable.
                  </p>
                </div>

                {/* 2 */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    2. Datos personales que recopilamos
                  </h2>
                  <p className="mb-3">
                    A traves de los formularios de contacto del Sitio, podemos recopilar los
                    siguientes datos personales:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Nombre completo</li>
                    <li>Correo electronico</li>
                    <li>Numero de telefono</li>
                    <li>Nombre de la empresa</li>
                    <li>Rubro de la empresa</li>
                    <li>Cantidad de empleados</li>
                    <li>Motivo de consulta y mensaje</li>
                  </ul>
                  <p className="mt-3">
                    Adicionalmente, el Sitio puede recopilar informacion tecnica de navegacion
                    de forma automatica, como direccion IP, tipo de navegador, paginas visitadas
                    y tiempo de permanencia, mediante herramientas de analitica web.
                  </p>
                </div>

                {/* 3 */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    3. Finalidad del tratamiento de datos
                  </h2>
                  <p className="mb-3">Los datos personales recopilados seran utilizados para:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Responder a sus consultas y solicitudes de informacion</li>
                    <li>Brindar asesoria sobre seguros complementarios de salud y beneficios corporativos</li>
                    <li>Elaborar cotizaciones y propuestas comerciales personalizadas</li>
                    <li>Enviar comunicaciones relacionadas con nuestros servicios, siempre que usted haya otorgado su consentimiento</li>
                    <li>Mejorar la experiencia de navegacion y el funcionamiento del Sitio</li>
                    <li>Cumplir con obligaciones legales y regulatorias aplicables en Chile</li>
                  </ul>
                </div>

                {/* 4 */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    4. Base legal del tratamiento
                  </h2>
                  <p>
                    El tratamiento de sus datos personales se fundamenta en su consentimiento
                    expreso al completar y enviar los formularios del Sitio, asi como en el
                    interes legitimo de RedAgrupa para gestionar las solicitudes recibidas y
                    prestar sus servicios de corretaje de seguros, conforme a lo dispuesto en
                    la Ley N° 19.628 sobre Proteccion de la Vida Privada.
                  </p>
                </div>

                {/* 5 */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    5. Comparticion de datos con terceros
                  </h2>
                  <p className="mb-3">
                    RedAgrupa podra compartir sus datos personales unicamente con:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Companias aseguradoras:</strong> con las que trabajamos (BICE Vida,
                      BCI Seguros, Chilena Consolidada, Consorcio, MetLife, Bupa, Sura, Vida
                      Security, Help Seguros, entre otras), exclusivamente para fines de
                      cotizacion y gestion de polizas solicitadas por usted.
                    </li>
                    <li>
                      <strong>Proveedores de servicios tecnologicos:</strong> que nos asisten en
                      el funcionamiento del Sitio y la gestion de comunicaciones, bajo acuerdos
                      de confidencialidad.
                    </li>
                    <li>
                      <strong>Autoridades competentes:</strong> cuando sea requerido por ley o
                      por orden judicial.
                    </li>
                  </ul>
                  <p className="mt-3">
                    En ningun caso venderemos, alquilaremos ni cederemos sus datos personales a
                    terceros con fines publicitarios o comerciales ajenos a los servicios de
                    RedAgrupa.
                  </p>
                </div>

                {/* 6 */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    6. Seguridad de los datos
                  </h2>
                  <p>
                    RedAgrupa implementa medidas tecnicas y organizativas razonables para
                    proteger sus datos personales contra accesos no autorizados, perdida,
                    alteracion o destruccion. El Sitio utiliza protocolo HTTPS para cifrar la
                    comunicacion entre su navegador y nuestros servidores.
                  </p>
                </div>

                {/* 7 */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    7. Conservacion de los datos
                  </h2>
                  <p>
                    Sus datos personales seran conservados durante el tiempo necesario para
                    cumplir con las finalidades descritas en esta politica, y en todo caso,
                    durante los plazos exigidos por la legislacion chilena aplicable. Una vez
                    cumplidas dichas finalidades, los datos seran eliminados o anonimizados.
                  </p>
                </div>

                {/* 8 */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    8. Derechos del titular de los datos
                  </h2>
                  <p className="mb-3">
                    De acuerdo con la Ley N° 19.628, usted tiene derecho a:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Acceso:</strong> solicitar informacion sobre los datos personales
                      que mantenemos sobre usted.
                    </li>
                    <li>
                      <strong>Rectificacion:</strong> solicitar la correccion de datos inexactos
                      o incompletos.
                    </li>
                    <li>
                      <strong>Cancelacion:</strong> solicitar la eliminacion de sus datos
                      personales cuando ya no sean necesarios para los fines para los que fueron
                      recopilados.
                    </li>
                    <li>
                      <strong>Oposicion:</strong> oponerse al tratamiento de sus datos para
                      fines de marketing directo.
                    </li>
                  </ul>
                  <p className="mt-3">
                    Para ejercer cualquiera de estos derechos, puede contactarnos a traves de
                    los medios indicados en la seccion de contacto de esta politica. Responderemos
                    su solicitud dentro de los plazos establecidos por la ley.
                  </p>
                </div>

                {/* 9 */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    9. Uso de cookies y tecnologias de rastreo
                  </h2>
                  <p>
                    El Sitio puede utilizar cookies y herramientas de analitica (como Vercel
                    Analytics) para mejorar la experiencia de navegacion y obtener estadisticas
                    de uso. Estas tecnologias no recopilan datos personales identificables de
                    forma directa. Usted puede configurar su navegador para rechazar cookies,
                    aunque esto podria afectar la funcionalidad del Sitio.
                  </p>
                </div>

                {/* 10 */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    10. Enlaces a sitios de terceros
                  </h2>
                  <p>
                    El Sitio puede contener enlaces a paginas web de terceros, como companias
                    aseguradoras o plataformas de contratacion. RedAgrupa no es responsable de
                    las politicas de privacidad ni del contenido de dichos sitios externos.
                    Recomendamos revisar las politicas de privacidad de cada sitio que visite.
                  </p>
                </div>

                {/* 11 */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    11. Modificaciones a esta politica
                  </h2>
                  <p>
                    RedAgrupa se reserva el derecho de actualizar esta Politica de Privacidad
                    en cualquier momento. Las modificaciones seran publicadas en esta misma
                    pagina con la fecha de ultima actualizacion. El uso continuado del Sitio
                    despues de cualquier cambio constituye la aceptacion de la politica
                    modificada.
                  </p>
                </div>

                {/* 12 */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    12. Contacto
                  </h2>
                  <p className="mb-3">
                    Si tiene preguntas, comentarios o solicitudes relacionadas con esta Politica
                    de Privacidad o el tratamiento de sus datos personales, puede contactarnos a
                    traves de:
                  </p>
                  <ul className="list-none space-y-2">
                    <li>
                      <strong>Direccion:</strong> Los Militares 5620, oficina 1011, Las Condes,
                      Santiago, Chile.
                    </li>
                    <li>
                      <strong>Telefono:</strong> +56 (22) 813 2245
                    </li>
                    <li>
                      <strong>Sitio web:</strong> www.redagrupa.cl
                    </li>
                  </ul>
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
