import { Button } from "@/components/ui/button"
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { metadataForPath } from "@/lib/seo"

export const metadata = metadataForPath("/thank-you")

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center py-24 px-6">
      <div className="mx-auto max-w-lg text-center">
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-9 w-9 text-primary" />
          </div>
        </div>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
          Your request is on its way
        </h1>
        <p className="text-lg leading-8 text-muted-foreground mb-8">
          Thank you for reaching out. The office can respond using the contact details you provided during confirmed
          office hours.
        </p>

        <div className="rounded-xl bg-muted/30 border border-border/40 p-6 text-left mb-8 space-y-3">
          <h2 className="font-semibold text-foreground text-sm">What happens next</h2>
          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            <li>We review your goals and match you with the right advisor.</li>
            <li>The appropriate next step or meeting format is confirmed.</li>
            <li>Any required documentation is requested before advice work proceeds.</li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link href="/">
              Return Home
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="tel:+27101095097" aria-label="Call the office">
              <MessageCircle className="mr-2 h-4 w-4" />
              Call the office
            </a>
          </Button>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Office hours: Monday to Friday, 09:00-17:00.
        </p>
      </div>
    </main>
  )
}
