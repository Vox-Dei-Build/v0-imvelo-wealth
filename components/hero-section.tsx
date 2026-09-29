import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HomeHeroFilm } from "@/components/home-hero-film"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { waLink } from "@/lib/whatsapp"

const trustIndicators = [
  { value: "500+", label: "Clients" },
  { value: "30+", label: "Years of shared experience" },
  { value: "49944", label: "Licensed FSP" },
]

export function HeroSection() {
  return (
    <section aria-labelledby="home-heading" className="relative isolate overflow-hidden bg-[#064654] pt-[76px] text-white sm:pt-[114px] xl:flex xl:aspect-video xl:min-h-[44rem] xl:flex-col xl:justify-end xl:pt-0">
      <div className="relative aspect-video w-full bg-[#032A33] xl:absolute xl:inset-0 xl:aspect-auto">
        <HomeHeroFilm />
      </div>
      <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(2,30,38,0.7)_0%,rgba(2,30,38,0.05)_28%,rgba(2,30,38,0.2)_45%,rgba(2,30,38,0.9)_100%)] xl:block" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(2,30,38,0.65),transparent_85%)] xl:block" aria-hidden="true" />
      <div className="relative z-20 mx-auto w-full max-w-[90rem] px-6 py-10 sm:px-8 sm:py-12 xl:pointer-events-none xl:px-12 xl:pb-10 xl:pt-36">
        <div className="max-w-3xl">
          <p className="section-kicker text-[#8FD3DD]">Purpose-driven financial planning</p>
          <h1 id="home-heading" className="mt-5 text-[clamp(2.5rem,4.3vw,4.5rem)] font-medium leading-[1.06] tracking-[-0.04em] text-white">
            Wealth creation. <span className="text-[#8FD3DD]">Wealth preservation.</span> Wealth transfer.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            Financial planning and wealth management for South African professionals, entrepreneurs, families and businesses.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center xl:pointer-events-auto">
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
          </div>
        </div>
        <dl className="mt-9 grid grid-cols-3 gap-x-5 border-t border-white/25 pt-6 sm:max-w-3xl sm:gap-x-12">
          {trustIndicators.map((item) => (
            <div key={item.label} className="flex min-w-0 flex-col">
              <dt className="order-last mt-1 text-xs font-medium leading-5 text-white/75 sm:text-sm">{item.label}</dt>
              <dd className="text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
