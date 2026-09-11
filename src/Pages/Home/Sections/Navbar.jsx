import { useEffect, useState } from "react";
import { Phone, Send, Menu, X } from "lucide-react";
import logo from '../../../assets/logo/LOGOO.png'
const LINKS = [
  { id: "hero", label: "Bosh sahifa" },
  { id: "about", label: "Biz haqimizda" },
  { id: "houses", label: "Uylar" },
  { id: "services", label: "Xizmatlar" },
  { id: "contact", label: "Aloqa" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    function handleScroll() {
      const scrollPos = window.scrollY + 120;

      for (let i = LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(LINKS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActive(LINKS[i].id);
          break;
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="">
          <img src={logo} alt="" className="w-40 object-cover" />
          </div>
          
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm pb-1 transition-colors ${
                active === link.id
                  ? "text-[#d4a94a] border-b-2 border-[#d4a94a]"
                  : "text-black hover:text-[#d4a94a]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+998883676666"
            className="flex items-center gap-2 text-black text-sm"
          >
            <Phone size={20 } className="text-[#d4a94a]" />
            +998 88 367 66 66
          </a>
          <a
            href="https://t.me/ziynatuyjoysavdo"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-[#d4a94a] text-[#0a1522]"
          >
            <Send size={15} />
            Telegram
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden flex items-center justify-center w-10 h-10 text-black"
          aria-label="Menyu"
        >
          <Menu size={26} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[100] bg-black/60"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-4 right-4 left-4 bg-[#0a1522] rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img src={logo} alt="" className="w-9 h-9 rounded-full object-cover" />
                <div className="leading-tight">
                  <p className="text-white text-base font-semibold tracking-wide">
                    ZIYNAT
                  </p>
                  <p className="text-[9px] tracking-[0.25em] text-[#d4a94a]">
                    UY JOY SAVDO
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-9 h-9 text-white"
                aria-label="Yopish"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col px-5 py-3">
              {LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base py-3 border-b border-white/5 last:border-b-0 ${
                    active === link.id
                      ? "text-[#d4a94a] font-medium"
                      : "text-gray-200"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 px-5 py-4 border-t border-white/10">
              <a
                href="tel:+998883676666"
                className="flex items-center gap-2 text-white text-sm"
              >
                <Phone size={16} className="text-[#d4a94a]" />
                +998 88 367 66 66
              </a>
              <a
                href="https://t.me/ziynatuyjoysavdo"
                className="flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-[#d4a94a] text-[#0a1522]"
              >
                <Send size={15} />
                Telegram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar