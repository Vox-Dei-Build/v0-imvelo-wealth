import Image from "next/image"

const partners = [
  {
    name: "Ninety One",
    href: "https://ninetyone.com/en/south-africa",
    logo: "/partners/ninety-one.svg",
    source: "Public logo database fallback",
  },
  { name: "Liberty", href: "https://www.liberty.co.za", logo: "/partners/liberty.png", tone: "dark", source: "liberty.co.za" },
  { name: "Sanlam", href: "https://www.sanlam.co.za", logo: "/partners/sanlam.svg", source: "sanlam.co.za" },
  { name: "PPS", href: "https://www.pps.co.za", logo: "/partners/pps.png", tone: "dark", source: "pps.co.za" },
  {
    name: "Momentum",
    href: "https://www.momentum.co.za",
    logo: "/partners/momentum.svg",
    source: "momentum.co.za",
  },
  {
    name: "Discovery",
    href: "https://www.discovery.co.za",
    logo: "/partners/discovery.png",
    source: "discovery.co.za",
  },
  {
    name: "Allan Gray",
    href: "https://www.allangray.co.za",
    logo: "/partners/allan-gray.svg",
    source: "allangray.co.za",
  },
  {
    name: "Old Mutual",
    href: "https://www.oldmutual.co.za",
    logo: "/partners/old-mutual.svg",
    source: "Public logo database fallback",
  },
  { name: "STANLIB", href: "https://www.stanlib.com", logo: "/partners/stanlib.svg", tone: "dark", source: "stanlib.com" },
  { name: "Hollard", href: "https://www.hollard.co.za", logo: "/partners/hollard.svg", tone: "dark", source: "hollard.co.za" },
]

export function PartnerStrip() {
  return (
    <section id="provider-access" className="overflow-hidden border-y border-border/50 bg-background py-16" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Partners</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Access to established product and platform providers.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Clickable provider references for internal review. Public use should be cleared with each provider before
            launch.
          </p>
        </div>

        <div className="overflow-x-auto rounded-md border border-border bg-border shadow-sm">
          <div className="grid w-max auto-cols-[12rem] grid-flow-col gap-px md:w-full md:auto-cols-auto md:grid-flow-row md:grid-cols-5">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`${partner.name} logo source: ${partner.source}`}
                className={
                  partner.tone === "dark"
                    ? "group flex h-36 flex-col items-center justify-center gap-4 bg-[#303843] px-6 text-center transition-colors hover:bg-[#26303a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    : "group flex h-36 flex-col items-center justify-center gap-4 bg-white px-6 text-center transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                }
              >
                <span className="flex h-16 w-full items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={190}
                    height={88}
                    sizes="190px"
                    className="max-h-16 w-auto max-w-[9.5rem] object-contain"
                  />
                </span>
                <span
                  className={
                    partner.tone === "dark"
                      ? "font-serif text-base font-semibold leading-none text-white"
                      : "font-serif text-base font-semibold leading-none text-foreground"
                  }
                >
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        <p className="mt-4 max-w-3xl text-xs leading-5 text-muted-foreground">
          Logos are local internal-review assets pulled from public provider web sources where accessible. Ninety One and
          Old Mutual are temporary public-logo fallbacks pending approved final files.
        </p>
      </div>
    </section>
  )
}
