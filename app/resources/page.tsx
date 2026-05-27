import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ResourcesHero } from "@/components/resources-hero"
import { ResourcesGrid } from "@/components/resources-grid"
import { MediaSection } from "@/components/media-section"
import { CTASection } from "@/components/cta-section"
import { metadataForPath } from "@/lib/seo"

export const metadata = metadataForPath("/resources")

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ResourcesHero />
        <ResourcesGrid />
        <MediaSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
