import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesHero() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Services</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Advisory services for connected financial decisions.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            The offer is intentionally structured around core planning areas rather than a long menu of products.
            Each engagement should clarify what matters, what is exposed, and what action is worth taking.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild className="rounded-md">
              <Link href="/consultation">Request Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
