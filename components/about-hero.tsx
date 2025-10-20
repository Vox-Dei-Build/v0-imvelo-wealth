export function AboutHero() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Building Generational Wealth for South African Families
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            For over 15 years, Imvelo Wealth Solutions has been helping families across South Africa create, preserve,
            and transfer wealth through expert financial planning and investment management.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">R2.5B+</div>
            <div className="text-sm text-muted-foreground">Assets Under Management</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">500+</div>
            <div className="text-sm text-muted-foreground">Families Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
