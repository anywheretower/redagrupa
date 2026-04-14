'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Focus trap
  const handleTabTrap = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'Tab' || !menuRef.current) return
    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return
    window.addEventListener('keydown', handleTabTrap)
    // Focus first link when menu opens
    const timer = setTimeout(() => {
      const firstLink = menuRef.current?.querySelector<HTMLElement>('a[href]')
      firstLink?.focus()
    }, 100)
    return () => {
      window.removeEventListener('keydown', handleTabTrap)
      clearTimeout(timer)
    }
  }, [isOpen, handleTabTrap])

  return (
    <>
      {/* Hamburger Button - Only visible on mobile */}
      <Button
        ref={buttonRef}
        variant="ghost"
        size="icon"
        className="lg:hidden text-white hover:bg-white/10"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div ref={menuRef} role="dialog" aria-modal="true" aria-label="Menú de navegación" className="fixed inset-0 top-[72px] bg-[#cc0033] z-50 lg:hidden">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
            <Link
              href="/nosotros"
              className="text-white text-lg py-3 border-b border-white/20"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/seguro-complementario"
              className="text-white text-lg py-3 border-b border-white/20"
              onClick={() => setIsOpen(false)}
            >
              Seguro Complementario Salud
            </Link>
            <Link
              href="/beneficios-redagrupa"
              className="text-white text-lg py-3 border-b border-white/20"
              onClick={() => setIsOpen(false)}
            >
              Beneficios RedAgrupa
            </Link>
            <div className="py-3 border-b border-white/20">
              <p className="text-white text-lg font-semibold mb-2">Seguro BICE</p>
              <div className="pl-4 space-y-3">
                <Link
                  href="/seguro-complementario-bice-pyme"
                  className="block text-white text-base"
                  onClick={() => setIsOpen(false)}
                >
                  Seguro BICE Pyme
                </Link>
                <Link
                  href="/seguro-complementario-bice-personas"
                  className="block text-white text-base"
                  onClick={() => setIsOpen(false)}
                >
                  Seguro BICE Personas
                </Link>
              </div>
            </div>
            <Link
              href="/blog"
              className="text-white text-lg py-3 border-b border-white/20"
              onClick={() => setIsOpen(false)}
            >
              Conocimiento Empresa
            </Link>
            <Link
              href="/formularios"
              className="text-white text-lg py-3 border-b border-white/20"
              onClick={() => setIsOpen(false)}
            >
              Formularios
            </Link>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 w-full py-3 mt-4"
              asChild
              onClick={() => setIsOpen(false)}
            >
              <a href="#formulario-contacto">Solicitar Asesoría</a>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
