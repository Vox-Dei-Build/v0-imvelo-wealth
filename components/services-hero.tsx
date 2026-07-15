import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VideoHero } from "@/components/video-hero"

export function ServicesHero() {
  return (
    <VideoHero
      videoSrc="/videos/hero-advice.mp4"
      poster="/videos/hero-advice-poster.jpg"
      heightClassName="min-h-[92svh]"
      mediaPosition="center"
      eyebrow="How we can help"
      title={
        <>
          One plan. <span className="text-[#8FD3DD]">Six ways we can help.</span>
        </>
      }
      description="From personal planning to employee benefits and business protection, every service starts with clarity."
    >
      <Button
        size="lg"
        asChild
        className="h-13 rounded-full bg-white px-7 text-sm font-bold text-[#005166] hover:bg-[#EAF4F6]"
      >
        <Link href="/consultation">
          Request a consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      <Button
        size="lg"
        variant="outline"
        asChild
        className="group h-13 rounded-full border-white/40 bg-transparent px-7 text-sm font-bold text-white hover:bg-white/10 hover:text-white"
      >
        <Link href="#services">
          Explore services
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </VideoHero>
  )
}
