import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, FileCheck2, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const proof = [
  { label: "FSCA Licensed FSP", value: "49944", icon: ShieldCheck },
  { label: "Company Registration", value: "2018/195882/07", icon: FileCheck2 },
  { label: "Office", value: "Bryanston East", icon: Building2 },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f6ef_0%,#ffffff_58%,#f4f0e7_100%)] py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div
            data-aos="fade-up"
            className="inline-flex items-center rounded-full border border-primary/20 bg-background/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary shadow-sm"
          >
            Independent · FSCA licensed · Planning-led
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="80"
            className="mx-auto mt-8 max-w-5xl font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.015em] text-foreground sm:text-7xl lg:text-8xl"
          >
            Build wealth that has a place to go.
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="160"
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            Clear financial planning for South African families, professionals, and business owners who want structure,
            discretion, and continuity around consequential money decisions.
          </p>

          <div data-aos="fade-up" data-aos-delay="240" className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild className="group rounded-md">
              <Link href="/consultation">
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-md bg-transparent">
              <Link href="/services">Explore Advisory Services</Link>
            </Button>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="320" className="mx-auto mt-16 max-w-6xl">
          <div className="relative overflow-hidden rounded-md border border-border bg-background p-2 shadow-2xl shadow-primary/10">
            <div className="relative aspect-[16/8] overflow-hidden rounded-[5px] bg-[#0b2025] sm:aspect-[16/7]">
              <Image
                src="/bayport-house.jpg"
                alt="Imvelo Wealth Solutions office park"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1120px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,31,36,0.08)_0%,rgba(7,31,36,0.42)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 grid gap-px border-t border-white/15 bg-white/15 backdrop-blur-sm sm:grid-cols-3">
                {proof.map((item) => (
                  <div key={item.label} className="bg-[#071f24]/78 p-5 text-left text-white">
                    <div className="flex items-center gap-3 text-white/62">
                      <item.icon className="h-4 w-4 text-[#d7bd73]" aria-hidden="true" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">{item.label}</span>
                    </div>
                    <p className="mt-3 text-base font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
