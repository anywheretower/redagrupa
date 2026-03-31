import { z } from "zod"

const baseSchema = {
  nombre: z.string().min(2, "Ingresa tu nombre completo"),
  email: z.string().email("Ingresa un email válido"),
  telefono: z.string().min(7, "Ingresa un teléfono válido"),
  pagina: z.string(),
}

export const contactoSchema = z.object({
  ...baseSchema,
  empresa: z.string().min(1, "Ingresa el nombre de tu empresa"),
  mensaje: z.string().optional(),
})

export const contactoPersonasSchema = z.object({
  ...baseSchema,
  empresa: z.string().optional(),
  mensaje: z.string().optional(),
})

export type ContactoData = z.infer<typeof contactoSchema>
export type ContactoPersonasData = z.infer<typeof contactoPersonasSchema>
