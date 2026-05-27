import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const team = [
  {
    name: "Palesa Tlholoe",
    role: "Director / Financial Planner",
    credentials: ["CFP®"],
    image: "/palesa-tlholoe.jpeg",
  },
  {
    name: "Siba Njoba",
    role: "Director / Financial Planner",
    credentials: ["CFP®"],
    image: "/siba-njoba.jpg",
  },
]

export function TeamSection() {
  return (
    <section className="bg-muted/35 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.35fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Team</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Leadership that is visible and qualified.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The final public profile pack is still pending. This version keeps the leadership presence focused on
              confirmed names, headshots, and professional designations.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
            {team.map((person) => (
              <article key={person.name} className="bg-background">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{person.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
                    </div>
                    <div className="flex gap-2">
                      {person.credentials.map((credential) => (
                        <Badge key={credential} variant="secondary" className="rounded-md">
                          {credential}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
