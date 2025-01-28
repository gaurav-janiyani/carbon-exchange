"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { label: "Carbon Offset", value: 1500, color: 0x00ff00 },
  { label: "Renewable Energy", value: 1200, color: 0xffff00 },
  { label: "Water Conservation", value: 800, color: 0x00ffff },
  { label: "Waste Reduction", value: 600, color: 0xff00ff },
]

export function Chart3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const width = mountRef.current.clientWidth
    const height = 400

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0) // Set clear color to transparent
    mountRef.current.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = false

    camera.position.set(5, 5, 5)
    controls.update()

    const maxValue = Math.max(...data.map((item) => item.value))
    const barWidth = 0.5
    const spacing = 1

    data.forEach((item, index) => {
      const barHeight = (item.value / maxValue) * 5
      const geometry = new THREE.BoxGeometry(barWidth, barHeight, barWidth)
      const material = new THREE.MeshPhongMaterial({
        color: item.color,
        transparent: true,
        opacity: 0.8,
        emissive: item.color,
        emissiveIntensity: 0.5,
      })
      const bar = new THREE.Mesh(geometry, material)
      bar.position.set(index * spacing - ((data.length - 1) * spacing) / 2, barHeight / 2, 0)
      scene.add(bar)

      const label = document.createElement("div")
      label.className = "chart-label"
      label.textContent = item.label
      label.style.position = "absolute"
      label.style.left = `${(index / (data.length - 1)) * 100}%`
      label.style.bottom = "0"
      label.style.transform = "translateX(-50%)"
      label.style.color = "white"
      label.style.fontSize = "12px"
      label.style.textShadow = "0 0 3px rgba(0,0,0,0.5)"
      mountRef.current.appendChild(label)
    })

    const light = new THREE.PointLight(0xffffff, 1, 100)
    light.position.set(10, 10, 10)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight(0x404040)
    scene.add(ambientLight)

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      if (!mountRef.current) return
      const newWidth = mountRef.current.clientWidth
      camera.aspect = newWidth / height
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, height)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      mountRef.current?.removeChild(renderer.domElement)
      const labels = mountRef.current?.querySelectorAll(".chart-label")
      labels?.forEach((label) => label.remove())
    }
  }, [])

  return (
    <Card className="border-2 border-green-500 bg-transparent">
      <CardHeader>
        <CardTitle className="text-yellow-400">3D Impact Visualization</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={mountRef} className="h-[400px] w-full relative"></div>
      </CardContent>
    </Card>
  )
}

