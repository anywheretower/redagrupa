"use client"

import { useContactModal } from "@/components/ContactModalProvider"

type Props = {
  pagina: string
  heading?: string
  className?: string
  children: React.ReactNode
}

export default function OpenContactModalButton({
  pagina,
  heading,
  className,
  children,
}: Props) {
  const { openContactModal } = useContactModal()
  return (
    <button
      type="button"
      onClick={() => openContactModal({ pagina, heading })}
      className={className}
    >
      {children}
    </button>
  )
}
