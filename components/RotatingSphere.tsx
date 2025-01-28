"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

export const RotatingSphere: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const sphereRef = useRef<THREE.Mesh | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    const setSize = () => {
      if (!mountRef.current) return
      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    setSize()
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.SphereGeometry(1, 64, 64)

    // Create a gradient material with more contrast
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(0x1a5f7a) }, // Darker blue
        color2: { value: new THREE.Color(0x39c088) }, // Brighter green
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 lightDirection;
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vec3 gradient = mix(color1, color2, vUv.y);
          float lightIntensity = max(0.5, dot(vNormal, lightDirection));
          gl_FragColor = vec4(gradient * lightIntensity, 1.0);
        }
      `,
    })

    sphereRef.current = new THREE.Mesh(geometry, material)
    scene.add(sphereRef.current)

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Add directional light (sunlight)
    const sunLight = new THREE.DirectionalLight(0xffffff, 1)
    sunLight.position.set(5, 5, 5)
    scene.add(sunLight)

    camera.position.z = 2.5

    controlsRef.current = new OrbitControls(camera, renderer.domElement)
    controlsRef.current.enableDamping = true
    controlsRef.current.dampingFactor = 0.25
    controlsRef.current.enableZoom = false

    const rotationSpeed = 0.005

    const animate = () => {
      requestAnimationFrame(animate)
      if (!isHovered && sphereRef.current) {
        sphereRef.current.rotation.y += rotationSpeed
      }
      if (controlsRef.current) {
        controlsRef.current.update()
      }
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      setSize()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [isHovered])

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      onMouseEnter={() => {
        setIsHovered(true)
        if (controlsRef.current) controlsRef.current.enabled = true
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        if (controlsRef.current) controlsRef.current.enabled = false
      }}
    />
  )
}

