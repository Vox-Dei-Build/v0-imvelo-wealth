import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Clock, ShieldCheck } from "lucide-react"
import Link from "next/link"

const details = [
  { label: "FSP Licence", value: "49944", icon: ShieldCheck },
  { label: "Office Hours", value: "09:00-17:00", icon: Clock },
  { label: "Office", value: "Bryanston East", icon: Building2 },
]

export function ContactCTA() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 rounded-md border border-border bg-background p-8 md:grid-cols-[1fr_1.1fr] md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Confirmed details</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground">
                Keep the next step specific and traceable.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                For this review pass, the contact experience uses confirmed phone, email, registration, and office
                details only.
              </p>
              <Button size="lg" asChild className="mt-8 group rounded-md">
                <Link href="/consultation">
                  Request Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
              {details.map((detail) => (
                <div key={detail.label} className="bg-card p-6">
                  <detail.icon className="h-5 w-5 text-primary" />
                  <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {detail.label}
                  </div>
                  <div className="mt-3 text-lg font-semibold text-foreground">{detail.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
