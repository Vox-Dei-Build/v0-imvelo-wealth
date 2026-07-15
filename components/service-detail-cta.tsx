import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

interface ServiceDetailCTAProps {
  service: {
    title: string
  }
}

export function ServiceDetailCTA({ service }: ServiceDetailCTAProps) {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-foreground sm:text-4xl">
            Discuss Your {service.title} Needs
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Use a confirmed channel to request a focused planning conversation.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          <Card className="transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg" data-aos="fade-up">
            <CardContent className="p-6 text-center">
              <WhatsAppIcon className="mx-auto h-8 w-8 text-[#25D366] mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Chat on WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ask us anything about {service.title.toLowerCase()} — no obligation.
              </p>
              <Button asChild className="w-full rounded-full">
                <Link href="/consultation">Start the WhatsApp flow</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg" data-aos="fade-up" data-aos-delay="80">
            <CardContent className="p-6 text-center">
              <Phone className="mx-auto h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Speak to an Advisor</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Call the confirmed Imvelo Wealth phone line during business hours.
              </p>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="tel:+27101095097">010 109 5097</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg" data-aos="fade-up" data-aos-delay="160">
            <CardContent className="p-6 text-center">
              <Mail className="mx-auto h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Email Imvelo Wealth</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Send a direct message to the confirmed info inbox.
              </p>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <a href="mailto:info@imvelowealth.co.za">info@imvelowealth.co.za</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
