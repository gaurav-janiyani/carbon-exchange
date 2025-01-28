import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Leaf, AlertTriangle } from "lucide-react"

const projects = [
  { name: "Amazon Reforestation", progress: 75, status: "On Track" },
  { name: "Wind Farm Australia", progress: 40, status: "Delayed" },
  { name: "Solar Panel Initiative", progress: 90, status: "Ahead" },
]

export function ProjectSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Summary</CardTitle>
        <CardDescription>Overview of your active carbon credit projects</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.name} className="flex items-center space-x-4">
              <Leaf className="h-4 w-4 text-green-500" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{project.name}</p>
                <Progress value={project.progress} className="h-2" />
              </div>
              <Badge
                variant={
                  project.status === "On Track" ? "default" : project.status === "Delayed" ? "destructive" : "success"
                }
              >
                {project.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

