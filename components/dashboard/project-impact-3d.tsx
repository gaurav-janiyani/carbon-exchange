"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export function ProjectImpact3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000,
    )
    const renderer = new THREE.WebGLRenderer()

    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.SphereGeometry(5, 32, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    camera.position.z = 10

    const controls = new OrbitControls(camera, renderer.domElement)

    const animate = () => {
      requestAnimationFrame(animate)
      sphere.rotation.x += 0.01
      sphere.rotation.y += 0.01
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (!mountRef.current) return
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Impact Visualization</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={mountRef} style={{ width: "100%", height: "300px" }} />
      </CardContent>
    </Card>
  )
}

