"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "ICXP has transformed how we approach carbon credits. It's user-friendly and transparent.",
    author: "Sarah Johnson",
    role: "Environmental Scientist",
    avatar: "/placeholder.svg",
  },
  {
    quote: "As a small farm owner, I never thought I'd be part of the carbon market. ICXP made it possible.",
    author: "Michael Lee",
    role: "Farmer",
    avatar: "/placeholder.svg",
  },
  {
    quote: "The AI-driven insights have been game-changing for our investment strategies in the carbon market.",
    author: "Emma Rodriguez",
    role: "Investment Analyst",
    avatar: "/placeholder.svg",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-transparent py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Users Say</h2>
        <Card className="max-w-3xl mx-auto bg-transparent border-2 border-purple-500">
          <CardContent className="p-8">
            <Quote className="w-12 h-12 text-purple-500 mb-6 mx-auto" />
            <blockquote className="text-xl text-center mb-6 text-white">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex items-center justify-center">
              <Avatar className="w-12 h-12 mr-4">
                <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].author} />
                <AvatarFallback>{testimonials[currentIndex].author[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-white">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-gray-300">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

