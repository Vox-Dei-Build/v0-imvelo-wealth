import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Phone, Download } from "lucide-react"
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
            Ready to Start Your {service.title} Journey?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Take the first step towards achieving your financial goals. Our expert advisors are ready to help.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="mx-auto h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Free Consultation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Schedule a 60-minute consultation to discuss your specific needs and goals.
              </p>
              <Button asChild className="w-full">
                <Link href="/consultation">Book Consultation</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Phone className="mx-auto h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Speak to an Advisor</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Call us directly to speak with one of our qualified financial advisors.
              </p>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="tel:+27111234567">Call Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Download className="mx-auto h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Planning Guide</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Download our comprehensive guide to financial planning in South Africa.
              </p>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/resources/financial-planning-guide">Download Guide</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
