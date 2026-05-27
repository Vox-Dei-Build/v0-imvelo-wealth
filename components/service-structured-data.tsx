import { JsonLd } from "@/components/seo-json-ld"
import { breadcrumbJsonLd, getPageSeoByPath, serviceJsonLd, siteConfig } from "@/lib/seo"

type ServiceStructuredDataProps = {
  path: string
  name: string
}

export function ServiceStructuredData({ path, name }: ServiceStructuredDataProps) {
  const pageSeo = getPageSeoByPath(path)

  if (!pageSeo) return null

  return (
    <>
      <JsonLd data={serviceJsonLd(pageSeo)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: siteConfig.name, path: "/" },
          { name: "Services", path: "/services" },
          { name, path },
        ])}
      />
    </>
  )
}
