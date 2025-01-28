"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Search,
  TrendingUp,
  TrendingDown,
  Thermometer,
  Droplet,
  Wind,
  AlertTriangle,
  CheckCircle,
  Download,
  ArrowUpDown,
} from "lucide-react"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"
import { Timeline } from "@/components/ui/timeline"

const mockProjects = [
  {
    id: 1,
    name: "Reforestation Project",
    type: "Conservation",
    risk: "low",
    progress: 75,
    carbonOffset: 1000,
    biodiversityIndex: 85,
    performance: 90,
    trend: "up",
    budget: 500000,
    spent: 350000,
    location: "Amazon Rainforest",
  },
  {
    id: 2,
    name: "Solar Farm Initiative",
    type: "Renewable Energy",
    risk: "medium",
    progress: 60,
    carbonOffset: 800,
    biodiversityIndex: 70,
    performance: 80,
    trend: "up",
    budget: 1000000,
    spent: 600000,
    location: "California Desert",
  },
  // Add more mock projects as needed
]

const mockEnvironmentalData = [
  { time: "00:00", temperature: 22, humidity: 60, rainfall: 0, windSpeed: 5 },
  { time: "06:00", temperature: 24, humidity: 55, rainfall: 0, windSpeed: 7 },
  { time: "12:00", temperature: 28, humidity: 50, rainfall: 2, windSpeed: 10 },
  { time: "18:00", temperature: 26, humidity: 58, rainfall: 0, windSpeed: 6 },
]

const mockTimeline = [
  { title: "Project Initiated", date: "2023-01-01" },
  { title: "Phase 1 Completed", date: "2023-03-15" },
  { title: "Midterm Review", date: "2023-06-30" },
  // Add more timeline items as needed
]

const mockStakeholders = [
  { name: "Local Community", satisfaction: 85 },
  { name: "Government", satisfaction: 90 },
  { name: "Investors", satisfaction: 88 },
  // Add more stakeholders as needed
]

const mockReports = [
  { id: 1, name: "Q2 Progress Report", date: "2023-07-01", type: "progress" },
  { id: 2, name: "Environmental Impact Assessment", date: "2023-06-15", type: "environmental" },
  // Add more reports as needed
]

const mockAlerts = [
  { id: 1, type: "warning", message: "Unusual temperature spike detected in sector A" },
  { id: 2, type: "info", message: "Project milestone achieved: 1000 trees planted" },
  // Add more alerts as needed
]

const chartColors = {
  primary: "#0088FE",
  secondary: "#00C49F",
  tertiary: "#FFBB28",
  quaternary: "#FF8042",
}

const ProjectModel = () => <div className="bg-muted p-4 rounded-lg text-center">Project 3D Model Placeholder</div>

const SatelliteImagery = () => <div className="bg-muted p-4 rounded-lg text-center">Satellite Imagery Placeholder</div>

const LiveFeed = () => <div className="bg-muted p-4 rounded-lg text-center">Live Feed Placeholder</div>

const ProjectComparison = () => (
  <div className="bg-muted p-4 rounded-lg text-center">Project Comparison Placeholder</div>
)

const MemoizedEnvironmentalChart = React.memo(({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="temperature"
        stackId="1"
        stroke={chartColors.primary}
        fill={chartColors.primary}
        name="Temperature (°C)"
      />
      <Area
        type="monotone"
        dataKey="humidity"
        stackId="2"
        stroke={chartColors.secondary}
        fill={chartColors.secondary}
        name="Humidity (%)"
      />
      <Area
        type="monotone"
        dataKey="rainfall"
        stackId="3"
        stroke={chartColors.tertiary}
        fill={chartColors.tertiary}
        name="Rainfall (mm)"
      />
      <Area
        type="monotone"
        dataKey="windSpeed"
        stackId="4"
        stroke={chartColors.quaternary}
        fill={chartColors.quaternary}
        name="Wind Speed (km/h)"
      />
    </AreaChart>
  </ResponsiveContainer>
))

const MemoizedFinancialChart = React.memo(({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="revenue" stroke={chartColors.primary} name="Revenue" />
      <Line type="monotone" dataKey="expenses" stroke={chartColors.secondary} name="Expenses" />
    </LineChart>
  </ResponsiveContainer>
))

const MemoizedStakeholderChart = React.memo(({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="satisfaction" fill={chartColors.primary} />
    </BarChart>
  </ResponsiveContainer>
))

export default function ProjectTrackerPage() {
  const [selectedProject, setSelectedProject] = useState(mockProjects[0])
  const [showRealTimeUpdates, setShowRealTimeUpdates] = useState(true)
  const [timeframe, setTimeframe] = useState("1w")

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Project Tracker</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input placeholder="Search projects..." className="mb-4" icon={<Search className="h-4 w-4" />} />
              {mockProjects.map((project) => (
                <Button
                  key={project.id}
                  variant={selectedProject.id === project.id ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex flex-col items-start">
                    <span>{project.name}</span>
                    <span className="text-sm text-muted-foreground">{project.type}</span>
                  </div>
                  <Badge
                    variant={project.risk === "low" ? "success" : project.risk === "medium" ? "warning" : "destructive"}
                    className="ml-auto"
                  >
                    {project.risk}
                  </Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>{selectedProject.name}</CardTitle>
            <CardDescription>
              {selectedProject.type} project in {selectedProject.location}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview">
              <TabsList className="bg-background border-b border-border">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="environmental"
                  className="data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  Environmental
                </TabsTrigger>
                <TabsTrigger
                  value="financial"
                  className="data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  Financial
                </TabsTrigger>
                <TabsTrigger
                  value="timeline"
                  className="data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  Timeline
                </TabsTrigger>
                <TabsTrigger
                  value="stakeholders"
                  className="data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  Stakeholders
                </TabsTrigger>
                <TabsTrigger
                  value="reports"
                  className="data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  Reports
                </TabsTrigger>
                <TabsTrigger
                  value="comparison"
                  className="data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  Comparison
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle>Project Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-4">
                        <Progress value={selectedProject.progress} className="w-full" />
                        <span className="text-2xl font-bold text-primary">{selectedProject.progress}%</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Overall project completion</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle>Carbon Offset</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">{selectedProject.carbonOffset} tons</div>
                      <p className="text-sm text-muted-foreground">Total carbon offset achieved</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle>Biodiversity Index</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">{selectedProject.biodiversityIndex}/100</div>
                      <Progress value={selectedProject.biodiversityIndex} className="mt-2" />
                    </CardContent>
                  </Card>
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle>Project Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2">
                        <div className="text-2xl font-bold text-primary">{selectedProject.performance}%</div>
                        {selectedProject.trend === "up" ? (
                          <TrendingUp className="h-5 w-5 text-green-500" />
                        ) : (
                          <TrendingDown className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">Performance score based on key metrics</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold mb-2">Project Visualization</h3>
                    <ProjectModel />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Satellite Imagery</h3>
                    <SatelliteImagery />
                  </div>
                </div>
                <div className="mt-4">
                  <LiveFeed />
                </div>
              </TabsContent>
              <TabsContent value="environmental">
                <div className="grid gap-4 md:grid-cols-2 mb-4">
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Thermometer className="mr-2 h-5 w-5" />
                        Temperature
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">
                        {mockEnvironmentalData[mockEnvironmentalData.length - 1].temperature}°C
                      </div>
                      <p className="text-sm text-muted-foreground">Current temperature</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Droplet className="mr-2 h-5 w-5" />
                        Humidity
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">
                        {mockEnvironmentalData[mockEnvironmentalData.length - 1].humidity}%
                      </div>
                      <p className="text-sm text-muted-foreground">Current humidity</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Droplet className="mr-2 h-5 w-5" />
                        Rainfall
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">
                        {mockEnvironmentalData[mockEnvironmentalData.length - 1].rainfall} mm
                      </div>
                      <p className="text-sm text-muted-foreground">Last 24 hours</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Wind className="mr-2 h-5 w-5" />
                        Wind Speed
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">
                        {mockEnvironmentalData[mockEnvironmentalData.length - 1].windSpeed} km/h
                      </div>
                      <p className="text-sm text-muted-foreground">Current wind speed</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Environmental Trends</h3>
                  <MemoizedEnvironmentalChart data={mockEnvironmentalData} />
                </div>
              </TabsContent>
              <TabsContent value="financial">
                <div className="grid gap-4 md:grid-cols-2 mb-4">
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle>Budget Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                          <Pie
                            data={[
                              { name: "Spent", value: selectedProject.spent },
                              { name: "Remaining", value: selectedProject.budget - selectedProject.spent },
                            ]}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            <Cell key="spent" fill={chartColors.primary} />
                            <Cell key="remaining" fill={chartColors.secondary} />
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="mt-2 text-center">
                        <p className="text-sm text-muted-foreground">
                          Total Budget: ${selectedProject.budget.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Spent: ${selectedProject.spent.toLocaleString()}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle>Financial Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>ROI:</span>
                          <span className="font-bold text-primary">12.5%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cost per Credit:</span>
                          <span className="font-bold text-primary">$15.50</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Projected Revenue:</span>
                          <span className="font-bold text-primary">$1,250,000</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Card className="border border-border">
                  <CardHeader>
                    <CardTitle>Financial Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <MemoizedFinancialChart
                      data={[
                        { month: "Jan", revenue: 100000, expenses: 80000 },
                        { month: "Feb", revenue: 120000, expenses: 90000 },
                        { month: "Mar", revenue: 140000, expenses: 95000 },
                        { month: "Apr", revenue: 160000, expenses: 100000 },
                        { month: "May", revenue: 180000, expenses: 110000 },
                      ]}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="timeline">
                <Card className="border border-border">
                  <CardHeader>
                    <CardTitle>Project Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Timeline items={mockTimeline} />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="stakeholders">
                <Card className="border border-border">
                  <CardHeader>
                    <CardTitle>Stakeholder Satisfaction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <MemoizedStakeholderChart data={mockStakeholders} />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reports">
                <Card className="border border-border">
                  <CardHeader>
                    <CardTitle>Project Reports</CardTitle>
                    <div className="flex justify-between items-center">
                      <Input placeholder="Search reports..." className="w-64" />
                      <div className="flex space-x-2">
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Types</SelectItem>
                            <SelectItem value="progress">Progress</SelectItem>
                            <SelectItem value="environmental">Environmental</SelectItem>
                            <SelectItem value="financial">Financial</SelectItem>
                            <SelectItem value="stakeholder">Stakeholder</SelectItem>
                            <SelectItem value="risk">Risk</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="icon">
                          <ArrowUpDown className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mockReports.map((report) => (
                        <li key={report.id} className="flex justify-between items-center">
                          <span>{report.name}</span>
                          <div>
                            <span className="text-sm text-muted-foreground mr-2">{report.date}</span>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="comparison">
                <Card className="border border-border">
                  <CardHeader>
                    <CardTitle>Project Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ProjectComparison projects={mockProjects} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card className="border border-border">
          <CardHeader>
            <CardTitle>Real-Time Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <ul className="space-y-4">
                {mockAlerts.map((alert) => (
                  <li key={alert.id} className="flex items-center">
                    {alert.type === "warning" ? (
                      <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
                    ) : (
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    )}
                    <span>{alert.message}</span>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="border border-border">
          <CardHeader>
            <CardTitle>AI-Powered Insights</CardTitle>
            <CardDescription>Machine learning predictions and anomaly detection</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Predicted Carbon Offset (Next Month):</span>
                <span className="font-semibold text-primary">
                  {(selectedProject.carbonOffset * 1.1).toFixed(2)} tons
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Anomaly Detection:</span>
                <Badge variant="outline">No anomalies detected</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Project Health Prediction:</span>
                <Badge variant="success">On Track</Badge>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Recommendations</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Consider increasing reforestation efforts in the northwestern sector</li>
                  <li>Implement water conservation techniques to improve efficiency</li>
                  <li>Explore partnerships with local communities for sustainable practices</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8 border border-border">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Label htmlFor="real-time-updates">Real-time Updates</Label>
            <Switch id="real-time-updates" checked={showRealTimeUpdates} onCheckedChange={setShowRealTimeUpdates} />
          </div>
          <div className="flex items-center justify-between mt-4">
            <Label htmlFor="timeframe">Data Timeframe</Label>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1d">Last 24 hours</SelectItem>
                <SelectItem value="1w">Last 7 days</SelectItem>
                <SelectItem value="1m">Last 30 days</SelectItem>
                <SelectItem value="3m">Last 3 months</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

