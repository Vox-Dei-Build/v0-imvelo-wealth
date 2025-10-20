import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesHero() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Comprehensive Financial Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From financial planning to estate management, we provide the complete range of services needed to build,
            preserve, and transfer your wealth across generations.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild>
              <Link href="/consultation">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
