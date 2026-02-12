# RedAgrupa - Memoria del Proyecto

## Descripcion General
RedAgrupa es una plataforma chilena de gestion de seguros complementarios de salud para pymes.
Propuesta de valor: "Gestiona tus seguros complementarios de salud para que tu pyme y tu equipo esten protegidos, sin tramites eternos ni lenguaje tecnico imposible."
Sitio enfocado en captacion de clientes (marketing + formulario de contacto).

## Tech Stack
- **Framework:** Next.js 16.0.10 (App Router) + React 19.2.0 + TypeScript 5
- **Estilos:** Tailwind CSS 4.1.9 + CSS Variables
- **Componentes UI:** shadcn/ui (estilo new-york) + Radix UI + Lucide icons
- **Formularios:** React Hook Form 7.60 + Zod 3.25
- **Graficos:** Recharts 2.15
- **Carousel:** Embla Carousel 8.5
- **Fechas:** React Day Picker 9.8 + date-fns 4.1
- **Notificaciones:** Sonner 1.7
- **Analytics:** Vercel Analytics
- **Deploy:** Vercel (redagrupa.vercel.app)
- **Generado inicialmente con:** v0.app

## Estructura del Proyecto
```
app/
  layout.tsx          # Layout raiz (lang="es", Geist font, Vercel Analytics)
  page.tsx            # Landing page principal (~940 lineas)
  globals.css         # Estilos globales + variables CSS
  nosotros/           # Pagina "Sobre Nosotros"
    page.tsx
  seguros-salud/      # Pagina de seguros de salud
    page.tsx

components/
  MobileMenu.tsx      # Menu hamburguesa responsive
  ScrollButton.tsx    # Boton con scroll suave a seccion
  ScrollHeader.tsx    # Header que cambia con scroll
  theme-provider.tsx  # Provider de tema (next-themes)
  ui/                 # 59 componentes shadcn/ui

hooks/
  use-mobile.ts       # Detectar viewport movil
  use-toast.ts        # Gestion de toasts

lib/
  utils.ts            # Utilidad cn() para class merging

public/
  images/             # Imagenes del sitio (logos, equipo, hero, etc.)
  *.png, *.jpg, *.svg # Logos de aseguradoras, favicons, placeholders
```

## Aseguradoras Partners
BCI Seguros, BICE Vida, Chilena Consolidada, Consorcio, Help Seguros, MetLife, Bupa, Sura, Vida Security

---

## GUIA DE ESTILO Y DISENO

### Paleta de Colores
| Token CSS             | Valor     | Uso                                        |
|-----------------------|-----------|--------------------------------------------|
| --primary             | #cc0033   | Rojo marca. Hero, CTAs, iconos, header     |
| --primary hover       | #a30029   | Hover de botones rojos                     |
| --background          | #ffffff   | Fondo principal                            |
| --foreground          | #333333   | Texto principal (titulos oscuros)          |
| --muted-foreground    | #666666   | Texto secundario, subtitulos, testimonios  |
| --secondary           | #f5f5f5   | Fondos alternos de secciones (gray-50)     |
| --border              | #e5e5e5   | Bordes sutiles                             |
| --white/80, white/90  | -         | Textos sobre fondo rojo (opacidad)         |

### Combinaciones de Fondo + Texto
1. **Fondo blanco (#fff):** texto #333333 (titulos), #666666 (parrafos), #cc0033 (acentos/titulos highlight)
2. **Fondo rojo (#cc0033):** texto white, texto white/90 (parrafos), white/80 (texto terciario)
3. **Fondo gris (#333333 o imagen oscura con overlay rojo):** texto white, white/80
4. **Fondo gray-50 (#f5f5f5):** texto gray-900, gray-700 (igual que fondo blanco)
5. **Tarjeta formulario (white/95 backdrop-blur):** texto #333333, inputs bg-gray-100

### Tipografia
- **Font family:** Geist (sans-serif) + Geist Mono
- **Font base body:** antialiased

### Escala de Titulos (patron consistente en landing)
| Elemento                     | Mobile              | Tablet (sm)         | Desktop (lg)        | Weight    | Leading     |
|------------------------------|---------------------|---------------------|---------------------|-----------|-------------|
| H1 hero                     | text-[2rem]         | text-[2.5rem]       | text-[3.75rem]      | normal    | leading-[0.95] |
| H2 seccion (rojo, impacto)  | text-[2rem]         | text-[2.5rem]       | text-[3.75rem]      | normal    | leading-[0.95] |
| H2 seccion (estilo medio)   | text-[1.5rem]       | text-[2rem]         | text-[2.5rem]       | normal    | leading-[0.9]  |
| H2 seccion (bold standard)  | text-2xl            | text-3xl            | text-4xl            | bold      | leading-tight  |
| H2 subpagina principal      | text-4xl            | -                   | -                   | bold      | default        |
| H2 subpagina seccion        | text-2xl            | -                   | -                   | bold      | default        |
| H3 card titulo               | text-lg             | -                   | -                   | semibold  | leading-snug   |
| H3 servicio titulo           | text-2xl            | -                   | -                   | bold      | default        |
| Subtitulo/etiqueta          | text-xs/text-sm     | -                   | -                   | uppercase tracking-wider/widest |
| Estadistica numero           | text-6xl            | -                   | -                   | bold      | default        |
| Estadistica label            | text-xl             | -                   | -                   | semibold  | default        |

### Escala de Parrafos
| Contexto                     | Tamano              | Color               | Leading         |
|------------------------------|---------------------|---------------------|-----------------|
| Parrafo hero/seccion grande  | text-base sm:text-lg lg:text-xl | white/90 o #666666 | leading-[1.3] |
| Parrafo general subpagina    | text-base           | text-gray-700       | leading-[1.1]  |
| Parrafo card/descripcion     | text-sm             | white/80 o #666666  | leading-snug   |
| Texto pequeno (privacy, etc) | text-xs             | text-gray-500/600   | default        |
| Marquee/banner               | text-xl             | text-[#cc0033]      | default        |

### Espaciado de Secciones
| Tipo seccion                | Padding vertical          |
|-----------------------------|---------------------------|
| Landing (con imagen bg)     | py-16 / min-h-screen      |
| Landing (fondo solido)      | py-12 md:py-16 o py-16 md:py-24 |
| Subpagina seccion contenido | py-32                     |
| Footer                      | py-12 lg:py-24            |

### Container y Layout
- Container: `container mx-auto px-6` (landing) o `container mx-auto px-4` (subpaginas)
- Max-width contenido texto: `max-w-3xl mx-auto` o `max-w-4xl mx-auto`
- Max-width grids: `max-w-6xl mx-auto` o `max-w-7xl mx-auto`
- Grid columnas cards: `grid-cols-1 md:grid-cols-3` o `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Grid estadisticas: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`

### Componentes Recurrentes

#### Header (fijo en todas las paginas)
- Landing: `ScrollHeader` (transparente -> bg-[#cc0033] al scroll)
- Subpaginas: `header fixed bg-[#cc0033] shadow-md` (siempre rojo)
- Logo: `h-6 md:h-8 w-auto`
- Nav links: `text-white font-medium text-sm`
- Breakpoint mobile: `lg:hidden` / `hidden lg:flex`

#### Sidebar Redes Sociales (fijo derecha)
- `fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-2`
- Circulos: `w-9 h-9 bg-[#cc0033] rounded-full`
- Iconos: `w-4 h-4 text-white strokeWidth={1.5}`
- Landing: hidden en mobile (`hidden lg:flex`)
- Subpaginas: siempre visible

#### Botones CTA
- Primario: `bg-[#cc0033] text-white hover:bg-[#a30029] px-8 py-3`
- Outline sobre rojo: `border-white text-white hover:bg-white/10 bg-transparent`
- Submit form: `w-full bg-[#cc0033] text-white py-3 rounded-full text-sm font-medium`

#### Cards de Iconos (landing)
- Icono en cuadrado: `w-10 h-10 bg-[#cc0033] rounded-lg flex items-center justify-center`
- Icono en circulo: `w-10 h-10 rounded-full bg-[#cc0033]`
- Icono SVG/Lucide: `w-5 h-5 text-white`

#### Cards de Servicios (subpaginas)
- Icono Lucide grande: `w-12 h-12 text-[#cc0033] strokeWidth={1.5}`
- Titulo: `text-2xl font-bold text-gray-900`
- Parrafo: `text-base text-gray-700 leading-[1.1]`
- Centrado o alineado izquierda segun pagina

#### Testimonios
- Comilla decorativa: `text-6xl text-[#cc0033] leading-none` (caracter ")
- Texto: `text-[#666666] text-base leading-snug`
- Autor: `font-semibold text-[#333333]`
- Cargo: `text-sm text-[#666666]`
- Separador: `border-t border-gray-200`
- Foto: `w-14 h-14 rounded-full object-cover`

#### Formulario de Contacto
- Contenedor: `bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 shadow-2xl`
- Inputs: `px-4 py-2.5 text-sm bg-gray-100 rounded-lg border-none focus:ring-2 focus:ring-[#cc0033]`
- Grid 2 cols: `grid grid-cols-1 md:grid-cols-2 gap-4`
- Select con chevron: `appearance-none` + ChevronDown absolute
- Boton: `rounded-full` (unico boton redondeado del sitio)

#### Footer
- Fondo: `bg-[#cc0033] text-white`
- Grid: `grid-cols-1 md:grid-cols-4`
- Logo col-1, datos contacto col-4 (cols 2-3 vacias)
- Texto: `text-sm`

#### Secciones con imagen de fondo (landing)
- Patron: imagen `fill object-cover` + gradientes rojo desde arriba/abajo
- Gradiente top: `linear-gradient(to bottom, #cc0033 0%, transparent 30%)`
- Gradiente bottom: `linear-gradient(to top, #cc0033 0%, transparent 30-60%)`
- Contenido: `relative z-10`

#### Blockquote (cita fundador - nosotros)
- Fondo: seccion `bg-[#cc0033]`
- Texto: `text-base leading-[1.1] italic text-white`
- Autor: `font-bold text-base text-white`, cargo `text-white/80`

#### Caso de Ejemplo (nosotros)
- Border izquierdo: `border-l-4 border-[#cc0033] pl-6`

#### Marquee/Banner animado
- CSS: `animate-marquee` (25s linear infinite)
- Texto: `text-[#cc0033] text-xl font-medium`
- Fade lateral: gradientes blancos `w-32` en ambos lados

### Patron de Subpaginas (Nosotros y Seguros-Salud)
Las subpaginas siguen esta estructura consistente:
1. `page.tsx` = Server Component con metadata SEO + importa ClientComponent
2. `[Nombre]Client.tsx` = "use client" con toda la UI
3. Header fijo rojo (no ScrollHeader)
4. Sidebar RRSS (siempre visible, incluso mobile)
5. `pt-20` para compensar header fijo
6. Secciones con `py-32` de padding
7. Seccion final: formulario contacto sobre fondo `bg-[#cc0033]` con grid 2 cols (form izq + CTA derecha)
8. Footer identico

### Datos de Contacto (footer y formulario)
- Direccion: Los Militares 5620, of 1011, Las Condes, Santiago, Chile.
- Email ref: Casilla de Reembolsos
- Telefono: +56 (22) 813 2245
- RRSS: facebook.com/RedAgrupa, instagram.com/redagrupa, linkedin.com/company/redagrupa

---

## Configuracion Importante
- `next.config.mjs`: TypeScript ignoreBuildErrors: true, images unoptimized: true
- `components.json`: shadcn style "new-york", RSC habilitado, CSS variables
- `tsconfig.json`: strict mode, path alias @/* -> ./*
- Idioma: Espanol (lang="es")

## Convenciones de Codigo
- Componentes en PascalCase
- Archivos de componentes en PascalCase.tsx (excepto ui/ que usa kebab-case)
- Hooks en kebab-case (use-mobile.ts)
- Usar cn() de lib/utils.ts para combinar clases Tailwind
- Componentes UI de shadcn en components/ui/
- Componentes custom en components/ (raiz)
- Subpaginas: page.tsx (server, metadata) + NombreClient.tsx (client, UI)

## Notas de Desarrollo
- Proyecto generado originalmente con v0.app
- Sin API routes (backend externo o pendiente)
- Sin tests implementados
- Sin .env configurado (en .gitignore)
- Dashboard referenciado en redagrupa.vercel.app/dashboard (app separada)
- Todas las paginas son Server Components por defecto (usar "use client" cuando sea necesario)

## Pendientes / Areas de Mejora
- Conectar formulario de contacto con backend/API
- Implementar paginas adicionales segun necesidad
- Agregar SEO meta tags por pagina
- Optimizar imagenes (actualmente unoptimized)
- Agregar tests
