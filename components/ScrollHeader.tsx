"use client"

import React from "react"

import { useEffect, useState } from "react"

export default function ScrollHeader({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-colors duration-300 ${
        isScrolled ? "bg-[#cc0033]" : ""
      }`}
    >
      {children}
    </header>
  )
}
