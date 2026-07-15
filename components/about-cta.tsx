import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export function AboutCTA() {
  return (
    <section className="bg-[#F7FAFB] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <p className="section-kicker text-[#307283]">Start where you are</p>
          <h2 className="mt-6 text-4xl font-medium leading-[1.1] tracking-[-0.035em] text-[#005166] sm:text-5xl">
            Your story is the right place to begin.
          </h2>
          <p className="mt-7 text-base leading-8 text-[#536A70] sm:text-lg">
            Share a little context through our guided WhatsApp introduction. Palesa, Siba, or a member of the advisory
            team will continue the conversation from there.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="group h-13 rounded-full px-7 font-bold">
              <Link href="/consultation">
                <WhatsAppIcon className="mr-2 h-5 w-5 text-[#25D366]" />
                Start the WhatsApp flow
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full bg-transparent">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
