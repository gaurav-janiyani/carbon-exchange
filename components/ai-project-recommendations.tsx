"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Leaf, DollarSign, BarChart } from "lucide-react"
import Link from "next/link"

const mockProjects = [
  {
    id: 1,
    name: "Amazon Rainforest Conservation",
    type: "REDD+",
    location: "Brazil",
    expectedReturn: 12,
    riskLevel: "Medium",
    carbonImpact: 50000,
    price: 15,
  },
  {
    id: 2,
    name: "Wind Farm in South Australia",
    type: "Renewable Energy",
    location: "Australia",
    expectedReturn: 10,
    riskLevel: "Low",
    carbonImpact: 30000,
    price: 12,
  },
  {
    id: 3,
    name: "Mangrove Restoration in Indonesia",
    type: "Blue Carbon",
    location: "Indonesia",
    expectedReturn: 15,
    riskLevel: "High",
    carbonImpact: 40000,
    price: 18,
  },
]

export function AIProjectRecommendations() {
  const [riskTolerance, setRiskTolerance] = useState(50)
  const [expectedReturn, setExpectedReturn] = useState(10)
  const [carbonImpact, setCarbonImpact] = useState(30000)
  const [recommendedProjects, setRecommendedProjects] = useState([])

  useEffect(() => {
    // Simulating AI-based project recommendations
    const filteredProjects = mockProjects.filter((project) => {
      const matchesRisk =
        (riskTolerance < 33 && project.riskLevel === "Low") ||
        (riskTolerance >= 33 && riskTolerance < 66 && project.riskLevel === "Medium") ||
        (riskTolerance >= 66 && project.riskLevel === "High")
      const matchesReturn = project.expectedReturn >= expectedReturn
      const matchesImpact = project.carbonImpact >= carbonImpact
      return matchesRisk && matchesReturn && matchesImpact
    })

    setRecommendedProjects(filteredProjects)
  }, [riskTolerance, expectedReturn, carbonImpact])

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Project Recommendations</CardTitle>
        <CardDescription>Get personalized project recommendations based on your preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium">Risk Tolerance</label>
            <Slider
              min={0}
              max={100}
              step={1}
              value={[riskTolerance]}
              onValueChange={(value) => setRiskTolerance(value[0])}
              className="mt-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>Low Risk</span>
              <span>High Risk</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Expected Return (%)</label>
            <Slider
              min={5}
              max={20}
              step={1}
              value={[expectedReturn]}
              onValueChange={(value) => setExpectedReturn(value[0])}
              className="mt-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>5%</span>
              <span>20%</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Minimum Carbon Impact (tons CO2e)</label>
            <Slider
              min={10000}
              max={100000}
              step={1000}
              value={[carbonImpact]}
              onValueChange={(value) => setCarbonImpact(value[0])}
              className="mt-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>10,000</span>
              <span>100,000</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Recommended Projects</h3>
          <div className="space-y-4">
            {recommendedProjects.map((project) => (
              <Card key={project.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{project.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {project.type} | {project.location}
                      </p>
                    </div>
                    <Badge
                      variant={
                        project.riskLevel === "Low"
                          ? "secondary"
                          : project.riskLevel === "Medium"
                            ? "default"
                            : "destructive"
                      }
                    >
                      {project.riskLevel} Risk
                    </Badge>
                  </div>
                  <div className="flex justify-between mt-4 text-sm">
                    <div className="flex items-center">
                      <BarChart className="w-4 h-4 mr-1" />
                      <span>{project.expectedReturn}% return</span>
                    </div>
                    <div className="flex items-center">
                      <Leaf className="w-4 h-4 mr-1" />
                      <span>{project.carbonImpact.toLocaleString()} tons CO2e</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span>${project.price}/credit</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

