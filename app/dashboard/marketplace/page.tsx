"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Leaf, DollarSign, BarChart, MapPin, TrendingUp, TrendingDown } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    title: "Amazon Rainforest Conservation",
    description: "Protect 10,000 hectares of rainforest",
    location: "Brazil",
    type: "Conservation",
    credits: 50000,
    price: 15,
    trend: "up",
  },
  {
    id: 2,
    title: "Wind Farm in South Australia",
    description: "Generate clean energy from wind turbines",
    location: "Australia",
    type: "Renewable Energy",
    credits: 30000,
    price: 12,
    trend: "down",
  },
  {
    id: 3,
    title: "Mangrove Restoration",
    description: "Restore coastal mangrove ecosystems",
    location: "Indonesia",
    type: "Restoration",
    credits: 20000,
    price: 18,
    trend: "up",
  },
]

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 20])
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "all" || project.type === selectedType
    const matchesPrice = project.price >= priceRange[0] && project.price <= priceRange[1]
    return matchesSearch && matchesType && matchesPrice
  })

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Carbon Credit Marketplace</h1>

      <Tabs defaultValue="buy" className="space-y-8">
        <TabsList>
          <TabsTrigger value="buy">Buy Credits</TabsTrigger>
          <TabsTrigger value="sell">Sell Credits</TabsTrigger>
        </TabsList>

        <TabsContent value="buy">
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 mb-6">
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="md:w-1/3"
            />
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="md:w-1/4">
                <SelectValue placeholder="Project Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Conservation">Conservation</SelectItem>
                <SelectItem value="Renewable Energy">Renewable Energy</SelectItem>
                <SelectItem value="Restoration">Restoration</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex flex-col md:w-1/3">
              <span className="text-sm font-medium mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </span>
              <Slider min={0} max={20} step={1} value={priceRange} onValueChange={setPriceRange} />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Leaf className="w-4 h-4 mr-2" />
                      <span>{project.type}</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart className="w-4 h-4 mr-2" />
                      <span>{project.credits.toLocaleString()} credits available</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span>${project.price} per credit</span>
                      {project.trend === "up" ? (
                        <TrendingUp className="ml-2 h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="ml-2 h-4 w-4 text-red-500" />
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" onClick={() => setSelectedProject(project)}>
                        Buy Credits
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Buy Carbon Credits</DialogTitle>
                        <DialogDescription>
                          You are about to purchase carbon credits from {selectedProject?.title}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="credits" className="text-right">
                            Number of Credits
                          </Label>
                          <Input
                            id="credits"
                            type="number"
                            className="col-span-3"
                            placeholder="Enter number of credits"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="total" className="text-right">
                            Total Price
                          </Label>
                          <Input
                            id="total"
                            type="text"
                            className="col-span-3"
                            value={`$${selectedProject?.price || 0}`}
                            disabled
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Confirm Purchase</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sell">
          <Card>
            <CardHeader>
              <CardTitle>List Your Carbon Credits</CardTitle>
              <CardDescription>Sell your carbon credits to buyers on the marketplace</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="projectTitle">Project Title</Label>
                  <Input id="projectTitle" placeholder="Enter your project title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">Project Description</Label>
                  <Textarea id="projectDescription" placeholder="Describe your project" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select>
                    <SelectTrigger id="projectType">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conservation">Conservation</SelectItem>
                      <SelectItem value="renewable-energy">Renewable Energy</SelectItem>
                      <SelectItem value="restoration">Restoration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="creditsAmount">Number of Credits</Label>
                  <Input id="creditsAmount" type="number" placeholder="Enter number of credits" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pricePerCredit">Price per Credit (USD)</Label>
                  <Input id="pricePerCredit" type="number" placeholder="Enter price per credit" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Project Location</Label>
                  <Input id="location" placeholder="Enter project location" />
                </div>
                <Button type="submit" className="w-full">
                  List Credits for Sale
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Market Trends</CardTitle>
          <CardDescription>Recent trends in carbon credit prices and trading volumes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Average Credit Price:</span>
              <span className="font-bold">${(Math.random() * 5 + 10).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>24h Trading Volume:</span>
              <span className="font-bold">{(Math.random() * 100000 + 50000).toFixed(0)} credits</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Most Active Project Type:</span>
              <Badge>Reforestation</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

