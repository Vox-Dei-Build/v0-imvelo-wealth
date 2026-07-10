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
      <Navigation variant="overlay" />
      <main>
        <ConsultationHero />
        <div className="bg-[#EAF4F6] py-24 sm:py-32">
          <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
            <div className="grid items-start gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
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
