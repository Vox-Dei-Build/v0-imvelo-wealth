import { Shield, TrendingUp, Users, Award } from "lucide-react"

const features = [
  {
    name: "Advice-Driven Approach",
    description:
      "Personalized financial strategies tailored to your unique goals, risk tolerance, and family circumstances.",
    icon: Users,
  },
  {
    name: "Proven Track Record",
    description: "Over 15 years of helping South African families build and preserve wealth through market cycles.",
    icon: TrendingUp,
  },
  {
    name: "Licensed & Regulated",
    description: "Fully licensed FSP with FSCA oversight, ensuring the highest standards of professional conduct.",
    icon: Shield,
  },
  {
    name: "Generational Focus",
    description: "Strategies designed not just for today, but to create lasting wealth for future generations.",
    icon: Award,
  },
]

export function ValueProposition() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose Imvelo Wealth Solutions?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're not just financial advisors – we're your partners in building lasting wealth. Here's what sets us
            apart from other wealth management firms.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <feature.icon className="h-5 w-5 flex-none text-accent" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
