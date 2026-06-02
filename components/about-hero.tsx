export function AboutHero() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">About Imvelo Wealth</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Financial allies for long-term prosperity.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Imvelo Wealth Solutions is a purpose-driven wealth management practice based in Sandton, Johannesburg.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
          <div className="bg-background p-7">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">FSP Licence</div>
            <div className="mt-4 text-2xl font-semibold text-foreground">49944</div>
          </div>
          <div className="bg-background p-7">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Company Reg.</div>
            <div className="mt-4 text-2xl font-semibold text-foreground">2018/195882/07</div>
          </div>
          <div className="bg-background p-7">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Founded</div>
            <div className="mt-4 text-2xl font-semibold text-foreground">2018</div>
          </div>
        </div>
      </div>
    </section>
  )
}
