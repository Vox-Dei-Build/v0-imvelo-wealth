import Link from "next/link"
import {
  ArrowUpRight,
  Briefcase,
  CheckCircle,
  FileText,
  GraduationCap,
  PiggyBank,
  RefreshCw,
  Users,
} from "lucide-react"

const services = [
  {
    title: "Financial Planning",
    description:
      "A goals-based plan covering investments, protection, retirement, tax awareness, preservation funds, and education funding.",
    icon: PiggyBank,
    features: ["Life, disability, and critical illness", "Investment and savings strategy", "Retirement annuities"],
    outcomes: ["Clear planning roadmap", "Coordinated life-stage decisions", "Ongoing review discipline"],
    href: "/services/financial-planning",
  },
  {
    title: "Estate Planning",
    description:
      "Wills, trust structures, beneficiary nominations, estate duty exposure, fiduciary coordination, and estate liquidity.",
    icon: FileText,
    features: ["Will drafting and review", "Trust considerations", "Executor coordination"],
    outcomes: ["Cleaner wealth transfer", "Reduced administration friction", "Family continuity"],
    href: "/services/estate-planning",
  },
  {
    title: "Employee Benefits",
    description:
      "Retention structures, investment-linked benefits, group risk cover, employer education, and compliant administration.",
    icon: Users,
    features: ["Retention schemes", "Group risk cover", "Employee communication"],
    outcomes: ["Stronger retention", "Clearer employee value", "Compliant benefit design"],
    href: "/services/employee-benefits",
  },
  {
    title: "Retirement Benefit Counselling",
    description:
      "Independent guidance on preservation funds, living and life annuities, tax, fees, nominations, and two-pot decisions.",
    icon: RefreshCw,
    features: ["Annuity analysis", "Preservation options", "Tax modelling"],
    outcomes: ["Informed retirement choices", "Avoided irreversible mistakes", "Aligned income strategy"],
    href: "/services/retirement-counselling",
  },
  {
    title: "Financial Coaching",
    description:
      "Practical financial wellness for individuals and teams: budgeting, debt management, credit health, and savings habits.",
    icon: GraduationCap,
    features: ["Budget and cash flow", "Debt reduction", "Credit improvement"],
    outcomes: ["Lower financial stress", "Better money habits", "Stronger savings base"],
    href: "/services/financial-coaching",
  },
  {
    title: "Business Assurance",
    description:
      "Business-owner planning for buy-and-sell agreements, key person cover, valuation, contingent liability, and succession.",
    icon: Briefcase,
    features: ["Buy-and-sell structuring", "Key person cover", "Continuity planning"],
    outcomes: ["Business resilience", "Fair partner buyout logic", "Protected enterprise value"],
    href: "/services/business-assurance",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="divide-y divide-border border-y border-border" data-aos="fade-up">
          {services.map((service, index) => (
            <article key={service.title} className="grid gap-8 py-10 lg:grid-cols-[0.65fr_1fr_0.85fr] lg:gap-12">
              <div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  <service.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h2 className="mt-6 font-serif text-3xl font-semibold tracking-[-0.01em] text-foreground">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/75"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Scope</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Outcome</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.outcomes.map((outcome) => (
                    <span
                      key={outcome}
                      className="rounded-full border border-border bg-muted/35 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
