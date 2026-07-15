"use client"

import { useEffect } from "react"
import AOS from "aos"
import { usePathname } from "next/navigation"

export function AOSProvider() {
  const pathname = usePathname()

  useEffect(() => {
    // AOS mutates [data-aos] elements' classNames. Doing that while React is
    // still hydrating server HTML triggers hydration mismatches that can wedge
    // client components, so wait for the window load event (hydration is
    // guaranteed to have settled by then). Until init runs, AOS's CSS leaves
    // elements fully visible, so content is never hidden while waiting.
    let raf = 0
    const init = () => {
      raf = requestAnimationFrame(() =>
        AOS.init({
          duration: 850,
          easing: "ease-out-cubic",
          once: true,
          offset: 64,
          disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        }),
      )
    }

    if (document.readyState === "complete") {
      init()
    } else {
      window.addEventListener("load", init, { once: true })
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("load", init)
    }
  }, [])

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (document.body.hasAttribute("data-aos-easing")) AOS.refreshHard()
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname])

  return null
}
