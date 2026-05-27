import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceDetailHero } from "@/components/service-detail-hero"
import { ServiceDetailContent } from "@/components/service-detail-content"
import { ServiceDetailCTA } from "@/components/service-detail-cta"
import { ServiceStructuredData } from "@/components/service-structured-data"
import { GraduationCap, Target, TrendingDown, CreditCard, PiggyBank, Users } from "lucide-react"
import { metadataForPath } from "@/lib/seo"

const serviceData = {
  title: "Financial Coaching",
  subtitle: "Practical financial wellness for individuals and corporate teams",
  description:
    "Financial coaching bridges the gap between financial advice and everyday financial behaviour. Our customised programmes combine financial education with one-on-one coaching to help individuals and corporate employees improve their relationship with money — covering budgeting, debt management, and credit health.",
  icon: GraduationCap,
  features: [
    {
      title: "Personal Budget & Cash Flow",
      description:
        "We build a realistic, workable budget based on your actual income and spending patterns — identifying leaks, optimising savings rates, and creating a plan you can stick to.",
      icon: Target,
    },
    {
      title: "Debt Management",
      description:
        "Structured debt reduction strategies prioritising high-interest debt, negotiating with creditors where appropriate, and building a clear payoff timeline.",
      icon: TrendingDown,
    },
    {
      title: "Credit Score Improvement",
      description:
        "Practical steps to improve your credit profile — from understanding your credit report to correcting errors, managing utilisation, and building a positive payment history.",
      icon: CreditCard,
    },
    {
      title: "Emergency Fund Building",
      description:
        "A properly funded emergency account is the foundation of financial stability. We help you build and maintain the right buffer for your circumstances.",
      icon: PiggyBank,
    },
    {
      title: "Corporate Wellness Programmes",
      description:
        "We deliver financial wellness workshops and coaching programmes to corporate teams — improving employee financial resilience and productivity.",
      icon: Users,
    },
  ],
  process: [
    "Financial health assessment — income, expenses, debt, savings, and goals",
    "Personalised coaching plan with specific, measurable targets",
    "Regular check-in sessions to track progress and adjust the plan",
    "Practical tools and worksheets to support daily financial decisions",
    "Graduation to full financial planning as financial foundation strengthens",
  ],
  pricing: {
    initial: "Contact us for individual and corporate coaching package options",
    ongoing: "Monthly coaching sessions available",
    included: [
      "Financial health assessment",
      "Personalised budget plan",
      "Debt reduction strategy",
      "Monthly progress sessions",
    ],
  },
}

export const metadata = metadataForPath("/services/financial-coaching")

export default function FinancialCoachingPage() {
  return (
    <div className="min-h-screen bg-background">
      <ServiceStructuredData path="/services/financial-coaching" name={serviceData.title} />
      <Navigation />
      <main>
        <ServiceDetailHero service={serviceData} />
        <ServiceDetailContent service={serviceData} />
        <ServiceDetailCTA service={serviceData} />
      </main>
      <Footer />
    </div>
  )
}
