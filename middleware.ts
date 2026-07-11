import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const REALM = "Imvelo private review"

function protectedResponse(response: NextResponse) {
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive")
  response.headers.set("Cache-Control", "private, no-store")
  return response
}

function deny(message = "Authentication required", status = 401) {
  return protectedResponse(
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
    return NextResponse.next()
  }

  const username = process.env.IMVELO_REVIEW_USER
  const password = process.env.IMVELO_REVIEW_PASSWORD

  if (!username || !password) {
    return deny("Private review access is not configured.", 503)
  }

  const authHeader = request.headers.get("authorization")

  if (!authHeader?.startsWith("Basic ")) {
    return deny()
  }

  try {
    const decoded = atob(authHeader.slice("Basic ".length))
    const separator = decoded.indexOf(":")

    if (separator === -1) {
      return deny()
    }

    const suppliedUser = decoded.slice(0, separator)
    const suppliedPassword = decoded.slice(separator + 1)

    if (suppliedUser === username && suppliedPassword === password) {
      return protectedResponse(NextResponse.next())
    }
  } catch {
    return deny()
  }

  return deny()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|mp4|webm)$).*)"],
}
