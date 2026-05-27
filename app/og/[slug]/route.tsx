import { ImageResponse } from "next/og"
import { getPageSeoBySlug, siteConfig } from "@/lib/seo"

export const runtime = "edge"

const size = {
  width: 1200,
  height: 630,
}

export function GET(_: Request, { params }: { params: { slug: string } }) {
  const page = getPageSeoBySlug(params.slug) || getPageSeoBySlug("home")
  const title = page?.imageTitle || page?.title || siteConfig.name
  const kicker = page?.imageKicker || siteConfig.name
  const description = page?.imageDescription || page?.description || "Planning-led wealth advice for South Africans."

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f4efe4",
          color: "#13231c",
          fontFamily: "Inter, Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(244,239,228,0.98) 0%, rgba(244,239,228,0.92) 42%, rgba(18,72,54,0.92) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -170,
            top: -170,
            width: 520,
            height: 520,
            borderRadius: "50%",
            border: "80px solid rgba(205,164,92,0.34)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 98,
            bottom: 82,
            width: 248,
            height: 248,
            borderRadius: "50%",
            border: "2px solid rgba(244,239,228,0.42)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "68px 76px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 66,
                height: 66,
                borderRadius: 10,
                background: "#124836",
                color: "#f8f1df",
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: 0,
              }}
            >
              IW
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 29, fontWeight: 800, letterSpacing: 0 }}>{siteConfig.name}</div>
              <div style={{ marginTop: 5, fontSize: 18, color: "#516055" }}>FSCA FSP 49944</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 790 }}>
            <div
              style={{
                display: "flex",
                marginBottom: 22,
                color: "#9b6e2a",
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: 0,
              }}
            >
              {kicker}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: title.length > 34 ? 60 : 72,
                lineHeight: 1.02,
                fontWeight: 850,
                letterSpacing: 0,
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 24,
                maxWidth: 720,
                color: "#3f4f45",
                fontSize: 28,
                lineHeight: 1.28,
              }}
            >
              {description}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 20 }}>
            <div style={{ color: "#516055" }}>Johannesburg, South Africa</div>
            <div style={{ color: "#124836", fontWeight: 700 }}>imvelowealth.co.za</div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
