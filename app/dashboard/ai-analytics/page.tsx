"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  LineChart,
  BarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import { Brain, TrendingUp, AlertTriangle, Zap, ShoppingCart, Leaf, DollarSign } from "lucide-react"
import Link from "next/link"

const mockData = {
  carbonPriceHistory: [
    { date: "2023-01", price: 15 },
    { date: "2023-02", price: 16 },
    { date: "2023-03", price: 17 },
    { date: "2023-04", price: 18 },
    { date: "2023-05", price: 20 },
    { date: "2023-06", price: 22 },
  ],
  projectPerformance: [
    { name: "Project A", actual: 95, predicted: 90 },
    { name: "Project B", actual: 88, predicted: 85 },
    { name: "Project C", actual: 102, predicted: 100 },
    { name: "Project D", actual: 75, predicted: 80 },
    { name: "Project E", actual: 110, predicted: 105 },
  ],
  riskAssessment: [
    { name: "Low Risk", value: 60 },
    { name: "Medium Risk", value: 30 },
    { name: "High Risk", value: 10 },
  ],
  anomalies: [
    { id: 1, project: "Project X", type: "Unusual carbon sequestration rate", severity: "Medium" },
    { id: 2, project: "Project Y", type: "Unexpected land use change", severity: "High" },
    { id: 3, project: "Project Z", type: "Anomalous satellite imagery", severity: "Low" },
  ],
  marketTrends: [
    { date: "2023-01", demand: 1000, supply: 800 },
    { date: "2023-02", demand: 1100, supply: 900 },
    { date: "2023-03", demand: 1300, supply: 1000 },
    { date: "2023-04", demand: 1200, supply: 1100 },
    { date: "2023-05", demand: 1400, supply: 1200 },
    { date: "2023-06", demand: 1500, supply: 1300 },
  ],
  projectTypeDistribution: [
    { name: "Reforestation", value: 35 },
    { name: "Renewable Energy", value: 25 },
    { name: "Agriculture", value: 20 },
    { name: "Blue Carbon", value: 15 },
    { name: "Energy Efficiency", value: 5 },
  ],
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

export default function AIAnalyticsDashboard() {
  const [timeframe, setTimeframe] = useState("6m")
  const [predictionHorizon, setPredictionHorizon] = useState("3m")

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">AI Analytics Dashboard</h1>

      <div className="flex justify-between items-center mb-6">
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1m">Last Month</SelectItem>
            <SelectItem value="3m">Last 3 Months</SelectItem>
            <SelectItem value="6m">Last 6 Months</SelectItem>
            <SelectItem value="1y">Last Year</SelectItem>
            <SelectItem value="all">All Time</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Prediction Horizon:</span>
          <Select value={predictionHorizon} onValueChange={setPredictionHorizon}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Horizon" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">1 Month</SelectItem>
              <SelectItem value="3m">3 Months</SelectItem>
              <SelectItem value="6m">6 Months</SelectItem>
              <SelectItem value="1y">1 Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="market-insights" className="space-y-8">
        <TabsList>
          <TabsTrigger value="market-insights">Market Insights</TabsTrigger>
          <TabsTrigger value="project-performance">Project Performance</TabsTrigger>
          <TabsTrigger value="risk-assessment">Risk Assessment</TabsTrigger>
          <TabsTrigger value="anomaly-detection">Anomaly Detection</TabsTrigger>
        </TabsList>

        <TabsContent value="market-insights">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Carbon Credit Price Prediction</CardTitle>
                <CardDescription>
                  AI-driven price forecasting based on market trends and external factors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={mockData.carbonPriceHistory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" name="Historical Price" />
                    <Line
                      type="monotone"
                      dataKey="predictedPrice"
                      stroke="#82ca9d"
                      name="Predicted Price"
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Supply and Demand Trends</CardTitle>
                <CardDescription>Analysis of market supply and demand dynamics</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={mockData.marketTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="demand" stackId="1" stroke="#8884d8" fill="#8884d8" name="Demand" />
                    <Area type="monotone" dataKey="supply" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Supply" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="project-performance">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Project Performance Analysis</CardTitle>
                <CardDescription>Comparison of actual vs. AI-predicted project outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={mockData.projectPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="actual" fill="#8884d8" name="Actual Performance" />
                    <Bar dataKey="predicted" fill="#82ca9d" name="AI Predicted" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project Type Distribution</CardTitle>
                <CardDescription>Breakdown of carbon credit projects by type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={mockData.projectTypeDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {mockData.projectTypeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="risk-assessment">
          <Card>
            <CardHeader>
              <CardTitle>AI Risk Assessment</CardTitle>
              <CardDescription>Project risk categorization based on multiple factors</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <ResponsiveContainer width="50%" height={300}>
                <PieChart>
                  <Pie
                    data={mockData.riskAssessment}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {mockData.riskAssessment.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Risk Factors Considered:</h3>
                <ul className="list-disc list-inside">
                  <li>Historical project performance</li>
                  <li>Geopolitical stability</li>
                  <li>Climate change impact projections</li>
                  <li>Market volatility</li>
                  <li>Regulatory changes</li>
                  <li>Technology adoption rates</li>
                  <li>Environmental variability</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="anomaly-detection">
          <Card>
            <CardHeader>
              <CardTitle>Anomaly Detection</CardTitle>
              <CardDescription>AI-detected anomalies in project data and satellite imagery</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.anomalies.map((anomaly) => (
                  <div key={anomaly.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <h4 className="font-semibold">{anomaly.project}</h4>
                      <p className="text-sm text-muted-foreground">{anomaly.type}</p>
                    </div>
                    <Badge
                      variant={
                        anomaly.severity === "High"
                          ? "destructive"
                          : anomaly.severity === "Medium"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {anomaly.severity}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>AI Insights Generator</CardTitle>
          <CardDescription>Get AI-generated insights based on your specific queries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              placeholder="Ask about market trends, project performance, or risk factors..."
              className="flex-grow"
            />
            <Button>
              <Zap className="w-4 h-4 mr-2" />
              Generate Insights
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="mt-8 flex justify-between">
        <Button asChild variant="outline">
          <Link href="/dashboard/projects">
            <BarChart className="w-4 h-4 mr-2" />
            View My Projects
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/projects-marketplace">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Go to Marketplace
          </Link>
        </Button>
      </div>
    </div>
  )
}

