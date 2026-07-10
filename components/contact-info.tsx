import Image from "next/image"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

const details = [
  { label: "Phone", value: "010 109 5097", href: "tel:+27101095097", icon: Phone },
  { label: "Email", value: "info@imvelowealth.co.za", href: "mailto:info@imvelowealth.co.za", icon: Mail },
]

export function ContactInfo() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-32">
      <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(0,81,102,0.13)]">
        <Image
          src="/imagery/contact-team.jpg"
          alt="A team meeting in a bright modern office"
          fill
          sizes="(max-width: 1024px) 100vw, 38vw"
          quality={90}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#032A33]/85 via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 p-7 text-white">
          <p className="section-kicker text-[#8FD3DD]">Sandton, Johannesburg</p>
          <p className="mt-3 text-xl font-medium tracking-[-0.02em]">A real person is on the other side.</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] bg-[#005166] text-white">
        <div className="flex items-start gap-4 border-b border-white/15 p-6 sm:p-7">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#8FD3DD]" aria-hidden="true" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">Office</p>
            <p className="mt-2 text-sm font-semibold">Sandton, Johannesburg</p>
          </div>
        </div>

        {details.map((detail) => (
          <a key={detail.label} href={detail.href} className="flex items-start gap-4 border-b border-white/15 p-6 transition-colors hover:bg-white/8 sm:p-7">
            <detail.icon className="mt-1 h-5 w-5 shrink-0 text-[#8FD3DD]" aria-hidden="true" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">{detail.label}</p>
              <p className="mt-2 text-sm font-semibold">{detail.value}</p>
            </div>
          </a>
        ))}

        <div className="flex items-start gap-4 p-6 sm:p-7">
          <Clock className="mt-1 h-5 w-5 shrink-0 text-[#8FD3DD]" aria-hidden="true" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">Office hours</p>
            <p className="mt-2 text-sm font-semibold">Monday–Friday · 09:00–17:00</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
