import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import ExitIntentPopupLazy from "@/components/ExitIntentPopupLazy"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.redagrupa.cl"),
  title: {
    default: "RedAgrupa - Gestión de Seguros Complementarios para Pymes",
    template: "%s | RedAgrupa",
  },
  description:
    "Gestión integral de seguros complementarios de salud para pymes en Chile. +10 años de experiencia, +300 empresas clientes, +9.000 familias protegidas. Sin trámites eternos ni lenguaje técnico.",
  alternates: {},
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
    site: "@redagrupa",
    creator: "@redagrupa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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

export const viewport: Viewport = {
  themeColor: "#cc0033",
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
        <link rel="preload" as="image" href="/images/hero-redagrupa.webp" type="image/webp" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="alternate" type="application/rss+xml" title="RedAgrupa — Conocimiento Empresa" href="/feed.xml" />
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
        <ExitIntentPopupLazy />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.redagrupa.cl/#website",
              name: "RedAgrupa",
              url: "https://www.redagrupa.cl",
              inLanguage: "es-CL",
              description: "Gestión integral de seguros complementarios de salud para pymes en Chile.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness", "InsuranceAgency"],
              "@id": "https://www.redagrupa.cl/#organization",
              name: "RedAgrupa",
              legalName: "CJW Corredores de Seguros SpA",
              alternateName: ["Red Agrupa", "RedAgrupa Seguros", "CJW Corredores de Seguros"],
              taxID: "77.034.194-9",
              identifier: [
                {
                  "@type": "PropertyValue",
                  propertyID: "RUT",
                  value: "77.034.194-9",
                },
                {
                  "@type": "PropertyValue",
                  propertyID: "CMF",
                  value: "77034194",
                  url: "https://www.cmfchile.cl/institucional/mercados/entidad.php?auth=&send=&mercado=S&rut=77034194&grupo=&tipoentidad=CSJUR&vig=VI&row=AAAwU3AAWAAAWOdAAZ&control=svs&pestania=1",
                },
              ],
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                name: "Registro de Corredor de Seguros Jurídico",
                credentialCategory: "RegulatoryLicense",
                recognizedBy: {
                  "@type": "GovernmentOrganization",
                  name: "Comisión para el Mercado Financiero de Chile",
                  alternateName: "CMF Chile",
                  url: "https://www.cmfchile.cl",
                },
                url: "https://www.cmfchile.cl/institucional/mercados/entidad.php?auth=&send=&mercado=S&rut=77034194&grupo=&tipoentidad=CSJUR&vig=VI&row=AAAwU3AAWAAAWOdAAZ&control=svs&pestania=1",
              },
              url: "https://www.redagrupa.cl",
              inLanguage: "es-CL",
              logo: {
                "@type": "ImageObject",
                url: "https://www.redagrupa.cl/images/logo-redagrupa.png",
              },
              slogan:
                "Gestiona tus seguros complementarios de salud para que tu pyme y tu equipo estén protegidos, sin trámites eternos ni lenguaje técnico imposible.",
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
              hasMap: "https://www.google.com/maps/search/?api=1&query=Los+Militares+5620+Las+Condes+Santiago+Chile",
              telephone: "+56228132245",
              email: "reembolsos@redagrupa.cl",
              sameAs: [
                "https://www.facebook.com/RedAgrupa/",
                "https://www.instagram.com/redagrupa/",
                "https://www.linkedin.com/company/redagrupa",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+56228132245",
                contactType: "customer service",
                availableLanguage: "Spanish",
                areaServed: "CL",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              foundingDate: "2014-01-01",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 5,
                maxValue: 10,
              },
              knowsAbout: [
                "Seguros complementarios de salud",
                "Seguros colectivos para pymes",
                "Gestión de reembolsos médicos",
                "Coberturas ambulatorias y hospitalarias",
                "Seguros de vida grupales",
                "Beneficios corporativos de salud",
              ],
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
              image: "https://www.redagrupa.cl/images/logo-redagrupa.png",
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
      </body>
    </html>
  )
}
