import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announcement Banner */}
          <div className="mb-8">
            <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent-foreground ring-1 ring-accent/20">
              <span className="mr-2 h-2 w-2 rounded-full bg-accent"></span>
              Licensed FSP - Trusted by 500+ South African families
            </div>
          </div>

          {/* Main Headlines - 3 Alternative Options */}
          <div className="space-y-6">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              Build Wealth That
              <span className="text-accent"> Lasts Generations</span>
            </h1>

            {/* Alternative Headlines (commented for reference):
            
            Option 2:
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              Your Legacy Starts 
              <span className="text-accent"> With Smart Planning</span>
            </h1>
            
            Option 3:
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              Preserve & Grow 
              <span className="text-accent"> Family Wealth</span>
            </h1>
            */}

            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
              Expert financial planning and wealth management for South African professionals, entrepreneurs, and
              families. Create, preserve, and transfer wealth with confidence through our proven strategies.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="group">
              <Link href="/consultation">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/resources/wealth-guide">
                <Download className="mr-2 h-4 w-4" />
                Download Wealth Guide
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">R2.5B+</div>
              <div className="text-sm text-muted-foreground">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Families Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-16 sm:mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-xl bg-muted/50 p-2 ring-1 ring-border/10 lg:rounded-2xl lg:p-4">
            <img
              src="/professional-financial-planning-meeting-with-diver.jpg"
              alt="Professional financial planning consultation"
              className="w-full rounded-lg bg-background shadow-2xl ring-1 ring-border/10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
