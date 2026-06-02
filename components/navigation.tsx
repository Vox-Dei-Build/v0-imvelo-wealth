"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/88 backdrop-blur-xl supports-[backdrop-filter]:bg-background/72">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 block p-1.5" aria-label="Imvelo Wealth home">
              <span className="block">
                <Image
                  src="/imvelo-logo-transparent.png"
                  alt="Imvelo Wealth"
                  width={160}
                  height={69}
                  className="h-12 w-auto"
                  priority
                />
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium leading-6 text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild className="rounded-md">
              <Link href="/consultation">Request Consultation</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[1000] min-h-dvh overflow-y-auto bg-background px-6 py-6 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto flex min-h-[calc(100dvh-3rem)] max-w-lg flex-col">
            <div className="flex items-center justify-between border-b border-border/50 pb-6">
              <Link
                href="/"
                className="-m-1.5 block p-1.5"
                aria-label="Imvelo Wealth home"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="block">
                  <Image
                    src="/imvelo-logo-transparent.png"
                    alt="Imvelo Wealth"
                    width={160}
                    height={69}
                    className="h-12 w-auto"
                  />
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-between pt-10">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block border-b border-border/50 py-5 font-serif text-3xl font-semibold leading-tight text-foreground transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-10">
                <Button asChild size="lg" className="w-full rounded-md">
                  <Link href="/consultation" onClick={() => setMobileMenuOpen(false)}>
                    Request Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
