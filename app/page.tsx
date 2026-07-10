import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
// import { BrandStoryBlock } from "@/components/brand-story-block"
import { PartnerStrip } from "@/components/partner-strip"
import { ValueProposition } from "@/components/value-proposition"
import { ServicesOverview } from "@/components/services-overview"
import { ProcessSection } from "@/components/process-section"
import { LatestResourcesSection } from "@/components/latest-resources-section"
import { CTASection } from "@/components/cta-section"
import { metadataForPath } from "@/lib/seo"

export const metadata = metadataForPath("/")

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation variant="overlay" />
      <main>
        <HeroSection />
        {/* <BrandStoryBlock /> */}
        <PartnerStrip />
        <ValueProposition />
        <ServicesOverview />
        <LatestResourcesSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
