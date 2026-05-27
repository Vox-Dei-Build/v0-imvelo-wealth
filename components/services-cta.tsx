import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function ServicesCTA() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Discuss Your Planning Needs?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the simplest way to connect with Imvelo during office hours.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="mx-auto h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Request Consultation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Share the planning questions, decisions, or priorities you want to discuss.
              </p>
              <Button asChild className="w-full">
                <Link href="/consultation">Request Time</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Phone className="mx-auto h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Call the Office</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Reach Imvelo Wealth Solutions on the confirmed office number.
              </p>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="tel:+27101095097">010 109 5097</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Mail className="mx-auto h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Send Us a Message</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Use the contact page or email info@imvelowealth.co.za.
              </p>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/contact">Contact Form</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
