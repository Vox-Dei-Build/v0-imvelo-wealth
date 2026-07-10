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
    <section className="bg-[#005166] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.42fr] lg:gap-24">
          <div data-aos="fade-up">
            <p className="section-kicker text-[#8FD3DD]">How it feels to work with us</p>
            <h2 className="mt-6 text-4xl font-medium leading-[1.1] tracking-[-0.035em] text-white sm:text-5xl">
              Clarity, without the financial theatre.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-white/62">
              No jargon-filled presentation. No pressure to decide in the room. Just a considered process that helps
              you understand where you are, what matters next, and why.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step.name} className="border-t border-white/18 pt-6" data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="font-serif text-4xl text-[#8FD3DD]">{step.id}</div>
                <h3 className="mt-7 text-2xl font-medium tracking-[-0.025em] text-white">{step.name}</h3>
                <p className="mt-4 text-sm leading-7 text-white/58">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
