"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Timeline } from "@/components/about/timeline"
import { TeamMember } from "@/components/about/team-member"
import { FAQ } from "@/components/about/faq"
import { Shield, Users, Leaf, Globe, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

const valueProps = [
  {
    title: "Empowering Small Players",
    description: "Simplified onboarding and aggregated projects for farmers, Indigenous communities, and SMEs",
    icon: Users,
  },
  {
    title: "Credibility & Trust",
    description: "Blockchain-powered tracking and real-time verification ensure integrity",
    icon: Shield,
  },
  {
    title: "Cost-Efficiency",
    description: "AI and remote sensing tools reduce monitoring and verification expenses",
    icon: TrendingUp,
  },
  {
    title: "Transparency",
    description: "Open marketplace with real-time pricing and performance metrics",
    icon: Globe,
  },
  {
    title: "Co-Benefits Recognition",
    description: "Monetize biodiversity, cultural, and community benefits",
    icon: Leaf,
  },
  {
    title: "Global Integration",
    description: "Aligned with international standards for cross-border trading",
    icon: Award,
  },
]

const teamMembers = [
  {
    name: "Ishaan Dutt",
    role: "Founder & CEO",
    avatar: "/placeholder.svg",
    description:
      "Visionary leader with a passion for sustainable technology and carbon markets. Ishaan founded ICXP with the goal of revolutionizing the carbon credit industry and making it more accessible to all.",
  },
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission")

  return (
    <main className="container py-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About ICXP
      </motion.h1>
      <motion.p
        className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Empowering a sustainable future through innovative carbon credit solutions
      </motion.p>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="mission">Our Mission</TabsTrigger>
          <TabsTrigger value="vision">Our Vision</TabsTrigger>
          <TabsTrigger value="values">Our Values</TabsTrigger>
        </TabsList>
        <TabsContent value="mission">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                At ICXP, our mission is to accelerate the transition to a low-carbon economy by creating an inclusive,
                transparent, and efficient marketplace for carbon credits. We aim to empower individuals, communities,
                and businesses of all sizes to participate in climate action, fostering a global effort to combat
                climate change.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="vision">
          <Card>
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                We envision a world where carbon neutrality is achievable for all, where every action towards
                sustainability is recognized and rewarded. ICXP strives to be the catalyst that transforms the carbon
                credit market, making it more accessible, trustworthy, and impactful. Our platform will serve as the
                bridge between environmental stewardship and economic growth, proving that prosperity and planet health
                can go hand in hand.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="values">
          <Card>
            <CardHeader>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>
                  Integrity: We uphold the highest standards of honesty and ethical behavior in all our operations.
                </li>
                <li>
                  Innovation: We continuously seek new technologies and approaches to improve our platform and services.
                </li>
                <li>Inclusivity: We believe in creating opportunities for all, regardless of size or background.</li>
                <li>Transparency: We commit to open and clear communication in all aspects of our business.</li>
                <li>Sustainability: We are dedicated to promoting and practicing environmental stewardship.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Our Value Proposition</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <prop.icon className="mr-2 h-6 w-6 text-primary" />
                    {prop.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{prop.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
        <div className="flex justify-center">
          <TeamMember {...teamMembers[0]} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Our Journey</h2>
        <Timeline />
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
        <FAQ />
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Join Us in Shaping a Sustainable Future</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Whether you're an individual looking to offset your carbon footprint, a business aiming for sustainability, or
          a project developer with innovative ideas, ICXP is your partner in creating positive environmental impact.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild size="lg">
            <Link href="/register">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

