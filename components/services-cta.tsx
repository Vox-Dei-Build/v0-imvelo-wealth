import Link from "next/link"
import { ArrowRight, Mail, Phone, UserRound } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { waLink } from "@/lib/whatsapp"

const routes = [
  {
    label: "Request a consultation",
    detail: "Share a little context first.",
    href: "/consultation",
    icon: UserRound,
  },
  {
    label: "Call us",
    detail: "010 109 5097",
    href: "tel:+27101095097",
    icon: Phone,
  },
  {
    label: "Send us an email",
    detail: "info@imvelowealth.co.za",
    href: "mailto:info@imvelowealth.co.za",
    icon: Mail,
  },
  {
    label: "Talk on WhatsApp",
    detail: "Start a direct conversation.",
    href: waLink(),
    icon: WhatsAppIcon,
    external: true,
  },
]

export function ServicesCTA() {
  return (
    <section className="bg-[#EAF4F6] py-24 sm:py-32">
      <div className="mx-auto grid max-w-[90rem] items-start gap-12 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        <div data-aos="fade-up">
          <p className="section-kicker text-[#307283]">Choose what feels easiest</p>
          <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-[#005166] sm:text-5xl">
            Start the conversation your way.
          </h2>
          <p className="mt-7 max-w-lg text-base leading-8 text-[#536A70] sm:text-lg">
            Tell us what is changing. We will help you find the right next step.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-[#C8DDE1] bg-white sm:grid-cols-2" data-aos="fade-up" data-aos-delay="100">
          {routes.map((route, index) => (
            <Link
              key={route.label}
              href={route.href}
              target={route.external ? "_blank" : undefined}
              rel={route.external ? "noreferrer" : undefined}
              className={`group flex min-h-[13rem] flex-col justify-between p-7 transition-colors hover:bg-[#F7FAFB] sm:p-8 ${
                index % 2 === 0 ? "sm:border-r sm:border-[#C8DDE1]" : ""
              } ${index < 2 ? "border-b border-[#C8DDE1]" : ""}`}
            >
              <div className="flex items-start justify-between gap-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF4F6] text-[#307283]">
                  <route.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <ArrowRight className="h-4 w-4 text-[#307283] transition-transform group-hover:translate-x-1" />
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-[#005166]">{route.label}</h3>
                <p className="mt-2 text-sm text-[#536A70]">{route.detail}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
