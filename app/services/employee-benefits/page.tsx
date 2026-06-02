import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceDetailHero } from "@/components/service-detail-hero"
import { ServiceDetailContent } from "@/components/service-detail-content"
import { ServiceDetailCTA } from "@/components/service-detail-cta"
import { ServiceStructuredData } from "@/components/service-structured-data"
import { Users, TrendingUp, Shield, BookOpen, CheckCircle } from "lucide-react"
import { metadataForPath } from "@/lib/seo"

const serviceData = {
  title: "Employee Benefits",
  subtitle: "Pension, provident, group risk, and employee wellness solutions",
  description:
    "Employee benefits support businesses with pension and provident funds, group retirement plans, group risk benefits, group investment plans, and employee wellness workshops.",
  icon: Users,
  features: [
    {
      title: "Pension and Provident Funds",
      description:
        "Retirement fund solutions that help employees save through formal pension or provident fund structures.",
      icon: TrendingUp,
    },
    {
      title: "Group Risk Benefits",
      description:
        "Group life, disability, and related risk benefits that provide employees and their families with financial protection.",
      icon: Shield,
    },
    {
      title: "Employee Wellness Workshops",
      description:
        "Financial literacy and wellness sessions to help employees understand their benefits, budgeting, cash flow, and debt.",
      icon: BookOpen,
    },
    {
      title: "Compliant Benefit Administration",
      description:
        "All benefit structures are designed to comply with SARS requirements and the Long-term Insurance Act. We coordinate with product providers to ensure ongoing compliance.",
      icon: CheckCircle,
    },
  ],
  process: [
    "Understanding your business size, employee profile, and current benefit structure",
    "Review of pension, provident, group risk, and investment plan requirements",
    "Provider comparison and benefit structure recommendation",
    "Employee communication and wellness workshop planning",
    "Annual review of benefit adequacy and employee engagement",
  ],
  pricing: {
    initial: "Custom proposal based on number of employees and benefit structure",
    ongoing: "Annual review included",
    included: [
      "Benefit structure design",
      "Provider comparison and selection",
      "Employee wellness workshop",
      "Annual policy review",
    ],
  },
}

export const metadata = metadataForPath("/services/employee-benefits")

export default function EmployeeBenefitsPage() {
  return (
    <div className="min-h-screen bg-background">
      <ServiceStructuredData path="/services/employee-benefits" name={serviceData.title} />
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
