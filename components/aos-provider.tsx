"use client"

import { useEffect } from "react"
import AOS from "aos"

export function AOSProvider() {
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
          duration: 750,
          easing: "ease-out-cubic",
          once: true,
          offset: 80,
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

  return null
}
