import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const REALM = "Imvelo internal review"
const PREVIEW_COOKIE = "imvelo_preview_access"

function withNoIndexHeaders(response: NextResponse) {
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive")
  response.headers.set("Cache-Control", "no-store")
  return response
}

function allow() {
  return withNoIndexHeaders(NextResponse.next())
}

function deny(message = "Authentication required", status = 401) {
  return withNoIndexHeaders(
    new NextResponse(message, {
      status,
      headers: {
        "WWW-Authenticate": `Basic realm="${REALM}", charset="UTF-8"`,
      },
    }),
  )
}

export function middleware(request: NextRequest) {
  if (process.env.IMVELO_REVIEW_GATE === "off") {
    return allow()
  }

  const { pathname, searchParams } = request.nextUrl

  if (pathname.startsWith("/og/")) {
    return allow()
  }

  const previewToken = process.env.IMVELO_PREVIEW_TOKEN
  const suppliedPreviewToken = searchParams.get("preview")
  const cookiePreviewToken = request.cookies.get(PREVIEW_COOKIE)?.value

  if (previewToken && (suppliedPreviewToken === previewToken || cookiePreviewToken === previewToken)) {
    const response = allow()

    if (suppliedPreviewToken === previewToken) {
      response.cookies.set({
        name: PREVIEW_COOKIE,
        value: previewToken,
        httpOnly: true,
        sameSite: "lax",
        secure: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })
    }

    return response
  }

  const username = process.env.IMVELO_REVIEW_USER
  const password = process.env.IMVELO_REVIEW_PASSWORD

  if (!username || !password) {
    return deny("Internal review gate is enabled but credentials are not configured. Configure IMVELO_REVIEW_USER / IMVELO_REVIEW_PASSWORD or share a ?preview=<token> link using IMVELO_PREVIEW_TOKEN.", 503)
  }

  const authHeader = request.headers.get("authorization")

  if (!authHeader?.startsWith("Basic ")) {
    return deny()
  }

  try {
    const decoded = atob(authHeader.slice("Basic ".length))
    const separator = decoded.indexOf(":")
    const suppliedUser = decoded.slice(0, separator)
    const suppliedPassword = decoded.slice(separator + 1)

    if (suppliedUser === username && suppliedPassword === password) {
      return allow()
    }
  } catch {
    return deny()
  }

  return deny()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map)$).*)"],
}
