"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function DropdownBICE() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [open])

  const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setOpen((prev) => !prev)
    } else if (e.key === "ArrowDown" && !open) {
      e.preventDefault()
      setOpen(true)
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-current={pathname?.startsWith("/seguro-complementario-bice") ? "page" : undefined}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleButtonKeyDown}
        className="text-white hover:text-white/80 transition-colors font-medium text-xs flex items-center gap-1"
      >
        Seguro BICE
        <svg
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="bg-white rounded-lg shadow-lg py-2 min-w-[200px]" role="menu">
          <Link
            href="/seguro-complementario-bice-pyme"
            role="menuitem"
            aria-current={pathname === "/seguro-complementario-bice-pyme" ? "page" : undefined}
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#cc0033] focus:bg-gray-50 focus:text-[#cc0033] focus:outline-none transition-colors aria-[current=page]:bg-gray-50 aria-[current=page]:text-[#cc0033] aria-[current=page]:font-semibold"
          >
            Seguro BICE Pyme
          </Link>
          <Link
            href="/seguro-complementario-bice-personas"
            role="menuitem"
            aria-current={pathname === "/seguro-complementario-bice-personas" ? "page" : undefined}
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#cc0033] focus:bg-gray-50 focus:text-[#cc0033] focus:outline-none transition-colors aria-[current=page]:bg-gray-50 aria-[current=page]:text-[#cc0033] aria-[current=page]:font-semibold"
          >
            Seguro BICE Personas
          </Link>
        </div>
      </div>
    </div>
  )
}
