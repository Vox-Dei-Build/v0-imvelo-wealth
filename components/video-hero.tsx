import type { ReactNode } from "react"
import Image from "next/image"

interface VideoHeroProps {
  videoSrc: string
  poster: string
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  /** Extra content pinned to the bottom of the hero (e.g. trust stats). */
  footer?: ReactNode
  /** Tailwind min-height classes. Home uses a taller stage than subpages. */
  heightClassName?: string
  /** Cinematic copy placement. */
  align?: "left" | "center" | "right"
  /** Focal point for the film and its poster. */
  mediaPosition?: string
}

export function VideoHero({
  videoSrc,
  poster,
  eyebrow,
  title,
  description,
  children,
  footer,
  heightClassName = "min-h-[68svh]",
  align = "left",
  mediaPosition = "center",
}: VideoHeroProps) {
  const contentAlignment =
    align === "center"
      ? "mx-auto max-w-4xl text-center"
      : align === "right"
        ? "ml-auto max-w-3xl text-right"
        : "max-w-3xl"

  const actionAlignment = align === "center" ? "justify-center" : align === "right" ? "justify-end" : ""

  return (
    <section className={`relative isolate flex flex-col justify-end overflow-hidden bg-[#064654] ${heightClassName}`}>
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <Image
          src={poster}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: mediaPosition }}
        />
        <video
          className="hero-film absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          style={{ objectPosition: mediaPosition }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          tabIndex={-1}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(2,30,38,0.58)_0%,rgba(2,30,38,0.16)_32%,rgba(2,30,38,0.58)_73%,rgba(2,30,38,0.88)_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 z-10 bg-[#136578]/20 mix-blend-multiply" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-px bg-white/15" aria-hidden="true" />

      <div className="relative z-20 mx-auto w-full max-w-[90rem] px-6 pb-10 pt-44 sm:px-8 sm:pb-12 lg:px-12 lg:pt-52">
        <div className={contentAlignment}>
          {eyebrow ? (
            <p data-aos="fade-up" className="section-kicker text-[#8FD3DD]">
              {eyebrow}
            </p>
          ) : null}
          <h1
            data-aos="fade-up"
            data-aos-delay="80"
            className="mt-6 font-sans text-5xl font-medium leading-[1.03] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5rem]"
          >
            {title}
          </h1>
          {description ? (
            <p
              data-aos="fade-up"
              data-aos-delay="160"
              className={`mt-7 max-w-2xl text-base font-normal leading-8 text-white/82 sm:text-lg ${align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""}`}
            >
              {description}
            </p>
          ) : null}
          {children ? (
            <div
              data-aos="fade-up"
              data-aos-delay="240"
              className={`mt-10 flex flex-col gap-3 sm:flex-row sm:items-center ${actionAlignment}`}
            >
              {children}
            </div>
          ) : null}
        </div>

        {footer ? (
          <div data-aos="fade-up" data-aos-delay="320" className="mt-14 border-t border-white/25 pt-7 sm:mt-16">
            {footer}
          </div>
        ) : null}
      </div>
    </section>
  )
}
