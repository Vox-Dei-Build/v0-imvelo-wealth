import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calendar, Users, TrendingUp, FileText } from "lucide-react"

const processSteps = [
  {
    icon: Calendar,
    title: "Schedule Your Call",
    description: "Book a convenient time for your complimentary 60-minute consultation.",
  },
  {
    icon: Users,
    title: "Discovery Meeting",
    description: "We'll discuss your goals, current situation, and financial concerns in detail.",
  },
  {
    icon: FileText,
    title: "Custom Proposal",
    description: "Receive a personalized financial strategy tailored to your unique needs.",
  },
  {
    icon: TrendingUp,
    title: "Implementation",
    description: "Begin executing your wealth-building strategy with our ongoing support.",
  },
]

const benefits = [
  "Comprehensive financial health assessment",
  "Personalized investment recommendations",
  "Tax optimization strategies",
  "Estate planning guidance",
  "Retirement planning roadmap",
  "Risk management review",
]

export function ConsultationProcess() {
  return (
    <div className="space-y-8">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl font-serif">What to Expect</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-xl font-serif">What We'll Cover</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl font-serif">Why Choose Imvelo?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-1">Licensed & Regulated</h4>
              <p className="text-sm text-muted-foreground">
                FSP licensed and regulated by the FSCA for your protection.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Proven Track Record</h4>
              <p className="text-sm text-muted-foreground">
                Over R2.5 billion in assets under management with 500+ satisfied clients.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Holistic Approach</h4>
              <p className="text-sm text-muted-foreground">
                We consider all aspects of your financial life for comprehensive planning.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
