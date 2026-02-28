import { NextResponse } from "next/server"
import { Resend } from "resend"
import { contactoSchema, contactoPersonasSchema } from "@/lib/schemas/contacto"
import { getSupabaseAdmin } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await request.json()

    // Determine which schema to use based on variant
    const isPersonas = body.pagina === "bice-personas"
    const schema = isPersonas ? contactoPersonasSchema : contactoSchema
    const result = schema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: "Datos inválidos", details: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const data = result.data

    // Build table rows
    const rows = [
      ["Nombre", data.nombre],
      ["Email", data.email],
      ["Teléfono", data.telefono],
    ]

    if ("empresa" in data && data.empresa) {
      rows.push(["Empresa", data.empresa])
    }
    if ("rubro" in data && (data as Record<string, string>).rubro) {
      rows.push(["Rubro", (data as Record<string, string>).rubro])
    }
    if ("cantidad_empleados" in data && (data as Record<string, string>).cantidad_empleados) {
      rows.push(["Cantidad de Empleados", (data as Record<string, string>).cantidad_empleados])
    }
    rows.push(["Motivo", data.motivo])
    if ("mensaje" in data && data.mensaje) {
      rows.push(["Mensaje", data.mensaje])
    }
    rows.push(["Página de origen", data.pagina])

    const tableRows = rows
      .map(
        ([label, value]) =>
          `<tr>
            <td style="padding:10px 14px;font-weight:600;color:#333333;border-bottom:1px solid #eee;white-space:nowrap;vertical-align:top;">${label}</td>
            <td style="padding:10px 14px;color:#555555;border-bottom:1px solid #eee;vertical-align:top;">${value}</td>
          </tr>`
      )
      .join("")

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#cc0033;padding:24px 30px;border-radius:8px 8px 0 0;">
          <h1 style="color:#ffffff;font-size:20px;margin:0;">Nuevo contacto desde RedAgrupa</h1>
          <p style="color:#ffffff;opacity:0.9;font-size:14px;margin:8px 0 0;">Página: ${data.pagina}</p>
        </div>
        <div style="background:#ffffff;padding:24px 30px;border:1px solid #eee;border-top:none;border-radius:0 0 8px 8px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${tableRows}
          </table>
          <p style="margin-top:20px;font-size:12px;color:#999;">
            Este mensaje fue enviado desde el formulario de contacto de redagrupa.cl
          </p>
        </div>
      </div>
    `

    const { error } = await resend.emails.send({
      from: "RedAgrupa Web <contacto@redagrupa.cl>",
      to: "contacto@jorgetorres.cl",
      cc: ["valeska.fajardo.h@gmail.com"],
      replyTo: data.email,
      subject: `Nuevo contacto desde ${data.pagina} - ${data.nombre}`,
      html,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Error al enviar el email" },
        { status: 500 }
      )
    }

    // Save to Supabase (non-blocking — don't fail the request if this errors)
    try {
      await getSupabaseAdmin().from("contactos_redagrupa").insert({
        nombre: data.nombre,
        email: data.email,
        telefono: data.telefono,
        empresa: "empresa" in data ? data.empresa || null : null,
        rubro: "rubro" in data ? (data as Record<string, string>).rubro || null : null,
        cantidad_empleados: "cantidad_empleados" in data ? (data as Record<string, string>).cantidad_empleados || null : null,
        motivo: data.motivo,
        mensaje: "mensaje" in data ? data.mensaje || null : null,
        pagina: data.pagina,
      })
    } catch (dbErr) {
      console.error("Supabase insert error:", dbErr)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("API error:", err)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}
