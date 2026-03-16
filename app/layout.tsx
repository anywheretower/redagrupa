import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
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
        <link rel="preload" as="image" href="/images/logo-20redagrupa-3.png" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/hero-redagrupa.webp" />
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
      </head>
      <body className={`${geist.className} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCQDTCD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  )
}
