import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Trees, Users2, Factory } from "lucide-react"

const segments = [
  {
    title: "Small-Scale Project Developers",
    description: "Farmers, landowners, and Indigenous communities developing carbon credit projects",
    icon: Trees,
    type: "Sellers",
    examples: [
      "Family-owned farms implementing sustainable agriculture practices",
      "Indigenous groups managing forest conservation projects",
      "Small landowners engaged in reforestation efforts",
    ],
  },
  {
    title: "SME Initiatives",
    description: "Small and medium enterprises implementing emissions reduction projects",
    icon: Building2,
    type: "Sellers",
    examples: [
      "Local manufacturing companies improving energy efficiency",
      "Regional waste management firms implementing methane capture",
      "Small-scale renewable energy project developers",
    ],
  },
  {
    title: "Compliance Buyers",
    description: "Businesses fulfilling obligations under the Safeguard Mechanism",
    icon: Factory,
    type: "Buyers",
    examples: [
      "Large industrial facilities required to offset emissions",
      "Mining companies meeting regulatory carbon reduction targets",
      "Energy producers transitioning to cleaner technologies",
    ],
  },
  {
    title: "Voluntary Participants",
    description: "Corporations and retail investors seeking sustainable investments",
    icon: Users2,
    type: "Buyers",
    examples: [
      "Tech companies aiming for carbon neutrality",
      "Retail investors looking to offset personal carbon footprints",
      "ESG-focused investment funds",
    ],
  },
]

export default function CustomerSegmentsPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <h1 className="text-4xl font-bold text-center mb-8">Who We Serve</h1>
      <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        ICXP caters to a diverse range of participants in the carbon credit market, from project developers to buyers.
        Here's an overview of our key customer segments:
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {segments.map((segment, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <segment.icon className="w-12 h-12 text-primary mb-4" />
              <CardTitle className="text-2xl">{segment.title}</CardTitle>
              <span className="text-sm font-medium text-muted-foreground">{segment.type}</span>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{segment.description}</p>
              <h3 className="font-semibold mb-2">Examples:</h3>
              <ul className="list-disc list-inside space-y-1">
                {segment.examples.map((example, exampleIndex) => (
                  <li key={exampleIndex}>{example}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

