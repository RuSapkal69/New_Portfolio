import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

function HeroSection() {
  const videoRef = useRef(null)
  const audioRef = useRef(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Video autoplay failed:", error)
          setVideoError(true)
        })
      }
    }
  }, [])

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause()
        setIsAudioPlaying(false)
      } else {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsAudioPlaying(true))
            .catch((error) => {
              console.warn("Audio play failed:", error)
            })
        }
      }
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="background-video absolute inset-0 w-full h-full object-cover opacity-0"
        autoPlay
        muted
        loop
        playsInline
        onError={() => setVideoError(true)}
      >
        <source src="./assets/videos/Universe_1.mp4" type="video" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback background if video fails */}
      {videoError && <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900"></div>}

      {/* Video Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Audio Control */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-30 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
        aria-label={isAudioPlaying ? "Mute audio" : "Play audio"}
      >
        {isAudioPlaying ? <Volume2 className="w-6 h-6 text-white" /> : <VolumeX className="w-6 h-6 text-white" />}
      </button>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} loop preload="metadata">
        <source src="/universe_sound.mp3" type="audio" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default HeroSection
