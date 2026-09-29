"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Pause, Play } from "lucide-react"

type DataConnection = EventTarget & { saveData?: boolean }

export function HomeHeroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wantsPlayback = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [hasFrame, setHasFrame] = useState(false)

  const play = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    wantsPlayback.current = true
    video.muted = true
    if (!video.getAttribute("src")) {
      video.src = window.matchMedia("(max-width: 767px)").matches
        ? "/videos/hero-travel-freedom-no-safari-720p.mp4"
        : "/videos/hero-travel-freedom-no-safari-1080p.mp4"
      video.load()
    } else if (video.error) {
      video.load()
    }
    void video.play().catch(() => setPlaying(false))
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const connection = (navigator as Navigator & { connection?: DataConnection }).connection

    const applyPreferences = () => {
      if (motion.matches || connection?.saveData) {
        wantsPlayback.current = false
        video.pause()
        video.removeAttribute("src")
        video.load()
        setHasFrame(false)
      }
    }
    const handleVisibility = () => {
      if (document.hidden) video.pause()
      else if (wantsPlayback.current) play()
    }

    applyPreferences()
    if (!motion.matches && !connection?.saveData) {
      wantsPlayback.current = true
      if (!document.hidden) play()
    }
    motion.addEventListener("change", applyPreferences)
    connection?.addEventListener("change", applyPreferences)
    document.addEventListener("visibilitychange", handleVisibility)
    return () => {
      video.pause()
      motion.removeEventListener("change", applyPreferences)
      connection?.removeEventListener("change", applyPreferences)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [play])

  return (
    <>
      <Image
        src="/videos/hero-travel-freedom-no-safari-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_42%] xl:object-contain xl:object-center"
      />
      <video
        ref={videoRef}
        id="home-hero-film"
        aria-hidden="true"
        tabIndex={-1}
        muted
        loop
        playsInline
        preload="none"
        poster="/videos/hero-travel-freedom-no-safari-poster.jpg"
        className={`absolute inset-0 h-full w-full object-cover object-[center_42%] xl:object-contain xl:object-center ${hasFrame ? "opacity-100" : "opacity-0"}`}
        onLoadedData={() => setHasFrame(true)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => { setPlaying(false); setHasFrame(false) }}
      />
      <button
        type="button"
        aria-controls="home-hero-film"
        aria-label={playing ? "Pause background video" : "Play background video"}
        onClick={() => {
          if (playing) {
            wantsPlayback.current = false
            videoRef.current?.pause()
          } else play()
        }}
        className="absolute right-6 top-28 z-30 inline-flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-white/30 bg-[#032A33]/45 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-[#032A33]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:right-8 sm:top-32 lg:right-12 xl:bottom-10 xl:top-auto xl:w-auto xl:border-white/40 xl:bg-[#032A33]/90 xl:px-4 xl:shadow-sm xl:hover:bg-[#032A33]"
      >
        {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
        <span className="hidden xl:inline">{playing ? "Pause video" : "Play video"}</span>
      </button>
    </>
  )
}
