import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServiceDetailHeroProps {
  service: {
    title: string
    subtitle: string
    description: string
    icon: React.ComponentType<{ className?: string }>
  }
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const Icon = service.icon

  return (
    <section className="bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10">
              <Icon className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{service.title}</h1>
          <p className="mt-4 text-xl text-accent font-medium">{service.subtitle}</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{service.description}</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/consultation">Schedule Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
