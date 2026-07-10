import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const resources = [
  {
    title: "Two-Pot Retirement System Explained",
    category: "Retirement Benefit Counselling",
    href: "/resources/two-pot-retirement-system",
    image: "/videos/hero-family-life-poster.jpg",
  },
  {
    title: "Estate Duty in South Africa",
    category: "Estate Planning",
    href: "/resources/estate-duty-guide",
    image: "/videos/hero-generations-poster.jpg",
  },
  {
    title: "Offshore Allowances for South Africans",
    category: "Investment Planning",
    href: "/resources/offshore-allowances-south-africa",
    image: "/videos/hero-sunlight-leaves-poster.jpg",
  },
]

export function LatestResourcesSection() {
  return (
    <section className="bg-[#EAF4F6] py-24 sm:py-32" data-aos="fade-up">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker text-[#307283]">Ideas for clearer decisions</p>
            <h2 className="mt-6 text-4xl font-medium tracking-[-0.035em] text-[#005166] sm:text-5xl">
              Money, explained like a human.
            </h2>
          </div>
          <Link href="/resources" className="inline-flex items-center gap-2 border-b border-[#005166]/35 pb-2 text-sm font-bold text-[#005166]">
            View all resources
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.href} href={resource.href} className="group overflow-hidden rounded-[1.5rem] bg-white shadow-[0_14px_40px_rgba(0,81,102,0.08)] transition-transform duration-500 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={resource.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#005166]/12" aria-hidden="true" />
              </div>
              <div className="p-7 sm:p-8">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#307283]">{resource.category}</p>
                <h3 className="mt-4 min-h-16 text-2xl font-medium leading-tight tracking-[-0.025em] text-[#005166]">
                  {resource.title}
                </h3>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#455E65] transition-colors group-hover:text-[#307283]">
                  Read in plain language
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
