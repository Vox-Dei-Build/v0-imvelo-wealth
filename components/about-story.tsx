import Image from "next/image"

const chapters = [
  {
    number: "01",
    heading: "A name with intention",
    body: "In isiXhosa, Imvelo speaks to bringing forth. It captures the work of helping people turn plans and possibilities into generational progress.",
  },
  {
    number: "02",
    heading: "A practice with purpose",
    body: "Palesa Tlholoe, CFP® and Siba Njoba, CFP® founded Imvelo in Johannesburg in 2018 with education at the centre of every client relationship.",
  },
  {
    number: "03",
    heading: "A promise that stays personal",
    body: "Every plan begins with a client’s life, responsibilities and goals. The advice is clear, documented and built to keep serving them as life changes.",
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
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#EAF4F6] lg:grid-cols-[0.82fr_1.18fr]" data-aos="fade-up">
          <figure className="relative min-h-[32rem] overflow-hidden lg:min-h-full">
            <Image
              src="/videos/hero-sunlight-leaves-poster.jpg"
              alt="Sunlight moving through green leaves"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#032A33]/88 via-[#005166]/15 to-transparent" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-10 lg:p-12">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#8FD3DD]">The meaning of our name</p>
              <p className="mt-4 text-5xl font-medium tracking-[-0.05em] sm:text-6xl">Imvelo</p>
              <p className="mt-3 text-xl font-medium text-white/78">To bring forth.</p>
            </figcaption>
          </figure>

          <div className="p-8 sm:p-12 lg:p-16">
            <p className="section-kicker text-[#307283]">Our story</p>
            <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-[#005166] sm:text-5xl">
              Rooted in purpose. Grown through trust.
            </h2>

            <div className="mt-10 border-y border-[#BCD5DA]">
              {chapters.map((chapter) => (
                <article key={chapter.number} className="grid gap-4 border-b border-[#BCD5DA] py-7 last:border-b-0 sm:grid-cols-[3.5rem_1fr] sm:py-8">
                  <span className="text-sm font-bold tracking-[0.16em] text-[#36859A]">{chapter.number}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#005166]">{chapter.heading}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#536A70]">{chapter.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-[2rem] bg-[#005166]" data-aos="fade-up">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <figure className="flex flex-col justify-center bg-[#032A33]">
              <video
                src="/videos/hero-family-life.mp4"
                poster="/videos/hero-family-life-poster.jpg"
                controls
                playsInline
                muted
                preload="none"
                width={1280}
                height={720}
                aria-label="A silent film of a family dancing together outdoors"
                className="aspect-video w-full object-contain"
              />
              <figcaption className="px-6 py-5 text-center text-sm text-white/80">
                Time together, across generations.
              </figcaption>
            </figure>
            <div className="flex flex-col justify-center p-8 text-white sm:p-12 lg:p-14">
              <p className="section-kicker text-[#8FD3DD]">Who we walk with</p>
              <h3 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
                Advice for every season of a financial life.
              </h3>
              <ul className="mt-9 border-y border-white/18">
                {clients.map((client) => (
                  <li key={client} className="border-b border-white/18 py-4 text-sm font-semibold text-white/72 last:border-b-0">
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[#C8DDE1] pt-6 text-sm text-[#536A70] sm:flex-row sm:items-center sm:justify-between">
          <span>Bryanston East, Johannesburg</span>
          <span>Company registration 2018/195882/07 · FSP 49944</span>
        </div>
      </div>
    </section>
  )
}
