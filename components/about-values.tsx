import { Heart, Shield, Users, Award } from "lucide-react"

const values = [
  {
    name: "Client-First Approach",
    description: "Every decision we make is guided by what's best for our clients and their families.",
    icon: Heart,
  },
  {
    name: "Integrity & Trust",
    description: "We operate with complete transparency and hold ourselves to the highest ethical standards.",
    icon: Shield,
  },
  {
    name: "Long-term Relationships",
    description: "We build lasting partnerships that span generations, not just transactions.",
    icon: Users,
  },
  {
    name: "Excellence in Service",
    description: "We continuously strive to exceed expectations and deliver exceptional results.",
    icon: Award,
  },
]

export function AboutValues() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            These core values guide everything we do and shape how we serve our clients.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col items-center text-center">
                <dt className="flex flex-col items-center gap-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <value.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <div className="text-base font-semibold leading-7 text-foreground">{value.name}</div>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
