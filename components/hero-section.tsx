import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VideoHero } from "@/components/video-hero"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

const trustIndicators = [
  { value: "R500M+", label: "Assets under management" },
  { value: "500+", label: "Families guided" },
  { value: "30+", label: "Years of shared experience" },
  { value: "49944", label: "FSCA FSP licence" },
]

export function HeroSection() {
  return (
    <VideoHero
      videoSrc="/videos/hero-family-life.mp4"
      poster="/videos/hero-family-life-poster.jpg"
      heightClassName="min-h-[100svh]"
      align="center"
      mediaPosition="center 42%"
      eyebrow="Holistic financial planning · Sandton, Johannesburg"
      title={
        <>
          Bring forth the life <span className="text-[#8FD3DD]">you’re building.</span>
        </>
      }
      description="A home. An education. A business with a future. We help South African families create, protect, and pass on wealth with advice that starts with the life behind the numbers."
      footer={
        <dl className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 sm:text-left">
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
          <WhatsAppIcon className="mr-2 h-5 w-5 text-[#25D366]" />
          Start on WhatsApp
        </Link>
      </Button>
      <Button
        size="lg"
        variant="outline"
        asChild
        className="group h-13 rounded-full border-white/45 bg-white/5 px-7 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/12 hover:text-white"
      >
        <Link href="/about">
          Meet Palesa &amp; Siba
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </VideoHero>
  )
}
