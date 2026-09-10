import { Phone, Send, MapPin, ArrowRight } from "lucide-react";
import kalit from "../../../assets/hauses-img/4.webp"

function Contact() {
  return (
    <>
      <div id="contact" className="Contact bg-white">
        <div className="container_1200 py-20 px-6 lg:px-0 grid lg:grid-cols-3 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden h-64 sm:h-72 lg:h-80">
            <img
              src={kalit}
              alt="Kalitlar"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 rounded-2xl bg-amber-500"></div>
              <h3 className="text-1xl text-[#d4a94a]">Aloqa</h3>
            </div>

            <h2 className="text-2xl sm:text-3xl mt-5 font-bold text-[#0a1522]">
              Biz bilan bog'laning
            </h2>

            <p className="text-gray-500 py-4 max-w-sm">
              Savollaringiz bormi? Biz bilan bog'laning, mutaxassislarimiz
              sizga yordam berishdan mamnun bo'ladi.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3 text-[#0a1522] text-sm">
                <Phone size={18} className="text-[#d4a94a]" />
                +998 88 367 66 66
              </div>
              <div className="flex items-center gap-3 text-[#0a1522] text-sm">
                <Send size={18} className="text-[#d4a94a]" />
                Telegram
              </div>
              <div className="flex items-center gap-3 text-[#0a1522] text-sm">
                <MapPin size={18} className="text-[#d4a94a]" />
                Farg'ona sh., A. Navoiy ko'ch. 64
              </div>
            </div>
          </div>

          <div className="bg-[#faf9f6] rounded-2xl p-6">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Ismingiz"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0a1522] placeholder-gray-400 outline-none focus:border-[#d4a94a]"
              />
              <input
                type="text"
                placeholder="Telefon raqamingiz"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0a1522] placeholder-gray-400 outline-none focus:border-[#d4a94a]"
              />
              <textarea
                placeholder="Xabar matni"
                rows={4}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0a1522] placeholder-gray-400 outline-none focus:border-[#d4a94a] resize-none"
              ></textarea>

              <button className="flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-sm bg-[#d4a94a] text-[#0a1522] hover:bg-[#e6bd5e] transition-colors">
                Yuborish
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;