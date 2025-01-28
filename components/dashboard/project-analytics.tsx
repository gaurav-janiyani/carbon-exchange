"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const projectData = [
  { name: "Amazon Reforestation", carbonOffset: 1200, revenue: 15000 },
  { name: "Solar Farm Initiative", carbonOffset: 800, revenue: 10000 },
  { name: "Wind Energy Project", carbonOffset: 1500, revenue: 18000 },
  { name: "Mangrove Restoration", carbonOffset: 600, revenue: 7500 },
]

export function ProjectAnalytics() {
  const [metric, setMetric] = useState("carbonOffset")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Analytics</CardTitle>
        <CardDescription>Compare performance across your projects</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select value={metric} onValueChange={setMetric}>
            <SelectTrigger>
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="carbonOffset">Carbon Offset (tons)</SelectItem>
              <SelectItem value="revenue">Revenue ($)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={projectData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey={metric} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

