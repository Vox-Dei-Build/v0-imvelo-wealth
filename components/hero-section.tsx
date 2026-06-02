import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, FileCheck2, ShieldCheck, UsersRound } from "lucide-react"
import { Button } from "@/components/ui/button"

const trustIndicators = [
  { value: "49944", label: "FSP Licence", icon: ShieldCheck },
  { value: "2018/195882/07", label: "Company Registration", icon: FileCheck2 },
  { value: "2018", label: "Founded", icon: CalendarDays },
  { value: "CFP®", label: "Director-led Advice", icon: UsersRound },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announcement Banner */}
          <div
            data-aos="fade-up"
            className="inline-flex max-w-full items-center justify-center rounded-full bg-accent/10 px-4 py-2 text-center text-sm font-medium text-accent-foreground ring-1 ring-accent/20"
          >
            <span className="mr-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
            FSCA licensed financial services provider · CFP® led
          </div>

          {/* Main Headline */}
          <div className="mt-8 space-y-6">
            <h1
              data-aos="fade-up"
              data-aos-delay="80"
              className="font-serif text-4xl font-bold tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl"
            >
              Build Wealth That
              <span className="text-accent"> Lasts Generations</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="160"
              className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground text-pretty"
            >
              Financial planning and wealth management for South African professionals, entrepreneurs, families, and
              businesses.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="240"
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" asChild className="group">
              <Link href="/consultation">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/resources">View Latest Resources</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            data-aos="fade-up"
            data-aos-delay="320"
            className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-4"
          >
            {trustIndicators.map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="mx-auto mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                <div className="text-2xl font-bold text-foreground">{item.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div data-aos="fade-up" data-aos-delay="400" className="mt-16 sm:mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-xl bg-muted/50 p-2 ring-1 ring-border/10 lg:rounded-2xl lg:p-4">
            <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-background shadow-2xl ring-1 ring-border/10">
              <Image
                src="/professional-financial-planning-meeting-with-diver.jpg"
                alt="Professional financial planning consultation"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1184px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
