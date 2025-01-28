import { Building2, Trees, Users2, Factory } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const segments = [
  {
    title: "Small-Scale Project Developers",
    description: "Farmers, landowners, and Indigenous communities developing carbon credit projects",
    icon: Trees,
    type: "Sellers",
  },
  {
    title: "SME Initiatives",
    description: "Small and medium enterprises implementing emissions reduction projects",
    icon: Building2,
    type: "Sellers",
  },
  {
    title: "Compliance Buyers",
    description: "Businesses fulfilling obligations under the Safeguard Mechanism",
    icon: Factory,
    type: "Buyers",
  },
  {
    title: "Voluntary Participants",
    description: "Corporations and retail investors seeking sustainable investments",
    icon: Users2,
    type: "Buyers",
  },
]

export function CustomerSegments() {
  return (
    <section className="container py-8 md:py-12 lg:py-24 bg-transparent">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-white">Who We Serve</h2>
        <p className="max-w-[85%] leading-normal text-gray-200 sm:text-lg sm:leading-7">
          Connecting carbon credit sellers with buyers across Australia
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-4 mt-8">
        {segments.map((segment) => (
          <Card key={segment.title} className="flex flex-col bg-transparent border-2 border-yellow-500">
            <CardHeader>
              <segment.icon className="w-8 h-8 text-yellow-400 mb-2" />
              <CardTitle className="flex flex-col text-white">
                <span className="text-sm text-gray-200">{segment.type}</span>
                <span>{segment.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">{segment.description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

