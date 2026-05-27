import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 border-y border-border py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center" data-aos="fade-up">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Next step</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Start with a focused conversation, not a sales funnel.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Share the context that matters. The right first conversation should clarify goals, priorities, and where
              advice can add the most value.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button size="lg" asChild className="group rounded-md">
              <Link href="/consultation">
                Request Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-md bg-transparent">
              <a href="mailto:info@imvelowealth.co.za">
                <Mail className="mr-2 h-4 w-4" />
                Email Imvelo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
