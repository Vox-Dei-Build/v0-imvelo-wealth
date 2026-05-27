export function BrandStoryBlock() {
  return (
    <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Etymology */}
          <div data-aos="fade-right">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Our name</p>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif text-5xl font-bold text-foreground">Imvelo</span>
              <span className="text-muted-foreground text-sm italic">/ im·ve·lo /</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-semibold text-foreground">isiZulu</span> — noun
            </p>
            <div className="my-4 h-px bg-border/50" aria-hidden="true" />
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-semibold text-foreground shrink-0">1.</span>
                <span>
                  <span className="italic">Nature</span>; the natural order of things — that which grows
                  according to its own rhythm, unforced and enduring.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-foreground shrink-0">2.</span>
                <span>
                  <span className="italic">Origin</span>; one's innate character or essence — the foundation from
                  which everything else grows.
                </span>
              </li>
            </ol>
          </div>

          {/* Philosophy */}
          <div className="space-y-5" data-aos="fade-left" data-aos-delay="120">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Our philosophy</p>
            <h2 className="font-serif text-2xl font-bold text-foreground leading-snug text-balance">
              Wealth that grows naturally from who you are and where you want to go.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              We chose the name <em>Imvelo</em> because the best financial plans are not imposed on your life —
              they grow from it. A plan rooted in your values, your family, your business, and your timeline
              will outlast any product cycle or market fluctuation.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              South Africa's financial landscape is one of the most complex in the world — multi-currency
              portfolios, offshore allowances, estate duty, POPIA compliance, and a fast-changing regulatory
              environment. We translate that complexity into a clear, honest picture of what you have, what
              you need, and how to get there — independently.
            </p>
            <p className="text-sm text-muted-foreground border-l-2 border-accent pl-4 italic">
              "We are not measured by how much we grow your wealth, but by how well it serves the life you
              are building."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
