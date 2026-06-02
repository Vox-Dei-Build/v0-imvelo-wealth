import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const resources = [
  {
    title: "Two-Pot Retirement System Explained",
    category: "Retirement Benefit Counselling",
    href: "/resources/two-pot-retirement-system",
  },
  {
    title: "Estate Duty in South Africa",
    category: "Estate Planning",
    href: "/resources/estate-duty-guide",
  },
  {
    title: "Offshore Allowances for South Africans",
    category: "Investment Planning",
    href: "/resources/offshore-allowances-south-africa",
  },
]

export function LatestResourcesSection() {
  return (
    <section className="bg-background py-20 sm:py-28" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Latest Resources</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-[-0.01em] text-foreground sm:text-5xl">
              Practical financial education.
            </h2>
          </div>
          <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            View all resources
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.href} href={resource.href} className="group bg-card p-7 transition-colors hover:bg-muted/35">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{resource.category}</p>
              <h3 className="mt-4 min-h-16 font-serif text-2xl font-semibold leading-tight text-foreground">
                {resource.title}
              </h3>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors group-hover:text-primary">
                Read more
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
