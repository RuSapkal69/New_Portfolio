"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

function FrameSection({ title, subtitle, imageUrl }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const frames = sectionRef.current.querySelectorAll(".frame")

    // Stagger animation for frames
    gsap.from(frames, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    })
  }, [])

  return (
    <section className="frame-section" ref={sectionRef}>
      <div className="frame-container">
        {/* Create 8 nested frames */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="frame" style={{ zIndex: 8 - i }}></div>
        ))}

        <div className="content-frame">
          <div className="content-image">
            <img src={imageUrl || "/placeholder.svg"} alt={title} />
          </div>
          <div className="content-text">
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <button className="find-out-more">Find out more</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrameSection
