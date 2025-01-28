import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"

export function MarketInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Insights</CardTitle>
        <CardDescription>Latest trends in the carbon credit market</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Average Credit Price</span>
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">$12.45</span>
              <Badge variant="success" className="flex items-center">
                <TrendingUp className="mr-1 h-3 w-3" />
                5.2%
              </Badge>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Trading Volume (24h)</span>
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">1.2M</span>
              <Badge variant="destructive" className="flex items-center">
                <TrendingDown className="mr-1 h-3 w-3" />
                2.8%
              </Badge>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Most Active Sector</span>
            <Badge>Renewable Energy</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

