"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from "next/dynamic"

const Globe = dynamic(() => import("react-globe.gl").then((mod) => mod.default), {
  ssr: false,
  loading: () => <div className="h-[400px] flex items-center justify-center text-white">Loading globe...</div>,
})

const projectData = [
  { lat: -25.2744, lng: 133.7751, name: "Australia Project", value: 50 },
  { lat: -14.235, lng: -51.9253, name: "Brazil Project", value: 30 },
  { lat: 56.1304, lng: -106.3468, name: "Canada Project", value: 40 },
  { lat: 9.082, lng: 8.6753, name: "Nigeria Project", value: 20 },
  { lat: 35.8617, lng: 104.1954, name: "China Project", value: 60 },
]

export function WorldMap() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height: height - 60 }) // Subtract header height
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  return (
    <Card className="border-2 border-green-500 bg-transparent h-full">
      <CardHeader>
        <CardTitle className="text-yellow-400">Global Impact</CardTitle>
      </CardHeader>
      <CardContent ref={containerRef} className="globe-container h-[calc(100%-60px)]">
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          pointsData={projectData}
          pointAltitude={0.01}
          pointRadius={0.05}
          pointColor={() => "red"}
          backgroundColor="rgba(0,0,0,0)"
          width={dimensions.width}
          height={dimensions.height}
          pointLabel={({ name, value }) =>
            `<div class="text-white bg-black bg-opacity-75 p-2 rounded">${name}: ${value} tons CO2 offset</div>`
          }
        />
      </CardContent>
    </Card>
  )
}

