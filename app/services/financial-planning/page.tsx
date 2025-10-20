import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceDetailHero } from "@/components/service-detail-hero"
import { ServiceDetailContent } from "@/components/service-detail-content"
import { ServiceDetailCTA } from "@/components/service-detail-cta"
import { PiggyBank, Target, Calculator, TrendingUp, Shield, FileText } from "lucide-react"

const serviceData = {
  title: "Financial Planning",
  subtitle: "Comprehensive financial strategies tailored to your life goals",
  description:
    "Our financial planning service provides you with a clear roadmap to achieve your financial goals, whether that's buying your first home, funding your children's education, or building wealth for retirement.",
  icon: PiggyBank,
  features: [
    {
      title: "Goal-Based Planning",
      description:
        "We start by understanding your specific financial goals and create a customized plan to achieve them.",
      icon: Target,
    },
    {
      title: "Cash Flow Analysis",
      description:
        "Detailed analysis of your income and expenses to optimize your cash flow and identify savings opportunities.",
      icon: Calculator,
    },
    {
      title: "Investment Strategy",
      description: "Develop an investment strategy aligned with your risk tolerance and time horizon.",
      icon: TrendingUp,
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis to ensure your financial plan accounts for potential challenges.",
      icon: Shield,
    },
    {
      title: "Tax Planning",
      description: "Strategies to minimize your tax burden while maximizing your wealth accumulation.",
      icon: FileText,
    },
  ],
  process: [
    "Initial consultation to understand your goals and current situation",
    "Comprehensive financial analysis and risk assessment",
    "Development of customized financial plan with specific recommendations",
    "Implementation support and ongoing monitoring",
    "Regular reviews and plan adjustments as needed",
  ],
  pricing: {
    initial: "R2,500 for comprehensive financial plan",
    ongoing: "R500 per quarter for plan reviews and updates",
    included: ["Initial consultation", "Written financial plan", "Implementation guidance", "First quarterly review"],
  },
}

export const metadata = {
  title: "Financial Planning Services | Imvelo Wealth Solutions",
  description:
    "Comprehensive financial planning services to help you achieve your goals. Goal-based planning, cash flow analysis, and investment strategies.",
}

export default function FinancialPlanningPage() {
  return (
    <div className="min-h-screen bg-background">
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
