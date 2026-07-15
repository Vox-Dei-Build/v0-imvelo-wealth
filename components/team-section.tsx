import Image from "next/image"

// Per client direction: leadership only — the wider team is acknowledged in
// text without photos. Designations sit after the name (e.g. "…, CFP®").
const leadership = [
  {
    name: "Siba Njoba, CFP®",
    role: "Co-founder · Director & Wealth Manager",
    bio: "Siba walks clients through their biggest decisions with calm and clarity — from a first investment to a business changing hands.",
    image: "/team/siba-njoba-enhanced-v2.jpg",
  },
  {
    name: "Palesa Tlholoe, CFP®",
    role: "Co-founder · Director & Wealth Manager",
    bio: "Palesa believes a financial plan should read like a family’s story — she leads with listening, then builds the structure around what she hears.",
    image: "/team/palesa-tlholoe.jpeg",
  },
]

export function TeamSection() {
  return (
    <section className="bg-[#F7FAFB] py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <p className="section-kicker text-[#307283]">Leadership</p>
          <h2 className="mt-6 text-4xl font-medium tracking-[-0.035em] text-[#005166] sm:text-5xl">
            The two women behind Imvelo.
          </h2>
          <p className="mt-7 text-base leading-8 text-[#536A70] sm:text-lg">
            Certified Financial Planners, co-founders, and leaders who still believe the first responsibility of good
            advice is to listen.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2">
          {leadership.map((person, index) => (
            <article
              key={person.name}
              className="group overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_55px_rgba(0,81,102,0.1)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,81,102,0.14)]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative aspect-[4/4.8] overflow-hidden bg-[#D4E2E5]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  quality={95}
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#005166] sm:text-3xl">{person.name}</h3>
                <p className="mt-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#307283]">{person.role}</p>
                <p className="mt-5 text-sm leading-7 text-[#536A70] sm:text-base">{person.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-7 text-[#536A70] sm:text-base" data-aos="fade-up">
          Palesa and Siba are supported by a dedicated team across financial advisory, client service, paraplanning,
          and compliance — so every relationship has specialists behind it.
        </p>
      </div>
    </section>
  )
}
