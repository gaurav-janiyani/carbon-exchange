"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, RefreshCw } from "lucide-react"

type PredictionData = {
  date: string
  actual: number
  predicted: number
}

export function AIPricePrediction() {
  const [predictionData, setPredictionData] = useState<PredictionData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPrediction = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/ai-price-prediction")
      if (!response.ok) {
        throw new Error("Failed to fetch prediction data")
      }
      const data = await response.json()
      setPredictionData(data)
    } catch (error) {
      console.error("Error fetching AI prediction:", error)
      setError("Failed to fetch prediction data. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPrediction()
  }, [fetchPrediction])

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Price Prediction</CardTitle>
      </CardHeader>
      <CardContent>
        {error ? (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={predictionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="actual" stroke="#8884d8" name="Actual Price" />
              <Line type="monotone" dataKey="predicted" stroke="#82ca9d" name="Predicted Price" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        )}
        <Button onClick={fetchPrediction} disabled={isLoading} className="mt-4">
          {isLoading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Updating...
            </>
          ) : (
            <>
              <RefreshCw className="mr-2 h-4 w-4" />
              Update Prediction
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

