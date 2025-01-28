"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Leaf, DollarSign, BarChart, TrendingUp, TrendingDown } from "lucide-react"
import Link from "next/link"
import { AIProjectRecommendations } from "@/components/ai-project-recommendations"

const initialProjects = [
  {
    id: 1,
    title: "Amazon Rainforest Conservation",
    description: "Protecting 10,000 hectares of rainforest in the Amazon basin",
    location: "Brazil",
    type: "REDD+",
    credits: 500000,
    price: 15,
    cobenefits: ["Biodiversity", "Community Development", "Water Conservation"],
    image: "/placeholder.svg",
    status: "Active",
  },
  {
    id: 2,
    title: "Wind Farm in South Australia",
    description: "Large-scale wind energy project generating clean electricity",
    location: "Australia",
    type: "Renewable Energy",
    credits: 250000,
    price: 12,
    cobenefits: ["Clean Energy", "Job Creation", "Energy Independence"],
    image: "/placeholder.svg",
    status: "Pending Verification",
  },
  {
    id: 3,
    title: "Mangrove Restoration in Indonesia",
    description: "Restoring coastal mangrove ecosystems for carbon sequestration",
    location: "Indonesia",
    type: "Blue Carbon",
    credits: 100000,
    price: 18,
    cobenefits: ["Coastal Protection", "Biodiversity", "Fisheries Enhancement"],
    image: "/placeholder.svg",
    status: "Active",
  },
  {
    id: 4,
    title: "Regenerative Agriculture in Victoria",
    description: "Implementing sustainable farming practices to improve soil health",
    location: "Australia",
    type: "Agriculture",
    credits: 75000,
    price: 20,
    cobenefits: ["Soil Health", "Water Conservation", "Food Security"],
    image: "/placeholder.svg",
    status: "Under Review",
  },
]

export default function ProjectsMarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 30])
  const [sortBy, setSortBy] = useState("price")
  const [sortOrder, setSortOrder] = useState("asc")
  const [projects, setProjects] = useState(initialProjects)
  const [activeTab, setActiveTab] = useState("marketplace")

  const filteredProjects = projects
    .filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = selectedType === "all" || project.type === selectedType
      const matchesPrice = project.price >= priceRange[0] && project.price <= priceRange[1]
      return matchesSearch && matchesType && matchesPrice
    })
    .sort((a, b) => {
      if (sortBy === "price") {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price
      } else if (sortBy === "credits") {
        return sortOrder === "asc" ? a.credits - b.credits : b.credits - a.credits
      }
      return 0
    })

  useEffect(() => {
    // Simulating real-time price updates
    const interval = setInterval(() => {
      setProjects((prevProjects) =>
        prevProjects.map((project) => ({
          ...project,
          price: project.price + (Math.random() - 0.5) * 0.5,
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Projects & Marketplace</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
        </TabsList>

        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle>Filter Projects</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="search">Search</Label>
                <Input
                  id="search"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full md:w-48">
                <Label htmlFor="type">Project Type</Label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="REDD+">REDD+</SelectItem>
                    <SelectItem value="Renewable Energy">Renewable Energy</SelectItem>
                    <SelectItem value="Blue Carbon">Blue Carbon</SelectItem>
                    <SelectItem value="Agriculture">Agriculture</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Label>Price Range (USD)</Label>
                <div className="flex items-center gap-4">
                  <span>${priceRange[0]}</span>
                  <Slider
                    min={0}
                    max={30}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="flex-1"
                  />
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              <div className="w-full md:w-48">
                <Label htmlFor="sortBy">Sort By</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sortBy">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="credits">Available Credits</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-48">
                <Label htmlFor="sortOrder">Sort Order</Label>
                <Select value={sortOrder} onValueChange={setSortOrder}>
                  <SelectTrigger id="sortOrder">
                    <SelectValue placeholder="Sort order" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asc">Ascending</SelectItem>
                    <SelectItem value="desc">Descending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        <TabsContent value="marketplace" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <div className="md:col-span-2 lg:col-span-3">
              <AIProjectRecommendations />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="flex flex-col">
                <CardHeader>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
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
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span>${project.price.toFixed(2)} per credit</span>
                      {project.price > 15 ? (
                        <TrendingUp className="w-4 h-4 ml-2 text-green-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 ml-2 text-red-500" />
                      )}
                    </div>
                    <div className="flex items-center">
                      <BarChart className="w-4 h-4 mr-2" />
                      <span>{project.credits.toLocaleString()} credits available</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.cobenefits.map((benefit, index) => (
                      <Badge key={index} variant="secondary">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href={`/projects/${project.id}`}>Learn More</Link>
                  </Button>
                  <Button>Invest Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-projects" className="space-y-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">My Projects</h2>
            <Button asChild>
              <Link href="/dashboard/projects/new">Create New Project</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
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
                      <span>{project.credits.toLocaleString()} credits</span>
                    </div>
                  </div>
                  <Badge className="mt-4" variant={project.status === "Active" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href={`/dashboard/projects/${project.id}`}>Manage</Link>
                  </Button>
                  {project.status === "Active" && <Button variant="secondary">List on Marketplace</Button>}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </main>
  )
}

