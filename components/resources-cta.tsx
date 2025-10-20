import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function ResourcesCTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
            Ready to Put These Insights Into Action?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">
            Knowledge is powerful, but personalized advice is transformative. Let's discuss how these strategies can
            work for your unique situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
