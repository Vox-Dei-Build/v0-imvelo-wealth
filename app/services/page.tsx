import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { ServicesCTA } from "@/components/services-cta"

export const metadata = {
  title: "Financial Services | Imvelo Wealth Solutions",
  description:
    "Comprehensive financial planning, investment management, estate planning, and wealth management services for South African families and businesses.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}
