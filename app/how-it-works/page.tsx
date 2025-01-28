import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, CheckCircle, Globe, ArrowRight } from "lucide-react"

const steps = [
  {
    title: "1. List Your Project",
    description: "Submit your carbon credit project with our simplified process",
    icon: FileText,
    details: [
      "Fill out our user-friendly project submission form",
      "Provide basic information about your carbon reduction or sequestration activities",
      "Upload any relevant documentation or certifications",
    ],
  },
  {
    title: "2. Get Verified",
    description: "AI-powered verification ensures credibility and transparency",
    icon: CheckCircle,
    details: [
      "Our AI system analyzes your project data and documentation",
      "Remote sensing technology is used to validate land-use changes and forest cover",
      "Third-party verifiers conduct additional checks when necessary",
    ],
  },
  {
    title: "3. Trade Credits",
    description: "Access our marketplace and connect with global buyers",
    icon: Globe,
    details: [
      "List your verified carbon credits on our blockchain-based marketplace",
      "Set your desired price or use our AI-powered pricing recommendations",
      "Connect with a global network of buyers, from individuals to large corporations",
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <h1 className="text-4xl font-bold text-center mb-8">How It Works</h1>
      <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        Our streamlined process makes it easy for project developers to list, verify, and trade carbon credits. Here's a
        step-by-step guide to how ICXP works:
      </p>
      <div className="space-y-12">
        {steps.map((step, index) => (
          <Card key={index} className="flex flex-col md:flex-row">
            <CardHeader className="md:w-1/3">
              <step.icon className="w-16 h-16 text-primary mb-4" />
              <CardTitle className="text-2xl">{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="md:w-2/3">
              <p className="text-lg mb-4">{step.description}</p>
              <ul className="space-y-2">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

