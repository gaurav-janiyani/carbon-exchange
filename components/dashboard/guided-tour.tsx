"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const tourSteps = [
  {
    title: "Welcome to ICXP",
    description: "Let's take a quick tour of your dashboard and key features.",
  },
  {
    title: "Project Submission",
    description: "Click here to start submitting your carbon credit project.",
  },
  {
    title: "Marketplace",
    description: "Explore and trade carbon credits in our global marketplace.",
  },
  {
    title: "Analytics",
    description: "View AI-powered insights and predictions for the carbon market.",
  },
  {
    title: "My Rewards",
    description: "Track your earnings and incentives for sustainable efforts.",
  },
]

export function GuidedTour() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("hasSeenTour")
    if (!hasSeenTour) {
      setIsOpen(true)
    }
  }, [])

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleClose()
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("hasSeenTour", "true")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Welcome to ICXP Dashboard</DialogTitle>
          <DialogDescription>
            This guided tour will help you navigate the key features of your dashboard.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Skip Tour
          </Button>
          <Button onClick={handleNext}>{currentStep < tourSteps.length - 1 ? "Next" : "Finish"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

