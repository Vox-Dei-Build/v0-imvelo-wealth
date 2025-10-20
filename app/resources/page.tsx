import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ResourcesHero } from "@/components/resources-hero"
import { ResourcesGrid } from "@/components/resources-grid"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ResourcesCTA } from "@/components/resources-cta"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ResourcesHero />
        <ResourcesGrid />
        <NewsletterSignup />
        <ResourcesCTA />
      </main>
      <Footer />
    </div>
  )
}
