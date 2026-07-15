import Link from "next/link"
import { CalendarDays, Clock, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

const details = [
  { label: "FSCA FSP licence", value: "49944", icon: ShieldCheck },
  { label: "Office hours", value: "09:00–17:00", icon: Clock },
  { label: "Serving clients since", value: "2018", icon: CalendarDays },
]

export function ContactCTA() {
  return (
    <section className="bg-[#005166] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.08fr] lg:gap-24">
          <div data-aos="fade-right">
            <p className="section-kicker text-[#8FD3DD]">Prefer WhatsApp?</p>
            <h2 className="mt-6 text-4xl font-medium leading-[1.1] tracking-[-0.035em] sm:text-5xl">
              Begin with a little context, not a cold call.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/65">
              Our guided introduction takes about two minutes and prepares a message you can review before sending.
            </p>
            <Button asChild size="lg" className="mt-9 h-13 rounded-full bg-white px-7 font-bold text-[#005166] hover:bg-[#EAF4F6]">
              <Link href="/consultation">
                <WhatsAppIcon className="mr-2 h-5 w-5 text-[#25D366]" />
                Start the WhatsApp flow
              </Link>
            </Button>
          </div>

          <div className="grid border-y border-white/18 sm:grid-cols-3" data-aos="fade-left" data-aos-delay="120">
            {details.map((detail, index) => (
              <div key={detail.label} className={`py-8 sm:px-7 ${index > 0 ? "border-t border-white/18 sm:border-l sm:border-t-0" : ""}`}>
                <detail.icon className="h-5 w-5 text-[#8FD3DD]" strokeWidth={1.5} aria-hidden="true" />
                <div className="mt-7 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/45">{detail.label}</div>
                <div className="mt-3 text-3xl font-medium tracking-[-0.03em] text-white">{detail.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
