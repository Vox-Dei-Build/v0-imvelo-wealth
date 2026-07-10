import { VideoHero } from "@/components/video-hero"

export function AboutHero() {
  return (
    <VideoHero
      videoSrc="/videos/hero-advice.mp4"
      poster="/videos/hero-advice-poster.jpg"
      heightClassName="min-h-[82svh]"
      mediaPosition="center"
      eyebrow="The story behind Imvelo Wealth"
      title={
        <>
          We built the firm we wanted <span className="text-[#8FD3DD]">families to have.</span>
        </>
      }
      description="Two women. One shared conviction: financial advice can be rigorous and still feel deeply personal. This is how Palesa and Siba brought that belief to life."
      footer={
        <dl className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
          <div className="flex flex-col">
            <dt className="order-last mt-1 text-sm leading-6 text-white/65">FSCA FSP licence</dt>
            <dd className="text-3xl font-medium tracking-[-0.03em] text-white">49944</dd>
          </div>
          <div className="flex flex-col">
            <dt className="order-last mt-1 text-sm leading-6 text-white/65">Founded in Sandton</dt>
            <dd className="text-3xl font-medium tracking-[-0.03em] text-white">2018</dd>
          </div>
          <div className="flex flex-col">
            <dt className="order-last mt-1 text-sm leading-6 text-white/65">Leadership</dt>
            <dd className="text-3xl font-medium tracking-[-0.03em] text-white">CFP® led</dd>
          </div>
        </dl>
      }
    />
  )
}
