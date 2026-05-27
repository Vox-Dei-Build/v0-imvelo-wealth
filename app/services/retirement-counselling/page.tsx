import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceDetailHero } from "@/components/service-detail-hero"
import { ServiceDetailContent } from "@/components/service-detail-content"
import { ServiceDetailCTA } from "@/components/service-detail-cta"
import { ServiceStructuredData } from "@/components/service-structured-data"
import { RefreshCw, PiggyBank, Calculator, FileText, Shield } from "lucide-react"
import { metadataForPath } from "@/lib/seo"

const serviceData = {
  title: "Retirement Benefit Counselling",
  subtitle: "Independent guidance on your options when leaving employment or retiring",
  description:
    "When you leave employment or reach retirement age, the decisions you make about your retirement fund proceeds are among the most consequential of your financial life. We provide independent, unbiased guidance on every available option — from preservation funds to annuity selection — including the tax and estate implications of each path.",
  icon: RefreshCw,
  features: [
    {
      title: "Annuity Analysis",
      description:
        "Living annuity or life annuity? The right answer depends on your income needs, health, estate wishes, and risk tolerance. We model both options against your specific circumstances before you commit.",
      icon: Calculator,
    },
    {
      title: "Preservation Funds",
      description:
        "Moving your retirement savings to a pension or provident preservation fund when leaving employment protects the tax-deferred compounding and preserves your Section 10C vested rights. We guide you through the options.",
      icon: PiggyBank,
    },
    {
      title: "Two-Pot System Navigation",
      description:
        "The 2024 two-pot retirement system changes how your savings are split and accessed. We explain the impact on your specific fund and help you avoid costly early withdrawal decisions.",
      icon: RefreshCw,
    },
    {
      title: "Tax Implications at Retirement",
      description:
        "Retirement lump sums are taxed using the retirement lump sum tax table — but timing and structuring affect the outcome. We model your tax position across different retirement scenarios.",
      icon: FileText,
    },
    {
      title: "Estate Implications",
      description:
        "Living annuity proceeds can be passed to nominated beneficiaries outside your estate. Life annuities cease on death. These differences have profound estate planning consequences we help you understand.",
      icon: Shield,
    },
  ],
  process: [
    "Review of your current retirement fund balance, fund type, and employer scheme rules",
    "Modelling of tax implications across preservation, cash-out, and annuity options",
    "Annuity provider comparison — rates, fees, and terms across leading SA providers",
    "Nomination and beneficiary review",
    "Implementation support and post-retirement review",
  ],
  pricing: {
    initial: "Included in your financial planning engagement",
    ongoing: "Post-retirement reviews included in ongoing planning fee",
    included: [
      "Full retirement options analysis",
      "Tax modelling",
      "Annuity provider comparison",
      "Implementation guidance",
    ],
  },
}

export const metadata = metadataForPath("/services/retirement-counselling")

export default function RetirementCounsellingPage() {
  return (
    <div className="min-h-screen bg-background">
      <ServiceStructuredData path="/services/retirement-counselling" name={serviceData.title} />
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
