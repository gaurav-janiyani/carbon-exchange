"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, TrendingUp, TrendingDown } from "lucide-react"

type TradeAlert = {
  id: string
  type: "anomaly" | "trend" | "recommendation"
  message: string
  severity: "low" | "medium" | "high"
  timestamp: string
}

export function AITradeMonitor() {
  const [alerts, setAlerts] = useState<TradeAlert[]>([])

  useEffect(() => {
    // Simulating real-time alerts
    const interval = setInterval(() => {
      const newAlert: TradeAlert = {
        id: Math.random().toString(36).substr(2, 9),
        type: ["anomaly", "trend", "recommendation"][Math.floor(Math.random() * 3)] as TradeAlert["type"],
        message: `AI detected a ${["price spike", "unusual trading volume", "potential arbitrage opportunity"][Math.floor(Math.random() * 3)]}`,
        severity: ["low", "medium", "high"][Math.floor(Math.random() * 3)] as TradeAlert["severity"],
        timestamp: new Date().toISOString(),
      }
      setAlerts((prev) => [newAlert, ...prev].slice(0, 5))
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Trade Monitor</CardTitle>
        <CardDescription>Real-time insights and alerts powered by AI</CardDescription>
      </CardHeader>
      <CardContent>
        {alerts.length === 0 ? (
          <p className="text-center text-muted-foreground">No alerts at the moment</p>
        ) : (
          <ul className="space-y-2">
            {alerts.map((alert) => (
              <li key={alert.id} className="flex items-center justify-between p-2 rounded-md bg-muted">
                <div className="flex items-center space-x-2">
                  {alert.type === "anomaly" && <AlertTriangle className="text-yellow-500" />}
                  {alert.type === "trend" && <TrendingUp className="text-blue-500" />}
                  {alert.type === "recommendation" && <CheckCircle className="text-green-500" />}
                  <span>{alert.message}</span>
                </div>
                <Badge
                  variant={
                    alert.severity === "high" ? "destructive" : alert.severity === "medium" ? "default" : "secondary"
                  }
                >
                  {alert.severity}
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

