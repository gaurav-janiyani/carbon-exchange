"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import { Brain, TrendingUp, AlertTriangle, Zap } from "lucide-react"

const generateMockData = (days: number) => {
  return Array.from({ length: days }).map((_, i) => ({
    date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    carbonPrice: Math.random() * 10 + 20,
    tradingVolume: Math.random() * 1000 + 500,
    projectSuccess: Math.random() * 20 + 80,
  }))
}

export function AIPerformanceMetrics() {
  const [timeframe, setTimeframe] = useState("30")
  const [data, setData] = useState(generateMockData(30))

  useEffect(() => {
    setData(generateMockData(Number(timeframe)))
  }, [timeframe])

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-6 w-6" />
          AI Performance Metrics
        </CardTitle>
        <CardDescription>AI-driven insights and predictions for carbon markets</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="carbonPrice" className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <TabsList>
              <TabsTrigger value="carbonPrice">Carbon Price</TabsTrigger>
              <TabsTrigger value="tradingVolume">Trading Volume</TabsTrigger>
              <TabsTrigger value="projectSuccess">Project Success</TabsTrigger>
            </TabsList>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 days</SelectItem>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <TabsContent value="carbonPrice">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="carbonPrice" stroke="#8884d8" name="Carbon Price" />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="tradingVolume">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="tradingVolume" stroke="#82ca9d" fill="#82ca9d" name="Trading Volume" />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="projectSuccess">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="projectSuccess" stroke="#ffc658" name="Project Success Rate" />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium">AI Prediction Accuracy</span>
            <span className="text-green-500 flex items-center">
              <TrendingUp className="mr-1 h-4 w-4" />
              95.2%
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Anomalies Detected</span>
            <span className="text-yellow-500 flex items-center">
              <AlertTriangle className="mr-1 h-4 w-4" />3 in last 7 days
            </span>
          </div>
          <Button className="w-full mt-4">
            <Zap className="mr-2 h-4 w-4" />
            Generate AI Insights Report
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

