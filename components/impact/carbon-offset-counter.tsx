"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf } from "lucide-react"

export function CarbonOffsetCounter({ initialOffset }: { initialOffset: number }) {
  const [offset, setOffset] = useState(initialOffset)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => prevOffset + Math.floor(Math.random() * 10))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="border-2 border-green-500">
      <CardHeader>
        <CardTitle className="flex items-center text-yellow-400">
          <Leaf className="mr-2 h-6 w-6" />
          Real-Time Carbon Offset
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center h-[300px]">
        <motion.div
          className="text-4xl md:text-6xl font-bold text-green-400"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4.5 }}
        >
          {offset.toLocaleString()} tons
        </motion.div>
        <p className="text-center mt-4 text-gray-400">CO2 offset and counting</p>
      </CardContent>
    </Card>
  )
}

