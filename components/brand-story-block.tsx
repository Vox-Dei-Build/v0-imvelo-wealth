import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function BrandStoryBlock() {
  return (
    <section className="relative overflow-hidden bg-[#064654] py-24 text-white sm:py-32">
      <div className="absolute -right-28 top-14 h-96 w-96 rounded-full border border-white/10" aria-hidden="true" />
      <div className="absolute -right-8 top-40 h-64 w-64 rounded-full border border-[#8FD3DD]/20" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[90rem] items-center gap-16 px-6 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24 lg:px-12">
        <div className="relative min-h-[34rem]" data-aos="fade-up">
          <div className="absolute left-0 top-0 aspect-[4/5] w-[58%] overflow-hidden rounded-[1.75rem] bg-[#D8E7EA] shadow-2xl">
            <Image
              src="/team/palesa-tlholoe.jpeg"
              alt="Palesa Tlholoe, CFP® — co-founder of Imvelo Wealth"
              fill
              sizes="(max-width: 1024px) 55vw, 420px"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute bottom-0 right-0 aspect-[4/5] w-[53%] overflow-hidden rounded-[1.75rem] border-[10px] border-[#064654] bg-[#D5E2E4] shadow-2xl">
            <Image
              src="/team/siba-njoba-enhanced-v2.jpg"
              alt="Siba Njoba, CFP® — co-founder of Imvelo Wealth"
              fill
              sizes="(max-width: 1024px) 50vw, 390px"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute bottom-7 left-5 max-w-[13rem] rounded-2xl bg-[#8FD3DD] p-5 text-[#005166] shadow-xl sm:left-8">
            <p className="font-serif text-3xl leading-none">Two founders.</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em]">One personal promise.</p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="120">
          <p className="section-kicker text-[#8FD3DD]">The people behind the plan</p>
          <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.1] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.4rem]">
            Advice that begins with listening.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/72">
            In 2018, Palesa Tlholoe, CFP® and Siba Njoba, CFP® founded Imvelo Wealth with a simple belief: a financial
            plan should start with your story—not a product brochure.
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/64">
            Today, that belief guides every relationship. They ask about the people you love, the work you are building,
            and the future you want to make possible. Then they bring the right structure around it.
          </p>

          <blockquote className="mt-9 border-l border-[#8FD3DD] pl-6">
            <p className="text-2xl font-medium leading-snug tracking-[-0.025em] text-white sm:text-3xl">
              “Money conversations are life conversations.”
            </p>
          </blockquote>

          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-3 border-b border-white/35 pb-2 text-sm font-bold text-white transition-colors hover:border-[#8FD3DD] hover:text-[#8FD3DD]"
          >
            Read the Imvelo story
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
