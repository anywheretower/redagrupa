import { z } from "zod"

const baseSchema = {
  nombre: z.string().min(2, "Ingresa tu nombre completo"),
  email: z.string().email("Ingresa un email válido"),
  telefono: z.string().min(7, "Ingresa un teléfono válido"),
  motivo: z.string().min(1, "Selecciona un motivo"),
  pagina: z.string(),
}

export const contactoSchema = z.object({
  ...baseSchema,
  empresa: z.string().min(1, "Ingresa el nombre de tu empresa"),
  rubro: z.string().min(1, "Ingresa el rubro de tu empresa"),
  cantidad_empleados: z.string().min(1, "Ingresa la cantidad de empleados"),
  mensaje: z.string().min(1, "Escribe un mensaje"),
})

export const contactoPersonasSchema = z.object({
  ...baseSchema,
  empresa: z.string().optional(),
  mensaje: z.string().optional(),
})

export type ContactoData = z.infer<typeof contactoSchema>
export type ContactoPersonasData = z.infer<typeof contactoPersonasSchema>
