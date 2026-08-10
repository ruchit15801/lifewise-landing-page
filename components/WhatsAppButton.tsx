import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/support";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[55] grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105 active:scale-95 bottom-[calc(5rem+env(safe-area-inset-bottom))] right-4 sm:bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:right-[4.5rem]"
      aria-label="Chat on WhatsApp with LifeWise support"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
