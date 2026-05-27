import type { MetadataRoute } from "next"
import { absoluteUrl, sitemapPages } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPages().map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: page.modifiedTime || page.publishedTime || "2026-05-27T00:00:00+02:00",
    changeFrequency: page.changeFrequency || "monthly",
    priority: page.priority ?? 0.5,
  }))
}
