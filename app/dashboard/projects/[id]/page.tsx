"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import {
  MapPin,
  Calendar,
  DollarSign,
  Leaf,
  Users,
  BarChartIcon,
  FileText,
  MessageSquare,
  AlertTriangle,
} from "lucide-react"

const projectData = {
  id: "1",
  title: "Amazon Rainforest Conservation",
  description:
    "This project aims to protect 10,000 hectares of pristine rainforest in the Amazon basin, preserving biodiversity and reducing carbon emissions from deforestation.",
  location: "Brazil",
  type: "REDD+",
  credits: 500000,
  creditsSold: 350000,
  price: 15,
  startDate: "2023-01-01",
  duration: 30,
  cobenefits: ["Biodiversity Protection", "Community Development", "Water Conservation"],
  developer: {
    name: "Rainforest Alliance",
    avatar: "/placeholder.svg",
  },
  updates: [
    { date: "2023-05-15", content: "Successfully protected an additional 500 hectares this month." },
    { date: "2023-04-01", content: "Community education program launched, reaching 1000 local residents." },
  ],
  images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
}

const mockEnvironmentalData = [
  { date: "2023-01", carbonOffset: 1000, rainfall: 150, temperature: 28 },
  { date: "2023-02", carbonOffset: 1200, rainfall: 130, temperature: 29 },
  { date: "2023-03", carbonOffset: 1100, rainfall: 160, temperature: 27 },
  { date: "2023-04", carbonOffset: 1300, rainfall: 140, temperature: 28 },
  { date: "2023-05", carbonOffset: 1250, rainfall: 170, temperature: 26 },
  { date: "2023-06", carbonOffset: 1400, rainfall: 120, temperature: 29 },
]

export default function ProjectDetailsPage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState("overview")
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    // Simulating real-time alerts
    const interval = setInterval(() => {
      const newAlert = {
        id: Date.now(),
        type: Math.random() > 0.5 ? "warning" : "info",
        message: `Alert: ${Math.random() > 0.5 ? "Unusual activity detected" : "Project milestone reached"}`,
      }
      setAlerts((prevAlerts) => [newAlert, ...prevAlerts.slice(0, 4)])
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container py-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">{projectData.title}</h1>
          <p className="text-muted-foreground">{projectData.description}</p>
        </div>
        <Badge variant={projectData.creditsSold > projectData.credits / 2 ? "default" : "secondary"}>
          {projectData.creditsSold > projectData.credits / 2 ? "High Demand" : "Available"}
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Location</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectData.location}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Project Type</CardTitle>
            <Leaf className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectData.type}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credits Sold</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectData.creditsSold.toLocaleString()}</div>
            <Progress value={(projectData.creditsSold / projectData.credits) * 100} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Start Date</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectData.startDate}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="environmental-data">Environmental Data</TabsTrigger>
          <TabsTrigger value="financials">Financials</TabsTrigger>
          <TabsTrigger value="updates">Updates</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>Key information about the {projectData.title} project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-2">Co-benefits</h3>
                  <ul className="list-disc list-inside">
                    {projectData.cobenefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Project Developer</h3>
                  <div className="flex items-center space-x-2">
                    <img
                      src={projectData.developer.avatar || "/placeholder.svg"}
                      alt={projectData.developer.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{projectData.developer.name}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="environmental-data">
          <Card>
            <CardHeader>
              <CardTitle>Environmental Data</CardTitle>
              <CardDescription>Real-time environmental metrics for the project area</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockEnvironmentalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="carbonOffset"
                      stroke="#8884d8"
                      name="Carbon Offset (tons)"
                    />
                    <Line yAxisId="right" type="monotone" dataKey="rainfall" stroke="#82ca9d" name="Rainfall (mm)" />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="temperature"
                      stroke="#ffc658"
                      name="Temperature (°C)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="financials">
          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
              <CardDescription>Financial metrics and projections for the project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${(projectData.creditsSold * projectData.price).toLocaleString()}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Projected Annual Growth</CardTitle>
                    <BarChartIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">15%</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Investors</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                  </CardContent>
                </Card>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockEnvironmentalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="carbonOffset" fill="#8884d8" name="Carbon Offset (tons)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="updates">
          <Card>
            <CardHeader>
              <CardTitle>Project Updates</CardTitle>
              <CardDescription>Latest news and milestones from the project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projectData.updates.map((update, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">{update.date}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{update.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Project Documents</CardTitle>
              <CardDescription>Access important project-related documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Project Design Document
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Verification Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Monitoring Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Community Impact Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Real-time Alerts</CardTitle>
          <CardDescription>Stay updated with the latest project notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-center space-x-2 p-2 bg-muted rounded">
                {alert.type === "warning" ? (
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                ) : (
                  <MessageSquare className="h-4 w-4 text-blue-500" />
                )}
                <span>{alert.message}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

