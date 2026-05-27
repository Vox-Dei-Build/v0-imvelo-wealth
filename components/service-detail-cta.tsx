import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Mail, Phone } from "lucide-react"
import Link from "next/link"

interface ServiceDetailCTAProps {
  service: {
    title: string
  }
}

export function ServiceDetailCTA({ service }: ServiceDetailCTAProps) {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Discuss Your {service.title} Needs
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Use a confirmed channel to request a focused planning conversation.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="mx-auto h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Consultation Request</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Share your context and preferred time window.
              </p>
              <Button asChild className="w-full">
                <Link href="/consultation">Request Consultation</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Phone className="mx-auto h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Speak to an Advisor</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Call the confirmed office line during business hours.
              </p>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="tel:+27101095097">010 109 5097</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Mail className="mx-auto h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Email Imvelo</h3>
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
