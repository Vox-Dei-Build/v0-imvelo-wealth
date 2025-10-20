import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PiggyBank, TrendingUp, FileText, Shield, Home, Briefcase, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Financial Planning",
    description: "Comprehensive financial plans tailored to your life goals and circumstances.",
    icon: PiggyBank,
    features: [
      "Goal-based financial planning",
      "Cash flow analysis and optimization",
      "Tax-efficient strategies",
      "Debt management solutions",
      "Education funding planning",
      "Emergency fund strategies",
    ],
    benefits: [
      "Clear roadmap to financial goals",
      "Optimized cash flow management",
      "Reduced tax burden",
      "Peace of mind about your future",
    ],
    href: "/services/financial-planning",
    price: "From R2,500 initial consultation",
  },
  {
    title: "Investment Management",
    description: "Professional portfolio management with diversified strategies for long-term growth.",
    icon: TrendingUp,
    features: [
      "Diversified investment portfolios",
      "Risk-adjusted returns",
      "Regular portfolio rebalancing",
      "Tax-efficient investing",
      "ESG investment options",
      "Performance monitoring",
    ],
    benefits: [
      "Professional investment expertise",
      "Reduced investment risk",
      "Consistent long-term returns",
      "Time-saving portfolio management",
    ],
    href: "/services/investment-management",
    price: "1.5% annual management fee",
  },
  {
    title: "Estate Planning",
    description: "Protect your legacy and ensure smooth wealth transfer to future generations.",
    icon: FileText,
    features: [
      "Will drafting and updates",
      "Trust structure planning",
      "Estate duty minimization",
      "Beneficiary planning",
      "Power of attorney documents",
      "Estate administration",
    ],
    benefits: [
      "Protected family wealth",
      "Minimized estate taxes",
      "Clear succession planning",
      "Avoided family disputes",
    ],
    href: "/services/estate-planning",
    price: "From R5,000 for basic will",
  },
  {
    title: "Risk Management",
    description: "Comprehensive insurance strategies to protect your family and assets.",
    icon: Shield,
    features: [
      "Life insurance planning",
      "Disability income protection",
      "Critical illness cover",
      "Asset protection strategies",
      "Business insurance",
      "Insurance needs analysis",
    ],
    benefits: [
      "Financial security for family",
      "Protected income streams",
      "Covered medical expenses",
      "Business continuity assurance",
    ],
    href: "/services/risk-management",
    price: "Customized premium quotes",
  },
  {
    title: "Retirement Planning",
    description: "Build a secure retirement with optimized pension and investment strategies.",
    icon: Home,
    features: [
      "Retirement needs analysis",
      "Pension fund optimization",
      "Retirement annuity planning",
      "Living annuity management",
      "Social security maximization",
      "Healthcare cost planning",
    ],
    benefits: [
      "Comfortable retirement lifestyle",
      "Maximized retirement income",
      "Healthcare cost coverage",
      "Legacy preservation",
    ],
    href: "/services/retirement-planning",
    price: "Included in planning fee",
  },
  {
    title: "Business Solutions",
    description: "Specialized financial services for business owners and entrepreneurs.",
    icon: Briefcase,
    features: [
      "Business succession planning",
      "Key person insurance",
      "Employee benefit schemes",
      "Business loan structuring",
      "Exit strategy planning",
      "Corporate investment management",
    ],
    benefits: [
      "Business continuity assurance",
      "Attracted and retained talent",
      "Optimized business value",
      "Successful exit strategies",
    ],
    href: "/services/business-solutions",
    price: "Custom business packages",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:gap-12">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <div className="text-sm text-accent font-medium">{service.price}</div>
                  </div>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="mr-2 h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start text-sm text-muted-foreground">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button className="w-full group" asChild>
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
