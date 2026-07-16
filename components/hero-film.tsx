"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Pause, Play } from "lucide-react"

interface HeroFilmProps {
  videoSrc: string
  poster: string
  mediaPosition: string
}

export function HeroFilm({ videoSrc, poster, mediaPosition }: HeroFilmProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)")

    const syncPlayback = () => {
      if (motionPreference.matches) {
        video.pause()
        return
      }

      void video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }

    syncPlayback()
    motionPreference.addEventListener("change", syncPlayback)

    return () => motionPreference.removeEventListener("change", syncPlayback)
  }, [videoSrc])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      void video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    } else {
      video.pause()
    }
  }

  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <Image
          src={poster}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: mediaPosition }}
        />
        <video
          ref={videoRef}
          className="hero-film absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: mediaPosition }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          tabIndex={-1}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <button
        type="button"
        onClick={togglePlayback}
        className="absolute right-6 top-28 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#032A33]/45 text-white backdrop-blur-md transition-colors hover:bg-[#032A33]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8FD3DD] sm:right-8 sm:top-32 lg:right-12"
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
        title={isPlaying ? "Pause background video" : "Play background video"}
      >
        {isPlaying ? <Pause className="h-4 w-4" fill="currentColor" /> : <Play className="ml-0.5 h-4 w-4" fill="currentColor" />}
      </button>
    </>
  )
}
