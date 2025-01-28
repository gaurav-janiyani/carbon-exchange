"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, MapPin, Calendar, DollarSign, Leaf, Users, BarChart, TreeDeciduous, Droplet } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const projects = [
  {
    id: 1,
    name: "Indigenous Land Conservation",
    description: "Conservation project in Northern Territory",
    status: "Active",
    credits: 1000,
    type: "ACCU",
    lastUpdated: "2024-01-20",
    location: "Northern Territory, Australia",
    carbonOffset: 500,
    treesCounted: 10000,
    waterConserved: 5000,
  },
  {
    id: 2,
    name: "Sustainable Agriculture",
    description: "Regenerative farming practices in Victoria",
    status: "Pending",
    credits: 500,
    type: "ACCU",
    lastUpdated: "2024-01-18",
    location: "Victoria, Australia",
    carbonOffset: 250,
    treesCounted: 5000,
    waterConserved: 2500,
  },
]

const mockEnvironmentalData = [
  { timestamp: "00:00", temperature: 25, humidity: 80, windSpeed: 5 },
  { timestamp: "04:00", temperature: 24, humidity: 82, windSpeed: 4 },
  { timestamp: "08:00", temperature: 26, humidity: 79, windSpeed: 6 },
  { timestamp: "12:00", temperature: 28, humidity: 75, windSpeed: 7 },
  { timestamp: "16:00", temperature: 27, humidity: 77, windSpeed: 5 },
  { timestamp: "20:00", temperature: 25, humidity: 81, windSpeed: 4 },
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
        <Button asChild>
          <Link href="/dashboard/projects/new">
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Link>
        </Button>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/3">
          <Input placeholder="Search projects..." className="mb-4" />
          <div className="space-y-4">
            {projects.map((project) => (
              <Card
                key={project.id}
                className={`cursor-pointer ${selectedProject.id === project.id ? "border-primary" : ""}`}
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{project.name}</CardTitle>
                    <Badge variant={project.status === "Active" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Credits:</span>
                      <span>{project.credits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Type:</span>
                      <span>{project.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Last Updated:</span>
                      <span>{project.lastUpdated}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="w-2/3">
          <Card>
            <CardHeader>
              <CardTitle>{selectedProject.name}</CardTitle>
              <CardDescription>{selectedProject.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Carbon Offset</CardTitle>
                    <TreeDeciduous className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{selectedProject.carbonOffset} tons</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Trees Counted</CardTitle>
                    <TreeDeciduous className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{selectedProject.treesCounted.toLocaleString()}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Water Conserved</CardTitle>
                    <Droplet className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{selectedProject.waterConserved.toFixed(2)} liters</div>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="environmental-data">Environmental Data</TabsTrigger>
                  <TabsTrigger value="financials">Financials</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Location</CardTitle>
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{selectedProject.location}</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Project Type</CardTitle>
                        <Leaf className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{selectedProject.type}</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Credits</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{selectedProject.credits}</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{selectedProject.lastUpdated}</div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="environmental-data">
                  <Card>
                    <CardHeader>
                      <CardTitle>Environmental Data</CardTitle>
                      <CardDescription>Real-time environmental metrics for the project area</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={mockEnvironmentalData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="timestamp" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="temperature" stroke="#8884d8" name="Temperature (°C)" />
                            <Line type="monotone" dataKey="humidity" stroke="#82ca9d" name="Humidity (%)" />
                            <Line type="monotone" dataKey="windSpeed" stroke="#ffc658" name="Wind Speed (km/h)" />
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
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">$250,000</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Projected Annual Growth</CardTitle>
                            <BarChart className="h-4 w-4 text-muted-foreground" />
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
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

