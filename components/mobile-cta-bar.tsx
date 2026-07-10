"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export function MobileCTABar() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 py-3 flex gap-3"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <Button variant="outline" size="sm" className="flex-1 rounded-full" asChild>
        <a href="tel:+27101095097" aria-label="Call Imvelo Wealth">
          <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
          Call
        </a>
      </Button>
      <Button
        size="sm"
        className="flex-1 rounded-full bg-[#25D366] text-[#073844] hover:bg-[#1fb958]"
        asChild
      >
        <Link href="/consultation" aria-label="Start the Imvelo Wealth WhatsApp introduction">
          <WhatsAppIcon className="mr-2 h-4 w-4" aria-hidden="true" />
          WhatsApp
        </Link>
      </Button>
    </div>
  )
}
