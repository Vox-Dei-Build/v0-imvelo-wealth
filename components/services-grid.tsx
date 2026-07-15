import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Briefcase, FileText, GraduationCap, PiggyBank, RefreshCw, Users } from "lucide-react"

const serviceGroups = [
  {
    eyebrow: "For you and your family",
    title: "Personal wealth",
    image: "/imagery/services-family.jpg",
    imageAlt: "A mother spending time with her children at home",
    dark: false,
    services: [
      {
        title: "Financial Planning",
        description: "Investments, protection, retirement and education in one plan.",
        icon: PiggyBank,
        href: "/services/financial-planning",
      },
      {
        title: "Estate Planning",
        description: "Wills, liquidity and structures that carry your intentions forward.",
        icon: FileText,
        href: "/services/estate-planning",
      },
      {
        title: "Retirement Benefit Counselling",
        description: "Clear guidance before you make an irreversible retirement choice.",
        icon: RefreshCw,
        href: "/services/retirement-counselling",
      },
    ],
  },
  {
    eyebrow: "For organisations and owners",
    title: "Business and people",
    image: "/imagery/services-business.jpg",
    imageAlt: "Three women discussing plans together",
    dark: true,
    services: [
      {
        title: "Employee Benefits",
        description: "Benefit structures employees can understand and value.",
        icon: Users,
        href: "/services/employee-benefits",
      },
      {
        title: "Financial Coaching",
        description: "Practical support for budgeting, debt and savings habits.",
        icon: GraduationCap,
        href: "/services/financial-coaching",
      },
      {
        title: "Business Assurance",
        description: "Cover that protects owners, partners and the enterprise.",
        icon: Briefcase,
        href: "/services/business-assurance",
      },
    ],
  },
]

export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#F7FAFB] py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <p className="section-kicker text-[#307283]">Choose where to begin</p>
          <h2 className="mt-6 text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-[#005166] sm:text-5xl">
            The overview stays simple. The detail is one click away.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {serviceGroups.map((group, index) => (
            <article
              key={group.title}
              className={`overflow-hidden rounded-[2rem] shadow-[0_22px_65px_rgba(0,81,102,0.1)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_30px_78px_rgba(0,81,102,0.14)] ${
                group.dark ? "bg-[#005166] text-white" : "border border-[#C8DDE1] bg-white text-[#005166]"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="relative h-72 overflow-hidden sm:h-80">
                <Image
                  src={group.image}
                  alt={group.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#032A33]/75 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#8FD3DD]">{group.eyebrow}</p>
                  <h3 className="mt-3 text-3xl font-medium tracking-[-0.035em] sm:text-4xl">{group.title}</h3>
                </div>
              </div>

              <div>
                {group.services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className={`group flex items-start gap-5 border-b p-7 transition-colors last:border-b-0 sm:p-8 ${
                      group.dark
                        ? "border-white/15 hover:bg-white/8"
                        : "border-[#C8DDE1] hover:bg-[#EAF4F6]"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                        group.dark ? "bg-white/10 text-[#8FD3DD]" : "bg-[#EAF4F6] text-[#307283]"
                      }`}
                    >
                      <service.icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-semibold tracking-[-0.02em]">{service.title}</span>
                      <span className={`mt-2 block text-sm leading-6 ${group.dark ? "text-white/68" : "text-[#536A70]"}`}>
                        {service.description}
                      </span>
                    </span>
                    <ArrowUpRight
                      className={`mt-1 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                        group.dark ? "text-[#8FD3DD]" : "text-[#307283]"
                      }`}
                    />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
