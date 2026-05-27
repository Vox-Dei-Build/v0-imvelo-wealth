import { ExternalLink, FileCheck2, Newspaper, Scale } from "lucide-react"

const trustItems = [
  {
    title: "Regulatory identity",
    detail: "FSP Licence Number 49944 and Company Registration 2018/195882/07 are now surfaced consistently.",
    icon: Scale,
  },
  {
    title: "Compliance documents",
    detail: "PAIA, POPIA, treating-customers-fairly and conflict-management material should remain easy to reach.",
    icon: FileCheck2,
  },
  {
    title: "Public financial education",
    detail: "Palesa and Siba have existing public commentary and media material that can support credibility.",
    icon: Newspaper,
  },
]

const complianceLinks = [
  {
    label: "COI Management Policy",
    href: "https://imvelowealth.co.za/wp-content/uploads/2022/09/COI-Management-Policy_2022-Update-Imvelo-Wealth.pdf",
  },
  {
    label: "PAIA Manual",
    href: "https://imvelowealth.co.za/wp-content/uploads/2022/09/PAIA-Manual_2022-Update-Imvelo-Wealth-1.pdf",
  },
  {
    label: "POPIA Privacy Statement",
    href: "https://imvelowealth.co.za/wp-content/uploads/2022/09/POPIA-Data-Private-Policy-Statement-Imvelo-Wealth-Solutions-1.pdf",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-[#0b2025] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c8a85a]">Trust architecture</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Trust should be visible before it is requested.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              The strongest current proof points are verifiable: regulation, company identity, compliance material, and
              visible advisory presence through public financial education.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-md border border-white/12 bg-white/12 sm:grid-cols-3">
            {trustItems.map((item) => (
              <div key={item.title} className="bg-white/[0.04] p-6">
                <item.icon className="h-6 w-6 text-[#c8a85a]" aria-hidden="true" />
                <h3 className="mt-7 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/12 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-xl text-sm leading-7 text-white/65">
              Compliance references currently point to Imvelo’s existing public documents and can be re-hosted or
              refreshed before final launch.
            </p>
            <div className="flex flex-wrap gap-3">
              {complianceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/16 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white"
                >
                  {link.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
