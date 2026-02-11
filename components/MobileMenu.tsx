'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ScrollButton from '@/components/ScrollButton'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Hamburger Button - Only visible on mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden text-white hover:bg-white/10"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-[#cc0033] z-50 lg:hidden">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
            <Link
              href="/nosotros"
              className="text-white text-lg py-3 border-b border-white/20"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/seguros-salud"
              className="text-white text-lg py-3 border-b border-white/20"
              onClick={() => setIsOpen(false)}
            >
              Seguros de Salud
            </Link>
            <ScrollButton
              targetId="formulario-contacto"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 w-full py-3 mt-4"
              onClick={() => setIsOpen(false)}
            >
              Agendar orientación
            </ScrollButton>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 w-full py-3"
              asChild
            >
              <a href="https://redagrupa.vercel.app/dashboard" target="_blank" rel="noopener noreferrer">
                Acceder a CRM
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
