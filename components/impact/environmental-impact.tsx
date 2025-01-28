"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { CarbonOffsetCounter } from "@/components/impact/carbon-offset-counter"
import { ImpactCalculator } from "@/components/impact/impact-calculator"
import { Leaf, Droplet, Wind } from "lucide-react"

const environmentalData = [
  { year: 2018, carbonOffset: 500000, waterSaved: 1000000, renewableEnergy: 200000 },
  { year: 2019, carbonOffset: 750000, waterSaved: 1500000, renewableEnergy: 300000 },
  { year: 2020, carbonOffset: 1000000, waterSaved: 2000000, renewableEnergy: 400000 },
  { year: 2021, carbonOffset: 1250000, waterSaved: 2500000, renewableEnergy: 500000 },
  { year: 2022, carbonOffset: 1500000, waterSaved: 3000000, renewableEnergy: 600000 },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export function EnvironmentalImpact() {
  const [hoveredBar, setHoveredBar] = useState(null)

  return (
    <motion.div className="space-y-6" variants={fadeInUp} initial="initial" animate="animate">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-2 border-green-500">
          <CardHeader>
            <CardTitle className="text-yellow-400">Environmental Impact Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={environmentalData}
                onMouseMove={(e) => e && setHoveredBar(e.activeTooltipIndex)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="year" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: "rgba(17, 17, 17, 0.8)", border: "1px solid #333" }} />
                <Bar dataKey="carbonOffset" fill="#4ade80" name="Carbon Offset (tons)" />
                <Bar dataKey="waterSaved" fill="#60a5fa" name="Water Saved (liters)" />
                <Bar dataKey="renewableEnergy" fill="#fbbf24" name="Renewable Energy (kWh)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-500">
          <CardHeader>
            <CardTitle className="text-yellow-400">Environmental Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  icon: Leaf,
                  label: "Total Carbon Offset",
                  value: environmentalData[environmentalData.length - 1].carbonOffset,
                  unit: "tons",
                },
                {
                  icon: Droplet,
                  label: "Total Water Saved",
                  value: environmentalData[environmentalData.length - 1].waterSaved,
                  unit: "liters",
                },
                {
                  icon: Wind,
                  label: "Total Renewable Energy",
                  value: environmentalData[environmentalData.length - 1].renewableEnergy,
                  unit: "kWh",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <item.icon className="mr-2 h-4 w-4 text-green-400" />
                  <span className="text-gray-300">
                    {item.label}: {item.value.toLocaleString()} {item.unit}
                  </span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <CarbonOffsetCounter initialOffset={environmentalData[environmentalData.length - 1].carbonOffset} />
      <ImpactCalculator />
    </motion.div>
  )
}

