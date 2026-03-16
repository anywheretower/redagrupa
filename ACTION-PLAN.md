# Plan de Acción SEO — RedAgrupa
**Fecha:** 15 marzo 2026
**Score actual:** 38/100
**Score objetivo:** 75+/100

---

## 🔴 CRÍTICO (Implementar inmediatamente)

### 1. Crear robots.txt
**Impacto:** Crawlability + AI Search
**Esfuerzo:** 10 min
**Archivo:** `app/robots.ts`
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/contactos'],
      },
    ],
    sitemap: 'https://www.redagrupa.cl/sitemap.xml',
  }
}
```

### 2. Crear sitemap.xml dinámico
**Impacto:** Indexación de todas las páginas
**Esfuerzo:** 20 min
**Archivo:** `app/sitemap.ts`
```typescript
import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.redagrupa.cl'

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/seguros-salud`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/beneficios-redagrupa`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/seguro-complementario-bice-pyme`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/seguro-complementario-bice-personas`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/nosotros`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/politicas-de-privacidad`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  const blogSlugs = getAllSlugs()
  const blogPages = blogSlugs.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
```

### 3. Redirecciones 301 de URLs antiguas (WordPress)
**Impacto:** Recuperar link equity y evitar 404s en Google
**Esfuerzo:** 15 min
**Archivo:** `next.config.mjs` — agregar redirects
```javascript
async redirects() {
  return [
    { source: '/seguro-complementario', destination: '/seguros-salud', permanent: true },
    { source: '/seguro-complementario/', destination: '/seguros-salud', permanent: true },
    { source: '/seguro-colectivo', destination: '/seguros-salud', permanent: true },
    { source: '/seguro-colectivo/', destination: '/seguros-salud', permanent: true },
    { source: '/seguro-dental', destination: '/seguros-salud', permanent: true },
    { source: '/seguro-dental/', destination: '/seguros-salud', permanent: true },
    { source: '/seguro-medico', destination: '/seguros-salud', permanent: true },
    { source: '/seguro-medico/:path*', destination: '/seguros-salud', permanent: true },
    { source: '/formulario-de-reembolso', destination: '/', permanent: true },
    { source: '/formulario-de-reembolso/', destination: '/', permanent: true },
    { source: '/contacto', destination: '/contactos', permanent: true },
    { source: '/contacto/', destination: '/contactos', permanent: true },
    { source: '/web', destination: '/', permanent: true },
    { source: '/web/', destination: '/', permanent: true },
  ]
}
```

### 4. Agregar canonical + Open Graph en layout.tsx
**Impacto:** Social sharing + duplicate content prevention
**Esfuerzo:** 15 min
**Archivo:** `app/layout.tsx` — expandir metadata
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://www.redagrupa.cl'),
  title: {
    default: 'RedAgrupa - Gestión de Seguros Complementarios para Pymes',
    template: '%s | RedAgrupa',
  },
  description: 'Gestiona tus seguros complementarios de salud para que tu pyme y tu equipo estén protegidos, sin trámites eternos ni lenguaje técnico imposible.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: 'RedAgrupa',
    images: [{ url: '/images/og-redagrupa.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  // ... icons existentes
}
```
**Nota:** Necesitan crear imagen OG de 1200×630px.

### 5. Agregar JSON-LD Organization + LocalBusiness
**Impacto:** Rich results, Knowledge Panel, brand authority
**Esfuerzo:** 20 min
**Archivo:** `app/layout.tsx` — agregar script en `<head>`
```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "InsuranceAgency"],
  "name": "RedAgrupa",
  "url": "https://www.redagrupa.cl",
  "logo": "https://www.redagrupa.cl/images/logo-20redagrupa-3.png",
  "description": "Gestión de seguros complementarios de salud para pymes en Chile",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Los Militares 5620, of 1011",
    "addressLocality": "Las Condes",
    "addressRegion": "Santiago",
    "addressCountry": "CL"
  },
  "telephone": "+56228132245",
  "email": "reembolsos@redagrupa.cl",
  "sameAs": [
    "https://www.facebook.com/RedAgrupa/",
    "https://www.instagram.com/redagrupa/",
    "https://www.linkedin.com/company/redagrupa"
  ],
  "foundingDate": "2014",
  "areaServed": "Chile"
}
```

---

## 🟠 ALTO (Implementar esta semana)

### 6. Separar Home en Server + Client Component
**Impacto:** Metadata SEO correcta para la home
**Esfuerzo:** 30 min
Mover la metadata de `layout.tsx` a `app/page.tsx` (server) y renombrar el actual `page.tsx` a `HomeClient.tsx`.

### 7. Corregir H1 duplicados
**Impacto:** Claridad para Google sobre tema principal
**Esfuerzo:** 15 min
- `/seguros-salud`: eliminar segundo H1, cambiarlo a H2
- `/beneficios-redagrupa`: eliminar segundo H1, cambiarlo a H2
- `/politicas-de-privacidad`: agregar H1 ("Políticas de Privacidad")

### 8. Corregir tildes en metadata
**Esfuerzo:** 5 min
- `/politicas-de-privacidad`: "Políticas de Privacidad" (con tilde)
- `/bice-personas`: "hospitalización" (con tilde)

### 9. Agregar JSON-LD Article en blog posts
**Impacto:** Rich results para artículos
**Esfuerzo:** 20 min
Agregar en `app/blog/[slug]/page.tsx`:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "datePublished": "...",
  "author": { "@type": "Organization", "name": "RedAgrupa" },
  "publisher": { "@type": "Organization", "name": "RedAgrupa" }
}
```

### 10. Mejorar titles cortos
**Esfuerzo:** 10 min
- `/nosotros`: "Sobre Nosotros — Expertos en Seguros para Pymes | RedAgrupa"
- `/blog`: "Blog — Seguros Complementarios y Gestión de Personas | RedAgrupa"

### 11. Agregar BreadcrumbList JSON-LD
**Impacto:** Rich results con breadcrumbs
**Esfuerzo:** 20 min
Crear componente reutilizable de breadcrumbs con schema markup.

---

## 🟡 MEDIO (Implementar este mes)

### 12. Crear llms.txt
**Impacto:** AI search readiness
**Esfuerzo:** 15 min
Archivo `public/llms.txt` con descripción del negocio, servicios, y ubicación.

### 13. Agregar security headers
**Impacto:** Seguridad + trust signals
**Esfuerzo:** 15 min
En `next.config.mjs` o `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=()

### 14. Mejorar alt text de imágenes
**Esfuerzo:** 30 min
- Hero images: más descriptivas y con keywords
- Logos de aseguradoras: "Logo [nombre aseguradora] - partner de RedAgrupa"
- Imágenes BICE: describir el contexto

### 15. Agregar FAQ schema en páginas relevantes
**Impacto:** Rich results FAQ
**Esfuerzo:** 30 min
Páginas candidatas: /seguros-salud, /seguro-complementario-bice-pyme, /seguro-complementario-bice-personas

### 16. Agregar Product schema en planes BICE
**Impacto:** Rich results con precios
**Esfuerzo:** 20 min
En /seguro-complementario-bice-pyme con los 4 planes y precios en UF.

### 17. Mejorar internal linking
**Esfuerzo:** 45 min
- Agregar links contextuales entre páginas de servicio
- Blog posts deberían enlazar a páginas relevantes
- Agregar sección "Servicios relacionados" al final de cada página

### 18. Agregar blog al nav principal
**Esfuerzo:** 15 min
El blog tiene 56 artículos — debería estar visible en la navegación para SEO y engagement.

---

## 🟢 BAJO (Backlog)

### 19. Contenido expandido para /nosotros
- Agregar sección de equipo con fotos y credenciales
- Agregar timeline de la empresa
- Mejorar señales E-E-A-T

### 20. Agregar WebSite schema con SearchAction
- Permite search box en Google SERPs

### 21. Implementar páginas de error personalizadas
- 404 con links útiles y search
- Ayuda a retener usuarios que llegan a URLs antiguas

### 22. Monitoreo continuo
- Configurar Google Search Console si no está
- Verificar indexación de nuevas URLs
- Monitorear Core Web Vitals en producción

---

## Resumen de Impacto Estimado

| Prioridad | Items | Esfuerzo Total | Score Esperado |
|-----------|-------|----------------|----------------|
| Crítico (1-5) | 5 | ~1.5 horas | 38 → 55 |
| Alto (6-11) | 6 | ~2 horas | 55 → 68 |
| Medio (12-18) | 7 | ~3 horas | 68 → 78 |
| Bajo (19-22) | 4 | Variable | 78 → 82+ |

**Total estimado para llegar a 75+:** ~6.5 horas de trabajo
