"use client"

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"

const ExitIntentPopup = dynamic(() => import("@/components/ExitIntentPopup"), { ssr: false })

export default function ExitIntentPopupLazy() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(() => setReady(true), { timeout: 3000 })
      return () => cancelIdleCallback(id)
    } else {
      const timer = setTimeout(() => setReady(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!ready) return null
  return <ExitIntentPopup />
}
