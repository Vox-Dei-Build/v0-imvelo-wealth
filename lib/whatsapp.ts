// The published Imvelo line remains the safe fallback for previews. Production
// can point the flow at a dedicated WhatsApp Business number without a code edit.
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "27101095097"

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Imvelo Wealth 👋 I'd like to start a conversation about my financial planning."

export function waLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
