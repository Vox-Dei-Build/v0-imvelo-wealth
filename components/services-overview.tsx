import Link from "next/link"
import { ArrowUpRight, Briefcase, FileText, GraduationCap, PiggyBank, RefreshCw, Users } from "lucide-react"

const services = [
  {
    title: "Financial Planning",
    description: "Goals, protection, investments, retirement, tax awareness, and education funding in one plan.",
    icon: PiggyBank,
    href: "/services/financial-planning",
  },
  {
    title: "Estate Planning",
    description: "Wills, trust structures, beneficiary nominations, estate duty exposure, and liquidity planning.",
    icon: FileText,
    href: "/services/estate-planning",
  },
  {
    title: "Employee Benefits",
    description: "Key employee retention, group risk, compensation structures, and employee education.",
    icon: Users,
    href: "/services/employee-benefits",
  },
  {
    title: "Retirement Counselling",
    description: "Annuity decisions, preservation funds, tax implications, and two-pot system guidance.",
    icon: RefreshCw,
    href: "/services/retirement-counselling",
  },
  {
    title: "Financial Coaching",
    description: "Budgeting, debt reduction, credit health, emergency funds, and workplace financial wellness.",
    icon: GraduationCap,
    href: "/services/financial-coaching",
  },
  {
    title: "Business Assurance",
    description: "Buy-and-sell agreements, key person cover, succession, valuation, and continuity planning.",
    icon: Briefcase,
    href: "/services/business-assurance",
  },
]

export function ServicesOverview() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-20">
          <div data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Services</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.01em] text-foreground sm:text-5xl">
              A complete planning surface, without the catalogue noise.
            </h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              Each service is a doorway into the same advisory standard: understand the full picture first, then
              implement only what the plan calls for.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border" data-aos="fade-up" data-aos-delay="120">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group grid gap-5 py-6 transition-colors hover:bg-background/65 sm:grid-cols-[4rem_1fr_auto]"
              >
                <div className="flex items-center gap-4 sm:block">
                  <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  <service.icon className="h-5 w-5 text-primary sm:mt-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.01em] text-foreground">{service.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">{service.description}</p>
                </div>
                <div className="flex items-center text-primary">
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
