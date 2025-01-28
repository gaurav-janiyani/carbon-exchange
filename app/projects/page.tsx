"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Leaf, MapPin, DollarSign, Calendar } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Amazon Rainforest Conservation",
    description: "Protecting 10,000 hectares of rainforest in the Amazon basin",
    location: "Brazil",
    type: "REDD+",
    credits: 500000,
    price: 15,
    startDate: "2023-01-01",
    duration: 30,
    cobenefits: ["Biodiversity", "Community Development", "Water Conservation"],
  },
  {
    id: 2,
    title: "Wind Farm in South Australia",
    description: "Large-scale wind energy project generating clean electricity",
    location: "Australia",
    type: "Renewable Energy",
    credits: 250000,
    price: 12,
    startDate: "2022-06-15",
    duration: 25,
    cobenefits: ["Job Creation", "Energy Independence", "Air Quality"],
  },
  {
    id: 3,
    title: "Mangrove Restoration in Indonesia",
    description: "Restoring coastal mangrove ecosystems for carbon sequestration",
    location: "Indonesia",
    type: "Blue Carbon",
    credits: 100000,
    price: 18,
    startDate: "2023-03-01",
    duration: 20,
    cobenefits: ["Coastal Protection", "Fisheries Enhancement", "Biodiversity"],
  },
  {
    id: 4,
    title: "Regenerative Agriculture in Victoria",
    description: "Implementing sustainable farming practices to improve soil health",
    location: "Australia",
    type: "Agriculture",
    credits: 75000,
    price: 20,
    startDate: "2023-02-01",
    duration: 15,
    cobenefits: ["Soil Health", "Water Conservation", "Food Security"],
  },
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 30])

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "all" || project.type === selectedType
    const matchesPrice = project.price >= priceRange[0] && project.price <= priceRange[1]
    return matchesSearch && matchesType && matchesPrice
  })

  return (
    <main className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Carbon Credit Projects</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
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
            <SelectItem value="REDD+">REDD+</SelectItem>
            <SelectItem value="Renewable Energy">Renewable Energy</SelectItem>
            <SelectItem value="Blue Carbon">Blue Carbon</SelectItem>
            <SelectItem value="Agriculture">Agriculture</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex flex-col md:w-1/3">
          <span className="text-sm font-medium mb-2">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </span>
          <Slider min={0} max={30} step={1} value={priceRange} onValueChange={setPriceRange} />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
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
                  <span>${project.price} per credit</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{project.duration} years</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.cobenefits.map((benefit, index) => (
                    <Badge key={index} variant="secondary">
                      {benefit}
                    </Badge>
                  ))}
                </div>
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
    </main>
  )
}

