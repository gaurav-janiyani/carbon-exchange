"use client"

import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const Star = ({ size, top, left, duration }: { size: number; top: string; left: string; duration: number }) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{
      width: size,
      height: size,
      top,
      left,
    }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  />
)

export function StarryBackground() {
  const [stars, setStars] = React.useState<React.ReactNode[]>([])

  useEffect(() => {
    const starCount = 200
    const newStars = Array.from({ length: starCount }).map((_, i) => (
      <Star
        key={i}
        size={Math.random() * 4 + 1}
        top={`${Math.random() * 100}%`}
        left={`${Math.random() * 100}%`}
        duration={Math.random() * 3 + 2}
      />
    ))
    setStars(newStars)
  }, [])

  return <div className="fixed inset-0 w-full h-full overflow-hidden bg-black z-0">{stars}</div>
}

