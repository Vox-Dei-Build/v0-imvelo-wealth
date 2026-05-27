import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceDetailHero } from "@/components/service-detail-hero"
import { ServiceDetailContent } from "@/components/service-detail-content"
import { ServiceDetailCTA } from "@/components/service-detail-cta"
import { ServiceStructuredData } from "@/components/service-structured-data"
import { FileText, Shield, Users, Scale, BookOpen, TrendingDown } from "lucide-react"
import { metadataForPath } from "@/lib/seo"

const serviceData = {
  title: "Estate Planning",
  subtitle: "Protect your legacy and ensure your wealth reaches the right people",
  description:
    "Estate planning ensures your personal financial affairs are arranged for maximum benefit during your lifetime and distributed according to your wishes upon death. Working with fiduciary specialists, we help structure wills and trust arrangements that minimise estate duty and avoid costly delays in administration.",
  icon: FileText,
  features: [
    {
      title: "Will Drafting & Review",
      description:
        "A valid, up-to-date will is the foundation of estate planning. We coordinate with fiduciary specialists to ensure your will reflects your current wishes and avoids common pitfalls that delay administration.",
      icon: BookOpen,
    },
    {
      title: "Trust Structures",
      description:
        "An inter vivos trust can remove appreciating assets from your personal estate, protect assets from creditors, and provide continuity of ownership across generations — when implemented correctly.",
      icon: Shield,
    },
    {
      title: "Estate Duty Minimisation",
      description:
        "South Africa's estate duty rate is 20% on estates up to R30 million and 25% above that. Combined with CGT at death, an unplanned estate can lose 30–40% of its value. We model the exposure and structure accordingly.",
      icon: TrendingDown,
    },
    {
      title: "Beneficiary & Nomination Planning",
      description:
        "Retirement fund nominations bypass your estate entirely — getting them right is one of the most effective estate planning moves available. We review all nominations as part of your plan.",
      icon: Users,
    },
    {
      title: "Executor & Fiduciary Coordination",
      description:
        "We work with qualified executors and fiduciary specialists to ensure your estate can be administered efficiently and that the right professionals are in place when needed.",
      icon: Scale,
    },
  ],
  process: [
    "Review of existing will, trust structures, and retirement fund nominations",
    "Estate duty and CGT liability modelling based on current asset values",
    "Identification of planning opportunities — retirement fund nominations, spousal bequests, trust structures",
    "Coordination with fiduciary specialist for will drafting or trust establishment",
    "Ongoing review as asset values and family circumstances change",
  ],
  pricing: {
    initial: "Included in your financial planning engagement",
    ongoing: "Coordinated alongside your annual financial plan review",
    included: [
      "Estate duty exposure analysis",
      "Retirement fund nomination review",
      "Referral to fiduciary specialist",
      "Integration with your broader financial plan",
    ],
  },
}

export const metadata = metadataForPath("/services/estate-planning")

export default function EstatePlanningPage() {
  return (
    <div className="min-h-screen bg-background">
      <ServiceStructuredData path="/services/estate-planning" name={serviceData.title} />
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
