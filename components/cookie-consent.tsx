"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Settings2, ShieldCheck, X } from "lucide-react"

type CookieChoice = {
  analytics: boolean
  marketing: boolean
}

const STORAGE_KEY = "imvelo-cookie-preferences"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [preferencesOpen, setPreferencesOpen] = useState(false)
  const [choice, setChoice] = useState<CookieChoice>({ analytics: false, marketing: false })

  useEffect(() => {
    setVisible(!window.localStorage.getItem(STORAGE_KEY))
  }, [])

  function save(nextChoice: CookieChoice) {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...nextChoice,
        necessary: true,
        savedAt: new Date().toISOString(),
      })
    )
    setChoice(nextChoice)
    setVisible(false)
    setPreferencesOpen(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-5xl rounded-md border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
        <div className="flex gap-4">
          <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 sm:flex">
            <ShieldCheck className="h-5 w-5 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-base font-semibold text-foreground">Cookie Preferences</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  We use essential cookies to keep the internal review experience working. Optional analytics or
                  marketing cookies are only enabled if explicitly approved.
                </p>
              </div>
              <button
                type="button"
                onClick={() => save({ analytics: false, marketing: false })}
                className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close cookie notice"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {preferencesOpen ? (
              <div className="mt-5 grid gap-3 border-t border-border pt-5 sm:grid-cols-3">
                <div className="rounded-md border border-border bg-muted/25 p-4">
                  <div className="text-sm font-semibold text-foreground">Necessary</div>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">Required for security and preferences.</p>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Always on</div>
                </div>
                <label className="rounded-md border border-border bg-muted/25 p-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={choice.analytics}
                      onCheckedChange={(checked) => setChoice({ ...choice, analytics: Boolean(checked) })}
                    />
                    <div>
                      <div className="text-sm font-semibold text-foreground">Analytics</div>
                      <p className="mt-2 text-xs leading-5 text-muted-foreground">
                        Helps understand review behaviour if analytics is enabled.
                      </p>
                    </div>
                  </div>
                </label>
                <label className="rounded-md border border-border bg-muted/25 p-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={choice.marketing}
                      onCheckedChange={(checked) => setChoice({ ...choice, marketing: Boolean(checked) })}
                    />
                    <div>
                      <div className="text-sm font-semibold text-foreground">Marketing</div>
                      <p className="mt-2 text-xs leading-5 text-muted-foreground">
                        Reserved for future campaign or remarketing tools.
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            ) : null}

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <Button variant="outline" className="rounded-md bg-transparent" onClick={() => setPreferencesOpen(true)}>
                <Settings2 className="mr-2 h-4 w-4" />
                Preferences
              </Button>
              <Button variant="outline" className="rounded-md bg-transparent" onClick={() => save({ analytics: false, marketing: false })}>
                Essential Only
              </Button>
              <Button className="rounded-md" onClick={() => save({ analytics: true, marketing: true })}>
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
