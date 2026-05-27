export function ConsultationHero() {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Consultation</p>
          <h1 className="mb-6 font-serif text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
            Request a private planning conversation.
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            Share the priorities, decisions, or questions that prompted the conversation. Imvelo can then respond with
            the appropriate next step during office hours.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Private enquiry</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Office hours 09:00-17:00</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Confirmed contact details</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
