import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutCTA() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Discuss the decisions that need structure.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A considered first conversation is the right place to clarify context, planning priorities, and whether
            Imvelo is the right advisory partner.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="group rounded-md">
              <Link href="/consultation">
                Request Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-md bg-transparent">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
