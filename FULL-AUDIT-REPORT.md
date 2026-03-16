# Auditoría SEO Completa — RedAgrupa
**Fecha:** 15 marzo 2026
**Sitio:** https://www.redagrupa.cl
**Páginas auditadas:** 10 (+ 56 artículos de blog)
**Plataforma:** Next.js 16 en Vercel

---

## Resumen Ejecutivo

### SEO Health Score: 38/100

| Categoría | Peso | Puntaje | Ponderado |
|-----------|------|---------|-----------|
| SEO Técnico | 22% | 35/100 | 7.7 |
| Calidad de Contenido | 23% | 55/100 | 12.7 |
| SEO On-Page | 20% | 40/100 | 8.0 |
| Schema / Datos Estructurados | 10% | 5/100 | 0.5 |
| Rendimiento (CWV) | 10% | 50/100 | 5.0 |
| AI Search Readiness | 10% | 10/100 | 1.0 |
| Imágenes | 5% | 55/100 | 2.8 |
| **TOTAL** | **100%** | | **37.7** |

### Top 5 Problemas Críticos
1. **No existe robots.txt** — Google no tiene directrices de rastreo
2. **No existe sitemap.xml** — Google no puede descubrir las páginas eficientemente
3. **Sin canonical tags** — Riesgo de contenido duplicado (www vs no-www, etc.)
4. **Sin Open Graph ni Twitter Cards** — Compartir en RRSS sin preview
5. **Sin datos estructurados (JSON-LD)** en ninguna página — Sin rich results en Google

### Top 5 Quick Wins
1. Crear `app/robots.ts` y `app/sitemap.ts` (30 min)
2. Agregar Open Graph y canonical en `layout.tsx` metadata (20 min)
3. Agregar JSON-LD Organization en layout + LocalBusiness en home (30 min)
4. Crear `llms.txt` para AI search readiness (15 min)
5. Agregar H1 faltante en página de políticas de privacidad (5 min)

---

## 1. SEO Técnico (35/100)

### 1.1 Crawlability

| Check | Estado | Detalle |
|-------|--------|---------|
| robots.txt | ❌ FALTA | 404 — No existe. Google no tiene directrices |
| sitemap.xml | ❌ FALTA | 404 — No existe. Google no puede descubrir páginas |
| Canonical tags | ❌ FALTA | Ninguna página tiene canonical |
| Redirección www | ✅ OK | redagrupa.cl → www.redagrupa.cl (301) |
| HTTPS | ✅ OK | HTTP → HTTPS automático |
| HTML lang | ✅ OK | `lang="es"` en `<html>` |
| Hreflang | ⚪ N/A | Sitio monolingüe, no requerido |

### 1.2 Indexability

| Check | Estado | Detalle |
|-------|--------|---------|
| Páginas indexadas por Google | ⚠️ PROBLEMA | Google indexa URLs del **sitio antiguo WordPress** (redagrupa.cl/seguro-complementario/, /seguro-colectivo/, /seguro-dental/, etc.) que NO existen en el sitio nuevo |
| Páginas nuevas en Google | ⚠️ PROBLEMA | Las rutas nuevas (/seguros-salud, /beneficios-redagrupa, /seguro-complementario-bice-pyme) probablemente NO están indexadas |
| Contactos noindex | ✅ OK | `/contactos` tiene `robots: { index: false, follow: false }` |
| Blog posts | ⚠️ SIN VERIFICAR | 56 artículos — verificar indexación |

### 1.3 Seguridad y Headers

| Header | Estado | Valor |
|--------|--------|-------|
| HTTPS (SSL) | ✅ OK | Certificado válido |
| HSTS | ✅ OK | `max-age=63072000` (~2 años) |
| X-Content-Type-Options | ❌ FALTA | No presente |
| X-Frame-Options | ❌ FALTA | No presente |
| Content-Security-Policy | ❌ FALTA | No presente |
| Referrer-Policy | ❌ FALTA | No presente |
| Permissions-Policy | ❌ FALTA | No presente |

### 1.4 URLs del Sitio Antiguo (WordPress) indexadas en Google

Estas URLs devuelven contenido en el sitio nuevo pero con rutas diferentes:
| URL antigua (indexada) | URL nueva (actual) |
|------------------------|-------------------|
| /seguro-complementario/ | /seguros-salud |
| /seguro-colectivo/ | No existe |
| /seguro-dental/ | No existe |
| /seguro-medico/ | No existe |
| /seguro-medico/consorcio/ | No existe |
| /seguro-medico/metlife/ | No existe |
| /formulario-de-reembolso/ | No existe |
| /contacto/ | /contactos |
| /web/ | No existe |

**Acción requerida:** Crear redirecciones 301 de URLs antiguas a las nuevas, o al menos a la home.

---

## 2. Calidad de Contenido (55/100)

### 2.1 Análisis por Página

| Página | Words | Calidad | Notas |
|--------|-------|---------|-------|
| Home (/) | ~800 | ✅ Buena | Propuesta de valor clara, testimonios, estadísticas |
| /nosotros | ~650 | ⚠️ Media | Contenido correcto pero corto, podría expandirse |
| /seguros-salud | ~700 | ✅ Buena | Explica bien coberturas y valor |
| /beneficios-redagrupa | ~1,200 | ✅ Buena | Más completa, múltiples categorías |
| /seguro-complementario-bice-pyme | ~1,200 | ✅ Buena | Planes detallados con precios |
| /seguro-complementario-bice-personas | ~1,100 | ✅ Buena | Contenido claro |
| /politicas-de-privacidad | ~1,100 | ✅ OK | Legal, cumple Ley 19.628 |
| Blog (56 artículos) | Variable | ⚠️ Sin verificar | Necesita revisión individual |

### 2.2 E-E-A-T (Experience, Expertise, Authority, Trust)

| Señal | Estado | Detalle |
|-------|--------|---------|
| Experiencia demostrada | ⚠️ Parcial | Testimonios de clientes, pero sin casos de estudio detallados |
| Expertise | ⚠️ Parcial | No hay página de "equipo" con credenciales |
| Autoridad | ⚠️ Débil | Sin schema Organization, sin página de autor en blog |
| Confianza | ✅ Parcial | Dirección física, teléfono, política de privacidad |

### 2.3 Contenido Duplicado

| Problema | Detalle |
|----------|---------|
| H1 duplicados | `/seguros-salud` y `/beneficios-redagrupa` tienen H1 que aparece dos veces en la misma página |
| Secciones formulario | Todas las subpáginas repiten el mismo bloque de formulario de contacto (~200 palabras idénticas) |
| Sin canonical | Sin canonicals, Google podría confundir www vs no-www |

---

## 3. SEO On-Page (40/100)

### 3.1 Title Tags

| Página | Title | Largo | Estado |
|--------|-------|-------|--------|
| Home | "RedAgrupa - Gestión de Seguros Complementarios para Pymes" | 57 chars | ✅ OK |
| /nosotros | "Nosotros \| RedAgrupa" | 21 chars | ⚠️ Corto — no describe valor |
| /seguros-salud | "Seguro Complementario de Salud para Empresas \| RedAgrupa" | 58 chars | ✅ OK |
| /beneficios-redagrupa | "Beneficios de Salud para Empresas \| RedAgrupa" | 47 chars | ✅ OK |
| /bice-pyme | "Seguro Complementario BICE Pyme \| RedAgrupa" | 45 chars | ✅ OK |
| /bice-personas | "Seguro Complementario BICE Personas \| RedAgrupa" | 49 chars | ✅ OK |
| /politicas | "Politicas de Privacidad \| RedAgrupa" | 35 chars | ⚠️ Sin tildes |
| /blog | "Blog \| RedAgrupa" | 17 chars | ⚠️ Corto |

### 3.2 Meta Descriptions

| Página | Descripción | Largo | Estado |
|--------|-------------|-------|--------|
| Home | "Gestiona tus seguros complementarios de salud..." | ~130 chars | ✅ OK |
| /nosotros | "Conoce más sobre RedAgrupa, expertos en seguros..." | ~125 chars | ✅ OK |
| /seguros-salud | "El Seguro Complementario de Salud cubre los gastos..." | ~130 chars | ✅ OK |
| /beneficios | "Convenios de salud, bienestar, vacunación corporativa..." | ~120 chars | ✅ OK |
| /bice-pyme | "Planes de seguro complementario de salud BICE Vida..." | ~110 chars | ✅ OK |
| /bice-personas | "Seguro de salud complementario BICE Vida para personas..." | ~140 chars | ✅ OK |
| /politicas | "Politica de privacidad y proteccion de datos..." | ~115 chars | ⚠️ Sin tildes |
| /blog | "Artículos sobre seguros complementarios de salud..." | ~120 chars | ✅ OK |

### 3.3 Heading Structure

| Página | H1 | H1 Duplicado? | Estructura |
|--------|----|----|------------|
| Home | "¿Listo para Simplificar tus Seguros Complementarios?" | No | ✅ OK |
| /nosotros | "Delegue la gestión del Seguro Complementario..." | No | ✅ OK |
| /seguros-salud | "Seguro Complementario de Salud" | ⚠️ **SÍ** (aparece 2 veces) | ❌ |
| /beneficios | "Beneficios de Salud para Empresas" | ⚠️ **SÍ** (aparece 2 veces) | ❌ |
| /bice-pyme | "Seguro Complementario BICE Pyme" | No | ✅ OK |
| /bice-personas | "Seguro de Salud Complementario para Personas" | No | ✅ OK |
| /politicas | ❌ **SIN H1** | — | ❌ |

### 3.4 Open Graph / Social

| Check | Estado |
|-------|--------|
| og:title | ❌ Solo en blog posts individuales |
| og:description | ❌ Solo en blog posts |
| og:image | ❌ Solo en blog posts |
| og:url | ❌ Ninguna página |
| og:type | ❌ Solo blog ("article") |
| twitter:card | ❌ Ninguna página |
| twitter:image | ❌ Ninguna página |

### 3.5 Internal Linking

| Check | Estado | Detalle |
|-------|--------|---------|
| Navegación principal | ✅ OK | Todas las páginas enlazadas en nav |
| Breadcrumbs | ✅ Parcial | Solo en subpáginas BICE |
| Cross-linking entre contenido | ⚠️ Débil | Las páginas no se enlazan entre sí más allá del nav |
| Blog → páginas de servicio | ⚠️ Sin verificar | Los artículos deberían enlazar a las páginas de servicio |
| Anchor text descriptivo | ✅ OK | Los enlaces de nav usan texto descriptivo |

---

## 4. Schema / Datos Estructurados (5/100)

### Estado actual: Prácticamente inexistente

| Schema | Estado | Recomendación |
|--------|--------|---------------|
| Organization | ❌ FALTA | **Crítico** — Nombre, logo, contacto, RRSS |
| LocalBusiness | ❌ FALTA | **Crítico** — Dirección, teléfono, horarios |
| WebSite | ❌ FALTA | **Alto** — Nombre del sitio, search action |
| BreadcrumbList | ❌ FALTA | **Alto** — En páginas con breadcrumbs |
| FAQPage | ❌ FALTA | **Medio** — En páginas con preguntas frecuentes |
| Product | ❌ FALTA | **Medio** — En planes BICE con precios |
| Article | ❌ FALTA | **Alto** — En artículos del blog |
| InsuranceAgency | ❌ FALTA | **Alto** — Schema específico del rubro |

**Solo los blog posts individuales tienen OpenGraph parcial.** Ninguna página tiene JSON-LD.

---

## 5. Rendimiento / Core Web Vitals (50/100)

### Datos de Headers HTTP

| Métrica | Valor | Estado |
|---------|-------|--------|
| Caché (Vercel) | HIT | ✅ OK — Páginas pre-renderizadas |
| Stale time | 300s | ✅ OK |
| GZIP/Brotli | Implícito (Vercel) | ✅ OK |
| Tamaño HTML home | 79.7 KB | ⚠️ Alto para una landing |

### Optimizaciones existentes

| Check | Estado |
|-------|--------|
| Preload de imágenes críticas | ✅ OK (logo + hero) |
| Preconnect GTM | ✅ OK |
| Next.js Image optimization | ✅ OK (AVIF/WebP) |
| Font optimization (Geist) | ✅ OK (next/font) |
| Vercel Analytics | ✅ OK |
| sharp para build | ✅ OK |

### Preocupaciones

| Check | Estado | Detalle |
|-------|--------|---------|
| Home "use client" | ⚠️ | La home es 100% client component — pierde beneficios de SSR para SEO |
| HTML size 79.7KB | ⚠️ | Indica mucho JS inline |
| GTM blocking | ⚠️ | afterInteractive mitiga, pero GTM sigue inyectando scripts |
| Embla Carousel en home | ✅ OK | Más liviano que framer-motion |

---

## 6. Imágenes (55/100)

### Formatos y Optimización

| Check | Estado | Detalle |
|-------|--------|---------|
| Formato WebP | ✅ OK | Fotos en WebP |
| Next/Image component | ✅ OK | Optimización automática |
| Tamaño total imágenes | ✅ OK | ~345 KB total |
| Imágenes mobile específicas | ✅ OK | reloj-movil.png, pushpin-movil.png |

### Alt Text

| Check | Estado | Detalle |
|-------|--------|---------|
| Logo | ✅ OK | "RedAgrupa Logo" |
| Hero home | ⚠️ Parcial | Genérico |
| Fotos testimonios | ✅ OK | Nombres de personas |
| Logos aseguradoras | ⚠️ Parcial | Algunos genéricos |
| Imágenes BICE Pyme | ❌ FALTA | Sin alt text descriptivo |
| Imágenes BICE Personas | ❌ FALTA | Sin alt text descriptivo |
| Hero subpáginas | ✅ OK | Texto descriptivo en seguros-salud y beneficios |

---

## 7. AI Search Readiness (10/100)

### Estado actual: Mínimo

| Check | Estado | Detalle |
|-------|--------|---------|
| llms.txt | ❌ FALTA | 404 |
| Datos estructurados | ❌ FALTA | Sin JSON-LD |
| Citabilidad | ⚠️ Baja | Contenido OK pero sin estructura para extracción |
| Contenido authoritative | ⚠️ Parcial | Estadísticas (10+ años, 300+ empresas) pero sin fuente |
| Preguntas y respuestas | ⚠️ Parcial | Algunas secciones FAQ-like pero sin markup |
| AI crawlers (robots.txt) | ❌ FALTA | Sin robots.txt, no puede controlar acceso |

---

## 8. Problemas Adicionales Detectados

### 8.1 Home Page es "use client"

La página principal (`app/page.tsx`) es un Client Component completo. Esto significa que:
- La metadata se define en `layout.tsx` (no en `page.tsx`)
- El contenido se renderiza del lado del cliente
- Googlebot puede indexarlo (renderiza JS) pero no es ideal
- **Recomendación:** Separar en `page.tsx` (server con metadata) + `HomeClient.tsx` (client con UI), como se hace en las subpáginas

### 8.2 Tildes faltantes en metadata

- `/politicas-de-privacidad`: title y description sin tildes ("Politicas" → "Políticas", "proteccion" → "protección")
- `/seguro-complementario-bice-personas`: description sin tildes ("hospitalizacion" → "hospitalización")

### 8.3 Enlaces a páginas inexistentes

- `/contactos` existe pero no aparece en nav principal visible
- `/blog` enlazado en footer pero no en nav principal
- Links a formularios PDF de aseguradoras — verificar que existen

### 8.4 GTM Container

- GTM-PCQDTCD está activo — verificar que tiene GA4 configurado correctamente
- Verificar que Search Console está conectado

---

## Páginas Detectadas (Mapa del Sitio Actual)

| # | URL | Title | Status |
|---|-----|-------|--------|
| 1 | / | RedAgrupa - Gestión de Seguros Complementarios para Pymes | ✅ |
| 2 | /nosotros | Nosotros \| RedAgrupa | ✅ |
| 3 | /seguros-salud | Seguro Complementario de Salud para Empresas \| RedAgrupa | ✅ |
| 4 | /beneficios-redagrupa | Beneficios de Salud para Empresas \| RedAgrupa | ✅ |
| 5 | /seguro-complementario-bice-pyme | Seguro Complementario BICE Pyme \| RedAgrupa | ✅ |
| 6 | /seguro-complementario-bice-personas | Seguro Complementario BICE Personas \| RedAgrupa | ✅ |
| 7 | /politicas-de-privacidad | Politicas de Privacidad \| RedAgrupa | ✅ |
| 8 | /blog | Blog \| RedAgrupa | ✅ |
| 9 | /blog/[slug] × 56 artículos | [Título] \| Blog RedAgrupa | ✅ |
| 10 | /contactos | Contactos \| RedAgrupa | ✅ (noindex) |
