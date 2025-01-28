"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Leaf, DollarSign, BarChartIcon, TrendingUp, Plus, ArrowUpRight, ArrowDownRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { RealTimeUpdates } from "@/components/dashboard/real-time-updates"
import { AIPricePrediction } from "@/components/dashboard/ai-price-prediction"
import { ProjectImpact3D } from "@/components/dashboard/project-impact-3d"

const mockData = {
  carbonCredits: [
    { month: "Jan", amount: 100 },
    { month: "Feb", amount: 150 },
    { month: "Mar", amount: 200 },
    { month: "Apr", amount: 180 },
    { month: "May", amount: 220 },
    { month: "Jun", amount: 250 },
  ],
  financials: [
    { month: "Jan", revenue: 5000, expenses: 3000 },
    { month: "Feb", revenue: 7500, expenses: 4000 },
    { month: "Mar", revenue: 10000, expenses: 5000 },
    { month: "Apr", revenue: 9000, expenses: 5500 },
    { month: "May", revenue: 11000, expenses: 6000 },
    { month: "Jun", revenue: 12500, expenses: 6500 },
  ],
  projectStatus: [
    { name: "Active", value: 5 },
    { name: "Pending", value: 2 },
    { name: "Completed", value: 3 },
  ],
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const newsItems = [
  { title: "Carbon credit prices surge 15% in Q2", date: "2023-07-01" },
  { title: "New government incentives for reforestation projects", date: "2023-06-28" },
  { title: "ICXP partners with major corporations for carbon neutrality", date: "2023-06-25" },
]

const quickActions = [
  { title: "Submit New Project", icon: Plus, href: "/dashboard/projects/submit" },
  { title: "View Marketplace", icon: BarChartIcon, href: "/dashboard/marketplace" },
  { title: "Generate Report", icon: DollarSign, href: "/dashboard/reports" },
]

export default function DashboardOverviewPage() {
  const [activeTab, setActiveTab] = useState("carbon-credits")

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard Overview</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Carbon Offset</CardTitle>
            <Leaf className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,100 tons</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="mr-1 text-green-500" />
              20% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <BarChartIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 pending verification</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$55,000</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="mr-1 text-green-500" />
              15% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Trend</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Bullish</div>
            <p className="text-xs text-muted-foreground">Carbon credit prices rising</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>View your carbon credit and financial performance</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="carbon-credits">Carbon Credits</TabsTrigger>
                <TabsTrigger value="financials">Financials</TabsTrigger>
              </TabsList>
              <TabsContent value="carbon-credits">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={mockData.carbonCredits}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="amount" stroke="#8884d8" name="Carbon Credits" />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="financials">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={mockData.financials}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
                    <Bar dataKey="expenses" fill="#82ca9d" name="Expenses" />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <RealTimeUpdates />
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <AIPricePrediction />
        <ProjectImpact3D />
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Carbon Market News</CardTitle>
            <CardDescription>Stay updated with the latest market trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {newsItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{item.title}</span>
                  <Badge variant="secondary">{item.date}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <Button key={index} variant="outline" asChild className="h-20">
                  <Link href={action.href} className="flex flex-col items-center justify-center">
                    <action.icon className="mb-2" />
                    <span>{action.title}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button asChild>
          <Link href="/dashboard/projects">View All Projects</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard/marketplace">Go to Marketplace</Link>
        </Button>
      </div>
    </div>
  )
}

