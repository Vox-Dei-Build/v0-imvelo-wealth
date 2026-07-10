import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Check,
  FileText,
  GraduationCap,
  PiggyBank,
  RefreshCw,
  Users,
} from "lucide-react"

const services = [
  {
    title: "Financial Planning",
    promise: "See the whole picture before making the next decision.",
    description:
      "A goals-based plan covering investments, protection, retirement, tax awareness, preservation funds, and education funding.",
    icon: PiggyBank,
    features: ["Life, disability, and critical illness", "Investment and savings strategy", "Retirement annuities"],
    outcomes: ["Clear planning roadmap", "Coordinated life-stage decisions", "Ongoing review discipline"],
    href: "/services/financial-planning",
    image: "/imagery/services-family.jpg",
    imageAlt: "A mother spending time with her children at home",
  },
  {
    title: "Estate Planning",
    promise: "Make your intentions easier for the people you leave behind.",
    description:
      "Wills, trust structures, beneficiary nominations, estate duty exposure, fiduciary coordination, and estate liquidity.",
    icon: FileText,
    features: ["Will drafting and review", "Trust considerations", "Executor coordination"],
    outcomes: ["Cleaner wealth transfer", "Reduced administration friction", "Family continuity"],
    href: "/services/estate-planning",
    image: null,
    imageAlt: "",
  },
  {
    title: "Employee Benefits",
    promise: "Turn benefits into something people understand and value.",
    description:
      "Pension and provident funds, group retirement plans, group risk benefits, group investment plans, and employee wellness workshops.",
    icon: Users,
    features: ["Pension and provident funds", "Group risk benefits", "Employee wellness workshops"],
    outcomes: ["Clear employee value", "Better benefit understanding", "Compliant benefit design"],
    href: "/services/employee-benefits",
    image: null,
    imageAlt: "",
  },
  {
    title: "Retirement Benefit Counselling",
    promise: "Make an irreversible decision with clarity and confidence.",
    description:
      "Independent guidance on preservation funds, living and life annuities, tax, fees, nominations, and two-pot decisions.",
    icon: RefreshCw,
    features: ["Annuity analysis", "Preservation options", "Tax modelling"],
    outcomes: ["Informed retirement choices", "Avoided irreversible mistakes", "Aligned income strategy"],
    href: "/services/retirement-counselling",
    image: "/imagery/services-retirement.jpg",
    imageAlt: "A couple enjoying everyday life together at home",
  },
  {
    title: "Financial Coaching",
    promise: "Make everyday money feel more manageable.",
    description:
      "Practical financial wellness for individuals and teams: budgeting, debt management, credit health, and savings habits.",
    icon: GraduationCap,
    features: ["Budget and cash flow", "Debt reduction", "Credit improvement"],
    outcomes: ["Lower financial stress", "Better money habits", "Stronger savings base"],
    href: "/services/financial-coaching",
    image: null,
    imageAlt: "",
  },
  {
    title: "Business Assurance",
    promise: "Protect the enterprise behind the family.",
    description:
      "Business-owner planning for buy and sell cover, key man insurance, contingent liability, and preferred compensation.",
    icon: Briefcase,
    features: ["Buy and sell", "Key man insurance", "Contingent liability"],
    outcomes: ["Business resilience", "Fair partner buyout logic", "Protected enterprise value"],
    href: "/services/business-assurance",
    image: "/imagery/services-business.jpg",
    imageAlt: "Three women discussing plans together",
  },
]

export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#F7FAFB] py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="grid items-start gap-14 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20 xl:gap-28">
          <div className="lg:sticky lg:top-36" data-aos="fade-up">
            <p className="section-kicker text-[#307283]">One connected view</p>
            <h2 className="mt-6 max-w-lg text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-[#005166] sm:text-5xl">
              Six areas. One financial life.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#536A70] sm:text-lg">
              One decision often affects several others. We help you see the connections.
            </p>

            <div className="mt-9 border-l-2 border-[#36859A] pl-6">
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#307283] transition-colors hover:text-[#005166]"
              >
                Not sure where to start?
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-5" data-aos="fade-up" data-aos-delay="100">
            {services.map((service, index) => {
              const dark = index === 0 || index === 3

              return (
                <article
                  key={service.title}
                  className={`group relative overflow-hidden rounded-[1.75rem] border p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-9 lg:p-10 ${
                    dark
                      ? "border-[#005166] bg-[#005166] text-white shadow-[0_24px_70px_rgba(0,81,102,0.18)]"
                      : "border-[#C8DDE1] bg-white text-[#005166] shadow-[0_18px_55px_rgba(0,81,102,0.07)]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-bold tracking-[0.18em] ${dark ? "text-[#8FD3DD]" : "text-[#36859A]"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className={`h-px w-10 ${dark ? "bg-white/25" : "bg-[#C8DDE1]"}`} aria-hidden="true" />
                      <service.icon className={`h-5 w-5 ${dark ? "text-[#8FD3DD]" : "text-[#307283]"}`} strokeWidth={1.6} aria-hidden="true" />
                    </div>
                    <Link
                      href={service.href}
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        dark
                          ? "border-white/25 text-white hover:border-white hover:bg-white hover:text-[#005166]"
                          : "border-[#C8DDE1] text-[#005166] hover:border-[#005166] hover:bg-[#005166] hover:text-white"
                      }`}
                      aria-label={`Explore ${service.title}`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>

                  {service.image ? (
                    <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[1.25rem]">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 56vw"
                        quality={88}
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      <div
                        className={`absolute inset-0 ${dark ? "bg-[#005166]/10" : "bg-[#005166]/5"}`}
                        aria-hidden="true"
                      />
                    </div>
                  ) : null}

                  <h3 className={`${service.image ? "mt-7" : "mt-8"} max-w-2xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl`}>
                    {service.title}
                  </h3>
                  <p className={`mt-4 max-w-2xl text-lg font-medium leading-8 ${dark ? "text-white" : "text-[#17323A]"}`}>
                    {service.promise}
                  </p>

                  <div className={`mt-8 border-t pt-7 ${dark ? "border-white/18" : "border-[#C8DDE1]"}`}>
                    <p className={`text-[0.65rem] font-bold uppercase tracking-[0.2em] ${dark ? "text-[#8FD3DD]" : "text-[#307283]"}`}>
                      Includes
                    </p>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                      {service.features.map((feature) => (
                        <li key={feature} className={`flex items-start gap-3 text-sm leading-6 ${dark ? "text-white/78" : "text-[#455E65]"}`}>
                          <Check className={`mt-1 h-4 w-4 shrink-0 ${dark ? "text-[#8FD3DD]" : "text-[#36859A]"}`} aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
