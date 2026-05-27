import type { Metadata, MetadataRoute } from "next"

export type PageSeo = {
  path: string
  slug: string
  title: string
  description: string
  keywords: string[]
  imageTitle?: string
  imageKicker?: string
  imageDescription?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  section?: string
  includeInSitemap?: boolean
  index?: boolean
  priority?: number
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"]
}

const siteUrl = normalizeUrl(
  process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://imvelowealth.co.za"),
)

export const siteConfig = {
  name: "Imvelo Wealth Solutions",
  legalName: "Imvelo Wealth Solutions (Pty) Ltd",
  url: siteUrl,
  locale: "en_ZA",
  twitterHandle: "@ImveloWealth",
  email: "info@imvelowealth.co.za",
  phone: "+27 10 109 5097",
  address: {
    street: "EPPF Office Park, 24 Georgian Cres E",
    locality: "Bryanston East",
    region: "Johannesburg",
    postalCode: "2152",
    country: "ZA",
  },
  defaultKeywords: [
    "financial planning South Africa",
    "wealth management South Africa",
    "FSCA licensed financial adviser",
    "Johannesburg financial adviser",
    "estate planning South Africa",
    "retirement planning South Africa",
  ],
}

const commonModifiedTime = "2026-05-27T00:00:00+02:00"

export const pages: PageSeo[] = [
  {
    path: "/",
    slug: "home",
    title: "Imvelo Wealth Solutions | Financial Planning & Wealth Management in South Africa",
    description:
      "FSCA-licensed financial advisers helping South African families and business owners plan, protect, invest, and transfer wealth with clear, planning-led advice.",
    keywords: [
      "Imvelo Wealth Solutions",
      "financial planning South Africa",
      "wealth management South Africa",
      "FSCA licensed financial advisers",
      "Johannesburg wealth management",
      "generational wealth planning",
    ],
    imageTitle: "Planning-led wealth advice",
    imageKicker: "Imvelo Wealth Solutions",
    imageDescription: "FSCA-licensed guidance for South African families and business owners.",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    slug: "about",
    title: "About Imvelo Wealth Solutions | FSCA-Licensed Financial Advisers",
    description:
      "Meet Imvelo Wealth Solutions, an FSCA-licensed South African advisory practice focused on financial planning, protection, investment strategy, and generational wealth.",
    keywords: [
      "about Imvelo Wealth Solutions",
      "FSCA licensed financial advisers",
      "South African advisory practice",
      "CFP financial planner South Africa",
      "Bryanston financial advisers",
    ],
    imageTitle: "About Imvelo",
    imageKicker: "FSCA FSP 49944",
    imageDescription: "A South African advisory practice built around long-term financial decisions.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services",
    slug: "services",
    title: "Financial Planning Services in South Africa | Imvelo Wealth Solutions",
    description:
      "Explore financial planning, estate planning, retirement benefit counselling, employee benefits, financial coaching, and business assurance services.",
    keywords: [
      "financial planning services South Africa",
      "estate planning services",
      "retirement benefit counselling",
      "employee benefits advice",
      "business assurance South Africa",
      "financial coaching South Africa",
    ],
    imageTitle: "Financial planning services",
    imageKicker: "Planning, protection, investment",
    imageDescription: "Advice across personal wealth, family wealth, and business continuity.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services/financial-planning",
    slug: "service-financial-planning",
    title: "Financial Planning Services | Imvelo Wealth Solutions",
    description:
      "Goal-based financial planning for South Africans, covering cash flow, investments, risk, tax considerations, implementation support, and ongoing review.",
    keywords: [
      "financial planning services",
      "goal based financial planning",
      "investment strategy South Africa",
      "cash flow planning",
      "tax planning South Africa",
    ],
    imageTitle: "Financial Planning",
    imageKicker: "Personal wealth strategy",
    imageDescription: "A practical roadmap for income, investments, protection, and long-term goals.",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/services/estate-planning",
    slug: "service-estate-planning",
    title: "Estate Planning for South African Families | Imvelo Wealth Solutions",
    description:
      "Estate planning guidance for South African families, including wills, trust structures, estate duty exposure, beneficiary nominations, and fiduciary coordination.",
    keywords: [
      "estate planning South Africa",
      "estate duty South Africa",
      "will drafting review",
      "trust structures South Africa",
      "beneficiary nominations",
    ],
    imageTitle: "Estate Planning",
    imageKicker: "Legacy and continuity",
    imageDescription: "Plan how wealth is protected, transferred, and administered.",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/services/employee-benefits",
    slug: "service-employee-benefits",
    title: "Employee Benefits for South African Businesses | Imvelo Wealth Solutions",
    description:
      "Employee benefit structures for South African businesses, including key employee retention plans, group risk cover, benefit education, and annual reviews.",
    keywords: [
      "employee benefits South Africa",
      "key employee retention schemes",
      "group risk cover",
      "corporate financial wellness",
      "business employee benefits advice",
    ],
    imageTitle: "Employee Benefits",
    imageKicker: "Business advisory",
    imageDescription: "Benefit structures that support retention, protection, and employee financial resilience.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services/retirement-counselling",
    slug: "service-retirement-counselling",
    title: "Retirement Benefit Counselling | Imvelo Wealth Solutions",
    description:
      "Independent retirement benefit counselling for South Africans leaving employment or retiring, including preservation funds, annuity choices, tax modelling, and two-pot system guidance.",
    keywords: [
      "retirement benefit counselling",
      "living annuity South Africa",
      "life annuity South Africa",
      "preservation fund advice",
      "two pot retirement system advice",
    ],
    imageTitle: "Retirement Benefit Counselling",
    imageKicker: "Retirement decisions",
    imageDescription: "Independent guidance on preservation, annuities, tax, and retirement income choices.",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/services/financial-coaching",
    slug: "service-financial-coaching",
    title: "Financial Coaching & Wellness Programmes | Imvelo Wealth Solutions",
    description:
      "Financial coaching for individuals and corporate teams, covering budgeting, debt management, credit health, emergency funds, and everyday financial behaviour.",
    keywords: [
      "financial coaching South Africa",
      "financial wellness programmes",
      "budget coaching",
      "debt management coaching",
      "credit score improvement South Africa",
    ],
    imageTitle: "Financial Coaching",
    imageKicker: "Financial wellness",
    imageDescription: "Practical coaching for budgeting, debt, credit health, and everyday money decisions.",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/services/business-assurance",
    slug: "service-business-assurance",
    title: "Business Assurance for South African Business Owners | Imvelo Wealth Solutions",
    description:
      "Business assurance planning for South African business owners, including buy-and-sell agreements, key person cover, continuity planning, and policy coordination.",
    keywords: [
      "business assurance South Africa",
      "buy and sell agreement insurance",
      "key person cover South Africa",
      "business continuity planning",
      "business owner financial planning",
    ],
    imageTitle: "Business Assurance",
    imageKicker: "Continuity planning",
    imageDescription: "Protect partners, key people, and business value when disruption happens.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/resources",
    slug: "resources",
    title: "Financial Planning Resources | Imvelo Wealth Solutions",
    description:
      "Read South African financial planning resources on retirement rules, estate duty, offshore allowances, Regulation 28, trusts, and emergency fund strategy.",
    keywords: [
      "financial planning resources South Africa",
      "retirement planning articles",
      "estate duty guide",
      "offshore allowances South Africa",
      "Regulation 28 retirement portfolio",
    ],
    imageTitle: "Financial planning resources",
    imageKicker: "Guides and commentary",
    imageDescription: "Plain-language explainers for South African wealth decisions.",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/resources/two-pot-retirement-system",
    slug: "article-two-pot-retirement-system",
    title: "Two-Pot Retirement System Explained | Imvelo Wealth Solutions",
    description:
      "Understand South Africa's two-pot retirement system, how savings and retirement pots work, withdrawal tax costs, and what to review before accessing funds.",
    keywords: [
      "two-pot retirement system",
      "two pot system South Africa",
      "retirement savings pot withdrawal tax",
      "retirement pot rules",
      "South African retirement fund changes",
    ],
    imageTitle: "Two-Pot Retirement System",
    imageKicker: "Retirement Planning",
    imageDescription: "What South Africans need to know before accessing retirement savings.",
    type: "article",
    section: "Retirement Planning",
    publishedTime: "2025-03-01T00:00:00+02:00",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/resources/estate-duty-guide",
    slug: "article-estate-duty-guide",
    title: "Estate Duty in South Africa | Imvelo Wealth Solutions",
    description:
      "A plain-language guide to South African estate duty, capital gains tax at death, liquidity planning, exemptions, and structures families use to manage exposure.",
    keywords: [
      "estate duty South Africa",
      "estate duty guide",
      "capital gains tax at death",
      "estate liquidity planning",
      "South African family wealth planning",
    ],
    imageTitle: "Estate Duty in South Africa",
    imageKicker: "Estate Planning",
    imageDescription: "How tax, liquidity, and structures affect family wealth transfer.",
    type: "article",
    section: "Estate Planning",
    publishedTime: "2025-02-01T00:00:00+02:00",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/resources/offshore-allowances-south-africa",
    slug: "article-offshore-allowances-south-africa",
    title: "Offshore Allowances for South Africans | Imvelo Wealth Solutions",
    description:
      "Learn how South Africans can use the R1 million single discretionary allowance and R10 million foreign capital allowance for compliant offshore diversification.",
    keywords: [
      "offshore allowances South Africa",
      "single discretionary allowance",
      "foreign capital allowance",
      "SARS tax clearance offshore investment",
      "rand diversification",
    ],
    imageTitle: "Offshore Allowances",
    imageKicker: "Tax Planning",
    imageDescription: "Using South Africa's SDA and foreign capital allowance strategically.",
    type: "article",
    section: "Tax Planning",
    publishedTime: "2025-01-01T00:00:00+02:00",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/resources/regulation-28-retirement-portfolio",
    slug: "article-regulation-28-retirement-portfolio",
    title: "Understanding Regulation 28 | Imvelo Wealth Solutions",
    description:
      "Understand Regulation 28 retirement portfolio limits for equities, offshore assets, property, hedge funds, and complementary investing outside retirement funds.",
    keywords: [
      "Regulation 28 South Africa",
      "retirement portfolio limits",
      "offshore limit retirement funds",
      "pension fund asset limits",
      "retirement annuity portfolio strategy",
    ],
    imageTitle: "Understanding Regulation 28",
    imageKicker: "Investment Strategy",
    imageDescription: "How retirement fund limits shape portfolio construction.",
    type: "article",
    section: "Investment Strategy",
    publishedTime: "2024-12-01T00:00:00+02:00",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/resources/trusts-south-africa",
    slug: "article-trusts-south-africa",
    title: "Trusts in South Africa | Imvelo Wealth Solutions",
    description:
      "A practical guide to when inter vivos trusts make sense in South Africa for asset protection, estate duty planning, family continuity, and when costs outweigh benefits.",
    keywords: [
      "trusts in South Africa",
      "inter vivos trust",
      "trust estate planning",
      "asset protection trust South Africa",
      "family wealth trust",
    ],
    imageTitle: "Trusts in South Africa",
    imageKicker: "Family Wealth",
    imageDescription: "When trusts help with asset protection, continuity, and estate planning.",
    type: "article",
    section: "Family Wealth",
    publishedTime: "2024-11-01T00:00:00+02:00",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/resources/emergency-fund-alternatives",
    slug: "article-emergency-fund-alternatives",
    title: "Emergency Fund Alternatives in South Africa | Imvelo Wealth Solutions",
    description:
      "Compare savings accounts, money market funds, 32-day notice accounts, and flexible income funds for South African emergency fund planning.",
    keywords: [
      "emergency fund South Africa",
      "money market fund emergency fund",
      "32 day notice account",
      "flexible income fund South Africa",
      "savings account alternatives",
    ],
    imageTitle: "Emergency Fund Alternatives",
    imageKicker: "Financial Planning",
    imageDescription: "Better places to hold accessible cash without ignoring return and tax.",
    type: "article",
    section: "Financial Planning",
    publishedTime: "2024-10-01T00:00:00+02:00",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    slug: "contact",
    title: "Contact Imvelo Wealth Solutions | Johannesburg Financial Advisers",
    description:
      "Contact Imvelo Wealth Solutions in Bryanston East, Johannesburg by phone or email for financial planning, wealth management, and advisory enquiries.",
    keywords: [
      "contact Imvelo Wealth Solutions",
      "Johannesburg financial adviser contact",
      "Bryanston wealth management",
      "financial planning enquiry South Africa",
      "FSCA licensed adviser contact",
    ],
    imageTitle: "Contact Imvelo",
    imageKicker: "Johannesburg advisory office",
    imageDescription: "Reach the team for financial planning and wealth advisory enquiries.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/consultation",
    slug: "consultation",
    title: "Request a Consultation | Imvelo Wealth Solutions",
    description:
      "Request a consultation with Imvelo Wealth Solutions to discuss financial planning, retirement, estate planning, business assurance, or employee benefits priorities.",
    keywords: [
      "request financial consultation",
      "financial planning consultation South Africa",
      "wealth management consultation",
      "retirement advice consultation",
      "estate planning consultation",
    ],
    imageTitle: "Request a Consultation",
    imageKicker: "Start the conversation",
    imageDescription: "Share the priorities or decisions you want to discuss with the advisory team.",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/privacy",
    slug: "privacy",
    title: "Privacy Policy | Imvelo Wealth Solutions",
    description:
      "Read how Imvelo Wealth Solutions collects, uses, stores, and protects personal information in line with South Africa's Protection of Personal Information Act.",
    keywords: [
      "Imvelo Wealth Solutions privacy policy",
      "POPIA privacy policy",
      "financial adviser privacy South Africa",
      "personal information financial services",
    ],
    imageTitle: "Privacy Policy",
    imageKicker: "Legal",
    imageDescription: "How personal information is handled under POPIA.",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/terms",
    slug: "terms",
    title: "Terms of Service | Imvelo Wealth Solutions",
    description:
      "Read the terms governing use of the Imvelo Wealth Solutions website and the nature of financial advisory information published on the site.",
    keywords: [
      "Imvelo Wealth Solutions terms",
      "financial advisory terms of service",
      "FAIS website terms",
      "financial services terms South Africa",
    ],
    imageTitle: "Terms of Service",
    imageKicker: "Legal",
    imageDescription: "Website terms and advisory information disclaimers.",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/thank-you",
    slug: "thank-you",
    title: "Request Received | Imvelo Wealth Solutions",
    description: "Confirmation that your enquiry or consultation request has been prepared for Imvelo Wealth Solutions.",
    keywords: ["Imvelo Wealth Solutions request received", "consultation request confirmation"],
    imageTitle: "Request received",
    imageKicker: "Imvelo Wealth Solutions",
    imageDescription: "Your enquiry has been prepared for the advisory team.",
    includeInSitemap: false,
    index: false,
    priority: 0,
    changeFrequency: "yearly",
  },
]

const pagesByPath = new Map(pages.map((page) => [page.path, page]))
const pagesBySlug = new Map(pages.map((page) => [page.slug, page]))

export function normalizeUrl(url: string) {
  return url.replace(/\/+$/, "")
}

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) return path
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`
}

export function isPublicIndexingEnabled() {
  return process.env.IMVELO_REVIEW_GATE === "off"
}

export function sitewideRobots(index = true): Metadata["robots"] {
  const shouldIndex = index && isPublicIndexingEnabled()

  if (!shouldIndex) {
    return {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: false,
        "max-image-preview": "large",
      },
    }
  }

  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  }
}

export function metadataForPath(path: string): Metadata {
  const page = pagesByPath.get(path)
  if (!page) return {}

  const imageUrl = absoluteUrl(`/og/${page.slug}`)
  const url = absoluteUrl(page.path)
  const type = page.type || "website"

  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(type === "article"
        ? {
            publishedTime: page.publishedTime,
            modifiedTime: page.modifiedTime || page.publishedTime || commonModifiedTime,
            section: page.section,
            authors: [siteConfig.name],
          }
        : {}),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${page.imageTitle || page.title} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: page.title,
      description: page.description,
      images: [imageUrl],
    },
    robots: sitewideRobots(page.index !== false),
  }
}

export function getPageSeoBySlug(slug: string) {
  return pagesBySlug.get(slug)
}

export function getPageSeoByPath(path: string) {
  return pagesByPath.get(path)
}

export function sitemapPages() {
  if (!isPublicIndexingEnabled()) return []

  return pages.filter((page) => page.includeInSitemap !== false)
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    sameAs: [
      "https://www.linkedin.com/company/imvelo-wealth-solutions/",
      "https://www.instagram.com/imvelowealth/",
      "https://www.facebook.com/imvelowealth",
      "https://x.com/ImveloWealth",
    ],
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  }
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function articleJsonLd(page: PageSeo) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl(`${page.path}#article`),
    headline: page.title.replace(` | ${siteConfig.name}`, ""),
    description: page.description,
    image: absoluteUrl(`/og/${page.slug}`),
    datePublished: page.publishedTime,
    dateModified: page.modifiedTime || page.publishedTime || commonModifiedTime,
    articleSection: page.section,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
    mainEntityOfPage: absoluteUrl(page.path),
  }
}

export function serviceJsonLd(page: PageSeo) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`${page.path}#service`),
    name: page.imageTitle || page.title.replace(` | ${siteConfig.name}`, ""),
    description: page.description,
    provider: {
      "@id": absoluteUrl("/#organization"),
    },
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
    url: absoluteUrl(page.path),
  }
}
