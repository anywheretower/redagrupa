"use client"

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, sans-serif", background: "#f8f9fa" }}>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <div style={{ textAlign: "center", maxWidth: "400px" }}>
            <div style={{ width: "64px", height: "64px", background: "#cc0033", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#333333", marginBottom: "12px" }}>Algo salió mal</h1>
            <p style={{ color: "#666666", marginBottom: "32px" }}>
              Ocurrió un error inesperado. Puedes intentar nuevamente o volver al inicio.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={reset}
                style={{ padding: "12px 24px", background: "#cc0033", color: "white", fontWeight: 500, borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "1rem" }}
              >
                Intentar nuevamente
              </button>
              <a
                href="/"
                style={{ padding: "12px 24px", border: "1px solid #ddd", color: "#333333", fontWeight: 500, borderRadius: "8px", textDecoration: "none", fontSize: "1rem" }}
              >
                Volver al inicio
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
