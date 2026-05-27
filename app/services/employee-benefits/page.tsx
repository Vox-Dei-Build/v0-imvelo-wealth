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
  subtitle: "Retain key employees with tax-efficient benefit structures",
  description:
    "Preferred compensation plans that incentivise and retain key employees through investment policies structured to vest as tax-free lump sums after 5 or 10 years. Well-designed employee benefits reduce staff turnover and align employee and employer interests over the long term.",
  icon: Users,
  features: [
    {
      title: "Key Employee Retention Schemes",
      description:
        "Investment-linked policies that vest as tax-free lump sums after 5 or 10 years of service — creating a meaningful retention incentive without the complexity of equity participation.",
      icon: TrendingUp,
    },
    {
      title: "Group Risk Cover",
      description:
        "Group life, disability, and critical illness cover for employees. Group rates are typically more competitive than individual cover, and benefits are valued by employees as tangible protection.",
      icon: Shield,
    },
    {
      title: "Employee Education",
      description:
        "We provide financial literacy sessions to help employees understand and value their benefits — improving benefit appreciation and reducing the likelihood of early surrender.",
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
    "Understanding your business size, key employee profile, and retention objectives",
    "Design of a benefit structure aligned with your compensation strategy and budget",
    "Provider selection and policy implementation",
    "Employee communication and education sessions",
    "Annual review of benefit adequacy and policy performance",
  ],
  pricing: {
    initial: "Custom proposal based on number of employees and benefit structure",
    ongoing: "Annual review included",
    included: [
      "Benefit structure design",
      "Provider comparison and selection",
      "Employee education session",
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
