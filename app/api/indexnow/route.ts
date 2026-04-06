import { NextRequest, NextResponse } from "next/server"

const INDEXNOW_KEY = "c1a34e6506a4c69df82f03dc457632ec"
const SITE_HOST = "www.redagrupa.cl"
const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`

// All known site URLs for bulk submission
const STATIC_URLS = [
  `https://${SITE_HOST}`,
  `https://${SITE_HOST}/seguro-complementario`,
  `https://${SITE_HOST}/seguro-complementario-bice-pyme`,
  `https://${SITE_HOST}/seguro-complementario-bice-personas`,
  `https://${SITE_HOST}/beneficios-redagrupa`,
  `https://${SITE_HOST}/nosotros`,
  `https://${SITE_HOST}/blog`,
  `https://${SITE_HOST}/formularios`,
  `https://${SITE_HOST}/politicas-de-privacidad`,
]

interface IndexNowPayload {
  host: string
  key: string
  keyLocation: string
  urlList: string[]
}

async function submitToIndexNow(urls: string[]): Promise<{ engine: string; status: number }[]> {
  const engines = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow",
  ]

  const payload: IndexNowPayload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }

  const results = await Promise.allSettled(
    engines.map(async (engine) => {
      const res = await fetch(engine, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      })
      return { engine, status: res.status }
    })
  )

  return results.map((r, i) => {
    if (r.status === "fulfilled") return r.value
    return { engine: engines[i], status: 0 }
  })
}

/**
 * POST /api/indexnow
 *
 * Body options:
 *   { "urls": ["https://www.redagrupa.cl/blog/mi-post"] }   — submit specific URLs
 *   { "all": true }                                          — submit all known site URLs
 *   (no body or empty)                                       — submit all known site URLs
 *
 * Optionally pass ?secret=YOUR_SECRET to protect the endpoint.
 * Set INDEXNOW_SECRET env var to enable protection.
 */
export async function POST(request: NextRequest) {
  // Optional secret protection
  const secret = process.env.INDEXNOW_SECRET
  if (secret) {
    const provided =
      request.nextUrl.searchParams.get("secret") ||
      request.headers.get("x-indexnow-secret")
    if (provided !== secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  let urls: string[] = STATIC_URLS

  try {
    const body = await request.json().catch(() => null)
    if (body?.urls && Array.isArray(body.urls) && body.urls.length > 0) {
      // Validate that all URLs belong to our domain
      const valid = body.urls.every(
        (u: string) => typeof u === "string" && u.startsWith(`https://${SITE_HOST}`)
      )
      if (!valid) {
        return NextResponse.json(
          { error: "All URLs must belong to " + SITE_HOST },
          { status: 400 }
        )
      }
      urls = body.urls
    }
  } catch {
    // Use default STATIC_URLS
  }

  if (urls.length === 0) {
    return NextResponse.json({ error: "No URLs to submit" }, { status: 400 })
  }

  // IndexNow accepts max 10,000 URLs per request
  if (urls.length > 10000) {
    return NextResponse.json({ error: "Max 10,000 URLs per request" }, { status: 400 })
  }

  const results = await submitToIndexNow(urls)

  return NextResponse.json({
    submitted: urls.length,
    urls,
    results,
  })
}

/**
 * GET /api/indexnow
 * Returns the IndexNow key for verification purposes.
 */
export async function GET() {
  return NextResponse.json({
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    host: SITE_HOST,
    staticUrls: STATIC_URLS,
  })
}
