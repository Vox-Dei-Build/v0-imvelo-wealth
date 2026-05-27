import type { MetadataRoute } from "next"
import { absoluteUrl, isPublicIndexingEnabled, siteConfig } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  if (!isPublicIndexingEnabled()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      host: siteConfig.url,
    }
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  }
}
