"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, DollarSign, Users, BarChart } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export function ImpactHero({ data }) {
  return (
    <motion.section
      className="py-20 md:py-32 bg-transparent text-white rounded-lg border-2 border-green-500"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <div className="container">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 text-yellow-400">Our Global Impact</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: DollarSign,
              value: `$${(data.totalValueLocked / 1000000).toFixed(1)}M`,
              label: "Total Value Locked",
            },
            { icon: Leaf, value: data.totalCarbonOffset.toLocaleString(), label: "Tons of CO2 Offset" },
            { icon: BarChart, value: data.totalProjects.toLocaleString(), label: "Projects Funded" },
            { icon: Users, value: data.activeUsers.toLocaleString(), label: "Active Users" },
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="border-2 border-green-500 hover:border-yellow-400 transition-colors duration-300">
                <CardContent className="flex flex-col items-center p-6">
                  <item.icon className="w-12 h-12 mb-4 text-green-400" />
                  <motion.h3
                    className="text-3xl font-bold mb-2 text-yellow-400"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                  >
                    {item.value}
                  </motion.h3>
                  <p className="text-center text-gray-300">{item.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

