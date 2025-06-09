"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import "./index.css"

gsap.registerPlugin(ScrollTrigger)

function App() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isLoading) return

    const ctx = gsap.context(() => {
      // Main scroll timeline optimized for performance
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      })

      // Smooth cube scaling - cover entire screen while staying visible
      mainTl
        .to(".hero-cube", {
          scale: 6,
          z: 800,
          opacity: 1, // Keep fully visible
          duration: 1.5,
          ease: "power2.inOut",
        })
        .to(".hero-cube", {
          scale: 12,
          z: 1200,
          opacity: 1, // Still fully visible
          duration: 1.5,
          ease: "power2.inOut",
        })
        .to(".hero-cube", {
          scale: 25,
          z: 1800,
          opacity: 1, // Cube covers entire screen, still visible
          duration: 2,
          ease: "power2.inOut",
        })
        .to(
          ".white-fog",
          {
            opacity: 0.95, // Fog covers the cube simultaneously
            duration: 2,
            ease: "power2.inOut",
          },
          "<", // Start at the same time as the large cube scaling
        )
        .to(".hero-cube", {
          scale: 35,
          z: 2500,
          opacity: 0, // Only fade out when cube is massive and fog is covering
          duration: 1,
          ease: "power2.inOut",
        })
        .to(
          ".hero-content > div:first-child",
          {
            opacity: 0,
            z: -500,
            scale: 0.8,
            duration: 3,
            ease: "power2.inOut",
          },
          "-=5", // Start earlier but take longer
        )
        .to(
          ".hero-content > div:nth-child(2)",
          {
            opacity: 0,
            z: -500,
            scale: 0.8,
            duration: 3,
            ease: "power2.inOut",
          },
          "-=5", // Start earlier but take longer
        )
        .to(
          ".scroll-indicator",
          {
            opacity: 0,
            y: 50,
            duration: 2,
            ease: "power2.out",
          },
          "-=4",
        )
        .to(
          ".hero-section",
          {
            backgroundImage: "url('/universe.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            duration: 0.5,
            ease: "none",
          },
          "-=1",
        )
        .to(
          ".ambient-glow",
          {
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
          },
          "<",
        )
        .to(
          ".star",
          {
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
          },
          "<",
        )
    }, containerRef)

    return () => ctx.revert()
  }, [isLoading])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
        <div className="text-5xl font-bold text-white animate-pulse">RUSHIKESH</div>
      </div>
    )
  }

  return (
    <div className="relative h-[400vh] bg-black text-white overflow-x-hidden" ref={containerRef}>
      <Header />
      <div ref={heroRef}>
        <HeroSection />
      </div>
      {/* Realistic white fog overlay */}
      <div className="white-fog fixed inset-0 opacity-0 z-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/40 to-white/90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/60 to-white/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-white/50 to-white/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>
    </div>
  )
}

export default App
