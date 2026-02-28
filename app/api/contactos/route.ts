import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { verifyToken } from "./auth/route"
import { getSupabaseAdmin } from "@/lib/supabase"

export async function GET(request: NextRequest) {
  // Verify auth
  const cookieStore = await cookies()
  const token = cookieStore.get("contactos_token")?.value
  if (!token || !verifyToken(token)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  // Parse filters
  const { searchParams } = request.nextUrl
  const desde = searchParams.get("desde")
  const hasta = searchParams.get("hasta")
  const motivo = searchParams.get("motivo")

  let query = getSupabaseAdmin()
    .from("contactos_redagrupa")
    .select("*")
    .order("created_at", { ascending: false })

  if (desde) {
    query = query.gte("created_at", `${desde}T00:00:00`)
  }
  if (hasta) {
    query = query.lte("created_at", `${hasta}T23:59:59`)
  }
  if (motivo) {
    query = query.eq("motivo", motivo)
  }

  const { data, error } = await query

  if (error) {
    console.error("Supabase query error:", error)
    return NextResponse.json(
      { error: "Error al consultar contactos" },
      { status: 500 }
    )
  }

  return NextResponse.json({ contactos: data })
}
