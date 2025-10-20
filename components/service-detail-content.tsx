import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface ServiceDetailContentProps {
  service: {
    features: Array<{
      title: string
      description: string
      icon: React.ComponentType<{ className?: string }>
    }>
    process: string[]
    pricing: {
      initial: string
      ongoing: string
      included: string[]
    }
  }
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Features */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What's Included</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our comprehensive approach ensures every aspect of your financial life is optimized.
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {service.features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Process */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Process</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We follow a proven methodology to ensure your financial plan is comprehensive and actionable.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Investment & Pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Transparent pricing with no hidden fees. Your investment in professional financial planning.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Initial Planning Fee</h3>
                    <p className="text-2xl font-bold text-accent">{service.pricing.initial}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Ongoing Reviews</h3>
                    <p className="text-xl font-semibold text-foreground">{service.pricing.ongoing}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">What's Included:</h3>
                    <ul className="space-y-2">
                      {service.pricing.included.map((item) => (
                        <li key={item} className="flex items-center text-muted-foreground">
                          <CheckCircle className="mr-2 h-4 w-4 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
