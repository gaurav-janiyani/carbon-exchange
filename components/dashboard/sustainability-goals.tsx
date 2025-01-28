import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Leaf, Droplet, Wind, Sun } from "lucide-react"

const goals = [
  {
    name: "Carbon Neutrality",
    progress: 75,
    target: "2030",
    icon: Leaf,
  },
  {
    name: "Water Conservation",
    progress: 60,
    target: "50% reduction by 2025",
    icon: Droplet,
  },
  {
    name: "Renewable Energy",
    progress: 40,
    target: "100% by 2035",
    icon: Wind,
  },
  {
    name: "Biodiversity Protection",
    progress: 80,
    target: "1M acres by 2028",
    icon: Sun,
  },
]

export function SustainabilityGoals() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Leaf className="h-6 w-6" />
          Sustainability Goals
        </CardTitle>
        <CardDescription>Track progress towards our environmental targets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2">
          {goals.map((goal) => (
            <div key={goal.name} className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <goal.icon className="h-5 w-5" />
                  {goal.name}
                </span>
                <Badge variant="outline">{goal.target}</Badge>
              </div>
              <Progress value={goal.progress} className="h-2" />
              <span className="text-sm text-muted-foreground">{goal.progress}% complete</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

