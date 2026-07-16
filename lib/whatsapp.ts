// Siba's confirmed WhatsApp line is the operational fallback. The public
// environment can still replace it later without another code release.
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "27722764872"

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Imvelo Wealth 👋 I'd like to start a conversation and arrange a consultation about my financial planning."

export function waLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
