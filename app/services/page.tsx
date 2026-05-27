import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { FeeComparisonTable } from "@/components/fee-comparison-table"
import { ServicesCTA } from "@/components/services-cta"
import { metadataForPath } from "@/lib/seo"

export const metadata = metadataForPath("/services")

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <FeeComparisonTable />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}
