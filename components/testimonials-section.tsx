import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    content:
      "Imvelo helped us navigate a complex estate planning situation after my father's passing. Their expertise and compassionate approach made a difficult time much easier for our family.",
    author: "Sarah M.",
    role: "Estate Planning Client",
    location: "Cape Town",
    rating: 5,
  },
  {
    content:
      "As a business owner, I needed sophisticated financial planning. The team at Imvelo created a comprehensive strategy that's helped me optimize both personal and business finances.",
    author: "David K.",
    role: "Entrepreneur",
    location: "Johannesburg",
    rating: 5,
  },
  {
    content:
      "We've been working with Imvelo for over 8 years. Their investment strategies have consistently outperformed our expectations, and we're on track for a comfortable retirement.",
    author: "Michael & Linda R.",
    role: "Retirement Planning Clients",
    location: "Durban",
    rating: 5,
  },
]

const caseStudies = [
  {
    title: "Young Professional's First Home",
    challenge: "28-year-old needed to save for a home deposit while managing student loans",
    solution: "Created a structured savings plan with tax-efficient investments",
    result: "Purchased R2.5M home within 3 years, 6 months ahead of schedule",
  },
  {
    title: "Multi-Generational Wealth Transfer",
    challenge: "Family business owner wanted to transfer wealth to children tax-efficiently",
    solution: "Implemented trust structures and succession planning strategies",
    result: "Saved over R1.2M in estate duties while ensuring business continuity",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Don't just take our word for it. Here's what families across South Africa say about working with us.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-sm leading-6 text-muted-foreground">"{testimonial.content}"</blockquote>
                <div className="mt-4">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Real Results for Real Families
            </h3>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              See how we've helped clients achieve their financial goals with measurable outcomes.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {caseStudies.map((study, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">{study.title}</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-foreground">Challenge: </span>
                      <span className="text-muted-foreground">{study.challenge}</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Solution: </span>
                      <span className="text-muted-foreground">{study.solution}</span>
                    </div>
                    <div>
                      <span className="font-medium text-accent">Result: </span>
                      <span className="text-foreground font-medium">{study.result}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
