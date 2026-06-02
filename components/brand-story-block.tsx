export function BrandStoryBlock() {
  return (
    <section className="border-y border-border/40 bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
          {/* Etymology */}
          <div data-aos="fade-up">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Our name</p>
            <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <span className="font-serif text-5xl font-bold leading-none text-foreground sm:text-6xl">
                Imvelo Wealth
              </span>
              <span className="text-muted-foreground text-sm italic">/ im·ve·lo /</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-semibold text-foreground">isiXhosa</span> — to bring forth
            </p>
            <div className="my-6 h-px bg-border/50" aria-hidden="true" />
            <p className="max-w-lg text-base leading-8 text-muted-foreground">
              Rooted in Xhosa, the name means “to bring forth” — a reflection of helping clients nurture, grow,
              and preserve wealth.
            </p>
          </div>

          {/* Philosophy */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="120">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Our philosophy</p>
            <h2 className="max-w-2xl font-serif text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl">
              Purpose-driven wealth management, built around financial empowerment.
            </h2>
            <p className="max-w-xl text-base leading-8 text-muted-foreground text-pretty">
              Founded in 2018, Imvelo Wealth Solutions is a Black female-owned wealth management practice based in
              Sandton, Johannesburg.
            </p>
            <p className="max-w-xl text-base leading-8 text-muted-foreground text-pretty">
              The firm was established by Siba Njoba, CFP® and Palesa Tlholoe, CFP®, with a focus on holistic
              financial planning, advisory services, empowerment, resilience, and inclusion.
            </p>
            <p className="border-l-2 border-accent pl-5 text-sm leading-7 text-muted-foreground italic">
              “Our role is to be a trusted partner on every client’s financial journey.”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
