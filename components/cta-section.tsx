import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { waLink } from "@/lib/whatsapp"

export function CTASection() {
  return (
    <section className="bg-[#EAF4F6] py-8 sm:py-12">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#005166] shadow-[0_26px_80px_rgba(0,81,102,0.18)] lg:grid-cols-[1.05fr_0.95fr]" data-aos="fade-up">
          <div className="flex flex-col justify-center p-8 text-white sm:p-12 lg:p-16">
            <p className="section-kicker text-[#8FD3DD]">Your next step</p>
            <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-5xl">
              Tell us what is on your mind. We will take it from there.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
              Begin with a short introduction or talk to us directly on WhatsApp.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild className="group h-13 rounded-full bg-white px-7 text-sm font-bold text-[#005166] hover:bg-[#EAF4F6]">
                <Link href="/consultation">
                  Request a consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-13 rounded-full border-white/35 bg-transparent px-7 text-sm font-bold text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={waLink()} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5 text-[#8FD3DD]" />
                  Talk on WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          <figure className="relative min-h-[31rem] overflow-hidden lg:min-h-[40rem]">
            <Image
              src="/imagery/cta-conversation.jpg"
              alt="Two people enjoying a warm conversation"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              quality={90}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#005166]/8" aria-hidden="true" />
          </figure>
        </div>
      </div>
    </section>
  )
}
