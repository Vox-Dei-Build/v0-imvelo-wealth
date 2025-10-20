import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { TeamSection } from "@/components/team-section"
import { AboutValues } from "@/components/about-values"
import { AboutCTA } from "@/components/about-cta"

export const metadata = {
  title: "About Us | Imvelo Wealth Solutions",
  description:
    "Learn about our mission to help South African families build generational wealth. Meet our experienced team of licensed financial advisors.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <TeamSection />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  )
}
