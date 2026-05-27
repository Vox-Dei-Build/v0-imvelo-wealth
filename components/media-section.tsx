import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mic, Youtube, Radio, ExternalLink } from "lucide-react"

const mediaAppearances = [
  {
    type: "Podcast",
    icon: Radio,
    platform: "Power Talk · Power FM",
    title: "Money Mondays: Are you a victim of Lifestyle Inflation?",
    description:
      "Palesa Tlholoe discusses how lifestyle inflation silently erodes wealth-building progress — and the practical steps to break the cycle.",
    href: "https://omny.fm/shows/power-lunch/money-mondays-are-you-a-victim-of-lifestyle-inflat",
    speaker: "Palesa Tlholoe, CFP®",
  },
  {
    type: "Podcast",
    icon: Radio,
    platform: "Power Talk · Power FM",
    title: "How to Break the Cycle of Living from Hand to Mouth",
    description:
      "A frank conversation on why so many South Africans spend everything they earn — and the behavioural and structural changes that create a different outcome.",
    href: "https://omny.fm/shows/power-lunch/how-to-break-the-cycle-of-living-from-hand-to-mout",
    speaker: "Palesa Tlholoe, CFP®",
  },
  {
    type: "Podcast",
    icon: Mic,
    platform: "Power Podcasts",
    title: "What is a Financial Cleanse?",
    description:
      "Palesa explains the concept of a financial cleanse — a structured review of spending, accounts, and financial habits — and how to do one yourself.",
    href: "https://omny.fm/shows/power-podcasts/personal-finance-palesa-tlholoe-co-founder-of-imve",
    speaker: "Palesa Tlholoe, CFP®",
  },
  {
    type: "Podcast",
    icon: Radio,
    platform: "Power Talk Archive",
    title: "How Freelancers and Self-Employed People Can Budget Better",
    description:
      "Variable income makes budgeting harder — but it also makes it more important. Practical budgeting frameworks for South Africa's growing freelance workforce.",
    href: "https://omny.fm/shows/powertalk-archive/how-freelancers-and-self-employed-people-can-budge?in_playlist=powertalk-archive!the-best-of-power-talk",
    speaker: "Palesa Tlholoe, CFP®",
  },
  {
    type: "Video",
    icon: Youtube,
    platform: "YouTube",
    title: "Investing in 2021: Masterclass by Imvelo Wealth",
    description:
      "A full investing masterclass covering the fundamentals of investing for South Africans — from unit trusts and ETFs to offshore allocations.",
    href: "https://www.youtube.com/watch?v=GAcNTK5Qals",
    speaker: "Palesa Tlholoe & Siba Njoba",
  },
  {
    type: "Video",
    icon: Youtube,
    platform: "YouTube",
    title: "Financial Management with Siba Njoba",
    description:
      "Siba Njoba joins Palesa to discuss financial management fundamentals — building wealth, managing risk, and making money work harder.",
    href: "https://www.youtube.com/watch?v=1tScSMEcq7U",
    speaker: "Siba Njoba & Palesa Tlholoe",
  },
]

const typeColour: Record<string, string> = {
  Podcast: "bg-accent/10 text-accent border-accent/20",
  Video: "bg-primary/10 text-primary border-primary/20",
}

export function MediaSection() {
  return (
    <section className="py-24 bg-muted/20 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">In the Media</p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Palesa &amp; Siba on Air
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our advisors are regular commentators on South African radio and online media — sharing practical
            financial guidance with a broad audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaAppearances.map((item) => {
            const Icon = item.icon
            return (
              <Card
                key={item.title}
                className="flex flex-col group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`text-xs border ${typeColour[item.type]}`}>
                      <Icon className="h-3 w-3 mr-1" />
                      {item.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{item.platform}</span>
                  </div>
                  <CardTitle className="text-base font-serif leading-snug group-hover:text-primary transition-colors text-balance">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground text-pretty flex-1">{item.description}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-border/40">
                    <span className="text-xs text-muted-foreground">{item.speaker}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 -mr-2" asChild>
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        Open
                        <ExternalLink className="ml-1.5 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Follow Imvelo Wealth for financial insights and market commentary
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.linkedin.com/company/imvelo-wealth-solutions/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.facebook.com/ImveloWealth/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.instagram.com/imvelowealth/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://x.com/ImveloWealth" target="_blank" rel="noopener noreferrer">
                X / Twitter
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.tiktok.com/search?q=imvelowealth&t=1779221171365" target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
