import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceDetailHero } from "@/components/service-detail-hero"
import { ServiceDetailContent } from "@/components/service-detail-content"
import { ServiceDetailCTA } from "@/components/service-detail-cta"
import { ServiceStructuredData } from "@/components/service-structured-data"
import { Briefcase, Shield, Scale, TrendingUp, FileText } from "lucide-react"
import { metadataForPath } from "@/lib/seo"

const serviceData = {
  title: "Business Assurance",
  subtitle: "Protect your business and your partners when it matters most",
  description:
    "Business assurance is specialist financial planning for business owners and their partners. Buy-and-sell agreements backed by life and disability cover ensure that if a partner dies or becomes disabled, the business can continue and surviving partners can buy out the affected interest at a pre-agreed fair value — without fire-sale liquidations or family disputes.",
  icon: Briefcase,
  features: [
    {
      title: "Buy-and-Sell Agreements",
      description:
        "A legally binding agreement that pre-determines the value and funding mechanism for a partner's share in the event of death or disability. Removes uncertainty and protects all parties.",
      icon: Scale,
    },
    {
      title: "Key Person Life & Disability Cover",
      description:
        "Cover on the life of a key individual whose death or disability would materially impact the business — providing a capital buffer to recruit, retrain, and maintain operations.",
      icon: Shield,
    },
    {
      title: "Business Continuity Planning",
      description:
        "Beyond insurance, we help business owners think through contingency plans, succession timelines, and the financial structures needed to keep the business operating through disruption.",
      icon: Briefcase,
    },
    {
      title: "Business Valuation Support",
      description:
        "Buy-and-sell agreements require a fair business valuation method to be agreed in advance. We work with you and your accountant to establish a valuation approach that all partners accept.",
      icon: TrendingUp,
    },
    {
      title: "Policy & Agreement Coordination",
      description:
        "We coordinate the insurance policy structuring, ownership arrangements, and legal agreement to ensure the buy-and-sell mechanism functions correctly when triggered.",
      icon: FileText,
    },
  ],
  process: [
    "Business structure review — number of partners, ownership percentages, and current agreements",
    "Business valuation method agreed with all partners and their legal advisers",
    "Life and disability cover needs analysis for each partner and key person",
    "Policy structuring — correct ownership and beneficiary nomination for buy-and-sell to work",
    "Coordination with attorney for buy-and-sell agreement drafting",
    "Annual review of cover amounts as business value changes",
  ],
  pricing: {
    initial: "Contact us for a business assurance needs analysis",
    ongoing: "Annual review of cover amounts and agreement terms",
    included: [
      "Business needs analysis",
      "Policy structuring recommendation",
      "Coordination with business attorney",
      "Annual cover review",
    ],
  },
}

export const metadata = metadataForPath("/services/business-assurance")

export default function BusinessAssurancePage() {
  return (
    <div className="min-h-screen bg-background">
      <ServiceStructuredData path="/services/business-assurance" name={serviceData.title} />
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
