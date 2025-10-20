import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, TrendingUp } from "lucide-react"

export function NewsletterSignup() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-primary/20 shadow-lg">
          <CardHeader className="text-center pb-8">
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-3xl font-serif font-bold text-foreground mb-4">
              Stay Ahead of the Markets
            </CardTitle>
            <CardDescription className="text-lg text-pretty max-w-2xl mx-auto">
              Get our weekly market insights, financial planning tips, and exclusive investment opportunities delivered
              directly to your inbox.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <Input type="email" placeholder="Enter your email address" className="flex-1" />
              <Button size="lg" className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <TrendingUp className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Market Updates</h4>
                <p className="text-sm text-muted-foreground">Weekly market analysis and trends</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Expert Insights</h4>
                <p className="text-sm text-muted-foreground">Exclusive commentary from our team</p>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp className="h-6 w-6 text-primary mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Planning Tips</h4>
                <p className="text-sm text-muted-foreground">Actionable financial strategies</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-6">
              No spam, ever. Unsubscribe at any time. We respect your privacy.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
