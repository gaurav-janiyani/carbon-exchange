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

export function ValueProps() {
  return (
    <section className="container space-y-6 bg-transparent py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-white">Our Value Proposition</h2>
        <p className="max-w-[85%] leading-normal text-gray-300 sm:text-lg sm:leading-7">
          Connecting carbon credit sellers with buyers across Australia
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
        {valueProps.map((prop) => (
          <Card key={prop.title} className="bg-transparent border-2 border-green-500">
            <CardHeader>
              <prop.icon className="w-8 h-8 text-green-400 mb-2" />
              <CardTitle className="text-yellow-200">{prop.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">{prop.description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

