"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Gift, TrendingUp, Calendar, Award, ArrowRight, Plane, Hotel, TreesIcon as Tree, Coffee } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const rewards = [
  {
    name: "Tax Credit",
    amount: 5000,
    description: "Annual tax credit for carbon reduction efforts",
    progress: 75,
  },
  {
    name: "Government Subsidy",
    amount: 10000,
    description: "Subsidy for implementing green technologies",
    progress: 40,
  },
  {
    name: "Community Grant",
    amount: 2500,
    description: "Local grant for environmental initiatives",
    progress: 90,
  },
]

const partnerRewards = [
  {
    name: "EcoAir Flight Voucher",
    description: "Round-trip flight on our sustainable airline partner",
    icon: Plane,
    points: 50000,
  },
  {
    name: "GreenStay Hotel Night",
    description: "One night stay at an eco-friendly hotel",
    icon: Hotel,
    points: 25000,
  },
  {
    name: "TreePlant Experience",
    description: "Plant 100 trees in a reforestation project",
    icon: Tree,
    points: 10000,
  },
  {
    name: "Sustainable Coffee Subscription",
    description: "3-month subscription to eco-friendly coffee",
    icon: Coffee,
    points: 5000,
  },
]

const rewardHistory = [
  { date: "2023-01", amount: 1200 },
  { date: "2023-02", amount: 1500 },
  { date: "2023-03", amount: 1800 },
  { date: "2023-04", amount: 2000 },
  { date: "2023-05", amount: 2200 },
  { date: "2023-06", amount: 2500 },
]

export default function RewardsPage() {
  const [activeTab, setActiveTab] = useState("current")
  const [totalPoints, setTotalPoints] = useState(75000)

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalPoints((prev) => prev + Math.floor(Math.random() * 100))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">My Rewards</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Total Reward Points</CardTitle>
          <CardDescription>Your current balance and earning rate</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-4">{totalPoints.toLocaleString()} points</div>
          <Progress value={75} className="mb-2" />
          <p className="text-sm text-muted-foreground">You're earning 500 points per day on average</p>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList>
          <TabsTrigger value="current">Current Rewards</TabsTrigger>
          <TabsTrigger value="history">Reward History</TabsTrigger>
          <TabsTrigger value="partner">Partner Rewards</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="current">
          <div className="grid gap-6 md:grid-cols-2">
            {rewards.map((reward, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{reward.name}</span>
                    <Badge variant="secondary">${reward.amount}</Badge>
                  </CardTitle>
                  <CardDescription>{reward.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Progress value={reward.progress} className="flex-grow" />
                    <span className="text-sm font-medium">{reward.progress}%</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Reward History</CardTitle>
              <CardDescription>Your reward earnings over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={rewardHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="partner">
          <div className="grid gap-6 md:grid-cols-2">
            {partnerRewards.map((reward, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <reward.icon className="mr-2 h-6 w-6" />
                    {reward.name}
                  </CardTitle>
                  <CardDescription>{reward.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{reward.points.toLocaleString()} points</span>
                    <Button variant="outline" disabled={totalPoints < reward.points}>
                      Redeem
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { name: "Carbon Reducer", description: "Offset 100 tons of carbon", completed: true },
              { name: "Project Pioneer", description: "Launch your first carbon credit project", completed: true },
              { name: "Trading Pro", description: "Complete 50 trades", completed: false },
              { name: "Community Leader", description: "Engage in 10 community discussions", completed: false },
            ].map((achievement, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 h-6 w-6" />
                    {achievement.name}
                  </CardTitle>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant={achievement.completed ? "default" : "secondary"}>
                    {achievement.completed ? "Completed" : "In Progress"}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Upcoming Reward Opportunities</CardTitle>
          <CardDescription>Take action to earn more rewards</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                <span>Complete your first trade this month</span>
              </div>
              <Button variant="outline" size="sm">
                Go to Marketplace
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                <span>Verify your latest project</span>
              </div>
              <Button variant="outline" size="sm">
                Start Verification
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

