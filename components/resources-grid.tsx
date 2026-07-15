import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Calendar, Clock } from "lucide-react"

const resources = [
  {
    slug: "two-pot-retirement-system",
    category: "Retirement Planning",
    title: "The Two-Pot System Explained: What Every South African Needs to Know",
    summary: "Understand the savings, retirement and vested pots before making a withdrawal.",
    readTime: "9 min read",
    date: "March 2025",
    image: "/resources/two-pot-retirement.jpg",
    imageAlt: "A retired couple reviewing a document together",
    featured: true,
  },
  {
    slug: "estate-duty-guide",
    category: "Estate Planning",
    title: "Estate Duty in South Africa: A Plain-Language Guide",
    summary: "What families need to know about duty, capital gains tax and estate liquidity.",
    readTime: "11 min read",
    date: "February 2025",
    image: "/resources/estate-duty.jpg",
    imageAlt: "A family standing together outside their home",
    featured: false,
  },
  {
    slug: "offshore-allowances-south-africa",
    category: "Tax Planning",
    title: "Offshore Allowances for South Africans",
    summary: "How the R1 million and R10 million annual allowances work in practice.",
    readTime: "8 min read",
    date: "January 2025",
    image: "/resources/offshore-allowances.jpg",
    imageAlt: "An aerial view of the Cape Town coastline",
    featured: false,
  },
  {
    slug: "regulation-28-retirement-portfolio",
    category: "Investment Strategy",
    title: "Understanding Regulation 28",
    summary: "The limits shaping equities, offshore assets and alternatives in retirement portfolios.",
    readTime: "7 min read",
    date: "December 2024",
    image: "/resources/regulation-28.jpg",
    imageAlt: "A team reviewing investment charts and financial data",
    featured: false,
  },
  {
    slug: "trusts-south-africa",
    category: "Family Wealth",
    title: "Trusts in South Africa: When They Make Sense",
    summary: "Where trusts still add value for protection, continuity and generational wealth.",
    readTime: "10 min read",
    date: "November 2024",
    image: "/resources/trusts-south-africa.jpg",
    imageAlt: "Four generations of a family spending time together",
    featured: false,
  },
  {
    slug: "emergency-fund-alternatives",
    category: "Financial Planning",
    title: "Why Your Emergency Fund Should Not Be in a Savings Account",
    summary: "Compare accessible alternatives that can work harder without sacrificing liquidity.",
    readTime: "6 min read",
    date: "October 2024",
    image: "/resources/emergency-fund.jpg",
    imageAlt: "A couple reviewing their household budget together",
    featured: false,
  },
]

function ArticleMeta({ date, readTime, light = false }: { date: string; readTime: string; light?: boolean }) {
  const colour = light ? "text-white/58" : "text-[#536A70]"

  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold ${colour}`}>
      <span className="flex items-center gap-1.5">
        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
        {date}
      </span>
      <span className="flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
        {readTime}
      </span>
    </div>
  )
}

export function ResourcesGrid() {
  const featuredResource = resources.find((resource) => resource.featured)
  const otherResources = resources.filter((resource) => !resource.featured)

  return (
    <section className="bg-[#F7FAFB] py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        {featuredResource ? (
          <article className="grid overflow-hidden rounded-[2rem] bg-[#005166] shadow-[0_24px_75px_rgba(0,81,102,0.16)] lg:grid-cols-[1.08fr_0.92fr]" data-aos="fade-up">
            <div className="relative min-h-[28rem] overflow-hidden lg:min-h-[38rem]">
              <Image
                src={featuredResource.image}
                alt={featuredResource.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                quality={90}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#005166]/8" aria-hidden="true" />
            </div>
            <div className="flex flex-col justify-center p-8 text-white sm:p-12 lg:p-14">
              <p className="section-kicker text-[#8FD3DD]">Featured guide · {featuredResource.category}</p>
              <h2 className="mt-6 text-3xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl">
                <Link href={`/resources/${featuredResource.slug}`} className="transition-colors hover:text-[#8FD3DD]">
                  {featuredResource.title}
                </Link>
              </h2>
              <p className="mt-6 text-base leading-8 text-white/68">{featuredResource.summary}</p>
              <div className="mt-7">
                <ArticleMeta date={featuredResource.date} readTime={featuredResource.readTime} light />
              </div>
              <Link
                href={`/resources/${featuredResource.slug}`}
                className="group mt-9 inline-flex w-fit items-center gap-2 text-sm font-bold text-white"
              >
                Read the guide
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </article>
        ) : null}

        <div className="mt-24" data-aos="fade-up">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker text-[#307283]">The latest thinking</p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] text-[#005166] sm:text-5xl">Guides for clearer decisions.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#536A70]">South African context, plain language and a practical next step.</p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {otherResources.map((resource, index) => (
              <article
                key={resource.slug}
                className="group flex overflow-hidden rounded-[1.6rem] border border-[#C8DDE1] bg-white shadow-[0_16px_48px_rgba(0,81,102,0.06)] transition-transform duration-500 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 80}
              >
                <Link href={`/resources/${resource.slug}`} className="flex w-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#D5E6E9]">
                    <Image
                      src={resource.image}
                      alt={resource.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={88}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#032A33]/30 to-transparent" aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#307283]">{resource.category}</p>
                    <h3 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.03em] text-[#005166]">{resource.title}</h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-[#536A70]">{resource.summary}</p>
                    <div className="mt-7 flex items-end justify-between gap-5 border-t border-[#D5E4E7] pt-5">
                      <ArticleMeta date={resource.date} readTime={resource.readTime} />
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-[#307283] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
