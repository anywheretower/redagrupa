import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import crypto from "crypto"

const SECRET = process.env.CONTACTOS_PASSWORD || ""

function createToken(): string {
  const expires = Date.now() + 24 * 60 * 60 * 1000 // 24h
  const payload = `${expires}`
  const signature = crypto
    .createHmac("sha256", SECRET)
    .update(payload)
    .digest("hex")
  return `${payload}.${signature}`
}

export function verifyToken(token: string): boolean {
  const [payload, signature] = token.split(".")
  if (!payload || !signature) return false

  const expires = parseInt(payload, 10)
  if (isNaN(expires) || Date.now() > expires) return false

  const expected = crypto
    .createHmac("sha256", SECRET)
    .update(payload)
    .digest("hex")
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
}

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (!SECRET || password !== SECRET) {
      return NextResponse.json(
        { error: "Clave incorrecta" },
        { status: 401 }
      )
    }

    const token = createToken()
    const cookieStore = await cookies()
    cookieStore.set("contactos_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60, // 24h
      path: "/",
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Error interno" },
      { status: 500 }
    )
  }
}
