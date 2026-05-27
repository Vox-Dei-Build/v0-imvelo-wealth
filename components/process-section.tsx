const steps = [
  {
    id: "01",
    name: "Discover",
    description: "Clarify the client’s position, obligations, goals, risk appetite, and planning priorities.",
  },
  {
    id: "02",
    name: "Design",
    description: "Build a structured plan that connects cash flow, investment, risk, retirement, estate, and business needs.",
  },
  {
    id: "03",
    name: "Implement",
    description: "Coordinate the chosen actions, documentation, provider interactions, and advice records.",
  },
  {
    id: "04",
    name: "Review",
    description: "Keep the plan current as legislation, markets, family circumstances, and business realities change.",
  },
]

export function ProcessSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20">
          <div data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Method</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              A calmer way to make consequential money decisions.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step.name} className="border-t border-border pt-6" data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="font-mono text-sm text-primary">{step.id}</div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{step.name}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
