"use client"

import { useState, useEffect, useCallback, Fragment } from "react"

interface Contacto {
  id: number
  nombre: string
  email: string
  telefono: string
  empresa: string | null
  rubro: string | null
  cantidad_empleados: string | null
  motivo: string
  mensaje: string | null
  pagina: string
  created_at: string
}

export default function ContactosClient() {
  const [autenticado, setAutenticado] = useState(false)
  const [cargando, setCargando] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const [contactos, setContactos] = useState<Contacto[]>([])
  const [cargandoContactos, setCargandoContactos] = useState(false)

  // Filters
  const [desde, setDesde] = useState("")
  const [hasta, setHasta] = useState("")
  const [motivo, setMotivo] = useState("")

  // Expanded row
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const fetchContactos = useCallback(async () => {
    setCargandoContactos(true)
    try {
      const params = new URLSearchParams()
      if (desde) params.set("desde", desde)
      if (hasta) params.set("hasta", hasta)
      if (motivo) params.set("motivo", motivo)

      const res = await fetch(`/api/contactos?${params.toString()}`)
      if (res.status === 401) {
        setAutenticado(false)
        return
      }
      const data = await res.json()
      setContactos(data.contactos || [])
    } catch {
      console.error("Error fetching contactos")
    } finally {
      setCargandoContactos(false)
    }
  }, [desde, hasta, motivo])

  // Check if already authenticated
  useEffect(() => {
    fetch("/api/contactos")
      .then((res) => {
        if (res.ok) {
          setAutenticado(true)
        }
      })
      .catch(() => {})
  }, [])

  // Fetch when authenticated or filters change
  useEffect(() => {
    if (autenticado) {
      fetchContactos()
    }
  }, [autenticado, fetchContactos])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setCargando(true)

    try {
      const res = await fetch("/api/contactos/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })

      if (!res.ok) {
        setError("Clave incorrecta")
        return
      }

      setAutenticado(true)
      setPassword("")
    } catch {
      setError("Error de conexión")
    } finally {
      setCargando(false)
    }
  }

  const formatDate = (iso: string) => {
    const d = new Date(iso)
    return d.toLocaleDateString("es-CL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  // Login screen
  if (!autenticado) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-[#cc0033] rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Contactos RedAgrupa</h1>
            <p className="text-sm text-gray-500 mt-1">Ingresa la clave para acceder</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Clave de acceso"
              className="w-full px-4 py-2.5 text-sm bg-gray-100 rounded-lg border-none focus:ring-2 focus:ring-[#cc0033] outline-none"
              autoFocus
            />
            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
            <button
              type="submit"
              disabled={cargando || !password}
              className="w-full bg-[#cc0033] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#a30029] transition-colors disabled:opacity-50"
            >
              {cargando ? "Verificando..." : "Acceder"}
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#cc0033] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-lg font-bold">Contactos RedAgrupa</h1>
          <span className="text-sm text-white/80">{contactos.length} contacto{contactos.length !== 1 ? "s" : ""}</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-wrap gap-4 items-end">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Desde</label>
            <input
              type="date"
              value={desde}
              onChange={(e) => setDesde(e.target.value)}
              className="px-3 py-2 text-sm bg-gray-100 rounded-lg border-none focus:ring-2 focus:ring-[#cc0033] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Hasta</label>
            <input
              type="date"
              value={hasta}
              onChange={(e) => setHasta(e.target.value)}
              className="px-3 py-2 text-sm bg-gray-100 rounded-lg border-none focus:ring-2 focus:ring-[#cc0033] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Motivo</label>
            <select
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              className="px-3 py-2 text-sm bg-gray-100 rounded-lg border-none focus:ring-2 focus:ring-[#cc0033] outline-none"
            >
              <option value="">Todos</option>
              <option value="Cotizar seguro">Cotizar seguro</option>
              <option value="Información general">Información general</option>
              <option value="Soporte">Soporte</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          {(desde || hasta || motivo) && (
            <button
              onClick={() => { setDesde(""); setHasta(""); setMotivo("") }}
              className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Table */}
        {cargandoContactos ? (
          <div className="text-center py-20 text-gray-400">Cargando...</div>
        ) : contactos.length === 0 ? (
          <div className="text-center py-20 text-gray-400">No hay contactos registrados</div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <th className="px-4 py-3">Fecha</th>
                    <th className="px-4 py-3">Nombre</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3 hidden sm:table-cell">Teléfono</th>
                    <th className="px-4 py-3 hidden md:table-cell">Empresa</th>
                    <th className="px-4 py-3 hidden lg:table-cell">Motivo</th>
                    <th className="px-4 py-3 hidden lg:table-cell">Página</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {contactos.map((c) => (
                    <Fragment key={c.id}>
                      <tr
                        onClick={() => setExpandedId(expandedId === c.id ? null : c.id)}
                        className="hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{formatDate(c.created_at)}</td>
                        <td className="px-4 py-3 font-medium text-gray-900">{c.nombre}</td>
                        <td className="px-4 py-3 text-gray-600">{c.email}</td>
                        <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{c.telefono}</td>
                        <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{c.empresa || "—"}</td>
                        <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{c.motivo}</td>
                        <td className="px-4 py-3 text-gray-500 hidden lg:table-cell">{c.pagina}</td>
                      </tr>
                      {expandedId === c.id && (
                        <tr>
                          <td colSpan={7} className="px-4 py-4 bg-gray-50">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm max-w-3xl">
                              <div>
                                <span className="text-xs text-gray-400 block">Teléfono</span>
                                <span className="text-gray-700">{c.telefono}</span>
                              </div>
                              {c.empresa && (
                                <div>
                                  <span className="text-xs text-gray-400 block">Empresa</span>
                                  <span className="text-gray-700">{c.empresa}</span>
                                </div>
                              )}
                              {c.rubro && (
                                <div>
                                  <span className="text-xs text-gray-400 block">Rubro</span>
                                  <span className="text-gray-700">{c.rubro}</span>
                                </div>
                              )}
                              {c.cantidad_empleados && (
                                <div>
                                  <span className="text-xs text-gray-400 block">Empleados</span>
                                  <span className="text-gray-700">{c.cantidad_empleados}</span>
                                </div>
                              )}
                              <div>
                                <span className="text-xs text-gray-400 block">Motivo</span>
                                <span className="text-gray-700">{c.motivo}</span>
                              </div>
                              <div>
                                <span className="text-xs text-gray-400 block">Página</span>
                                <span className="text-gray-700">{c.pagina}</span>
                              </div>
                              {c.mensaje && (
                                <div className="col-span-2 sm:col-span-3">
                                  <span className="text-xs text-gray-400 block">Mensaje</span>
                                  <p className="text-gray-700 whitespace-pre-wrap">{c.mensaje}</p>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
