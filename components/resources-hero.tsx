import { VideoHero } from "@/components/video-hero"

export function ResourcesHero() {
  return (
    <VideoHero
      videoSrc="/videos/hero-family-life.mp4"
      poster="/videos/hero-family-life-poster.jpg"
      heightClassName="min-h-[70svh]"
      mediaPosition="center 42%"
      eyebrow="Financial education, without the jargon"
      title={
        <>
          Understand the decision <span className="text-[#8FD3DD]">before you make it.</span>
        </>
      }
      description="Plain-language guides for the South African money decisions that are too important to leave unexplained."
    />
  )
}
