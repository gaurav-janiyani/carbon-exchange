"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

const EARTH_RADIUS = 1
const MOON_RADIUS = 0.27 * EARTH_RADIUS
const MOON_DISTANCE = 3 * EARTH_RADIUS

export function SolarSystem() {
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
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    mountRef.current.appendChild(renderer.domElement)

    renderer.setClearColor(0x000000, 0)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    const sunLight = new THREE.PointLight(0xffffff, 1, 1000)
    sunLight.position.set(50, 50, 50)
    scene.add(sunLight)

    // Earth
    const earthGeometry = new THREE.SphereGeometry(EARTH_RADIUS, 64, 64)
    const earthTexture = new THREE.TextureLoader().load("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpMap: earthTexture,
      bumpScale: 0.05,
    })
    const earth = new THREE.Mesh(earthGeometry, earthMaterial)
    scene.add(earth)

    // Clouds - commented out as per instructions
    // const cloudGeometry = new THREE.SphereGeometry(EARTH_RADIUS + 0.01, 64, 64)
    // const cloudMaterial = new THREE.MeshPhongMaterial({
    //   map: new THREE.TextureLoader().load("/placeholder.svg?height=1024&width=2048"),
    //   transparent: true,
    //   opacity: 0.8,
    // })
    // const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial)
    // earth.add(clouds)

    // Moon
    const moonGeometry = new THREE.SphereGeometry(MOON_RADIUS, 32, 32)
    const moonMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load("/placeholder.svg?height=1024&width=1024"),
      bumpMap: new THREE.TextureLoader().load("/placeholder.svg?height=1024&width=1024"),
      bumpScale: 0.002,
    })
    const moon = new THREE.Mesh(moonGeometry, moonMaterial)
    scene.add(moon)

    // Moon orbit
    const moonOrbit = new THREE.Object3D()
    moonOrbit.add(moon)
    scene.add(moonOrbit)

    camera.position.z = 5

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = true
    controls.minDistance = 3
    controls.maxDistance = 10

    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate Earth
      earth.rotation.y += 0.002
      // Rotate Moon around Earth
      moonOrbit.rotation.y += 0.005
      moon.position.set(MOON_DISTANCE, 0, 0)

      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      if (!mountRef.current) return
      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" />
}

