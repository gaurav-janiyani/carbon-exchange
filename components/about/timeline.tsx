"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

const milestones = [
  { year: 2021, event: "ICXP founded with a vision to revolutionize carbon markets" },
  { year: 2022, event: "Launch of blockchain-based carbon credit tracking system" },
  { year: 2022, event: "Partnership with major environmental organizations" },
  { year: 2023, event: "Introduction of AI-powered project verification" },
  { year: 2023, event: "Expansion to international markets" },
  { year: 2024, event: "Launch of advanced analytics and impact reporting tools" },
]

export function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {milestones.map((milestone, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <Button
              variant="ghost"
              className="w-full p-4 flex justify-between items-center"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <span className="font-bold">{milestone.year}</span>
              {expandedIndex === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="p-4">{milestone.event}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

