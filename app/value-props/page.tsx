import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Leaf, Globe, TrendingUp, Award } from "lucide-react"

const valueProps = [
  {
    title: "Empowering Small Players",
    description: "Simplified onboarding and aggregated projects for farmers, Indigenous communities, and SMEs",
    icon: Users,
  },
  {
    title: "Credibility & Trust",
    description: "Blockchain-powered tracking and real-time verification ensure integrity",
    icon: Shield,
  },
  {
    title: "Cost-Efficiency",
    description: "AI and remote sensing tools reduce monitoring and verification expenses",
    icon: TrendingUp,
  },
  {
    title: "Transparency",
    description: "Open marketplace with real-time pricing and performance metrics",
    icon: Globe,
  },
  {
    title: "Co-Benefits Recognition",
    description: "Monetize biodiversity, cultural, and community benefits",
    icon: Leaf,
  },
  {
    title: "Global Integration",
    description: "Aligned with international standards for cross-border trading",
    icon: Award,
  },
]

export default function ValuePropsPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <h1 className="text-4xl font-bold text-center mb-8">Our Value Proposition</h1>
      <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        At ICXP, we're committed to revolutionizing the carbon credit market. Here's how we deliver value to our users
        and the environment:
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {valueProps.map((prop, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <prop.icon className="w-12 h-12 text-primary mb-4" />
              <CardTitle>{prop.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{prop.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

