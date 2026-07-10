import Image from "next/image"
import { FileText, ShieldCheck, Users } from "lucide-react"

const features = [
  {
    name: "People before products",
    description: "We understand the life, family, and business behind the numbers before discussing a solution.",
    icon: Users,
  },
  {
    name: "Advice you can trust",
    description: "Imvelo Wealth Solutions is an FSCA-licensed Financial Services Provider — FSP 49944.",
    icon: ShieldCheck,
  },
  {
    name: "Clarity at every step",
    description: "Plain language, visible governance, and a plan you can understand well enough to act on.",
    icon: FileText,
  },
]

export function ValueProposition() {
  return (
    <section className="overflow-hidden bg-[#EAF4F6] py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-24">
          <div data-aos="fade-up">
            <p className="section-kicker text-[#307283]">Why Imvelo</p>
            <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.1] tracking-[-0.035em] text-[#005166] sm:text-5xl">
              Wealth is not a number. It is what the number makes possible.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#455E65] sm:text-lg">
              Good planning should give you more than a portfolio. It should give you the freedom to make decisions,
              protect the people who depend on you, and move into the next chapter with confidence.
            </p>
          </div>

          <figure className="relative" data-aos="fade-up" data-aos-delay="120">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] bg-[#B8D0D5] shadow-[0_24px_70px_rgba(0,81,102,0.18)]">
              <Image
                src="/videos/hero-family-life-poster.jpg"
                alt="A family enjoying time together outdoors"
                fill
                sizes="(max-width: 1024px) 100vw, 760px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#064654]/65 via-transparent to-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-0 left-0 max-w-lg p-7 text-white sm:p-10">
                <p className="text-2xl font-medium leading-snug tracking-[-0.025em] sm:text-3xl">
                  “A plan should help your family live well now—and remain strong later.”
                </p>
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="mt-20 grid border-y border-[#BCD5DA] md:grid-cols-3" data-aos="fade-up">
          {features.map((feature, index) => (
            <article
              key={feature.name}
              className={`py-9 md:px-9 ${index > 0 ? "border-t border-[#BCD5DA] md:border-l md:border-t-0" : ""}`}
            >
              <feature.icon className="h-6 w-6 text-[#307283]" strokeWidth={1.6} aria-hidden="true" />
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-[#005166]">{feature.name}</h3>
              <p className="mt-3 text-sm leading-7 text-[#536A70]">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
