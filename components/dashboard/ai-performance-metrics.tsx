"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import { Brain, TrendingUp, AlertTriangle, Zap } from "lucide-react"

const generateMockData = (days: number) => {
  return Array.from({ length: days }).map((_, i) => ({
    date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    carbonPrice: Math.random() * 10 + 20,
    tradingVolume: Math.random() * 1000 + 500,
    projectSuccess: Math.random() * 20 + 80,
  }))
}

export function AIPerformanceMetrics() {
  const [timeframe, setTimeframe] = useState("30")
  const [data, setData] = useState(generateMockData(30))

  useEffect(() => {
    setData(generateMockData(Number(timeframe)))
  }, [timeframe])

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-6 w-6" />
          AI Performance Metrics
        </CardTitle>
        <CardDescription>AI-driven insights and predictions for carbon markets</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="carbonPrice" className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <TabsList>
              <TabsTrigger value="carbonPrice">Carbon Price</TabsTrigger>
              <TabsTrigger value="tradingVolume">Trading Volume</TabsTrigger>
              <TabsTrigger value="projectSuccess">Project Success</TabsTrigger>
            </TabsList>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 days</SelectItem>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <TabsContent value="carbonPrice">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="carbonPrice" stroke="#8884d8" name="Carbon Price" />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="tradingVolume">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="tradingVolume" stroke="#82ca9d" fill="#82ca9d" name="Trading Volume" />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="projectSuccess">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="projectSuccess" stroke="#ffc658" name="Project Success Rate" />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium">AI Prediction Accuracy</span>
            <span className="text-green-500 flex items-center">
              <TrendingUp className="mr-1 h-4 w-4" />
              95.2%
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Anomalies Detected</span>
            <span className="text-yellow-500 flex items-center">
              <AlertTriangle className="mr-1 h-4 w-4" />3 in last 7 days
            </span>
          </div>
          <Button className="w-full mt-4">
            <Zap className="mr-2 h-4 w-4" />
            Generate AI Insights Report
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
;("use client")

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

type CarbonCreditToken = {
  id: string
  amount: number
  projectName: string
  expirationDate: string
}

export function CarbonCreditTokens() {
  const [tokens, setTokens] = useState<CarbonCreditToken[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [transferAmount, setTransferAmount] = useState("")
  const [transferAddress, setTransferAddress] = useState("")

  useEffect(() => {
    // Simulating API call to fetch tokens
    setTimeout(() => {
      setTokens([
        { id: "ICXP-001", amount: 100, projectName: "Amazon Reforestation", expirationDate: "2025-12-31" },
        { id: "ICXP-002", amount: 50, projectName: "Solar Farm Initiative", expirationDate: "2026-06-30" },
      ])
      setIsLoading(false)
    }, 1500)
  }, [])

  const handleTransfer = async (tokenId: string) => {
    setIsLoading(true)
    // Simulating token transfer
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setTokens((prevTokens) =>
      prevTokens.map((token) =>
        token.id === tokenId ? { ...token, amount: token.amount - Number.parseInt(transferAmount) } : token,
      ),
    )
    setTransferAmount("")
    setTransferAddress("")
    setIsLoading(false)
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Carbon Credit Tokens</CardTitle>
          <CardDescription>Manage your carbon credit tokens</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center h-40">
          <Loader2 className="h-8 w-8 animate-spin" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Carbon Credit Tokens</CardTitle>
        <CardDescription>Manage your carbon credit tokens</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tokens.map((token) => (
            <Card key={token.id}>
              <CardHeader>
                <CardTitle>{token.projectName}</CardTitle>
                <CardDescription>Token ID: {token.id}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                  <span>Amount: {token.amount} tCO2e</span>
                  <span>Expires: {token.expirationDate}</span>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`transfer-amount-${token.id}`}>Transfer Amount</Label>
                  <Input
                    id={`transfer-amount-${token.id}`}
                    type="number"
                    placeholder="Amount to transfer"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                  />
                  <Label htmlFor={`transfer-address-${token.id}`}>Recipient Address</Label>
                  <Input
                    id={`transfer-address-${token.id}`}
                    type="text"
                    placeholder="Recipient's wallet address"
                    value={transferAddress}
                    onChange={(e) => setTransferAddress(e.target.value)}
                  />
                  <Button
                    onClick={() => handleTransfer(token.id)}
                    disabled={!transferAmount || !transferAddress || Number.parseInt(transferAmount) > token.amount}
                    className="w-full sm:w-auto"
                  >
                    Transfer
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

