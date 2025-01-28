"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { Users, Heart, BookOpen } from "lucide-react"

const socialData = [
  { name: "Jobs Created", value: 5000 },
  { name: "Communities Supported", value: 250 },
  { name: "Education Programs", value: 100 },
]

const COLORS = ["#4ade80", "#60a5fa", "#fbbf24"]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export function SocialImpact() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <motion.div className="grid gap-6 md:grid-cols-2" variants={fadeInUp} initial="initial" animate="animate">
      <Card className="border-2 border-green-500">
        <CardHeader>
          <CardTitle className="text-yellow-400">Social Impact Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={socialData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {socialData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    opacity={activeIndex === index ? 0.8 : 1}
                    stroke={activeIndex === index ? "#fff" : "none"}
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "rgba(17, 17, 17, 0.8)", border: "1px solid #333" }} />
              <Legend formatter={(value) => <span className="text-gray-300">{value}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="border-2 border-green-500">
        <CardHeader>
          <CardTitle className="text-yellow-400">Social Impact Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { icon: Users, label: "Jobs Created", value: socialData[0].value },
              { icon: Heart, label: "Communities Supported", value: socialData[1].value },
              { icon: BookOpen, label: "Education Programs", value: socialData[2].value },
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
                </span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

