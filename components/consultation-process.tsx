import Image from "next/image"
import { ShieldCheck } from "lucide-react"

export function ConsultationProcess() {
  return (
    <aside className="lg:sticky lg:top-32">
      <div className="relative min-h-[34rem] overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(0,81,102,0.16)] sm:min-h-[42rem]">
        <Image
          src="/imagery/consultation-team.jpg"
          alt="A team in conversation around a meeting table"
          fill
          sizes="(max-width: 1024px) 100vw, 34vw"
          quality={90}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#032A33]/95 via-[#005166]/25 to-transparent" aria-hidden="true" />

        <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
          <p className="section-kicker text-[#8FD3DD]">A real person replies</p>
          <h2 className="mt-5 text-3xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-4xl">
            Context before conversation.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72 sm:text-base">
            Your introduction helps the right adviser prepare a useful first response.
          </p>
          <div className="mt-7 flex items-center gap-3 border-t border-white/20 pt-6 text-sm font-semibold text-white/78">
            <ShieldCheck className="h-5 w-5 text-[#8FD3DD]" aria-hidden="true" />
            Nothing is sent until you choose to send it.
          </div>
        </div>
      </div>
    </aside>
  )
}
