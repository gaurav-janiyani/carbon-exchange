"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ImpactTimeline } from "@/components/impact/impact-timeline"
import { Leaf, Droplet, Wind } from "lucide-react"

const sustainabilityGoals = [
  { name: "Carbon Neutrality", progress: 75, target: "2030", icon: Leaf },
  { name: "100% Renewable Energy", progress: 60, target: "2035", icon: Wind },
  { name: "Zero Waste to Landfill", progress: 40, target: "2040", icon: Droplet },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export function SustainableImpact() {
  const [hoveredGoal, setHoveredGoal] = useState(null)

  return (
    <motion.div className="space-y-6" variants={fadeInUp} initial="initial" animate="animate">
      <Card className="border-2 border-green-500">
        <CardHeader>
          <CardTitle className="text-yellow-400">Sustainability Goals</CardTitle>
          <CardDescription className="text-gray-400">
            Track our progress towards key environmental targets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sustainabilityGoals.map((goal, index) => (
              <motion.div
                key={goal.name}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                onMouseEnter={() => setHoveredGoal(goal.name)}
                onMouseLeave={() => setHoveredGoal(null)}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="flex items-center text-gray-300">
                    <goal.icon className="mr-2 h-4 w-4 text-green-400" />
                    {goal.name}
                  </span>
                  <span className="text-gray-400">{goal.progress}% Complete</span>
                </div>
                <Progress
                  value={goal.progress}
                  className="h-2 bg-gray-700 bg-opacity-50"
                  indicatorClassName="bg-green-500"
                  style={{
                    transform: hoveredGoal === goal.name ? "scaleY(1.5)" : "scaleY(1)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
                <p className="text-sm text-gray-500 mt-1">Target: {goal.target}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
      <ImpactTimeline />
    </motion.div>
  )
}

