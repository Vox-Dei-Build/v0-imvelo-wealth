import Image from "next/image"

const chapters = [
  {
    number: "01",
    heading: "A name with intention",
    body: "In isiXhosa, Imvelo speaks to bringing forth—the way nature nurtures new life. It became the perfect expression of the work: helping people bring plans, possibilities, and generational progress into being.",
  },
  {
    number: "02",
    heading: "A practice with purpose",
    body: "In 2018, Palesa Tlholoe, CFP® and Siba Njoba, CFP® founded an independent planning practice in Sandton with education at its core. They wanted clients to understand their choices, not simply sign for them.",
  },
  {
    number: "03",
    heading: "A promise we still keep",
    body: "Every relationship begins with the client’s life cycle, responsibilities, and goals. The promise is personal, goals-based planning; fair treatment; and service that stays close long after implementation.",
  },
]

const clients = [
  "Professionals building momentum",
  "Families planning across generations",
  "People approaching or living in retirement",
  "Employers and business owners",
]

export function AboutStory() {
  return (
    <section className="bg-[#F7FAFB] py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.76fr_1.24fr] lg:gap-24">
          <div data-aos="fade-up">
            <p className="section-kicker text-[#307283]">Our story</p>
            <h2 className="mt-6 text-4xl font-medium leading-[1.1] tracking-[-0.035em] text-[#005166] sm:text-5xl">
              Rooted in purpose. Grown through trust.
            </h2>
            <p className="mt-8 text-base leading-8 text-[#536A70] sm:text-lg">
              Imvelo is not a story about financial products. It is a story about two planners who saw how much better
              advice could feel when education, empathy, and technical care sat at the same table.
            </p>
            <div className="mt-10 border-l border-[#36859A] pl-6">
              <p className="text-2xl font-medium leading-snug tracking-[-0.025em] text-[#005166] sm:text-3xl">
                “Our role is to be a trusted partner on every client’s financial journey.”
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#536A70]">The founders</p>
            </div>
          </div>

          <div className="border-y border-[#C8DDE1]" data-aos="fade-up" data-aos-delay="120">
            {chapters.map((chapter) => (
              <article key={chapter.number} className="grid gap-5 border-b border-[#C8DDE1] py-9 last:border-b-0 sm:grid-cols-[5rem_1fr] sm:py-11">
                <div className="font-serif text-4xl text-[#36859A]">{chapter.number}</div>
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.025em] text-[#005166]">{chapter.heading}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#536A70] sm:text-base sm:leading-8">{chapter.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mt-24 overflow-hidden rounded-[2rem] bg-[#005166]" data-aos="fade-up">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[28rem] lg:min-h-[38rem]">
              <Image
                src="/videos/hero-family-life-poster.jpg"
                alt="A family sharing a joyful moment outdoors"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#005166]/10" aria-hidden="true" />
            </div>
            <div className="flex flex-col justify-center p-8 text-white sm:p-12 lg:p-16">
              <p className="section-kicker text-[#8FD3DD]">Who we walk with</p>
              <h3 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">Advice for every season of a financial life.</h3>
              <ul className="mt-9 space-y-0 border-y border-white/18">
                {clients.map((client) => (
                  <li key={client} className="border-b border-white/18 py-4 text-sm font-semibold text-white/75 last:border-b-0">
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[#C8DDE1] pt-6 text-sm text-[#536A70] sm:flex-row sm:items-center sm:justify-between">
          <span>Based in Sandton, Johannesburg</span>
          <span>Company registration 2018/195882/07 · FSP 49944</span>
        </div>
      </div>
    </section>
  )
}
