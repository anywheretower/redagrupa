import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import ExitIntentPopup from "@/components/ExitIntentPopup"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.redagrupa.cl"),
  title: {
    default: "RedAgrupa - Gestión de Seguros Complementarios para Pymes",
    template: "%s | RedAgrupa",
  },
  description:
    "Gestión integral de seguros complementarios de salud para pymes en Chile. +10 años de experiencia, +300 empresas clientes, +9.000 familias protegidas. Sin trámites eternos ni lenguaje técnico.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "RedAgrupa",
    images: [
      {
        url: "/images/og-redagrupa.jpg",
        width: 1200,
        height: 630,
        alt: "RedAgrupa - Seguros Complementarios para Pymes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      {
        url: "/icon-light-32x32.png",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="google-site-verification" content="Zv9E4we9myI4IJe3uDP17K0TGfQl9sFvfWYphYt_2bI" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PCQDTCD');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "RedAgrupa",
              url: "https://www.redagrupa.cl",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.redagrupa.cl/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "InsuranceAgency"],
              name: "RedAgrupa",
              url: "https://www.redagrupa.cl",
              logo: "https://www.redagrupa.cl/images/logo-20redagrupa-3.png",
              description:
                "Gestión de seguros complementarios de salud para pymes en Chile. Más de 10 años de experiencia, 300+ empresas y 9.000+ familias protegidas.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Los Militares 5620, of 1011",
                addressLocality: "Las Condes",
                addressRegion: "Región Metropolitana",
                postalCode: "7550000",
                addressCountry: "CL",
              },
              telephone: "+56228132245",
              email: "reembolsos@redagrupa.cl",
              sameAs: [
                "https://www.facebook.com/RedAgrupa/",
                "https://www.instagram.com/redagrupa/",
                "https://www.linkedin.com/company/redagrupa",
              ],
              foundingDate: "2014",
              areaServed: {
                "@type": "Country",
                name: "Chile",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.redagrupa.cl/#localbusiness",
              name: "RedAgrupa",
              image: "https://www.redagrupa.cl/images/logo-20redagrupa-3.png",
              url: "https://www.redagrupa.cl",
              telephone: "+56228132245",
              email: "reembolsos@redagrupa.cl",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Los Militares 5620, of 1011",
                addressLocality: "Las Condes",
                addressRegion: "Región Metropolitana",
                postalCode: "7550000",
                addressCountry: "CL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -33.4103,
                longitude: -70.5831,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`${geist.className} antialiased`}>
        <a href="#contenido-principal" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#cc0033] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-sm focus:font-semibold">
          Saltar al contenido
        </a>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCQDTCD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <ExitIntentPopup />
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  )
}
