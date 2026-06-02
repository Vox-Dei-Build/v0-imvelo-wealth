import { BriefcaseBusiness, Landmark, Sprout, UsersRound } from "lucide-react"

const clientFocus = [
  {
    title: "Retirees",
    detail: "Planning for income, preservation, and the next chapter.",
    note: "55-75",
    icon: Landmark,
  },
  {
    title: "Working professionals",
    detail: "Structured advice for accumulation, protection, and life-stage decisions.",
    note: "25-55",
    icon: UsersRound,
  },
  {
    title: "Mid-career professionals",
    detail: "More deliberate planning as responsibilities, income, and complexity increase.",
    note: "30-55",
    icon: Sprout,
  },
  {
    title: "Employers and business owners",
    detail: "Employee benefits, business assurance, and planning for growing teams.",
    note: "Business clients",
    icon: BriefcaseBusiness,
  },
]

export function AboutStory() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Our Story</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            A purpose-driven wealth management practice.
          </h2>

          <div className="mt-10 space-y-6 text-base leading-8 text-muted-foreground">
            <p>
              The name <strong className="text-foreground">Imvelo</strong> is rooted in Xhosa and means “to bring
              forth.” It reflects the firm’s commitment to helping clients nurture, grow, and preserve wealth.
            </p>

            <p>
              Founded in 2018, Imvelo Wealth Solutions is a Black female-owned wealth management practice based in
              Sandton, Johannesburg. The firm provides holistic financial planning and advisory services to individuals,
              families, and businesses.
            </p>

            <p>
              The practice is led by{" "}
              <strong className="text-foreground">Palesa Tlholoe, CFP®</strong> and{" "}
              <strong className="text-foreground">Siba Njoba, CFP®</strong>, supported by a team across advisory,
              client support, operations, risk, and compliance.
            </p>

            <p>
              Their stated mission is to foster empowerment, resilience, and inclusion while placing clients’ interests
              at the forefront.
            </p>
          </div>

          <div className="mt-14 border-y border-border/60 py-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Client Focus</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground">Who Imvelo Wealth serves.</h3>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                Advice for individuals, families, professionals, and employers at meaningful financial decision points.
              </p>
            </div>

            <div className="mt-8 divide-y divide-border/60">
              {clientFocus.map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.title} className="grid gap-4 py-5 sm:grid-cols-[2rem_1fr_auto] sm:items-center">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <div>
                      <h4 className="font-serif text-xl font-semibold leading-7 text-foreground">{item.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.detail}</p>
                    </div>
                    <div className="w-fit rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {item.note}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-md border border-border bg-card p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">FSP</div>
              <div className="mt-3 text-2xl font-semibold text-foreground">49944</div>
            </div>
            <div className="rounded-md border border-border bg-card p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Directors</div>
              <div className="mt-3 text-2xl font-semibold text-foreground">CFP® led</div>
            </div>
            <div className="rounded-md border border-border bg-card p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Location</div>
              <div className="mt-3 text-2xl font-semibold text-foreground">Sandton</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
