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
    description: "Pension and provident funds, group retirement plans, group risk benefits, and wellness workshops.",
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
    description: "Buy and sell cover, key man insurance, contingent liability, and preferred compensation.",
    icon: Briefcase,
    href: "/services/business-assurance",
  },
]

export function ServicesOverview() {
  return (
    <section className="bg-[#F7FAFB] py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="section-kicker text-[#307283]">What we help you do</p>
          <h2 className="mt-6 text-4xl font-medium leading-[1.1] tracking-[-0.035em] text-[#005166] sm:text-5xl">
            One life. One connected plan.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#536A70] sm:text-lg">
            Your investments, family, retirement, estate, and business do not live in separate boxes. We bring them
            into one clear view, then help you act on what matters first.
          </p>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-[2rem] border border-[#C8DDE1] md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="100">
          {services.map((service, index) => {
            const featured = index === 0
            const warm = index === 4
            return (
              <Link
                key={service.title}
                href={service.href}
                className={`group relative flex min-h-[18rem] flex-col justify-between border-[#C8DDE1] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-10 ${
                  featured
                    ? "bg-[#005166] text-white"
                    : warm
                      ? "bg-[#307283] text-white"
                      : "bg-white text-[#005166]"
                } ${index % 3 !== 2 ? "lg:border-r" : ""} ${index < 3 ? "border-b" : ""} ${index % 2 === 0 ? "md:border-r" : "md:border-r-0"}`}
              >
                <div className="flex items-start justify-between">
                  <span className={`text-xs font-bold tracking-[0.2em] ${featured || warm ? "text-white/60" : "text-[#536A70]"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <service.icon className={`h-6 w-6 ${featured || warm ? "text-[#8FD3DD]" : "text-[#307283]"}`} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl">{service.title}</h3>
                  <p className={`mt-4 text-sm leading-7 ${featured || warm ? "text-white/70" : "text-[#536A70]"}`}>
                    {service.description}
                  </p>
                  <span className={`mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] ${featured || warm ? "text-white" : "text-[#005166]"}`}>
                    Explore
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
