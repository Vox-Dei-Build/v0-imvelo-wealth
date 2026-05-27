import type React from "react"
import type { Metadata } from "next"
import { Manrope, Source_Serif_4 } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AOSProvider } from "@/components/aos-provider"
import { CookieConsent } from "@/components/cookie-consent"
import { JsonLd } from "@/components/seo-json-ld"
import { absoluteUrl, organizationJsonLd, siteConfig, sitewideRobots, websiteJsonLd } from "@/lib/seo"
import "aos/dist/aos.css"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Imvelo Wealth Solutions | Financial Planning & Wealth Management in South Africa",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "FSCA-licensed financial advisers helping South African families and business owners plan, protect, invest, and transfer wealth with clear, planning-led advice.",
  keywords: siteConfig.defaultKeywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Imvelo Wealth Solutions | Financial Planning & Wealth Management in South Africa",
    description:
      "FSCA-licensed financial advisers helping South African families and business owners plan, protect, invest, and transfer wealth with clear, planning-led advice.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: absoluteUrl("/og/home"),
        width: 1200,
        height: 630,
        alt: "Imvelo Wealth Solutions social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: "Imvelo Wealth Solutions | Financial Planning & Wealth Management in South Africa",
    description:
      "FSCA-licensed financial advisers helping South African families and business owners plan, protect, invest, and transfer wealth with clear, planning-led advice.",
    images: [absoluteUrl("/og/home")],
  },
  robots: sitewideRobots(),
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const analyticsEnabled = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "1"

  return (
    <html lang="en">
      <body className={`font-sans ${manrope.variable} ${sourceSerif.variable} ${GeistMono.variable} antialiased`}>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <AOSProvider />
        <Suspense fallback={null}>{children}</Suspense>
        <CookieConsent />
        {analyticsEnabled ? <Analytics /> : null}
      </body>
    </html>
  )
}
