import { FileText, ShieldCheck, Users } from "lucide-react"

const features = [
  {
    name: "Advice Before Product",
    description:
      "Planning starts with the client’s circumstances, obligations, and objectives before any provider or product conversation.",
    icon: Users,
  },
  {
    name: "Regulated Practice",
    description: "Imvelo Wealth Solutions is a licensed Financial Services Provider with FSP Licence Number 49944.",
    icon: ShieldCheck,
  },
  {
    name: "Documented Standards",
    description:
      "Compliance, privacy, conflict-of-interest and fair-treatment documentation is surfaced clearly for review.",
    icon: FileText,
  },
]

export function ValueProposition() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20" data-aos="fade-up">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Why Imvelo</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Quiet confidence over financial noise.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:pt-10">
            Good advice is built on licensed practice, clear scope, visible governance, and a planning relationship
            that treats wealth as a long-term family and business decision.
          </p>
        </div>

        <div
          className="mt-16 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          {features.map((feature) => (
            <div key={feature.name} className="bg-card p-8">
              <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-6 text-lg font-semibold text-foreground">{feature.name}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
