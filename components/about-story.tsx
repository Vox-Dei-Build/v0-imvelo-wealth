import Image from "next/image"

export function AboutStory() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Our Story</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Advice shaped around character, context, and continuity.
          </h2>

          <div className="mt-10 space-y-6 text-base leading-8 text-muted-foreground">
            <p>
              The name <strong className="text-foreground">Imvelo</strong> comes from the Zulu word meaning
              "nature" or "character." It reflects a founding conviction: that good financial planning starts with
              understanding the person, family, or business sitting across the table.
            </p>

            <p>
              The practice is positioned around personalised, goals-based financial planning. The stronger story is not
              a long provider list or a stack of claims; it is the discipline of helping clients understand what they
              own, what they pay, what they are exposed to, and what needs to happen next.
            </p>

            <p>
              The practice is led by{" "}
              <strong className="text-foreground">Palesa Tlholoe, CFP®</strong> and{" "}
              <strong className="text-foreground">Siba Njoba, CFP®</strong>. Full public bios and background detail
              can be expanded once the final credentials pack is confirmed.
            </p>

            <p>
              The most credible posture is clear and restrained: licensed practice, transparent contact details,
              confirmed regulatory identifiers, and proof points that can be traced.
            </p>
          </div>

          <div className="relative mt-12 aspect-[16/7] w-full overflow-hidden rounded-md ring-1 ring-border/40">
            <Image
              src="/bayport-house.jpg"
              alt="Office park associated with Imvelo Wealth Solutions"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute bottom-3 right-4 rounded bg-black/45 px-2 py-1 text-xs text-white/75">
              Bryanston East office park
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-md border border-border bg-card p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">FSP</div>
              <div className="mt-3 text-2xl font-semibold text-foreground">49944</div>
            </div>
            <div className="rounded-md border border-border bg-card p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Directors</div>
              <div className="mt-3 text-2xl font-semibold text-foreground">CFP® led</div>
            </div>
            <div className="rounded-md border border-border bg-card p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Location</div>
              <div className="mt-3 text-2xl font-semibold text-foreground">Bryanston</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
