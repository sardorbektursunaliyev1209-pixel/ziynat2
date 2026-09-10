import { Send, MessageCircle } from "lucide-react";

function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/998883676666"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp orqali yozish"
      >
        <MessageCircle size={26} fill="white" />
        <span className="absolute right-16 whitespace-nowrap bg-[#0a1522] text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp orqali yozing
        </span>
      </a>

      <a
        href="https://t.me/ziynatuyjoysavdo"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#d4a94a] text-[#0a1522] shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Telegram orqali yozish"
      >
        <Send size={22} />
        <span className="absolute right-16 whitespace-nowrap bg-[#0a1522] text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Telegram orqali yozing
        </span>
      </a>
    </div>
  );
}

export default FloatingContact;