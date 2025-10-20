import { CheckCircle } from "lucide-react"

const steps = [
  {
    id: "01",
    name: "Initial Consultation",
    description:
      "We start with a comprehensive discussion about your financial goals, current situation, and future aspirations.",
    details: ["Free 60-minute consultation", "Goal assessment", "Risk profiling", "Initial recommendations"],
  },
  {
    id: "02",
    name: "Strategy Development",
    description: "Our team creates a personalized financial plan tailored to your unique circumstances and objectives.",
    details: [
      "Detailed financial analysis",
      "Custom strategy creation",
      "Investment recommendations",
      "Risk management plan",
    ],
  },
  {
    id: "03",
    name: "Implementation",
    description: "We help you implement your financial plan with ongoing support and guidance every step of the way.",
    details: ["Account setup assistance", "Investment execution", "Insurance arrangements", "Legal documentation"],
  },
  {
    id: "04",
    name: "Ongoing Management",
    description: "Regular reviews and adjustments ensure your plan stays on track as your life and goals evolve.",
    details: ["Quarterly reviews", "Performance monitoring", "Strategy adjustments", "24/7 support access"],
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Proven Process
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We follow a structured approach to ensure your financial success. Here's what you can expect when working
            with our team.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-y-16 lg:max-w-none lg:grid-cols-4 lg:gap-x-8">
            {steps.map((step, stepIdx) => (
              <div key={step.name} className="relative">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-lg">
                    {step.id}
                  </div>
                  {stepIdx !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-12 w-full h-0.5 bg-border"></div>
                  )}
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold leading-8 text-foreground">{step.name}</h3>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">{step.description}</p>
                  <ul className="mt-4 space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="mr-2 h-4 w-4 text-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
