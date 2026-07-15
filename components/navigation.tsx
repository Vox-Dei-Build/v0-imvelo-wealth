"use client"

import { useEffect, useState } from "react"
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

interface NavigationProps {
  /**
   * "overlay" floats transparently over a dark video hero and turns solid on
   * scroll. "solid" is the regular in-flow header for pages without a hero.
   */
  variant?: "overlay" | "solid"
}

export function Navigation({ variant = "solid" }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (variant !== "overlay") return
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [variant])

  const transparent = variant === "overlay" && !scrolled

  const headerClass = transparent
    ? "fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-transparent transition-colors duration-300"
    : variant === "overlay"
      ? "fixed inset-x-0 top-0 z-50 w-full border-b border-border/60 bg-background/94 shadow-[0_8px_30px_rgba(10,40,37,0.06)] backdrop-blur-xl transition-colors duration-300 supports-[backdrop-filter]:bg-background/86"
      : "sticky top-0 z-50 w-full border-b border-border/60 bg-background/94 backdrop-blur-xl supports-[backdrop-filter]:bg-background/86"

  return (
    <>
      <header className={`${headerClass} navigation-arrive`}>
        <div className={`hidden border-b px-6 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] sm:block ${transparent ? "border-white/10 text-white/68" : "border-border/50 text-muted-foreground"}`}>
          <div className="mx-auto flex max-w-[90rem] items-center justify-between">
            <span>Independent financial advice · Founded in 2018</span>
            <span>Johannesburg, South Africa</span>
          </div>
        </div>
        <nav className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-3 sm:px-8 lg:px-12" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 block p-1.5" aria-label="Imvelo Wealth home">
              <span className="block">
                <Image
                  src="/imvelo-logo-transparent.png"
                  alt="Imvelo Wealth"
                  width={184}
                  height={69}
                  className={`h-12 w-auto transition-[filter] duration-300 sm:h-14 ${transparent ? "brightness-0 invert" : ""}`}
                  priority
                />
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${transparent ? "text-white" : "text-foreground"}`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-9">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={
                  transparent
                    ? "nav-link text-sm font-semibold leading-6 text-white/82 transition-colors hover:text-white"
                    : "nav-link text-sm font-semibold leading-6 text-muted-foreground transition-colors hover:text-foreground"
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button
              asChild
              className={
                transparent
                  ? "premium-action h-11 rounded-full bg-white px-6 text-sm font-bold text-[#005166] hover:bg-[#EAF4F6]"
                  : "premium-action h-11 rounded-full px-6 text-sm font-bold"
              }
            >
              <Link href="/consultation">Start a conversation</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-arrive fixed inset-0 z-[1000] min-h-dvh overflow-y-auto bg-[#064654] px-6 py-6 text-white lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto flex min-h-[calc(100dvh-3rem)] max-w-lg flex-col">
            <div className="flex items-center justify-between border-b border-white/15 pb-6">
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
                    width={184}
                    height={69}
                    className="h-14 w-auto brightness-0 invert"
                  />
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-full border border-white/20 p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-between pt-10">
              <div className="space-y-1">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="mobile-menu-item-arrive block border-b border-white/15 py-5 text-3xl font-medium leading-tight tracking-[-0.03em] text-white transition-colors hover:text-[#8FD3DD]"
                    style={{ animationDelay: `${80 + index * 55}ms` }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mobile-menu-item-arrive pt-10" style={{ animationDelay: "320ms" }}>
                <Button asChild size="lg" className="w-full rounded-full bg-white font-bold text-[#005166] hover:bg-[#EAF4F6]">
                  <Link href="/consultation" onClick={() => setMobileMenuOpen(false)}>
                    Start a conversation
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
