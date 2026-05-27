import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, TrendingUp, Shield, PiggyBank, Users } from "lucide-react"

const resources = [
  {
    slug: "two-pot-retirement-system",
    category: "Retirement Planning",
    title: "The Two-Pot System Explained: What Every South African Needs to Know Before 2025",
    description:
      "From 1 September 2024, South Africa's two-pot retirement system fundamentally changed how you access your savings. One pot is locked until retirement. The other gives you limited, taxable access before retirement age. Here is what it means for your RA, pension fund, and provident fund — and what you should do now to avoid a tax shock when you need the money most.",
    readTime: "9 min read",
    date: "March 2025",
    icon: PiggyBank,
    featured: true,
    excerpt: [
      "Your savings fund (the accessible pot) is capped at one-third of contributions from 1 September 2024. All contributions before that date remain in the vested pot under old rules.",
      "Withdrawals from the savings pot are taxed at your marginal rate — not the favourable retirement lump sum tables. A R50,000 withdrawal for someone earning R600,000 p.a. could trigger a R22,500 tax bill.",
      "The retirement pot (two-thirds) remains inaccessible until retirement. This is the engine of your long-term wealth compounding — protecting it is critical.",
      "If you have multiple retirement funds, the one-third / two-thirds split applies separately to each fund. Consolidating funds before the implementation date had meaningful tax implications for some members.",
    ],
  },
  {
    slug: "estate-duty-guide",
    category: "Estate Planning",
    title: "Estate Duty in South Africa: A Plain-Language Guide for Families With Significant Assets",
    description:
      "South Africa's estate duty rate is 20% on dutiable estates up to R30 million, and 25% above that. Combined with capital gains tax on deemed disposals at death, an estate that looks straightforward can lose 30–40% of its value in a single tax event. This guide explains who pays, what is exempt, and which legal structures reduce the bill without compromising your family's control.",
    readTime: "11 min read",
    date: "February 2025",
    icon: Shield,
    featured: false,
  },
  {
    slug: "offshore-allowances-south-africa",
    category: "Tax Planning",
    title: "Offshore Allowances for South Africans: Making Full Use of Your R1M Annual Transfer",
    description:
      "Every South African adult has an annual discretionary R1 million single discretionary allowance and a R10 million foreign capital allowance (with SARS tax clearance). Used strategically, these allowances can meaningfully diversify your wealth outside rand-denominated assets. This article explains the mechanics, the compliance requirements, and the most common mistakes investors make.",
    readTime: "8 min read",
    date: "January 2025",
    icon: TrendingUp,
    featured: false,
  },
  {
    slug: "regulation-28-retirement-portfolio",
    category: "Investment Strategy",
    title: "Understanding Regulation 28: How It Shapes Your Retirement Portfolio",
    description:
      "Regulation 28 of the Pension Funds Act limits how much your retirement savings can be invested in equities, offshore assets, and alternative investments. Many investors don't realise these limits until they want to adjust their strategy. Here is a clear breakdown of the rules and how a fee-transparent advisor structures portfolios within — and alongside — Reg 28 constraints.",
    readTime: "7 min read",
    date: "December 2024",
    icon: TrendingUp,
    featured: false,
  },
  {
    slug: "trusts-south-africa",
    category: "Family Wealth",
    title: "Trusts in South Africa: When They Make Sense and When They Don't",
    description:
      "A trust is not a tax shelter. SARS has closed most of the historical loopholes. But a well-structured inter vivos trust still serves critical purposes: protecting assets from personal liability, ring-fencing family wealth across generations, and managing estate duty exposure. This article explains current trust taxation and the three scenarios where setting one up genuinely makes financial sense.",
    readTime: "10 min read",
    date: "November 2024",
    icon: Users,
    featured: false,
  },
  {
    slug: "emergency-fund-alternatives",
    category: "Financial Planning",
    title: "Why Your Emergency Fund Should Not Be in a Savings Account",
    description:
      "A three-to-six month emergency fund earning 4% nominal in a bank savings account is losing real value at South Africa's current inflation rate. Money market funds, 32-day notice accounts, and flexible income unit trusts offer materially better after-tax returns with near-identical liquidity. This article compares the real numbers and explains what to move your emergency fund into.",
    readTime: "6 min read",
    date: "October 2024",
    icon: PiggyBank,
    featured: false,
  },
]

export function ResourcesGrid() {
  const featuredResource = resources.find((resource) => resource.featured)
  const otherResources = resources.filter((resource) => !resource.featured)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Featured Article */}
        {featuredResource && (
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">Featured Article</h2>
            <Card className="max-w-4xl mx-auto border-primary/20 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {featuredResource.category}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredResource.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredResource.readTime}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-serif text-balance">
                  <Link href={`/resources/${featuredResource.slug}`} className="hover:text-primary transition-colors">
                    {featuredResource.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base text-pretty">{featuredResource.description}</CardDescription>
              </CardHeader>
              {"excerpt" in featuredResource && Array.isArray(featuredResource.excerpt) && (
                <CardContent className="pt-0">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Key takeaways:</h3>
                  <ul className="space-y-2 mb-6">
                    {featuredResource.excerpt.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-pretty">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link href={`/resources/${featuredResource.slug}`}>Read Full Article</Link>
                  </Button>
                </CardContent>
              )}
            </Card>
          </div>
        )}

        {/* Other Resources */}
        <div>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">Latest Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherResources.map((resource, index) => {
              const IconComponent = resource.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {resource.category}
                      </Badge>
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors text-balance">
                      <Link href={`/resources/${resource.slug}`}>{resource.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-pretty">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {resource.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {resource.readTime}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" asChild>
                        <Link href={`/resources/${resource.slug}`}>Read More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
