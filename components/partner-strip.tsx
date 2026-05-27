const partners = [
  { name: "Allan Gray", href: "https://www.allangray.co.za" },
  { name: "Ninety One", href: "https://ninetyone.com/en/south-africa" },
  { name: "STANLIB", href: "https://www.stanlib.com" },
  { name: "Sanlam", href: "https://www.sanlam.co.za" },
  { name: "Old Mutual", href: "https://www.oldmutual.co.za" },
  { name: "Discovery", href: "https://www.discovery.co.za" },
  { name: "Momentum", href: "https://www.momentum.co.za" },
  { name: "Hollard", href: "https://www.hollard.co.za" },
  { name: "PPS", href: "https://www.pps.co.za" },
]

export function PartnerStrip() {
  const marquee = [...partners, ...partners]

  return (
    <section id="provider-access" className="overflow-hidden border-y border-border/50 bg-background py-16" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase text-primary">Provider access</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              A wider provider universe, kept in service of the plan.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Linked references are included for internal review. Final logo usage and public wording should be approved
            before launch.
          </p>
        </div>

        <div className="relative border-y border-border/70">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
          <div className="flex overflow-hidden">
            <div className="flex min-w-max motion-safe:animate-partner-marquee hover:[animation-play-state:paused]">
              {marquee.map((partner, index) => (
                <a
                  key={`${partner.name}-${index}`}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-24 min-w-52 items-center justify-center border-r border-border/70 px-10 transition-colors hover:bg-muted/35"
                  aria-label={`Open ${partner.name}`}
                >
                  <span className="font-serif text-2xl font-semibold text-foreground/70 transition-colors group-hover:text-primary">
                    {partner.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
