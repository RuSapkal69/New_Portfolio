"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

function HeroSection() {
  const cubeRef = useRef(null)
  const heroRef = useRef(null)
  const [stars, setStars] = useState([])

  // Generate simple stars for better performance
  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 60; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  useEffect(() => {
    // Simple initial animation for the cube
    gsap.from(cubeRef.current, {
      opacity: 1,
      scale: 0.75,
      duration: 1.5,
      ease: "power2.out",
    })

    // Simple ambient glow animation
    gsap.to(".ambient-glow", {
      scale: 1.1,
      opacity: 0.4,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    // Simple star movement - no twinkling for performance
    gsap.to(".star", {
      y: (i) => `+=${Math.random() * 20 - 10}`,
      x: (i) => `+=${Math.random() * 20 - 10}`,
      duration: (i) => 8 + Math.random() * 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.1,
        from: "random",
      },
    })
  }, [])

  return (
    <section className="hero-section relative h-screen bg-black text-white overflow-hidden" ref={heroRef}>
      {/* Simple Stars - no twinkling */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star absolute rounded-full bg-white z-10"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.6)`,
          }}
        />
      ))}

      {/* Ambient Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="ambient-glow w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-to-r from-blue-400/20 via-white/10 to-cyan-300/15" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[400px] h-[400px] rounded-full blur-2xl bg-blue-300/8" />
      </div>

      {/* Hero Content */}
      <div className="hero-content flex flex-col items-center justify-center z-20 relative text-center space-y-8 h-full">
        {/* First Line - RUSHIKESH */}
        <div className="text-7xl md:text-9xl font-bold tracking-wider text-white drop-shadow-2xl">RUSHIKESH</div>

        {/* Second Line - PORTFOLI + Cube */}
        <div className="flex items-center justify-center space-x-4">
          <span className="text-6xl md:text-8xl font-bold tracking-wider text-white drop-shadow-2xl">PORTFOLI</span>
          <div className="hero-cube relative w-[120px] h-[120px] z-20" ref={cubeRef}>
            <div className="cube">
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face right"></div>
              <div className="cube-face left"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/90 z-20">
          <div className="flex flex-col items-center space-y-3">
            <div className="px-6 py-2 border border-white/30 rounded-full backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
              <span className="text-sm tracking-widest font-light">SCROLL TO ENTER</span>
            </div>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
