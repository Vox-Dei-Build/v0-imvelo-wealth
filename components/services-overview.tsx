import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Briefcase, FileText, GraduationCap, PiggyBank, RefreshCw, Users } from "lucide-react"

const services = [
  {
    title: "Financial Planning",
    description: "Investments, protection and retirement in one plan.",
    icon: PiggyBank,
    href: "/services/financial-planning",
  },
  {
    title: "Estate Planning",
    description: "Wills, liquidity and wealth transfer.",
    icon: FileText,
    href: "/services/estate-planning",
  },
  {
    title: "Employee Benefits",
    description: "Benefits people can understand and value.",
    icon: Users,
    href: "/services/employee-benefits",
  },
  {
    title: "Retirement Benefit Counselling",
    description: "Clarity before an irreversible decision.",
    icon: RefreshCw,
    href: "/services/retirement-counselling",
  },
  {
    title: "Financial Coaching",
    description: "Practical help for everyday money decisions.",
    icon: GraduationCap,
    href: "/services/financial-coaching",
  },
  {
    title: "Business Assurance",
    description: "Protection for owners, partners and the enterprise.",
    icon: Briefcase,
    href: "/services/business-assurance",
  },
]

export function ServicesOverview() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between" data-aos="fade-up">
          <div className="max-w-3xl">
            <p className="section-kicker text-[#307283]">What we do</p>
            <h2 className="mt-6 text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-[#005166] sm:text-5xl">
              Planning for life, work, family and what comes next.
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#005166]"
          >
            View all services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-[#C8DDE1] bg-[#F7FAFB] lg:grid-cols-[0.82fr_1.18fr]" data-aos="fade-up" data-aos-delay="100">
          <figure className="relative min-h-[31rem] overflow-hidden lg:min-h-full">
            <Image
              src="/imagery/services-retirement.jpg"
              alt="A couple enjoying everyday life together at home"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              quality={90}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#032A33]/80 via-[#032A33]/5 to-transparent" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-10">
              <p className="max-w-lg text-2xl font-medium leading-snug tracking-[-0.03em] sm:text-3xl">
                One relationship. A plan that moves with your life.
              </p>
            </figcaption>
          </figure>

          <div className="grid sm:grid-cols-2">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group flex min-h-[13rem] flex-col justify-between border-[#C8DDE1] bg-white p-7 transition-colors hover:bg-[#EAF4F6] sm:p-8 ${
                  index % 2 === 0 ? "sm:border-r" : ""
                } ${index < 4 ? "border-b" : ""}`}
              >
                <div className="flex items-start justify-between gap-5">
                  <service.icon className="h-5 w-5 text-[#307283]" strokeWidth={1.6} aria-hidden="true" />
                  <ArrowUpRight className="h-4 w-4 text-[#307283] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#005166]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#536A70]">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
