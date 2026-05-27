import { CheckCircle, XCircle, MinusCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Verdict = "yes" | "no" | "partial"

interface Row {
  criterion: string
  description: string
  productLed: Verdict
  imvelo: Verdict
}

const rows: Row[] = [
  {
    criterion: "Planning before product selection",
    description: "The advice starts with your goals, obligations, risks, and time horizon.",
    productLed: "partial",
    imvelo: "yes",
  },
  {
    criterion: "Provider comparison",
    description: "Options can be compared across established providers where appropriate.",
    productLed: "partial",
    imvelo: "yes",
  },
  {
    criterion: "Clear disclosure of costs and conflicts",
    description: "Fees, advice scope, and potential conflicts should be visible before implementation.",
    productLed: "partial",
    imvelo: "yes",
  },
  {
    criterion: "Written needs analysis",
    description: "Recommendations should be backed by a documented understanding of your circumstances.",
    productLed: "partial",
    imvelo: "yes",
  },
  {
    criterion: "Integrated financial plan",
    description: "Investment, protection, retirement, estate, and business needs are considered together.",
    productLed: "partial",
    imvelo: "yes",
  },
  {
    criterion: "Regulated advisory environment",
    description: "Advice is provided under an FSCA-licensed Financial Services Provider.",
    productLed: "partial",
    imvelo: "yes",
  },
  {
    criterion: "Ongoing review logic",
    description: "The plan can be reviewed as life, markets, tax, and legislation change.",
    productLed: "partial",
    imvelo: "yes",
  },
]

function VerdictIcon({ v }: { v: Verdict }) {
  if (v === "yes") return <CheckCircle className="h-5 w-5 text-green-600 mx-auto" aria-label="Yes" />
  if (v === "no") return <XCircle className="h-5 w-5 text-destructive mx-auto" aria-label="No" />
  return <MinusCircle className="h-5 w-5 text-amber-500 mx-auto" aria-label="Partial" />
}

export function FeeComparisonTable() {
  return (
    <section className="py-24 sm:py-32 bg-muted/20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Why it matters</Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Product-led Advice vs. Planning-led Advice
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            The value of Imvelo is not only access to products. It is the discipline of putting the client’s full
            financial picture before any implementation decision.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-6 py-4 font-semibold text-foreground w-1/2">What to look for</th>
                <th className="text-center px-4 py-4 font-semibold text-muted-foreground w-1/4">
                  Product-led
                </th>
                <th className="text-center px-4 py-4 font-semibold text-primary w-1/4">
                  Imvelo Wealth
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.criterion}
                  className={`border-b border-border/50 ${i % 2 === 0 ? "bg-background" : "bg-muted/10"}`}
                >
                  <td className="px-6 py-4">
                    <p className="font-medium text-foreground">{row.criterion}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{row.description}</p>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <VerdictIcon v={row.productLed} />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <VerdictIcon v={row.imvelo} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center gap-6 mt-4 text-xs text-muted-foreground px-1">
          <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-green-600" /> Core part of the approach</span>
          <span className="flex items-center gap-1.5"><MinusCircle className="h-3.5 w-3.5 text-amber-500" /> Varies by provider or engagement</span>
          <span className="flex items-center gap-1.5"><XCircle className="h-3.5 w-3.5 text-destructive" /> Typically absent</span>
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" asChild>
            <Link href="/consultation">Request a Planning Conversation</Link>
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            Scope and fees should be confirmed before advice work proceeds.
          </p>
        </div>
      </div>
    </section>
  )
}
