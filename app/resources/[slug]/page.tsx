import { notFound } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { JsonLd } from "@/components/seo-json-ld"
import { articleJsonLd, breadcrumbJsonLd, getPageSeoBySlug, metadataForPath, siteConfig } from "@/lib/seo"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import type { Metadata } from "next"

interface Article {
  slug: string
  category: string
  title: string
  description: string
  readTime: string
  date: string
  body: React.ReactNode
}

const articles: Article[] = [
  {
    slug: "two-pot-retirement-system",
    category: "Retirement Planning",
    title: "The Two-Pot System Explained: What Every South African Needs to Know",
    description:
      "From 1 September 2024, South Africa's two-pot retirement system fundamentally changed how you access your savings. Here is what it means for your RA, pension fund, and provident fund — and what you should do now.",
    readTime: "9 min read",
    date: "March 2025",
    body: (
      <div className="space-y-6">
        <p>
          On 1 September 2024, the South African retirement industry was restructured in the most significant way since the Pension
          Funds Act. The two-pot system — officially the <em>Revenue Laws Amendment Act</em> — splits all future retirement fund
          contributions into two distinct components: a savings pot and a retirement pot. Understanding how each works, and what
          the rules mean for your specific funds, is not optional. It is financially critical.
        </p>

        <h2 className="text-xl font-serif font-bold text-foreground mt-8">How the Split Works</h2>
        <p>
          From 1 September 2024, every rand you contribute to a qualifying retirement fund — a retirement annuity (RA), pension
          fund, or provident fund — is divided as follows: one-third goes into your <strong>savings pot</strong>, and two-thirds
          goes into your <strong>retirement pot</strong>. Contributions made before the implementation date were not retroactively
          split. They sit in a separate <strong>vested pot</strong> and continue to be governed by the old rules applicable to
          that fund type.
        </p>
        <p>
          This means you are now effectively managing three buckets if you contributed to a fund before September 2024. The vested
          pot follows old rules (including the pre-retirement withdrawal rules you may be familiar with). The savings and
          retirement pots follow the new framework exclusively.
        </p>

        <h2 className="text-xl font-serif font-bold text-foreground mt-8">The Savings Pot: Accessible, But at a Cost</h2>
        <p>
          The savings pot is designed to prevent retrenchment-driven cashing out of entire retirement funds — a behaviour that
          historically eroded long-term savings. You may make <strong>one withdrawal per tax year</strong> from your savings pot,
          subject to a minimum withdrawal of R2,000. There is no cap on the amount you can withdraw (beyond what has accumulated).
        </p>
        <p>
          The critical point that many people overlook: withdrawals from the savings pot are taxed at your{" "}
          <strong>marginal income tax rate</strong> — not the favourable retirement lump sum tables used at retirement. For a
          household earning R600,000 per year, the marginal rate is 36%. A R50,000 emergency withdrawal becomes R32,000 after
          tax. The convenience of access comes at a meaningful price.
        </p>
        <p>
          In addition, your fund administrator charges an administrative fee for each withdrawal transaction. These fees vary by
          fund but are typically deducted from the withdrawal amount.
        </p>

        <h2 className="text-xl font-serif font-bold text-foreground mt-8">The Retirement Pot: Non-Negotiable Until Retirement</h2>
        <p>
          The two-thirds that accumulates in your retirement pot is locked until you reach retirement age — typically 55, though
          this depends on your fund rules. At retirement, the retirement pot must be used to purchase an annuity (a pension
          income). You cannot take it as a lump sum. This is the structural backbone of the reform: it guarantees that the
          majority of your retirement savings is ultimately converted into income.
        </p>
        <p>
          The compounding effect of leaving the retirement pot untouched is significant. Two-thirds of your contributions growing
          uninterrupted over a 20–30 year accumulation phase is the engine of your retirement security.
        </p>

        <h2 className="text-xl font-serif font-bold text-foreground mt-8">What You Should Do Now</h2>
        <p>
          Review your fund statements to understand how your existing vested pot is structured. If you have multiple retirement
          funds, the one-third / two-thirds split applies separately to each — consolidating funds may simplify administration,
          though consolidation decisions carry their own tax implications.
        </p>
        <p>
          If you are approaching retirement within the next five years, the interaction between the two-pot rules and your chosen
          retirement date requires careful modelling. In some cases, the timing of retirement relative to savings pot
          withdrawals can reduce your total tax burden. Speak to a licensed financial adviser before making any withdrawals
          or changing your retirement date.
        </p>
        <p>
          Above all, treat the savings pot as an emergency mechanism — not as a supplementary income stream. Every withdrawal
          reduces the compounding base available for retirement and comes with an immediate tax cost that is very difficult
          to recover.
        </p>
      </div>
    ),
  },
  {
    slug: "estate-duty-guide",
    category: "Estate Planning",
    title: "Estate Duty in South Africa: A Plain-Language Guide for Families With Significant Assets",
    description:
      "South Africa's estate duty rate is 20% on dutiable estates up to R30 million, and 25% above that. Combined with capital gains tax on deemed disposals at death, an estate that looks straightforward can lose 30–40% of its value. Here is how to manage it.",
    readTime: "11 min read",
    date: "February 2025",
    body: (
      <div className="space-y-6">
        <p>
          Estate duty is one of South Africa's most misunderstood taxes. Many families assume it applies only to the ultra-wealthy,
          or that a will alone is sufficient protection. Neither assumption is correct. Estate duty applies to any South African
          resident whose dutiable estate exceeds the R3.5 million abatement — a threshold that includes assets people do not
          typically think of as "wealth", including life insurance proceeds, retirement fund payouts (in certain circumstances),
          and primary residences.
        </p>

        <h2 className="text-xl font-serif font-bold text-foreground mt-8">How Estate Duty Is Calculated</h2>
        <p>
          Estate duty is levied on the <em>dutiable amount of an estate</em>. The starting point is the gross value of all
          property of the deceased — South African and foreign assets for residents — from which allowable deductions are
          subtracted. The primary deduction is the <strong>abatement of R3.5 million</strong>, which applies to every estate.
          If a surviving spouse inherits all assets, the unused portion of the abatement can be rolled to their estate (the
          so-called "portability" of the abatement), effectively doubling the threshold for couples to R7 million.
        </p>
        <p>
          The rate structure: <strong>20% on dutiable estates up to R30 million</strong>, and{" "}
          <strong>25% on the portion above R30 million</strong>. This sounds manageable until you factor in capital gains tax
          (CGT) triggered at death.
        </p>

        <h2 className="text-xl font-serif font-bold text-foreground mt-8">The Double Hit: Estate Duty Plus Capital Gains Tax</h2>
        <p>
          At death, SARS deems every asset to have been disposed of at market value — triggering CGT on any accrued gain above
          the R300,000 death exclusion. The effective CGT rate for individuals is currently 18% on the gain (40% inclusion rate
          × maximum 45% marginal rate). This CGT liability is deductible from the estate for estate duty purposes, but the
          combined effect is still significant.
        </p>
        <p>
          Consider a property purchased for R1.5 million that is now worth R6 million. The R4.5 million gain (less the R300,000
          exclusion) produces a taxable gain of R4.2 million. At a 40% inclusion rate and 45% marginal rate, the CGT liability
          is approximately R756,000. That liability then reduces the dutiable estate for estate duty calculation — but the estate
          still faces both charges simultaneously. A family expecting to inherit a R10 million estate could face a combined
          tax bill exceeding R2 million, payable within 12 months of the date of death.
        </p>

        <h2 className="text-xl font-serif font-bold text-foreground mt-8">Structures That Legitimately Reduce Estate Duty</h2>
        <p>
          <strong>Retirement fund proceeds</strong> paid directly to a nominated beneficiary (not to the estate) are excluded
          from estate duty. This makes maximising retirement fund contributions one of the most efficient estate planning tools
          available to South Africans — the funds bypass estate duty entirely if correctly structured and nominated.
        </p>
        <p>
          <strong>Life insurance</strong> proceeds are generally included in the estate for duty purposes, but policies owned
          by a trust or by the beneficiary directly are excluded. The structuring of life cover ownership is therefore an
          important estate planning decision.
        </p>
        <p>
          <strong>Inter vivos trusts</strong> (set up during your lifetime) can remove asset growth from your personal estate.
          Assets sold to a trust at fair market value, with the purchase price left outstanding as a loan, freeze the estate
          duty exposure at the loan value — while future growth accumulates outside your personal estate. This technique has
          survived SARS scrutiny where implemented correctly, though it requires careful legal drafting and ongoing compliance.
        </p>
        <p>
          <strong>Spousal bequests</strong> are exempt from estate duty. Assets left to a surviving spouse do not form part of
          the dutiable estate — but they do not escape estate duty permanently; they simply defer it to the surviving spouse's
          estate. Couples with significant assets need to plan both estates, not just the first to die.
        </p>

        <h2 className="text-xl font-serif font-bold text-foreground mt-8">Liquidity: The Practical Problem</h2>
        <p>
          Even where the structures are correct, estates frequently face a liquidity crisis. Assets like property and business
          interests cannot be sold quickly, but the executor needs cash to pay estate duty within 12 months. Life insurance
          planned specifically to cover the estate duty and executor's fees (typically 3.5% plus VAT of gross estate value)
          is the standard solution. Without it, the executor may be forced to sell assets below market value under time pressure.
        </p>
        <p>
          Estate planning is not a once-off exercise. As your asset values grow, the structures that made sense at R5 million
          net worth may not be optimal at R15 million. A licensed financial adviser working with an estate attorney should review
          your estate plan every three to five years, or after any major asset acquisition or life event.
        </p>
      </div>
    ),
  },
  {
    slug: "offshore-allowances-south-africa",
    category: "Tax Planning",
    title: "Offshore Allowances for South Africans: Making Full Use of Your R1M Annual Transfer",
    description:
      "Every South African adult has a R1 million single discretionary allowance and a R10 million foreign capital allowance (with tax clearance). Used strategically, these allowances can meaningfully diversify your wealth outside rand-denominated assets.",
    readTime: "8 min read",
    date: "January 2025",
    body: (
      <div className="space-y-6">
        <p>
          South Africa's exchange control framework gives every adult resident two distinct mechanisms to invest offshore.
          Understanding the difference — and the compliance obligations attached to each — is essential before moving any funds
          across borders.
        </p>
        <h2 className="text-xl font-serif font-bold text-foreground mt-8">The Single Discretionary Allowance (SDA)</h2>
        <p>
          Each South African resident aged 18 or older may transfer up to <strong>R1 million per calendar year</strong> offshore
          without prior SARS tax clearance. This is the Single Discretionary Allowance. It resets on 1 January each year and
          is not cumulative — unused allowance from 2024 cannot be carried into 2025.
        </p>
        <p>
          The SDA covers a wide range of purposes: foreign investments, travel, gifts, maintenance, and study expenses abroad.
          For investment purposes, the R1 million can be invested into global unit trusts, exchange-traded funds (ETFs),
          offshore brokerage accounts, or foreign endowments — all without an approval process.
        </p>
        <h2 className="text-xl font-serif font-bold text-foreground mt-8">The Foreign Capital Allowance (FCA)</h2>
        <p>
          For larger offshore allocations, the <strong>R10 million Foreign Capital Allowance</strong> is available. This
          requires a SARS tax compliance status (formerly called a "tax clearance certificate"), confirming that you are in
          good standing with SARS. The FCA can be used in full each year, making it possible for a household to invest up to
          R11 million offshore annually (R1M SDA + R10M FCA per adult).
        </p>
        <p>
          Importantly, the FCA is for capital investment only — it cannot be used for current expenses. The SARS tax compliance
          status is applied for online through eFiling and is typically issued within 21 working days if your tax affairs
          are in order.
        </p>
        <h2 className="text-xl font-serif font-bold text-foreground mt-8">Reporting and Tax Obligations</h2>
        <p>
          South African residents are taxed on their worldwide income. Offshore investment income — dividends, interest, and
          capital gains — must be declared on your annual tax return. Foreign tax credits apply where double taxation
          agreements exist. Maintaining proper records of the original rand cost of offshore investments is critical for
          accurate CGT calculation when assets are eventually sold and proceeds repatriated.
        </p>
        <p>
          Failing to declare offshore assets or income constitutes a serious SARS compliance breach. The Voluntary Disclosure
          Programme (VDP) is available for taxpayers who wish to regularise historical non-disclosure, but it should be
          approached with legal and tax advice.
        </p>
        <h2 className="text-xl font-serif font-bold text-foreground mt-8">Strategic Considerations</h2>
        <p>
          Offshore diversification is not purely about investment returns — it is also about currency diversification and
          geopolitical risk management. A portfolio with meaningful rand exposure is exposed to rand depreciation, which has
          averaged approximately 6–8% per annum against major currencies over the past two decades. Investing a portion of
          your wealth in hard currency assets hedges this structural risk, independent of what those assets return in their
          local currency.
        </p>
        <p>
          The optimal offshore allocation depends on your overall asset base, income needs, time horizon, and existing
          offshore exposure through your retirement funds. A fee-transparent adviser can model the rand cost and expected
          return scenarios specific to your circumstances before you commit funds.
        </p>
      </div>
    ),
  },
  {
    slug: "regulation-28-retirement-portfolio",
    category: "Investment Strategy",
    title: "Understanding Regulation 28: How It Shapes Your Retirement Portfolio",
    description:
      "Regulation 28 of the Pension Funds Act limits how much your retirement savings can be invested in equities, offshore assets, and alternative investments. Here is a clear breakdown of the rules and how a fee-transparent adviser structures portfolios within — and alongside — Reg 28 constraints.",
    readTime: "7 min read",
    date: "December 2024",
    body: (
      <div className="space-y-6">
        <p>
          Most South Africans contributing to a retirement annuity, pension fund, or provident fund are investing within the
          constraints of Regulation 28 of the Pension Funds Act — without realising it. These rules limit the types and
          concentrations of assets that retirement funds may hold, and they have a direct impact on the portfolio construction
          choices available to your adviser and fund manager.
        </p>
        <h2 className="text-xl font-serif font-bold text-foreground mt-8">The Key Limits</h2>
        <p>
          The most consequential Regulation 28 limits are:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Equities:</strong> Maximum 75% of the portfolio may be held in listed equities (domestic and offshore combined).</li>
          <li><strong>Offshore assets:</strong> Maximum 45% may be invested in assets outside South Africa. This was increased from 30% in 2022 — a meaningful liberalisation that many retirement funds have not yet fully utilised.</li>
          <li><strong>Property:</strong> Maximum 25% may be held in property (listed and unlisted).</li>
          <li><strong>Hedge funds and private equity:</strong> Maximum 10% combined.</li>
          <li><strong>Unlisted instruments:</strong> Maximum 15% of any single issuer; maximum 35% in unlisted instruments overall.</li>
        </ul>
        <h2 className="text-xl font-serif font-bold text-foreground mt-8">Practical Implications</h2>
        <p>
          The 45% offshore allowance is the most strategically significant limit for most investors today. Prior to the 2022
          increase, retirement funds were constrained to 30% offshore — limiting the rand-hedging potential of the retirement
          portfolio. Now, a well-structured retirement portfolio can have nearly half its assets in global equities, global bonds,
          or foreign property, providing meaningful currency diversification within the tax-advantaged retirement wrapper.
        </p>
        <p>
          The 75% equity limit means that a growth-oriented retirement portfolio can still maintain a predominantly equity
          allocation — but the cap prevents the all-equity allocation that some aggressive investors might prefer. For investors
          within 5–10 years of retirement, this constraint is generally appropriate from a risk management perspective, as it
          enforces some level of diversification.
        </p>
        <h2 className="text-xl font-serif font-bold text-foreground mt-8">What Lies Outside Reg 28</h2>
        <p>
          Assets held outside retirement funds — in a discretionary investment account, a living annuity post-retirement, or
          a trust — are not subject to Regulation 28 constraints. This is where a complementary investment strategy can add
          flexibility. If your goals require higher offshore exposure or alternative asset classes than Regulation 28 permits
          within your RA, those exposures can be built in the non-retirement portion of your portfolio.
        </p>
        <p>
          A coordinated approach — treating your retirement fund and discretionary investments as a single portfolio with
          different tax and regulatory profiles — is more effective than managing each in isolation. This is where a
          fee-transparent adviser, who sees your full financial picture, adds the most value.
        </p>
      </div>
    ),
  },
  {
    slug: "trusts-south-africa",
    category: "Family Wealth",
    title: "Trusts in South Africa: When They Make Sense and When They Don't",
    description:
      "A trust is not a tax shelter. SARS has closed most of the historical loopholes. But a well-structured inter vivos trust still serves critical purposes: protecting assets from personal liability, ring-fencing family wealth, and managing estate duty exposure.",
    readTime: "10 min read",
    date: "November 2024",
    body: (
      <div className="space-y-6">
        <p>
          The trust has a complicated reputation in South Africa. For decades, it was marketed primarily as a tax planning
          tool — a way to shift income to lower-margined family members and reduce estate duty. SARS has systematically closed
          most of those avenues. Section 7 of the Income Tax Act attributes trust income back to the donor in many circumstances.
          The conduit principle has been restricted. Trusts are now taxed at a flat 45% on income retained within the trust —
          higher than the maximum individual rate.
        </p>
        <p>
          So is the trust still useful? Yes — but for different reasons than the sales pitch of a generation ago.
        </p>
        <h2 className="text-xl font-serif font-bold text-foreground mt-8">Asset Protection</h2>
        <p>
          Assets held in a properly structured inter vivos trust are not personal assets of the trustees or beneficiaries.
          If you face personal insolvency — a business failure, professional liability claim, or divorce — trust assets are
          generally not available to creditors, provided the trust was established well before the insolvency and was not
          funded in a way that constitutes a disposition to defraud creditors.
        </p>
        <p>
          For business owners, professionals with significant liability exposure (doctors, architects, directors), and high-net-worth
          individuals operating in litigious environments, this ring-fencing function is genuinely valuable.
        </p>
        <h2 className="text-xl font-serif font-bold text-foreground mt-8">Estate Duty Management</h2>
        <p>
          The "loan account" trust structure remains one of the most effective — and legally sound — estate duty reduction
          mechanisms available. Here is how it works: you sell an appreciating asset (typically property or a private equity
          holding) to a trust at fair market value. The trust pays you over time via a loan account. The asset then grows
          within the trust, not within your personal estate.
        </p>
        <p>
          Your estate includes the outstanding loan account balance (which diminishes as the trust repays you), not the full
          current market value of the asset. The growth that has occurred above the original sale price has effectively been
          transferred to the trust — and to future beneficiaries — outside your estate, reducing future estate duty exposure.
        </p>
        <p>
          This structure requires proper legal documentation, annual loan account reviews, and compliance with Transfer Duty
          rules on the initial sale. Done incorrectly, SARS can challenge the transaction. Done correctly, it is a durable
          wealth transfer mechanism.
        </p>
        <h2 className="text-xl font-serif font-bold text-foreground mt-8">Generational Wealth and Continuity</h2>
        <p>
          A trust does not die. Assets held in a trust can be preserved across generations without the disruption of winding
          up an estate — multiple times — as each generation passes. For family businesses, investment portfolios, or property
          assets intended to stay within a family over generations, the trust provides continuity and governance that a will alone
          cannot provide.
        </p>
        <h2 className="text-xl font-serif font-bold text-foreground mt-8">When a Trust Is Not the Right Answer</h2>
        <p>
          Trusts are expensive to establish and administer. An independent trustee (strongly recommended for creditor protection
          and governance) costs R5,000–R15,000 per annum. Annual financial statements, trustee meetings, and resolutions are
          required to maintain the trust's legal integrity. For a modest asset base, the administration cost outweighs the benefit.
        </p>
        <p>
          The general threshold: an inter vivos trust is worth considering once your personal estate exceeds R10 million in
          appreciating assets, or where you have a specific liability exposure or family continuity need. Below that level,
          a well-structured will, adequate life cover, and correct retirement fund nominations typically deliver better
          outcomes at lower cost.
        </p>
      </div>
    ),
  },
  {
    slug: "emergency-fund-alternatives",
    category: "Financial Planning",
    title: "Why Your Emergency Fund Should Not Be in a Savings Account",
    description:
      "A savings account earning 4% nominal is losing real value at South Africa's current inflation rate. Money market funds, 32-day notice accounts, and flexible income unit trusts offer materially better returns with near-identical liquidity.",
    readTime: "6 min read",
    date: "October 2024",
    body: (
      <div className="space-y-6">
        <p>
          The standard advice — keep three to six months of expenses in an emergency fund — is sound. The standard implementation
          of that advice — a standard savings account at your primary bank — is not. South African bank savings accounts
          typically pay between 3.5% and 5.5% nominal interest per annum. With CPI running above 5%, the real return on that
          account is negative to flat. Your emergency fund is shrinking in real terms every month it sits untouched.
        </p>
        <h2 className="text-xl font-serif font-bold text-foreground mt-8">What an Emergency Fund Needs to Do</h2>
        <p>
          An emergency fund has two non-negotiable requirements: it must be available quickly (within one to five business days),
          and it must not lose its nominal value. Beyond those requirements, there is no reason it should not earn a competitive
          return. The question is simply: what instruments offer near-immediate liquidity with better yields than a savings account?
        </p>
        <h2 className="text-xl font-serif font-bold text-foreground mt-8">Money Market Funds</h2>
        <p>
          A money market unit trust invests in short-term, highly rated fixed income instruments: treasury bills, call deposits,
          NCDs (negotiable certificates of deposit) and similar instruments. Returns track the short-term interest rate environment
          closely — currently in the range of 8–9% for well-managed South African money market funds. Capital is not guaranteed
          (it is not a bank deposit), but South African money market funds have not broken the rand (lost capital) in modern memory.
        </p>
        <p>
          Access is typically same-day or next-business-day for most retail platforms. Regulatory requirements limit the weighted
          average maturity of money market portfolios to 120 days, which keeps the liquidity risk extremely low. For an emergency
          fund, this is a materially better vehicle than a savings account, with minimal additional risk.
        </p>
        <h2 className="text-xl font-serif font-bold text-foreground mt-8">32-Day Notice Accounts</h2>
        <p>
          Several South African banks (and some non-bank providers) offer 32-day notice accounts paying significantly above
          savings account rates — typically prime minus 1% to prime flat, depending on the balance and provider. Technically,
          you must give 32 days' notice before withdrawing, but in practice, most providers allow early withdrawal with a
          penalty equivalent to 32 days of interest. The net return, even with a penalty, is often higher than a standard
          savings account rate.
        </p>
        <p>
          For an emergency fund, the 32-day notice structure is manageable if you maintain a secondary, immediately accessible
          float (one month of expenses in a transactional account) alongside the larger notice account. The notice account
          earns the higher rate; the float covers any immediate needs while you serve the notice period.
        </p>
        <h2 className="text-xl font-serif font-bold text-foreground mt-8">The Tax Consideration</h2>
        <p>
          Interest income from money market funds and notice accounts is subject to income tax. The first R23,800 of interest
          per annum (R34,500 for those over 65) is exempt. Above that threshold, interest is taxed at your marginal rate.
          For comparison, bank savings account interest is taxed identically — so the tax treatment does not change the
          relative advantage of higher-yielding alternatives.
        </p>
        <p>
          Reviewing your emergency fund placement is a simple, low-effort financial improvement. Moving R150,000 from a 4%
          savings account to an 8.5% money market fund saves approximately R6,750 per annum in lost returns — without any
          meaningful increase in risk or reduction in availability.
        </p>
      </div>
    ),
  },
]

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}
  return metadataForPath(`/resources/${params.slug}`)
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) notFound()
  const pageSeo = getPageSeoBySlug(`article-${article.slug}`)

  return (
    <div className="min-h-screen bg-background">
      {pageSeo ? (
        <>
          <JsonLd data={articleJsonLd(pageSeo)} />
          <JsonLd
            data={breadcrumbJsonLd([
              { name: siteConfig.name, path: "/" },
              { name: "Resources", path: "/resources" },
              { name: article.title, path: `/resources/${article.slug}` },
            ])}
          />
        </>
      ) : null}
      <Navigation />
      <main>
        {/* Article header */}
        <section className="py-16 sm:py-20 border-b border-border/40 bg-muted/20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="mb-6">
              <Button variant="ghost" size="sm" asChild className="-ml-2 text-muted-foreground hover:text-foreground">
                <Link href="/resources">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Resources
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {article.category}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
              </div>
            </div>
            <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              {article.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">{article.description}</p>
            <p className="mt-4 text-xs text-muted-foreground">
              This article is for educational purposes only and does not constitute personalised financial advice under
              the FAIS Act. Consult a licensed financial services provider for advice specific to your circumstances.
            </p>
          </div>
        </section>

        {/* Article body */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-sm leading-7 text-foreground/80">
            {article.body}
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="py-12 sm:py-16 border-t border-border/40 bg-muted/20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Want advice specific to your situation?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              General principles are a starting point. A licensed, fee-transparent adviser can model how these rules and
              structures apply to your specific assets, goals, and tax position.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <Link href="/consultation">Book a Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resources">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  More Resources
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
