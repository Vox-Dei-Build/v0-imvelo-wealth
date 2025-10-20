import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Download, Calendar, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Primary CTA */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Build Your Wealth Legacy?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Take the first step towards financial freedom. Schedule a free consultation with our expert advisors and
            discover how we can help you achieve your wealth goals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="group">
              <Link href="/consultation">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us Today
              </Link>
            </Button>
          </div>
        </div>

        {/* Secondary CTAs */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Download className="mx-auto h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Free Wealth Guide</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Download our comprehensive guide to building generational wealth in South Africa.
              </p>
              <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                <Link href="/resources/wealth-guide">Download Guide</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Mail className="mx-auto h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Monthly Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Stay informed with market insights, tax updates, and wealth-building strategies.
              </p>
              <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                <Link href="/newsletter">Subscribe Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="mx-auto h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Wealth Webinar</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Join our next free webinar on retirement planning and investment strategies.
              </p>
              <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                <Link href="/events/webinar">Register Free</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
