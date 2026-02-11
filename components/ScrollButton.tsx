"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface ScrollButtonProps extends ButtonProps {
  targetId: string
}

export default function ScrollButton({ targetId, children, onClick, ...props }: ScrollButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    onClick?.(e)
  }

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}
