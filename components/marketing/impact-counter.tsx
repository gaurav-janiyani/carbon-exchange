"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, DollarSign, Users, Globe } from "lucide-react"

const impactData = [
  { icon: Leaf, label: "Carbon Offset", value: 1000000, unit: "tons", increment: 17 },
  { icon: DollarSign, label: "Credits Traded", value: 50000000, unit: "AUD", increment: 834 },
  { icon: Users, label: "Active Users", value: 10000, unit: "", increment: 1 },
  { icon: Globe, label: "Projects", value: 500, unit: "", increment: 0.1 },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export function ImpactCounter() {
  const [counts, setCounts] = useState(impactData.map((item) => ({ ...item, currentValue: 0 })))

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count) => ({
          ...count,
          currentValue: Math.min(count.currentValue + count.increment, count.value),
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.section className="py-20 md:py-32 bg-transparent" initial="initial" animate="animate" variants={fadeInUp}>
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counts.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="bg-transparent border-2 border-green-600">
                <CardContent className="flex flex-col items-center p-6">
                  <item.icon className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-3xl font-bold mb-2 text-yellow-400">
                    {Math.floor(item.currentValue).toLocaleString()}
                    {item.unit && <span className="text-lg ml-1">{item.unit}</span>}
                  </h3>
                  <p className="text-gray-300 text-center">{item.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

