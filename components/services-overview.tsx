import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PiggyBank, TrendingUp, FileText, Shield, Home, Briefcase } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Financial Planning",
    description:
      "Comprehensive financial plans tailored to your life goals, from buying your first home to retirement.",
    icon: PiggyBank,
    benefits: ["Goal-based planning", "Cash flow optimization", "Tax-efficient strategies"],
    href: "/services/financial-planning",
  },
  {
    title: "Investment Management",
    description: "Professional portfolio management with diversified strategies designed for long-term growth.",
    icon: TrendingUp,
    benefits: ["Diversified portfolios", "Risk management", "Regular rebalancing"],
    href: "/services/investment-management",
  },
  {
    title: "Estate Planning",
    description: "Protect your legacy and ensure smooth wealth transfer to future generations.",
    icon: FileText,
    benefits: ["Will drafting", "Trust structures", "Tax minimization"],
    href: "/services/estate-planning",
  },
  {
    title: "Risk Management",
    description: "Comprehensive insurance strategies to protect your family and assets from unforeseen events.",
    icon: Shield,
    benefits: ["Life insurance", "Disability cover", "Asset protection"],
    href: "/services/risk-management",
  },
  {
    title: "Retirement Planning",
    description: "Build a secure retirement with strategies that maximize your pension and investment returns.",
    icon: Home,
    benefits: ["Pension optimization", "Retirement annuities", "Income planning"],
    href: "/services/retirement-planning",
  },
  {
    title: "Business Solutions",
    description: "Specialized financial services for business owners and entrepreneurs.",
    icon: Briefcase,
    benefits: ["Business succession", "Key person insurance", "Employee benefits"],
    href: "/services/business-solutions",
  },
]

export function ServicesOverview() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Comprehensive Wealth Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From financial planning to estate management, we provide the full spectrum of services needed to build and
            preserve your wealth.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm text-muted-foreground">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-accent"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-6 w-full bg-transparent" asChild>
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
