import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, TrendingUp, Shield, PiggyBank, Users } from "lucide-react"

const resources = [
  {
    category: "Market Insights",
    title: "2024 Market Outlook: Navigating Economic Uncertainty",
    description: "Our comprehensive analysis of market trends and investment opportunities for the year ahead.",
    readTime: "8 min read",
    date: "December 2024",
    icon: TrendingUp,
    featured: true,
  },
  {
    category: "Retirement Planning",
    title: "The Ultimate Guide to Retirement Planning in South Africa",
    description:
      "Everything you need to know about retirement annuities, preservation funds, and tax-efficient strategies.",
    readTime: "12 min read",
    date: "November 2024",
    icon: PiggyBank,
    featured: false,
  },
  {
    category: "Estate Planning",
    title: "Protecting Your Legacy: Estate Planning Essentials",
    description: "Key strategies for preserving and transferring wealth to future generations effectively.",
    readTime: "10 min read",
    date: "November 2024",
    icon: Shield,
    featured: false,
  },
  {
    category: "Investment Strategy",
    title: "Diversification in Volatile Markets",
    description: "How to build a resilient portfolio that can weather economic storms and capitalize on opportunities.",
    readTime: "6 min read",
    date: "October 2024",
    icon: TrendingUp,
    featured: false,
  },
  {
    category: "Tax Planning",
    title: "Year-End Tax Planning Strategies",
    description: "Maximize your tax efficiency with these proven strategies before the financial year ends.",
    readTime: "9 min read",
    date: "October 2024",
    icon: Calendar,
    featured: false,
  },
  {
    category: "Family Wealth",
    title: "Teaching Financial Literacy to the Next Generation",
    description: "Practical approaches to educating your children about money management and wealth building.",
    readTime: "7 min read",
    date: "September 2024",
    icon: Users,
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
                <CardTitle className="text-2xl md:text-3xl font-serif text-balance">{featuredResource.title}</CardTitle>
                <CardDescription className="text-lg text-pretty">{featuredResource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Read Full Article
                </Button>
              </CardContent>
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
                      {resource.title}
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
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        Read More
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
