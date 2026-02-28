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

  // Edit state
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<Partial<Contacto>>({})
  const [saving, setSaving] = useState(false)

  // Delete state
  const [deletingId, setDeletingId] = useState<number | null>(null)

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

  const handleDelete = async (id: number) => {
    setDeletingId(id)
    try {
      const res = await fetch("/api/contactos", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })
      if (res.ok) {
        setContactos((prev) => prev.filter((c) => c.id !== id))
        if (expandedId === id) setExpandedId(null)
      }
    } catch {
      console.error("Error deleting contacto")
    } finally {
      setDeletingId(null)
    }
  }

  const startEdit = (c: Contacto) => {
    setEditingId(c.id)
    setEditForm({
      nombre: c.nombre,
      email: c.email,
      telefono: c.telefono,
      empresa: c.empresa || "",
      rubro: c.rubro || "",
      cantidad_empleados: c.cantidad_empleados || "",
      motivo: c.motivo,
      mensaje: c.mensaje || "",
    })
  }

  const handleSave = async () => {
    if (!editingId) return
    setSaving(true)
    try {
      const res = await fetch("/api/contactos", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingId, ...editForm }),
      })
      if (res.ok) {
        const { contacto } = await res.json()
        setContactos((prev) => prev.map((c) => (c.id === editingId ? contacto : c)))
        setEditingId(null)
      }
    } catch {
      console.error("Error updating contacto")
    } finally {
      setSaving(false)
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
            <h1 className="text-xl font-bold text-gray-900">RedAgrupa</h1>
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
              <option value="cotizacion">Cotización</option>
              <option value="consulta">Consulta</option>
              <option value="informacion">Más información</option>
              <option value="otro">Otro</option>
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
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">Fecha</th>
                    <th className="px-4 py-3">Nombre Completo</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3 hidden sm:table-cell">Teléfono</th>
                    <th className="px-4 py-3 hidden md:table-cell">Nombre Empresa</th>
                    <th className="px-4 py-3 hidden md:table-cell">Rubro</th>
                    <th className="px-4 py-3 hidden lg:table-cell">Cantidad de Empleados</th>
                    <th className="px-4 py-3 hidden lg:table-cell">Motivo</th>
                    <th className="px-4 py-3 hidden lg:table-cell">Mensaje</th>
                    <th className="px-4 py-3 hidden lg:table-cell">Página</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {contactos.map((c) => (
                    <Fragment key={c.id}>
                      <tr
                        onClick={() => {
                          if (editingId === c.id) return
                          setExpandedId(expandedId === c.id ? null : c.id)
                        }}
                        className="hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{c.id}</td>
                        <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{formatDate(c.created_at)}</td>
                        <td className="px-4 py-3 font-medium text-gray-900">{c.nombre}</td>
                        <td className="px-4 py-3 text-gray-600">{c.email}</td>
                        <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{c.telefono}</td>
                        <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{c.empresa || "—"}</td>
                        <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{c.rubro || "—"}</td>
                        <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{c.cantidad_empleados || "—"}</td>
                        <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{c.motivo}</td>
                        <td className="px-4 py-3 text-gray-600 hidden lg:table-cell max-w-[200px] truncate">{c.mensaje || "—"}</td>
                        <td className="px-4 py-3 text-gray-500 hidden lg:table-cell">{c.pagina}</td>
                      </tr>
                      {expandedId === c.id && (
                        <tr>
                          <td colSpan={11} className="px-4 py-4 bg-gray-50">
                            {editingId === c.id ? (
                              /* Edit form */
                              <div className="max-w-3xl space-y-3">
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                  <div>
                                    <label className="text-xs text-gray-400 block mb-1">Nombre</label>
                                    <input
                                      value={editForm.nombre || ""}
                                      onChange={(e) => setEditForm({ ...editForm, nombre: e.target.value })}
                                      className="w-full px-3 py-1.5 text-sm bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#cc0033] outline-none"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-xs text-gray-400 block mb-1">Email</label>
                                    <input
                                      value={editForm.email || ""}
                                      onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                                      className="w-full px-3 py-1.5 text-sm bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#cc0033] outline-none"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-xs text-gray-400 block mb-1">Teléfono</label>
                                    <input
                                      value={editForm.telefono || ""}
                                      onChange={(e) => setEditForm({ ...editForm, telefono: e.target.value })}
                                      className="w-full px-3 py-1.5 text-sm bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#cc0033] outline-none"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-xs text-gray-400 block mb-1">Empresa</label>
                                    <input
                                      value={editForm.empresa || ""}
                                      onChange={(e) => setEditForm({ ...editForm, empresa: e.target.value })}
                                      className="w-full px-3 py-1.5 text-sm bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#cc0033] outline-none"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-xs text-gray-400 block mb-1">Rubro</label>
                                    <input
                                      value={editForm.rubro || ""}
                                      onChange={(e) => setEditForm({ ...editForm, rubro: e.target.value })}
                                      className="w-full px-3 py-1.5 text-sm bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#cc0033] outline-none"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-xs text-gray-400 block mb-1">Cantidad de Empleados</label>
                                    <input
                                      value={editForm.cantidad_empleados || ""}
                                      onChange={(e) => setEditForm({ ...editForm, cantidad_empleados: e.target.value })}
                                      className="w-full px-3 py-1.5 text-sm bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#cc0033] outline-none"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-xs text-gray-400 block mb-1">Motivo</label>
                                    <select
                                      value={editForm.motivo || ""}
                                      onChange={(e) => setEditForm({ ...editForm, motivo: e.target.value })}
                                      className="w-full px-3 py-1.5 text-sm bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#cc0033] outline-none"
                                    >
                                      <option value="cotizacion">Cotización</option>
                                      <option value="consulta">Consulta</option>
                                      <option value="informacion">Más información</option>
                                      <option value="otro">Otro</option>
                                    </select>
                                  </div>
                                </div>
                                <div>
                                  <label className="text-xs text-gray-400 block mb-1">Mensaje</label>
                                  <textarea
                                    value={editForm.mensaje || ""}
                                    onChange={(e) => setEditForm({ ...editForm, mensaje: e.target.value })}
                                    rows={3}
                                    className="w-full px-3 py-1.5 text-sm bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#cc0033] outline-none resize-none"
                                  />
                                </div>
                                <div className="flex gap-2">
                                  <button
                                    onClick={handleSave}
                                    disabled={saving}
                                    className="px-4 py-1.5 text-sm bg-[#cc0033] text-white rounded-lg hover:bg-[#a30029] transition-colors disabled:opacity-50"
                                  >
                                    {saving ? "Guardando..." : "Guardar"}
                                  </button>
                                  <button
                                    onClick={() => setEditingId(null)}
                                    className="px-4 py-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                                  >
                                    Cancelar
                                  </button>
                                </div>
                              </div>
                            ) : (
                              /* Detail view */
                              <div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm max-w-3xl">
                                  <div>
                                    <span className="text-xs text-gray-400 block">Teléfono</span>
                                    <span className="text-gray-700">{c.telefono}</span>
                                  </div>
                                  {c.empresa && (
                                    <div>
                                      <span className="text-xs text-gray-400 block">Nombre Empresa</span>
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
                                      <span className="text-xs text-gray-400 block">Cantidad de Empleados</span>
                                      <span className="text-gray-700">{c.cantidad_empleados}</span>
                                    </div>
                                  )}
                                  <div>
                                    <span className="text-xs text-gray-400 block">Motivo</span>
                                    <span className="text-gray-700">{c.motivo}</span>
                                  </div>
                                  <div>
                                    <span className="text-xs text-gray-400 block">Página de origen</span>
                                    <span className="text-gray-700">{c.pagina}</span>
                                  </div>
                                  {c.mensaje && (
                                    <div className="col-span-2 sm:col-span-3">
                                      <span className="text-xs text-gray-400 block">Mensaje</span>
                                      <p className="text-gray-700 whitespace-pre-wrap">{c.mensaje}</p>
                                    </div>
                                  )}
                                </div>
                                <div className="flex gap-3 mt-4 pt-3 border-t border-gray-200">
                                  <button
                                    onClick={(e) => { e.stopPropagation(); startEdit(c) }}
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-[#cc0033] transition-colors"
                                  >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                    Editar
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      if (confirm("¿Eliminar este contacto?")) handleDelete(c.id)
                                    }}
                                    disabled={deletingId === c.id}
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-red-600 transition-colors disabled:opacity-50"
                                  >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    {deletingId === c.id ? "Eliminando..." : "Eliminar"}
                                  </button>
                                </div>
                              </div>
                            )}
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
