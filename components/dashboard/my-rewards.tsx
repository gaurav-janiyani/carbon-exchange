import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Gift, TrendingUp } from "lucide-react"

export function MyRewards() {
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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Gift className="mr-2 h-6 w-6" />
          My Rewards
        </CardTitle>
        <CardDescription>Government support and monetary incentives for small players</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {rewards.map((reward, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">{reward.name}</h4>
                <Badge variant="secondary">${reward.amount}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{reward.description}</p>
              <div className="flex items-center space-x-2">
                <Progress value={reward.progress} className="flex-grow" />
                <span className="text-sm font-medium">{reward.progress}%</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-medium">Total Rewards Earned</span>
          <span className="text-2xl font-bold">$17,500</span>
        </div>
        <div className="mt-2 flex items-center text-sm text-muted-foreground">
          <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
          <span>20% increase from last year</span>
        </div>
      </CardContent>
    </Card>
  )
}

