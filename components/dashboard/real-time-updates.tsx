"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, ArrowDown, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type Update = {
  type: "credit_price" | "project_status" | "market_alert"
  message: string
  value?: number
  change?: number
}

export function RealTimeUpdates() {
  const [updates, setUpdates] = useState<Update[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const eventSource = new EventSource("/api/dashboard-updates")

    eventSource.onmessage = (event) => {
      const update: Update = JSON.parse(event.data)
      setUpdates((prevUpdates) => [update, ...prevUpdates.slice(0, 4)])
    }

    eventSource.onerror = (error) => {
      console.error("EventSource failed:", error)
      setError("Failed to connect to real-time updates. Please refresh the page.")
      eventSource.close()
    }

    return () => {
      eventSource.close()
    }
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Real-Time Updates</CardTitle>
      </CardHeader>
      <CardContent>
        {error ? (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          <ul className="space-y-4">
            {updates.map((update, index) => (
              <li key={index} className="flex items-center justify-between">
                <span>{update.message}</span>
                {update.value && (
                  <Badge variant={update.change && update.change > 0 ? "success" : "destructive"}>
                    {update.value.toFixed(2)}
                    {update.change &&
                      (update.change > 0 ? (
                        <ArrowUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ArrowDown className="ml-1 h-4 w-4" />
                      ))}
                  </Badge>
                )}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

