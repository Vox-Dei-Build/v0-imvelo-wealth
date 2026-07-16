import { VideoHero } from "@/components/video-hero"

export function ConsultationHero() {
  return (
    <VideoHero
      videoSrc="/videos/hero-client-conversation.mp4"
      poster="/videos/hero-client-conversation-poster.jpg"
      heightClassName="min-h-[70svh]"
      mediaPosition="center"
      eyebrow="A more human first step"
      title={
        <>
          Tell us what matters. <span className="text-[#8FD3DD]">Skip the sales pitch.</span>
        </>
      }
      description="Four quick prompts prepare an appointment request in WhatsApp, so the team receives your context and preferred time before replying."
      footer={
        <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#8FD3DD]"></div>
            <span>Picked up by a real adviser</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#8FD3DD]"></div>
            <span>Office hours 09:00–17:00</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#8FD3DD]"></div>
            <span>No obligation, no pressure</span>
          </div>
        </div>
      }
    />
  )
}
