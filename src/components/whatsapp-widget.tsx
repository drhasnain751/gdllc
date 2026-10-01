import { MessageCircleMore } from "lucide-react";

import { GLOBALDEALZ } from "@/lib/site-info";

export function WhatsAppWidget() {
  return (
    <a
      href={GLOBALDEALZ.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with GlobalDealz on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      style={{ width: 58, height: 58 }}
    >
      <MessageCircleMore className="size-6" />
    </a>
  );
}
