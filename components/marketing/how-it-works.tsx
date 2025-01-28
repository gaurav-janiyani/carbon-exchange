"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, CheckCircle, ShoppingCart, Gift, ChevronDown } from "lucide-react"

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
    icon: ShoppingCart,
    details: [
      "List your verified carbon credits on our blockchain-based marketplace",
      "Set your desired price or use our AI-powered pricing recommendations",
      "Connect with a global network of buyers, from individuals to large corporations",
    ],
  },
  {
    title: "4. Get Rewarded",
    description: "Earn incentives and rewards for your sustainable efforts",
    icon: Gift,
    details: [
      "Receive payments for your sold carbon credits",
      "Gain access to exclusive benefits and partnerships",
      "Participate in our community rewards program for additional perks",
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export function HowItWorks() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <motion.section className="py-20 md:py-32 bg-transparent" initial="initial" animate="animate" variants={fadeInUp}>
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="bg-transparent border-2 border-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <step.icon className="w-12 h-12 text-green-300" />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-green-400 hover:text-green-300"
                      onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          expandedStep === index ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  {expandedStep === index && (
                    <motion.ul
                      className="list-disc list-inside text-gray-300 space-y-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </motion.ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

