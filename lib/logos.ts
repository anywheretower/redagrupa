import { readFileSync, readdirSync, statSync } from "node:fs"
import path from "node:path"
import type { LogoGrupo, LogoGrupoResuelto } from "./logos-compartido"

/**
 * Catálogo de los logos que se sirven en /logo para que el cliente los
 * referencie desde su sistema de mailing.
 *
 * Las dimensiones y el peso NO se declaran acá: se leen del archivo real en
 * tiempo de build. Un "4,8 KB" escrito a mano queda viejo la primera vez que
 * alguien regenera un PNG, y nadie se entera — la página seguiría afirmándolo.
 */

export const GRUPOS: LogoGrupo[] = [
  {
    titulo: "Imagotipo",
    descripcion:
      "El logo completo, horizontal. Es el que va en el encabezado de un correo o en una firma.",
    items: [
      { archivo: "redagrupa-imagotipo.png", uso: "Uso general sobre fondo claro", fondo: "claro", recomendado: true, correo: true },
      { archivo: "redagrupa-imagotipo-blanco.png", uso: "Sobre fondo oscuro o de color", fondo: "oscuro", recomendado: true, correo: true },
      { archivo: "redagrupa-imagotipo.jpg", uso: "Sin transparencia, para clientes de correo antiguos", fondo: "claro", correo: true },
      { archivo: "redagrupa-imagotipo-1200.png", uso: "El doble de grande, para banners anchos", fondo: "claro", correo: true },
      { archivo: "redagrupa-imagotipo-1200-blanco.png", uso: "Banner ancho sobre fondo oscuro", fondo: "oscuro", correo: true },
      { archivo: "redagrupa-imagotipo-1200.jpg", uso: "Banner ancho sin transparencia", fondo: "claro", correo: true },
      { archivo: "redagrupa-imagotipo-alta.png", uso: "Resolución original, para imprenta o piezas grandes", fondo: "claro", correo: false },
      { archivo: "redagrupa-imagotipo-alta-blanco.png", uso: "Resolución original, versión blanca", fondo: "oscuro", correo: false },
    ],
  },
  {
    titulo: "Isotipo",
    descripcion:
      "Solo el símbolo, cuadrado. Sirve como ícono, avatar o firma cuando no entra el logo completo.",
    items: [
      { archivo: "redagrupa-isotipo.png", uso: "Uso general sobre fondo claro", fondo: "claro", recomendado: true, correo: true },
      { archivo: "redagrupa-isotipo-blanco.png", uso: "Sobre fondo oscuro o de color", fondo: "oscuro", recomendado: true, correo: true },
      { archivo: "redagrupa-isotipo.jpg", uso: "Sin transparencia, para clientes de correo antiguos", fondo: "claro", correo: true },
      { archivo: "redagrupa-isotipo-512.png", uso: "Más grande, para destacados", fondo: "claro", correo: true },
      { archivo: "redagrupa-isotipo-512-blanco.png", uso: "Más grande, sobre fondo oscuro", fondo: "oscuro", correo: true },
      { archivo: "redagrupa-isotipo-512.jpg", uso: "Más grande, sin transparencia", fondo: "claro", correo: true },
      { archivo: "redagrupa-isotipo-alta.png", uso: "Resolución original, para imprenta o piezas grandes", fondo: "claro", correo: false },
      { archivo: "redagrupa-isotipo-alta-blanco.png", uso: "Resolución original, versión blanca", fondo: "oscuro", correo: false },
    ],
  },
]

/** Dimensiones leídas de la cabecera del archivo. Solo PNG y JPEG. */
function medir(buf: Buffer): { ancho: number; alto: number } {
  // PNG: firma de 8 bytes, después el chunk IHDR con ancho y alto en big-endian.
  if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47) {
    return { ancho: buf.readUInt32BE(16), alto: buf.readUInt32BE(20) }
  }
  // JPEG: hay que recorrer los segmentos hasta un marcador SOF (0xC0-0xCF,
  // salteando 0xC4 tabla Huffman, 0xC8 extensión y 0xCC aritmética).
  if (buf.length > 4 && buf.readUInt16BE(0) === 0xffd8) {
    let i = 2
    while (i < buf.length - 9) {
      if (buf[i] !== 0xff) { i++; continue }
      const marcador = buf[i + 1]
      if (marcador >= 0xc0 && marcador <= 0xcf && marcador !== 0xc4 && marcador !== 0xc8 && marcador !== 0xcc) {
        return { alto: buf.readUInt16BE(i + 5), ancho: buf.readUInt16BE(i + 7) }
      }
      i += 2 + buf.readUInt16BE(i + 2)
    }
  }
  throw new Error("formato de imagen no reconocido")
}

const DIR = path.join(process.cwd(), "public", "logo")

export function resolver(): LogoGrupoResuelto[] {
  const enDisco = new Set(readdirSync(DIR))

  const grupos = GRUPOS.map((g) => ({
    titulo: g.titulo,
    descripcion: g.descripcion,
    items: g.items.map((item) => {
      // Un archivo declarado que no está en disco se sirve como 404 silencioso:
      // la página lo mostraría con su URL para copiar y el correo saldría roto.
      // Mejor romper el build.
      if (!enDisco.has(item.archivo)) {
        throw new Error(`/logo: ${item.archivo} está declarado y no existe en public/logo`)
      }
      const ruta = path.join(DIR, item.archivo)
      const buf = readFileSync(ruta)
      const { ancho, alto } = medir(buf)
      return {
        ...item,
        url: `https://www.redagrupa.cl/logo/${item.archivo}`,
        ancho,
        alto,
        bytes: statSync(ruta).size,
        anchoDisplay: item.correo ? Math.round(ancho / 2) : null,
      }
    }),
  }))

  // El camino inverso: un archivo suelto en public/logo que nadie declaró queda
  // invisible en la página. Es menos grave que el anterior, pero significa que
  // alguien subió algo y la página no lo cuenta.
  const declarados = new Set(GRUPOS.flatMap((g) => g.items.map((i) => i.archivo)))
  const huerfanos = [...enDisco].filter((f) => !declarados.has(f) && !f.startsWith("."))
  if (huerfanos.length > 0) {
    throw new Error(`/logo: hay archivos sin declarar en el catálogo: ${huerfanos.join(", ")}`)
  }

  return grupos
}
