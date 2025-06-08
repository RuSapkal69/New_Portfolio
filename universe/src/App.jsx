import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import FrameSection from "./components/FrameSection"
import "./App.css"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function App() {
  const containerRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
  if (isLoading) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000", // longer scroll distance
        scrub: 1,
        pin: true,
      },
    });

    // 👇 Smooth transition of hero elements
    tl.to(".hero-cube", {
      scale: 2,
      opacity: 1,
      duration: 2,
      ease: "power3.inOut",
    })
      .to(".hero-logo", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
      }, "<")
      .to(".hero-cube", {
        scale: 0,
        opacity: 0,
        duration: 1,
      }, "<")

      // 👇 Fade in frames
      .from(".frame-section", {
        opacity: 0,
        scale: 0.9,
        y: 100,
        duration: 2,
        ease: "power3.out",
      }, "-=1")
      .from(".content-frame", {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "power2.out",
      }, "-=1");
  }, containerRef);

  return () => ctx.revert();
  }, [isLoading]);


  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-logo">UP</div>
      </div>
    )
  }

  return (
    <div className="app" ref={containerRef}>
      <Header />
      <HeroSection />
      <FrameSection
        title="Advertising"
        subtitle="Your partners. From concept art to final renders."
        imageUrl="/placeholder.svg?height=400&width=600"
      />
      <FrameSection
        title="Milin Studio"
        subtitle="Our New State-of-the-Art Studio facility outside of Prague."
        imageUrl="/placeholder.svg?height=400&width=600"
      />

      <section className="h-[200vh] relative">
        <div className="sticky top-0 h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/universe-end.jpg')" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl text-white font-bold animate-fade-in-up">
              Welcome to the New Galaxy
            </h1>
           </div>
         </div>
      </section>

    </div>
    
    
  )
}

export default App
