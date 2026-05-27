import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { BrandStoryBlock } from "@/components/brand-story-block"
import { AboutStory } from "@/components/about-story"
import { TeamSection } from "@/components/team-section"
import { AboutCTA } from "@/components/about-cta"
import { metadataForPath } from "@/lib/seo"

export const metadata = metadataForPath("/about")

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <AboutHero />
        <BrandStoryBlock />
        <AboutStory />
        <TeamSection />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  )
}
