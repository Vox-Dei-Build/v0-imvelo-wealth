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
    engagement?: string[]
    pricing?: {
      initial: string
      ongoing: string
      included: string[]
    }
  }
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const engagementItems = service.engagement ?? service.pricing?.included ?? []

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Features */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What's Included</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A planning engagement should clarify the moving parts before specific recommendations are made.
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
              The process keeps discovery, advice, implementation, and review connected.
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

        {/* Engagement */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Engagement Scope
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Fees and service levels should be confirmed in the advice proposal after discovery.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Typical Scope:</h3>
                    <ul className="space-y-2">
                      {engagementItems.map((item) => (
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
