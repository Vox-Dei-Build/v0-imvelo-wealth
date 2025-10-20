import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Michael Thompson",
    role: "Founder & Senior Financial Advisor",
    credentials: ["CFP®", "CFA", "FSP License"],
    bio: "With over 20 years in financial services, Michael founded Imvelo with a vision to provide personalized wealth management to South African families. He specializes in estate planning and multi-generational wealth strategies.",
    image: "/professional-male-financial-advisor-headshot.jpg",
    email: "michael@imvelowealth.co.za",
    linkedin: "#",
    expertise: ["Estate Planning", "Investment Strategy", "Tax Planning"],
  },
  {
    name: "Sarah Ndlovu",
    role: "Senior Investment Advisor",
    credentials: ["CFA", "FSP License", "MBA Finance"],
    bio: "Sarah brings 15 years of investment management experience, having previously worked at major asset management firms. She leads our investment committee and specializes in portfolio construction.",
    image: "/female-financial-advisor-headshot.png",
    email: "sarah@imvelowealth.co.za",
    linkedin: "#",
    expertise: ["Portfolio Management", "Risk Assessment", "Asset Allocation"],
  },
  {
    name: "David van der Merwe",
    role: "Financial Planning Specialist",
    credentials: ["CFP®", "FSP License", "BCom Honours"],
    bio: "David focuses on comprehensive financial planning for young professionals and growing families. His expertise in cash flow planning and goal-based strategies helps clients achieve their dreams.",
    image: "/professional-male-financial-planner-headshot.jpg",
    email: "david@imvelowealth.co.za",
    linkedin: "#",
    expertise: ["Financial Planning", "Cash Flow Analysis", "Goal Setting"],
  },
  {
    name: "Priya Patel",
    role: "Risk Management Advisor",
    credentials: ["FSP License", "FAIS Compliant", "BCom Risk Management"],
    bio: "Priya specializes in comprehensive risk management and insurance planning. She ensures our clients and their families are protected against unforeseen circumstances.",
    image: "/professional-female-insurance-advisor-headshot.jpg",
    email: "priya@imvelowealth.co.za",
    linkedin: "#",
    expertise: ["Insurance Planning", "Risk Assessment", "Asset Protection"],
  },
]

export function TeamSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet Our Expert Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our team of licensed professionals brings decades of combined experience in financial planning, investment
            management, and wealth preservation.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:gap-12">
          {team.map((person) => (
            <Card key={person.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{person.name}</h3>
                    <p className="text-accent font-medium">{person.role}</p>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {person.credentials.map((credential) => (
                      <Badge key={credential} variant="secondary" className="text-xs">
                        {credential}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{person.bio}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Areas of Expertise:</h4>
                    <div className="flex flex-wrap gap-1">
                      {person.expertise.map((area) => (
                        <Badge key={area} variant="outline" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <Link
                      href={`mailto:${person.email}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      Contact
                    </Link>
                    <Link
                      href={person.linkedin}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
