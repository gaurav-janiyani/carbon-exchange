"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const timelineEvents = [
  { year: 2020, event: "ICXP Founded", description: "Launch of the Inclusive Carbon Exchange Platform" },
  { year: 2021, event: "First 100 Projects", description: "Milestone of 100 carbon credit projects listed" },
  { year: 2022, event: "1M Tons CO2 Offset", description: "Reached 1 million tons of CO2 offset" },
  { year: 2023, event: "Global Expansion", description: "Expanded operations to 5 continents" },
  { year: 2024, event: "AI Integration", description: "Launched AI-powered project verification" },
]

export function ImpactTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ICXP Milestones</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className="mb-8 flex justify-between items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="w-24 text-right">
                <span className="font-bold text-xl">{event.year}</span>
              </div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-5/6 pl-4">
                <h3 className="font-bold text-lg">{event.event}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="absolute left-[7.5rem] top-0 bottom-0 w-0.5 bg-gray-300"></div>
        </div>
      </CardContent>
    </Card>
  )
}

