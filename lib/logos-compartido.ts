/**
 * Módulo HOJA: cero imports, para que lo pueda bundlear el navegador.
 *
 * Lo que vive acá lo consumen las DOS mitades — el catálogo del servidor
 * (`lib/logos.ts`, que lee el disco con node:fs) y el componente cliente.
 * Si `formatearPeso` viviera junto al lector, importarla desde el cliente
 * arrastraría node:fs al bundle y el build falla.
 */

export type Fondo = "claro" | "oscuro"

export type LogoDeclarado = {
  archivo: string
  /** Para qué sirve, en una línea. */
  uso: string
  /** Sobre qué fondo hay que mostrarlo (decide también el preview). */
  fondo: Fondo
  /** El que conviene usar salvo que haya una razón para otro. */
  recomendado?: boolean
  /**
   * Si sirve para un correo. Los archivos en resolución original no: pesan de
   * más y su "ancho sugerido" (la mitad de 2813 px) sería un número absurdo
   * para pegar en un correo. Se declara acá y no se infiere del nombre.
   */
  correo: boolean
}

export type LogoResuelto = LogoDeclarado & {
  url: string
  ancho: number
  alto: number
  bytes: number
  /** Ancho al que conviene mostrarlo en el correo (la mitad, por pantallas retina). */
  anchoDisplay: number | null
}

export type LogoGrupo = {
  titulo: string
  descripcion: string
  items: LogoDeclarado[]
}

export type LogoGrupoResuelto = {
  titulo: string
  descripcion: string
  items: LogoResuelto[]
}

export function formatearPeso(bytes: number): string {
  return bytes < 1024 * 1024
    ? `${(bytes / 1024).toFixed(1).replace(".", ",")} KB`
    : `${(bytes / 1024 / 1024).toFixed(2).replace(".", ",")} MB`
}
