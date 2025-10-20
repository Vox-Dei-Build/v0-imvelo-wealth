export function AboutStory() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Story</h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Imvelo Wealth Solutions was founded with a simple but powerful mission: to help South African families
                  build wealth that lasts for generations. The name "Imvelo" comes from the Zulu word meaning "nature"
                  or "character," reflecting our belief that true wealth building is about understanding the unique
                  character and needs of each family we serve.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-muted shadow-xl ring-1 ring-border/10 sm:w-[57rem]"
              src="/professional-financial-advisors-in-modern-office-s.jpg"
              alt="Imvelo Wealth Solutions team in their office"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-muted-foreground lg:max-w-lg">
                <p>
                  What started as a small practice has grown into one of South Africa's most trusted wealth management
                  firms. We've weathered market downturns, celebrated bull markets, and most importantly, we've been
                  there for our clients through every major life event.
                </p>
                <p className="mt-8">
                  Our approach is different. We don't just manage money – we build relationships. We take the time to
                  understand your family's unique story, your values, and your dreams for the future. This deep
                  understanding allows us to create financial strategies that are truly personalized and effective.
                </p>
                <p className="mt-8">
                  Today, we're proud to serve over 500 families across South Africa, managing more than R2.5 billion in
                  assets. But our success isn't measured just in numbers – it's measured in the peace of mind our
                  clients have, knowing their financial future is secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
