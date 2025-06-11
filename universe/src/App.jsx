import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Home from "./components/Home";
import EarthModel from "./components/EarthModel";
import "./index.css";

gsap.ticker.fps(24); // Limit FPS for performance
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ limitCallbacks: true, syncInterval: 150 });

function App() {
  const parallaxRef = useRef(null);
  const loadingRef = useRef(null);
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && loadingRef.current && videoRef.current) {
      const loadingElement = loadingRef.current;
      const videoElement = videoRef.current;

      loadingElement.style.willChange = "opacity, transform";
      videoElement.style.willChange = "opacity, transform";

      const ctx = gsap.context(() => {
        gsap.set("*", { clearProps: "animation" });

        const tl = gsap.timeline({
          defaults: { ease: "power1.out", force3D: true },
          onStart: () => {
            document.body.style.overflow = "hidden";
          },
          onComplete: () => {
            loadingElement.style.display = "none";
            loadingElement.style.willChange = "auto";
            videoElement.style.willChange = "auto";
            document.body.style.overflow = "auto";
          }
        });

        tl.to(loadingElement, { opacity: 0, duration: 0.8 }, "start");
        tl.to(videoElement, { opacity: 1, duration: 1 }, "start+=0.3");
      });

      return () => ctx.revert();
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div
        ref={loadingRef}
        className="loading-screen fixed inset-0 bg-black flex justify-center items-center z-50"
      >
        <div className="text-4xl md:text-5xl font-medium text-white animate-pulse">
          Rushikesh
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <Header />
      <Parallax ref={parallaxRef} pages={2}>
        <ParallaxLayer offset={0} speed={0.1} className="z-0">
          <HeroSection ref={videoRef} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 z-20">
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              RUSHIKESH
            </div>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                PORTFOLI
              </span>
              <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px]">
                <EarthModel performance="low" />
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 text-white/90 z-30">
          <div className="flex flex-col items-center space-y-3">
            <div className="px-6 py-2 border border-white/30 rounded-full backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
              <span className="text-sm tracking-widest font-light">
                SCROLL TO ENTER
              </span>
            </div>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        <ParallaxLayer offset={1} speed={0.1} className="z-10">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('./assets/images/universe.jpg')" }}
          >
            <div className="w-full h-full bg-black/30">
              <Home />
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
