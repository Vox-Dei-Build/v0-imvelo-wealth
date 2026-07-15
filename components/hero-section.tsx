import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VideoHero } from "@/components/video-hero"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { waLink } from "@/lib/whatsapp"

const trustIndicators = [
  { value: "500+", label: "Clients" },
  { value: "30+", label: "Years of shared experience" },
  { value: "49944", label: "Licensed FSP" },
]

export function HeroSection() {
  return (
    <VideoHero
      videoSrc="/videos/hero-family-life.mp4"
      poster="/videos/hero-family-life-poster.jpg"
      heightClassName="min-h-[100svh]"
      align="center"
      mediaPosition="center 42%"
      eyebrow="Purpose-driven financial planning"
      title={
        <>
          Wealth creation. <span className="text-[#8FD3DD]">Wealth preservation.</span> Wealth transfer.
        </>
      }
      description="Financial planning and wealth management for South African professionals, entrepreneurs, families and businesses."
      footer={
        <dl className="grid grid-cols-3 gap-x-5 sm:max-w-3xl sm:gap-x-12 sm:text-left">
          {trustIndicators.map((item) => (
            <div key={item.label} className="flex min-w-0 flex-col">
              <dt className="order-last mt-1 text-xs font-medium leading-5 text-white/65 sm:text-sm">{item.label}</dt>
              <dd className="text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      }
    >
      <Button
        size="lg"
        asChild
        className="group h-13 rounded-full bg-white px-7 text-sm font-bold text-[#005166] shadow-[0_12px_35px_rgba(0,0,0,0.2)] hover:bg-[#EAF4F6]"
      >
        <Link href="/consultation">
          Request a consultation
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
      <Button
        size="lg"
        variant="outline"
        asChild
        className="group h-13 rounded-full border-white/45 bg-white/5 px-7 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/12 hover:text-white"
      >
        <Link href={waLink()} target="_blank" rel="noreferrer">
          <WhatsAppIcon className="mr-2 h-5 w-5 text-[#8FD3DD]" />
          Talk on WhatsApp
        </Link>
      </Button>
    </VideoHero>
  )
}
