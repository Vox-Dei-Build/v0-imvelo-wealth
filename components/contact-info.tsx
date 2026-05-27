import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl font-serif">Get In Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Office Location</h4>
              <p className="text-muted-foreground">
                EPPF Office Park, 24 Georgian Cres E
                <br />
                Bryanston East
                <br />
                Johannesburg, 2152
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Phone</h4>
              <p className="text-muted-foreground">
                <a href="tel:+27101095097" className="hover:text-foreground transition-colors">010 109 5097</a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Email</h4>
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:info@imvelowealth.co.za"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@imvelowealth.co.za
                </a>
                <a
                  href="mailto:admin@imvelowealth.co.za"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  admin@imvelowealth.co.za
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
              <p className="text-muted-foreground">
                Monday – Friday: 9:00 AM – 5:00 PM
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-xl font-serif">Prefer to Talk?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Sometimes it's easier to discuss your financial goals over the phone. Book a consultation and we’ll get back to you during office hours.
          </p>
          <div className="space-y-3">
            <Button className="w-full bg-primary hover:bg-primary/90" asChild>
              <Link href="/consultation">
                <Calendar className="mr-2 h-4 w-4" />
                Book a Consultation
              </Link>
            </Button>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <a href="tel:+27101095097">
                <MessageCircle className="mr-2 h-4 w-4" />
                Call the Office
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl font-serif">What to Expect</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Initial Consultation</h4>
                <p className="text-sm text-muted-foreground">We discuss your goals and current financial situation</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Personalised Plan</h4>
                <p className="text-sm text-muted-foreground">We create a goals-based financial plan specific to you</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Ongoing Partnership</h4>
                <p className="text-sm text-muted-foreground">We implement and review your strategy as life evolves</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
