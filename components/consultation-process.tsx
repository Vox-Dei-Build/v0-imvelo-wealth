import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calendar, Users, TrendingUp, FileText } from "lucide-react"

const processSteps = [
  {
    icon: Calendar,
    title: "Send the Request",
    description: "Share your details, preferred time window, and the decisions you want to discuss.",
  },
  {
    icon: Users,
    title: "Discovery Meeting",
    description: "We'll discuss your goals, current situation, and financial concerns in detail.",
  },
  {
    icon: FileText,
    title: "Custom Proposal",
    description: "Imvelo can outline the appropriate advisory scope and next steps after discovery.",
  },
  {
    icon: TrendingUp,
    title: "Implementation",
    description: "Approved recommendations can then be coordinated, documented, and reviewed over time.",
  },
]

const benefits = [
  "Goals, priorities, and current constraints",
  "Existing investments, policies, and retirement structures",
  "Risk, estate, and family continuity considerations",
  "Business or employee-benefit planning needs",
  "Possible advisory scope and next documentation",
  "Contact and follow-up preferences",
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
          <CardTitle className="text-xl font-serif">Verified Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-1">Licensed FSP</h4>
              <p className="text-sm text-muted-foreground">
                FSP Licence Number 49944.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Registered Company</h4>
              <p className="text-sm text-muted-foreground">
                Company Registration 2018/195882/07.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
              <p className="text-sm text-muted-foreground">
                Monday to Friday, 09:00-17:00.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
