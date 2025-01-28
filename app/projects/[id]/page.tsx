"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Calendar, DollarSign, Leaf, Users, BarChart, FileText, MessageSquare } from "lucide-react"

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

export default function ProjectDetailsPage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState("overview")

  // In a real application, you would fetch the project data based on the ID
  // const { id } = params
  // const project = fetchProjectById(id)
  const project = projectData

  return (
    <main className="container py-8">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">{project.title}</CardTitle>
              <CardDescription className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {project.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.cobenefits.map((benefit, index) => (
                  <Badge key={index} variant="secondary">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="updates">Updates</TabsTrigger>
              <TabsTrigger value="discussion">Discussion</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center">
                    <Leaf className="w-4 h-4 mr-2" />
                    <span>Project Type: {project.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Start Date: {project.startDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Project Developer: {project.developer.name}</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart className="w-4 h-4 mr-2" />
                    <span>Project Duration: {project.duration} years</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Impact Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Carbon Credits Sold</span>
                      <span>
                        {project.creditsSold} / {project.credits}
                      </span>
                    </div>
                    <Progress value={(project.creditsSold / project.credits) * 100} />
                  </div>
                  {/* Add more impact metrics here */}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="updates">
              <Card>
                <CardHeader>
                  <CardTitle>Project Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  {project.updates.map((update, index) => (
                    <div key={index} className="mb-4 pb-4 border-b last:border-b-0">
                      <p className="font-semibold">{update.date}</p>
                      <p>{update.content}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="discussion">
              <Card>
                <CardHeader>
                  <CardTitle>Community Discussion</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Implement a discussion forum or comments section here */}
                  <p>Join the conversation about this project.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Invest in This Project</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">
                ${project.price} <span className="text-base font-normal">per credit</span>
              </div>
              <p className="text-muted-foreground mb-4">Minimum purchase: 10 credits</p>
              <Button className="w-full">Buy Carbon Credits</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Developer</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={project.developer.avatar} alt={project.developer.name} />
                <AvatarFallback>{project.developer.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{project.developer.name}</p>
                <p className="text-sm text-muted-foreground">Verified Developer</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Contact Developer
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Project Design Document
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Verification Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Monitoring Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

