import Image from "next/image"

// `inverted` marks white/light logo artwork that must be flipped dark to sit
// on the white marquee. All logos render monochrome for a uniform strip.
const partners = [
  { name: "Ninety One", logo: "/partners/ninety-one.svg" },
  { name: "Liberty", logo: "/partners/liberty.png", inverted: true },
  { name: "Sanlam", logo: "/partners/sanlam.svg" },
  { name: "PPS", logo: "/partners/pps.png", inverted: true },
  { name: "Momentum", logo: "/partners/momentum.svg" },
  { name: "Discovery", logo: "/partners/discovery.png" },
  { name: "Allan Gray", logo: "/partners/allan-gray.svg" },
  { name: "Old Mutual", logo: "/partners/old-mutual.svg" },
  { name: "STANLIB", logo: "/partners/stanlib.svg", inverted: true },
  { name: "Hollard", logo: "/partners/hollard.svg", inverted: true },
]

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex w-max shrink-0 items-center gap-16 pr-16 sm:gap-24 sm:pr-24"
    >
      {partners.map((partner) => (
        <li key={partner.name} className="flex items-center">
          <Image
            src={partner.logo}
            alt={ariaHidden ? "" : `${partner.name} logo`}
            width={190}
            height={88}
            sizes="160px"
            className={`h-10 w-auto max-w-[9.5rem] object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 sm:h-12 ${
              partner.inverted ? "invert" : ""
            }`}
          />
        </li>
      ))}
    </ul>
  )
}

export function PartnerStrip() {
  return (
    <section id="provider-access" className="border-y border-[#D0E1E4] bg-white py-14 sm:py-16" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#526A70]">
          Access to many of South Africa’s established product and platform providers
        </p>
      </div>

      <div
        className="group relative mt-9 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex w-max animate-partner-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <LogoRow />
          <LogoRow ariaHidden />
        </div>
      </div>
    </section>
  )
}
