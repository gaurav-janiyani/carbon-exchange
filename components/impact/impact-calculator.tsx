"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function ImpactCalculator() {
  const [trees, setTrees] = useState("")
  const [carbonOffset, setCarbonOffset] = useState<number | null>(null)

  const calculateImpact = () => {
    const treeCount = Number.parseInt(trees)
    if (!isNaN(treeCount)) {
      // Assuming each tree offsets about 22kg of CO2 per year
      const offsetInKg = treeCount * 22
      setCarbonOffset(offsetInKg / 1000) // Convert to tons
    }
  }

  return (
    <Card className="border-2 border-green-500">
      <CardHeader>
        <CardTitle className="text-yellow-400">Impact Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="trees" className="text-gray-300">
              Number of Trees Planted
            </Label>
            <Input
              id="trees"
              type="number"
              value={trees}
              onChange={(e) => setTrees(e.target.value)}
              placeholder="Enter number of trees"
              className="bg-transparent border-green-500 text-white mt-1"
            />
          </div>
          <Button onClick={calculateImpact} className="bg-green-500 text-white hover:bg-green-600 w-full">
            Calculate Impact
          </Button>
          {carbonOffset !== null && (
            <div className="mt-4 p-4 bg-green-500 bg-opacity-20 rounded-md">
              <p className="text-lg text-gray-300">
                Estimated Carbon Offset: <strong className="text-green-400">{carbonOffset.toFixed(2)} tons</strong> of
                CO2 per year
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

