import Link from "next/link"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export function ServicesCTA() {
  return (
    <section className="bg-[#EAF4F6] py-24 sm:py-32">
      <div className="mx-auto grid max-w-[90rem] items-center gap-14 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-12">
        <div data-aos="fade-up">
          <p className="section-kicker text-[#307283]">Not sure where to start?</p>
          <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-[#005166] sm:text-5xl">
            Start with what is happening.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#536A70] sm:text-lg">
            Tell us what is changing or what decision is waiting. We will guide the next step.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(0,81,102,0.12)]" data-aos="fade-up" data-aos-delay="100">
          <div className="border-b border-[#C8DDE1] p-7 sm:p-10">
            <div className="flex items-center justify-between gap-6">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#307283]">A simple way to begin</p>
              <span className="rounded-full bg-[#EAF4F6] px-3 py-1.5 text-xs font-bold text-[#005166]">About 2 minutes</span>
            </div>
            <h3 className="mt-5 text-3xl font-medium tracking-[-0.035em] text-[#005166]">A short introduction. Then a real conversation.</h3>
            <p className="mt-4 text-sm leading-7 text-[#536A70]">Answer a few private questions and continue in WhatsApp.</p>

            <Button asChild size="lg" className="group mt-7 h-13 w-full rounded-full bg-[#005166] px-7 font-bold text-white hover:bg-[#307283] sm:w-auto">
              <Link href="/consultation">
                <WhatsAppIcon className="mr-2 h-5 w-5 text-[#25D366]" />
                Tell us what is happening
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2">
            <Link
              href="tel:+27101095097"
              className="group flex items-center gap-4 border-b border-[#C8DDE1] p-6 transition-colors hover:bg-[#F7FAFB] sm:border-b-0 sm:border-r sm:p-7"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF4F6] text-[#307283]">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.15em] text-[#536A70]">Call</span>
                <span className="mt-1 block text-sm font-bold text-[#005166]">010 109 5097</span>
              </span>
            </Link>
            <Link href="mailto:info@imvelowealth.co.za" className="group flex items-center gap-4 p-6 transition-colors hover:bg-[#F7FAFB] sm:p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF4F6] text-[#307283]">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.15em] text-[#536A70]">Email</span>
                <span className="mt-1 block text-sm font-bold text-[#005166]">info@imvelowealth.co.za</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
