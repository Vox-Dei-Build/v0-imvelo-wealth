import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactCTA } from "@/components/contact-cta"
import { metadataForPath } from "@/lib/seo"

export const metadata = metadataForPath("/contact")

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation variant="overlay" />
      <main>
        <ContactHero />
        <div className="bg-[#EAF4F6] py-24 sm:py-32">
          <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
