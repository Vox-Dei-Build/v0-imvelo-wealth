export function BrandStoryBlock() {
  return (
    <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Etymology */}
          <div data-aos="fade-right">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Our name</p>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-serif text-5xl font-bold text-foreground">Imvelo Wealth</span>
              <span className="text-muted-foreground text-sm italic">/ im·ve·lo /</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-semibold text-foreground">isiXhosa</span> — to bring forth
            </p>
            <div className="my-4 h-px bg-border/50" aria-hidden="true" />
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Rooted in Xhosa, the name means “to bring forth” — a reflection of helping clients nurture, grow,
              and preserve wealth.
            </p>
          </div>

          {/* Philosophy */}
          <div className="space-y-5" data-aos="fade-left" data-aos-delay="120">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Our philosophy</p>
            <h2 className="font-serif text-2xl font-bold text-foreground leading-snug text-balance">
              Purpose-driven wealth management, built around financial empowerment.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Founded in 2018, Imvelo Wealth Solutions is a Black female-owned wealth management practice based in
              Sandton, Johannesburg.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              The firm was established by Siba Njoba, CFP® and Palesa Tlholoe, CFP®, with a focus on holistic
              financial planning, advisory services, empowerment, resilience, and inclusion.
            </p>
            <p className="text-sm text-muted-foreground border-l-2 border-accent pl-4 italic">
              “Our role is to be a trusted partner on every client’s financial journey.”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
