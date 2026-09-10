import { LucideBuilding2 } from "lucide-react";
import { IoIosSend } from "react-icons/io";

import { FaGlobe, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="Footer bg-[#0a1522]">
        <div className="container_1200 py-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <LucideBuilding2  size={30} strokeWidth={1.5} className="text-[#d4a94a]" />

              <div className="leading-tight">
                <p className="text-white text-xl font-semibold tracking-wide">ZIYNAT</p>
                <p className="text-[10px] tracking-[0.25em] text-[#d4a94a]">UY JOY SAVDO</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <a href="#hero" className="text-sm text-gray-300 hover:text-[#d4a94a]">
                Bosh sahifa
              </a>
              <a href="#about" className="text-sm text-gray-300 hover:text-[#d4a94a]">
                Biz haqimizda
              </a>
              <a href="#houses" className="text-sm text-gray-300 hover:text-[#d4a94a]">
                Uylar
              </a>
              <a href="#services" className="text-sm text-gray-300 hover:text-[#d4a94a]">
                Xizmatlar
              </a>
              <a href="#contact" className="text-sm text-gray-300 hover:text-[#d4a94a]">
                Aloqa
              </a>
            </nav>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <a
                  href="https://t.me/ziynat"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 text-gray-300 hover:border-[#d4a94a] hover:text-[#d4a94a] transition-colors"
                >
                  <IoIosSend size={15} />

                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 text-gray-300 hover:border-[#d4a94a] hover:text-[#d4a94a] transition-colors"
                >
                  <FaInstagram size={15}/>


                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 text-gray-300 hover:border-[#d4a94a] hover:text-[#d4a94a] transition-colors"
                >
                  <FaYoutube size={15}/>

                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 text-gray-300 hover:border-[#d4a94a] hover:text-[#d4a94a] transition-colors"
                >
                  <FaGlobe size={15} />
                </a>
              </div>

              <a href="tel:+998883676666" className="flex items-center gap-2 text-white text-sm">
                <FaPhone size={16} className="text-[#d4a94a]" />
                +998 88 367 66 66
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700/50 mt-6 pt-6 text-center">
            <p className="text-xs text-gray-400">
              © 2025 Ziynat uy-joy savdo. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;