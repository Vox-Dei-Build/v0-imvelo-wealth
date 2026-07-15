import { VideoHero } from "@/components/video-hero"

export function ContactHero() {
  return (
    <VideoHero
      videoSrc="/videos/hero-client-conversation.mp4"
      poster="/videos/hero-client-conversation-poster.jpg"
      heightClassName="min-h-[72svh]"
      mediaPosition="center"
      eyebrow="A real person is on the other side"
      title={
        <>
          However you reach us, <span className="text-[#8FD3DD]">you will be heard.</span>
        </>
      }
      description="Phone, email, WhatsApp, or a Johannesburg meeting—choose whichever feels most natural. We answer during office hours, Monday to Friday."
    />
  )
}
