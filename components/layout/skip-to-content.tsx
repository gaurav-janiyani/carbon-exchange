"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function SkipToContent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50"
      variant="secondary"
      onClick={() => {
        const content = document.getElementById("main-content")
        if (content) {
          content.tabIndex = -1
          content.focus()
          content.removeAttribute("tabindex")
        }
      }}
    >
      Skip to content
    </Button>
  )
}

