"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { DollarSign, TrendingUp, Users } from "lucide-react"

const economicData = [
  { month: "Jan", totalValue: 5000000, newUsers: 800, projectsLaunched: 15 },
  { month: "Feb", totalValue: 6000000, newUsers: 950, projectsLaunched: 18 },
  { month: "Mar", totalValue: 7500000, newUsers: 1100, projectsLaunched: 22 },
  { month: "Apr", totalValue: 9000000, newUsers: 1300, projectsLaunched: 25 },
  { month: "May", totalValue: 11000000, newUsers: 1500, projectsLaunched: 30 },
  { month: "Jun", totalValue: 13000000, newUsers: 1800, projectsLaunched: 35 },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export function EconomicImpact() {
  const [hoveredMonth, setHoveredMonth] = useState(null)

  return (
    <motion.div className="grid gap-6 md:grid-cols-2" variants={fadeInUp} initial="initial" animate="animate">
      <Card className="border-2 border-green-500">
        <CardHeader>
          <CardTitle className="text-yellow-400">Total Value Locked Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={economicData}
              onMouseMove={(e) => e && e.activeLabel && setHoveredMonth(e.activeLabel)}
              onMouseLeave={() => setHoveredMonth(null)}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip contentStyle={{ backgroundColor: "rgba(17, 17, 17, 0.8)", border: "1px solid #333" }} />
              <Line type="monotone" dataKey="totalValue" stroke="#4ade80" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="border-2 border-green-500">
        <CardHeader>
          <CardTitle className="text-yellow-400">Economic Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                icon: DollarSign,
                label: "Total Value Locked",
                value: economicData[economicData.length - 1].totalValue,
              },
              { icon: Users, label: "Total Users", value: economicData[economicData.length - 1].newUsers },
              {
                icon: TrendingUp,
                label: "Projects Launched",
                value: economicData[economicData.length - 1].projectsLaunched,
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
                  {item.label}: {item.value.toLocaleString()}
                  {item.label === "Total Value Locked" && " USD"}
                </span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

