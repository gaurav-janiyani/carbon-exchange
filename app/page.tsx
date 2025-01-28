import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ValueProps } from "@/components/marketing/value-props"
import { HowItWorks } from "@/components/marketing/how-it-works"
import { CustomerSegments } from "@/components/marketing/customer-segments"
import { Features } from "@/components/marketing/features"
import { ImpactCounter } from "@/components/marketing/impact-counter"
import { TestimonialCarousel } from "@/components/marketing/testimonial-carousel"
import { SolarSystem } from "@/components/SolarSystem"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Revolutionizing
                <span className="text-green-400"> Carbon Credits</span>
                <br />
                for Australia's Sustainable Future
              </h1>
              <p className="max-w-[42rem] text-xl leading-normal text-gray-300 mb-8">
                ICXP: The Inclusive Carbon Exchange Platform empowering Australian players and ensuring credibility in
                carbon trading across our nation and beyond
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/projects-marketplace">
                    Explore Marketplace
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/dashboard/projects/submit">Start Your Project</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative">
                <SolarSystem />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImpactCounter />
      <ValueProps />
      <CustomerSegments />
      <HowItWorks />
      <Features />
      <TestimonialCarousel />

      {/* Call to Action Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-6 text-yellow-300">
            Join the Carbon Revolution
          </h2>
          <p className="text-xl leading-normal mb-8 max-w-[42rem] mx-auto text-gray-200">
            Be part of Earth's sustainable future with ICXP's innovative carbon trading platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/register">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

