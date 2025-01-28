"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, Video, Download, ExternalLink, Book, HelpCircle, Play, BadgeIcon as Certificate } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

const resources = [
  {
    category: "articles",
    items: [
      {
        title: "Understanding Carbon Credits",
        description: "An in-depth look at how carbon credits work and their role in fighting climate change.",
        type: "Article",
        link: "#",
        tags: ["Beginner", "Carbon Credits"],
        readTime: "10 min read",
      },
      {
        title: "The Impact of Reforestation on Climate Change",
        description: "Explore the benefits of reforestation projects and their contribution to carbon sequestration.",
        type: "Article",
        link: "#",
        tags: ["Intermediate", "Reforestation"],
        readTime: "15 min read",
      },
      {
        title: "Blockchain Technology in Carbon Markets",
        description: "Learn how blockchain is revolutionizing the transparency and efficiency of carbon markets.",
        type: "Article",
        link: "#",
        tags: ["Advanced", "Technology"],
        readTime: "20 min read",
      },
    ],
  },
  {
    category: "courses",
    items: [
      {
        title: "Carbon Credit Fundamentals",
        description: "A comprehensive course covering the basics of carbon credits and carbon markets.",
        type: "Course",
        link: "#",
        duration: "4 weeks",
        level: "Beginner",
        lessons: 12,
        progress: 0,
      },
      {
        title: "Project Development and Verification",
        description: "Learn how to develop and verify carbon credit projects according to international standards.",
        type: "Course",
        link: "#",
        duration: "6 weeks",
        level: "Intermediate",
        lessons: 18,
        progress: 33,
      },
      {
        title: "Advanced Carbon Trading Strategies",
        description: "Dive deep into carbon trading mechanisms and advanced market strategies.",
        type: "Course",
        link: "#",
        duration: "8 weeks",
        level: "Advanced",
        lessons: 24,
        progress: 75,
      },
    ],
  },
  {
    category: "webinars",
    items: [
      {
        title: "The Future of Voluntary Carbon Markets",
        description: "Expert panel discussion on trends and predictions for voluntary carbon markets.",
        type: "Webinar",
        link: "#",
        date: "2023-07-15",
        duration: "1 hour",
        speakers: ["Dr. Jane Smith", "John Doe"],
      },
      {
        title: "Measuring and Reporting Carbon Offsets",
        description: "Best practices for accurate measurement and reporting of carbon offset projects.",
        type: "Webinar",
        link: "#",
        date: "2023-08-01",
        duration: "1.5 hours",
        speakers: ["Prof. Mark Johnson", "Sarah Lee"],
      },
      {
        title: "Innovations in Carbon Capture Technologies",
        description: "Exploring cutting-edge technologies for carbon capture and storage.",
        type: "Webinar",
        link: "#",
        date: "2023-08-22",
        duration: "1 hour",
        speakers: ["Dr. Emily Chen", "Michael Brown"],
      },
    ],
  },
]

export default function EducationPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredResources = resources.map((category) => ({
    ...category,
    items: category.items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  }))

  return (
    <main className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Education Center</h1>

      <div className="mb-8">
        <Input
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      <Tabs defaultValue="articles" className="space-y-8">
        <TabsList>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="webinars">Webinars</TabsTrigger>
        </TabsList>

        {filteredResources.map((category) => (
          <TabsContent key={category.category} value={category.category}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {item.type === "Article" && <FileText className="h-5 w-5" />}
                      {item.type === "Course" && <Book className="h-5 w-5" />}
                      {item.type === "Webinar" && <Video className="h-5 w-5" />}
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {item.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {item.type === "Article" && <p className="text-sm text-muted-foreground">{item.readTime}</p>}
                    {item.type === "Course" && (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Duration: {item.duration}</p>
                        <p className="text-sm text-muted-foreground">Level: {item.level}</p>
                        <p className="text-sm text-muted-foreground">Lessons: {item.lessons}</p>
                        <div className="flex items-center gap-2">
                          <Progress value={item.progress} className="flex-grow" />
                          <span className="text-sm font-medium">{item.progress}%</span>
                        </div>
                      </div>
                    )}
                    {item.type === "Webinar" && (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Date: {item.date}</p>
                        <p className="text-sm text-muted-foreground">Duration: {item.duration}</p>
                        <p className="text-sm text-muted-foreground">Speakers: {item.speakers.join(", ")}</p>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={item.link}>
                        {item.type === "Article" && "Read Article"}
                        {item.type === "Course" && (
                          <>
                            {item.progress === 0 ? "Start Course" : "Continue Course"}
                            <Play className="w-4 h-4 ml-2" />
                          </>
                        )}
                        {item.type === "Webinar" && "Register for Webinar"}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Learning Paths</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Carbon Market Fundamentals</CardTitle>
              <CardDescription>
                Perfect for beginners looking to understand the basics of carbon markets and credits.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Understanding Carbon Credits</li>
                <li>Carbon Credit Fundamentals Course</li>
                <li>The Future of Voluntary Carbon Markets Webinar</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Start Learning Path</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project Development</CardTitle>
              <CardDescription>For those interested in developing and managing carbon credit projects.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>The Impact of Reforestation on Climate Change</li>
                <li>Project Development and Verification Course</li>
                <li>Measuring and Reporting Carbon Offsets Webinar</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Start Learning Path</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Advanced Carbon Trading</CardTitle>
              <CardDescription>
                Designed for professionals looking to deepen their knowledge of carbon markets.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Blockchain Technology in Carbon Markets</li>
                <li>Advanced Carbon Trading Strategies Course</li>
                <li>Innovations in Carbon Capture Technologies Webinar</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Start Learning Path</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>ICXP Carbon Market Specialist</CardTitle>
              <CardDescription>Demonstrate your expertise in carbon markets and trading.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Complete Carbon Market Fundamentals Learning Path</li>
                <li>Pass the online examination</li>
                <li>Receive a digital badge and certificate</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Certificate className="w-4 h-4 mr-2" />
                Get Certified
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>ICXP Project Developer</CardTitle>
              <CardDescription>
                Showcase your skills in carbon credit project development and management.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Complete Project Development Learning Path</li>
                <li>Submit a sample project proposal</li>
                <li>Pass the online examination</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Certificate className="w-4 h-4 mr-2" />
                Get Certified
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>ICXP Advanced Trader</CardTitle>
              <CardDescription>
                Prove your advanced knowledge in carbon trading strategies and market analysis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Complete Advanced Carbon Trading Learning Path</li>
                <li>Pass the rigorous online examination</li>
                <li>Participate in a simulated trading exercise</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Certificate className="w-4 h-4 mr-2" />
                Get Certified
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  )
}

