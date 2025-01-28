import { Laptop, Shield, Leaf, BarChart, Zap, Globe, Users, Coins } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "User-Friendly Platform",
    description: "Intuitive interface with step-by-step guides and mobile support",
    icon: Laptop,
  },
  {
    title: "Advanced Security",
    description: "Blockchain technology ensures transparent and secure transactions",
    icon: Shield,
  },
  {
    title: "Co-Benefits Tracking",
    description: "Monitor and monetize environmental and social impacts",
    icon: Leaf,
  },
  {
    title: "Real-Time Analytics",
    description: "Access market insights and project performance metrics",
    icon: BarChart,
  },
  {
    title: "AI-Powered Verification",
    description: "Streamlined project verification using artificial intelligence",
    icon: Zap,
  },
  {
    title: "Global Marketplace",
    description: "Connect with a worldwide network of buyers and sellers",
    icon: Globe,
  },
  {
    title: "Community Engagement",
    description: "Foster collaboration and knowledge sharing among users",
    icon: Users,
  },
  {
    title: "Flexible Trading Options",
    description: "Diverse trading mechanisms to suit different needs",
    icon: Coins,
  },
]

export function Features() {
  return (
    <section className="container space-y-6 bg-transparent py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-white">Platform Features</h2>
        <p className="max-w-[85%] leading-normal text-gray-300 sm:text-lg sm:leading-7">
          Built with advanced technology to serve your needs
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col bg-transparent border-2 border-lime-500">
            <CardHeader>
              <feature.icon className="w-8 h-8 text-lime-400 mb-2" />
              <CardTitle className="text-yellow-200">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">{feature.description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

