"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImpactHero } from "@/components/impact/impact-hero"
import { EconomicImpact } from "@/components/impact/economic-impact"
import { EnvironmentalImpact } from "@/components/impact/environmental-impact"
import { SocialImpact } from "@/components/impact/social-impact"
import { SustainableImpact } from "@/components/impact/sustainable-impact"
import { WorldMap } from "@/components/impact/world-map"
import { Chart3D } from "@/components/impact/chart-3d"
import { CarbonOffsetCounter } from "@/components/impact/carbon-offset-counter"
import { ImpactCalculator } from "@/components/impact/impact-calculator"

const impactData = {
  totalCarbonOffset: 1500000,
  totalProjects: 250,
  activeUsers: 10000,
  totalValueLocked: 75000000,
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function ImpactDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container py-12 space-y-16 bg-transparent text-white">
      <ImpactHero data={impactData} />

      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 p-1 rounded-lg border-2 border-green-500 mb-8">
            {["overview", "economic", "environmental", "social", "sustainable"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="text-gray-400 data-[state=active]:bg-green-500 data-[state=active]:text-white rounded-md transition-colors duration-200"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="overview">
            <div className="grid gap-8 md:grid-cols-2">
              <WorldMap />
              <Chart3D />
              <CarbonOffsetCounter initialOffset={impactData.totalCarbonOffset} />
              <ImpactCalculator />
            </div>
          </TabsContent>
          <TabsContent value="economic">
            <EconomicImpact />
          </TabsContent>
          <TabsContent value="environmental">
            <EnvironmentalImpact />
          </TabsContent>
          <TabsContent value="social">
            <SocialImpact />
          </TabsContent>
          <TabsContent value="sustainable">
            <SustainableImpact />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}

