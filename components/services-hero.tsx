import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VideoHero } from "@/components/video-hero"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export function ServicesHero() {
  return (
    <VideoHero
      videoSrc="/videos/hero-advice.mp4"
      poster="/videos/hero-advice-poster.jpg"
      heightClassName="min-h-[92svh]"
      mediaPosition="center"
      eyebrow="Holistic planning · Six connected areas"
      title={
        <>
          Your financial life works as one. <span className="text-[#8FD3DD]">We plan it that way.</span>
        </>
      }
      description="We connect investments, protection, retirement, family, business, and legacy in one clear plan."
    >
      <Button
        size="lg"
        asChild
        className="h-13 rounded-full bg-white px-7 text-sm font-bold text-[#005166] hover:bg-[#EAF4F6]"
      >
        <Link href="/consultation">
          <WhatsAppIcon className="mr-2 h-5 w-5 text-[#25D366]" />
          Tell us what you need
        </Link>
      </Button>
      <Button
        size="lg"
        variant="outline"
        asChild
        className="group h-13 rounded-full border-white/40 bg-transparent px-7 text-sm font-bold text-white hover:bg-white/10 hover:text-white"
      >
        <Link href="#services">
          Explore the six areas
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </VideoHero>
  )
}
