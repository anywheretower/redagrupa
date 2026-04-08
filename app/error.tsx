"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-[#cc0033] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-[#333333] mb-3">Algo salió mal</h1>
        <p className="text-[#666666] mb-8">
          Ocurrió un error inesperado. Puedes intentar nuevamente o volver al inicio.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-[#cc0033] text-white font-medium rounded-lg hover:bg-[#a30029] transition-colors"
          >
            Intentar nuevamente
          </button>
          <a
            href="/"
            className="px-6 py-3 border border-gray-300 text-[#333333] font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  )
}
