import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, Shield, Leaf, BarChart, Zap, Globe, Users, Coins } from "lucide-react"

const features = [
  {
    title: "User-Friendly Platform",
    description: "Intuitive interface with step-by-step guides and mobile support",
    icon: Laptop,
    details: [
      "Easy-to-navigate dashboard for project management",
      "Mobile-responsive design for on-the-go access",
      "Interactive tutorials and tooltips for new users",
    ],
  },
  {
    title: "Advanced Security",
    description: "Blockchain technology ensures transparent and secure transactions",
    icon: Shield,
    details: [
      "Immutable record-keeping of all carbon credit transactions",
      "Multi-factor authentication for user accounts",
      "Regular security audits and penetration testing",
    ],
  },
  {
    title: "Co-Benefits Tracking",
    description: "Monitor and monetize environmental and social impacts",
    icon: Leaf,
    details: [
      "Customizable metrics for biodiversity, water conservation, and community development",
      "Integration with UN Sustainable Development Goals",
      "Automated reporting on project co-benefits",
    ],
  },
  {
    title: "Real-Time Analytics",
    description: "Access market insights and project performance metrics",
    icon: BarChart,
    details: [
      "Live carbon credit price tracking",
      "Predictive analytics for project outcomes",
      "Customizable dashboards and report generation",
    ],
  },
  {
    title: "AI-Powered Verification",
    description: "Streamlined project verification using artificial intelligence",
    icon: Zap,
    details: [
      "Automated document analysis and validation",
      "Satellite imagery processing for land use verification",
      "Machine learning models for emissions reduction calculations",
    ],
  },
  {
    title: "Global Marketplace",
    description: "Connect with a worldwide network of buyers and sellers",
    icon: Globe,
    details: [
      "Multi-currency support for international transactions",
      "Localized interfaces for global accessibility",
      "Cross-border compliance and regulatory support",
    ],
  },
  {
    title: "Community Engagement",
    description: "Foster collaboration and knowledge sharing among users",
    icon: Users,
    details: [
      "Discussion forums for project developers and investors",
      "Peer-to-peer mentoring programs",
      "Webinars and virtual events on carbon market trends",
    ],
  },
  {
    title: "Flexible Trading Options",
    description: "Diverse trading mechanisms to suit different needs",
    icon: Coins,
    details: [
      "Spot market for immediate transactions",
      "Futures contracts for long-term planning",
      "Bundled credit packages for specific project types or regions",
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <h1 className="text-4xl font-bold text-center mb-8">Platform Features</h1>
      <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        ICXP offers a comprehensive suite of features designed to streamline carbon credit trading and project
        management. Explore our key platform capabilities:
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{feature.description}</p>
              <ul className="list-disc list-inside space-y-1">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

