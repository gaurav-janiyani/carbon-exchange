"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Overview } from "@/components/dashboard/overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { CreditBalance } from "@/components/dashboard/credit-balance"
import { AIPerformanceMetrics } from "@/components/dashboard/ai-performance-metrics"
import { CarbonCreditTokens } from "@/components/dashboard/carbon-credit-tokens"
import { MyRewards } from "@/components/dashboard/my-rewards"
import { Notifications } from "@/components/dashboard/notifications"
import { QuickAccess } from "@/components/dashboard/quick-access"
import { ProjectSummary } from "@/components/dashboard/project-summary"
import { MarketInsights } from "@/components/dashboard/market-insights"
import { ProjectAnalytics } from "@/components/dashboard/project-analytics"
import { SustainabilityGoals } from "@/components/dashboard/sustainability-goals"
import { Leaf, BarChart, DollarSign, TrendingUp, Target } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [totalCarbonOffset, setTotalCarbonOffset] = useState(4231)
  const [activeProjects, setActiveProjects] = useState(7)
  const [totalRevenue, setTotalRevenue] = useState(52234)
  const [marketTrend, setMarketTrend] = useState("Bullish")

  useEffect(() => {
    // Simulating real-time updates
    const interval = setInterval(() => {
      setTotalCarbonOffset((prev) => prev + Math.floor(Math.random() * 10))
      setTotalRevenue((prev) => prev + Math.floor(Math.random() * 100))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-8 p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <Notifications />
          <Button asChild variant="outline">
            <Link href="/support">
              <span className="sr-only">Get help</span>
              <span aria-hidden="true">?</span>
            </Link>
          </Button>
        </div>
      </div>

      <QuickAccess />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Carbon Offset</CardTitle>
            <Leaf className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCarbonOffset.toLocaleString()} tons</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeProjects}</div>
            <p className="text-xs text-muted-foreground">2 pending verification</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Trend</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{marketTrend}</div>
            <p className="text-xs text-muted-foreground">Carbon credit prices rising</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-full lg:col-span-4">
          <CardHeader>
            <CardTitle>Carbon Credit Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-full lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-full lg:col-span-2">
          <CardHeader>
            <CardTitle>Project Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectAnalytics />
          </CardContent>
        </Card>
        <Card className="col-span-full lg:col-span-1">
          <CardHeader>
            <CardTitle>Market Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <MarketInsights />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ProjectSummary />
        <MyRewards />
      </div>

      <SustainabilityGoals />

      <CreditBalance />
      <AIPerformanceMetrics />
      <CarbonCreditTokens />
    </div>
  )
}

