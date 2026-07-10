import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const differences = [
  {
    factor: "The starting point",
    productLed: "A product or provider",
    imvelo: "Your life and priorities",
  },
  {
    factor: "The view",
    productLed: "One need in isolation",
    imvelo: "Every connected decision",
  },
  {
    factor: "The relationship",
    productLed: "Ends with implementation",
    imvelo: "Evolves as your life changes",
  },
]

export function FeeComparisonTable() {
  return (
    <section className="relative overflow-hidden bg-[#073844] py-24 text-white sm:py-32">
      <div className="absolute -right-32 top-12 h-[28rem] w-[28rem] rounded-full border border-white/8" aria-hidden="true" />
      <div className="absolute -right-12 top-40 h-72 w-72 rounded-full border border-[#8FD3DD]/18" aria-hidden="true" />

      <div className="relative mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-20" data-aos="fade-up">
          <div>
            <p className="section-kicker text-[#8FD3DD]">Why the approach matters</p>
            <h2 className="mt-6 text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
              The difference is not access. It is the order.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            Products come after your circumstances are understood—not before.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.035]" data-aos="fade-up" data-aos-delay="100">
          <div className="hidden grid-cols-[0.62fr_0.82fr_1fr] border-b border-white/15 bg-white/[0.045] px-8 py-6 md:grid">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/45">The question</p>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/45">Product-led conversation</p>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#8FD3DD]">Planning-led with Imvelo</p>
          </div>

          <div className="divide-y divide-white/12">
            {differences.map((item) => (
              <div key={item.factor} className="grid gap-5 px-6 py-7 sm:px-8 md:grid-cols-[0.62fr_0.82fr_1fr] md:items-start md:gap-8 md:py-8">
                <p className="text-sm font-bold text-white md:text-base">{item.factor}</p>
                <div>
                  <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/35 md:hidden">Product-led</p>
                  <p className="text-sm leading-7 text-white/48">{item.productLed}</p>
                </div>
                <div>
                  <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#8FD3DD] md:hidden">Imvelo</p>
                  <p className="flex items-start gap-3 text-sm font-medium leading-7 text-white">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8FD3DD] text-[#005166]">
                      <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    {item.imvelo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between" data-aos="fade-up">
          <p className="max-w-2xl text-sm leading-7 text-white/52">
            Scope and costs are confirmed before advice work begins.
          </p>
          <Button asChild size="lg" className="group h-13 shrink-0 rounded-full bg-white px-7 font-bold text-[#005166] hover:bg-[#EAF4F6]">
            <Link href="/consultation">
              Start with the full picture
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
