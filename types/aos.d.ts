declare module "aos" {
  type AosOptions = {
    duration?: number
    easing?: string
    once?: boolean
    offset?: number
    disable?: boolean | "phone" | "tablet" | "mobile" | (() => boolean)
  }

  const AOS: {
    init(options?: AosOptions): void
    refresh(): void
    refreshHard(): void
  }

  export default AOS
}
