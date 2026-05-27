import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ConsultationHero } from "@/components/consultation-hero"
import { ConsultationForm } from "@/components/consultation-form"
import { ConsultationProcess } from "@/components/consultation-process"
import { metadataForPath } from "@/lib/seo"

export const metadata = metadataForPath("/consultation")

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ConsultationHero />
        <div className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <ConsultationForm />
              <ConsultationProcess />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
