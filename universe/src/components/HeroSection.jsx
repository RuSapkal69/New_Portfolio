import { useEffect, useRef } from "react"
import { gsap } from "gsap"

function HeroSection() {
  const cubeRef = useRef(null)

  useEffect(() => {
    // Initial animation for the cube
    gsap.from(cubeRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 1.5,
      ease: "power3.out",
    })
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-logo">UP</div>
        <div className="hero-cube" ref={cubeRef}>
          {/* Wireframe cube */}
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
    </section>
  )
}

export default HeroSection
