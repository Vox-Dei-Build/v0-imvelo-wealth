import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const leadership = [
  {
    name: "Palesa Tlholoe",
    role: "Director & Wealth Manager",
    credentials: ["CFP®"],
    image: "/team/palesa-tlholoe.jpeg",
  },
  {
    name: "Siba Njoba",
    role: "Director & Wealth Manager",
    credentials: ["CFP®"],
    image: "/team/siba-njoba.jpeg",
  },
]

const teams = [
  {
    group: "Financial Advisory Services",
    description: "Client-facing advice, planning conversations, and implementation support.",
    people: [
      {
        name: "Blendine Kika",
        role: "Financial Adviser",
        image: "/team/blendine-kika.jpeg",
      },
      {
        name: "Nicholas Minnie",
        role: "Financial Adviser",
        image: "/team/nicholas-minnie.jpeg",
      },
      {
        name: "Phakama Nyembe",
        role: "Financial Adviser",
        image: "/team/phakama-nyembe.jpeg",
      },
      {
        name: "Tshepang Ngobeni",
        role: "Financial Adviser",
        image: "/team/tshepang-ngobeni.jpeg",
      },
    ],
  },
  {
    group: "Client Support & Operations",
    description: "Service coordination, client administration, and planning preparation.",
    people: [
      {
        name: "Zanele Dube",
        role: "Client Service Consultant",
        image: "/team/zanele-dube.jpeg",
      },
      {
        name: "Valerie Mabalane",
        role: "Paraplanner",
        image: "/team/valerie-mabalane.jpeg",
      },
    ],
  },
  {
    group: "Risk & Compliance",
    description: "Fiduciary oversight and governance support for regulated advice.",
    people: [
      {
        name: "Lebogang Pooe",
        role: "Compliance and Fiduciary Consultant",
        image: "/team/lebogang-pooe.jpeg",
      },
    ],
  },
]

export function TeamSection() {
  return (
    <section className="bg-muted/35 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Team</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            A specialist team around every client relationship.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Imvelo Wealth combines director-led planning with dedicated advisory, operations, and compliance support.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-border bg-border lg:grid-cols-2">
          {leadership.map((person) => (
            <article key={person.name} className="grid bg-background sm:grid-cols-[0.82fr_1fr]">
              <div className="relative min-h-80 overflow-hidden bg-muted">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover"
                />
              </div>
              <div className="flex min-h-80 flex-col justify-end p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Leadership</p>
                <h3 className="mt-4 font-serif text-3xl font-semibold text-foreground">{person.name}</h3>
                <p className="mt-2 text-base text-muted-foreground">{person.role}</p>
                <div className="mt-6 flex gap-2">
                  {person.credentials.map((credential) => (
                    <Badge key={credential} variant="secondary" className="rounded-md">
                      {credential}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 space-y-10">
          {teams.map((team) => (
            <div key={team.group} className="grid gap-7 lg:grid-cols-[0.34fr_1fr] lg:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Practice Area</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground">{team.group}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{team.description}</p>
              </div>

              <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
                {team.people.map((person) => (
                  <article key={person.name} className="group bg-background">
                    <div className="relative aspect-[4/4.5] overflow-hidden bg-muted">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 260px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-serif text-xl font-semibold leading-7 text-foreground">{person.name}</h4>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{person.role}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
