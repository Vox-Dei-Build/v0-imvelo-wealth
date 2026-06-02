import Image from "next/image"

const partners = [
  {
    name: "Ninety One",
    href: "https://ninetyone.com/en/south-africa",
    logo: "/partners/ninety-one.svg",
  },
  { name: "Liberty", href: "https://www.liberty.co.za", logo: "/partners/liberty.png", tone: "dark" },
  { name: "Sanlam", href: "https://www.sanlam.co.za", logo: "/partners/sanlam.svg" },
  { name: "PPS", href: "https://www.pps.co.za", logo: "/partners/pps.png", tone: "dark" },
  {
    name: "Momentum",
    href: "https://www.momentum.co.za",
    logo: "/partners/momentum.svg",
  },
  {
    name: "Discovery",
    href: "https://www.discovery.co.za",
    logo: "/partners/discovery.png",
  },
  {
    name: "Allan Gray",
    href: "https://www.allangray.co.za",
    logo: "/partners/allan-gray.svg",
  },
  {
    name: "Old Mutual",
    href: "https://www.oldmutual.co.za",
    logo: "/partners/old-mutual.svg",
  },
  { name: "STANLIB", href: "https://www.stanlib.com", logo: "/partners/stanlib.svg", tone: "dark" },
  { name: "Hollard", href: "https://www.hollard.co.za", logo: "/partners/hollard.svg", tone: "dark" },
]

export function PartnerStrip() {
  return (
    <section
      id="provider-access"
      className="overflow-hidden border-y border-border/50 bg-background py-24 sm:py-32"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Partners</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Access to established product and platform providers.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-muted-foreground">
            A broad provider universe helps Imvelo Wealth structure advice around each client’s plan, not a single
            product shelf.
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
                aria-label={`Visit ${partner.name}`}
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
      </div>
    </section>
  )
}
