import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export function CTASection() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-40">
      <img
        src="/videos/hero-client-conversation-poster.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-[5] bg-gradient-to-r from-[#032A33]/95 via-[#064654]/80 to-[#064654]/34" aria-hidden="true" />

      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl" data-aos="fade-up">
          <p className="section-kicker text-[#8FD3DD]">Your next step</p>
          <h2 className="mt-6 text-4xl font-medium leading-[1.1] tracking-[-0.035em] text-white sm:text-5xl">
            Tell us what is on your mind. We will take it from there.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
            Answer a few private questions, then continue in WhatsApp with your introduction already written. A real
            adviser will pick up the conversation during office hours.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="h-13 rounded-full bg-white px-7 text-sm font-bold text-[#005166] hover:bg-[#EAF4F6]">
              <Link href="/consultation">
                <WhatsAppIcon className="mr-2 h-5 w-5 text-[#25D366]" />
                Start the WhatsApp flow
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="group h-13 rounded-full border-white/40 bg-transparent px-7 text-sm font-bold text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/consultation">
                See how it works
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
