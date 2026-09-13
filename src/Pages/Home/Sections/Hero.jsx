  import { useState } from "react";
  import { Search, Play, X } from "lucide-react";
  import video from "../../../assets/Video/ziynat_vd.mp4";
  import heroBg from "../../../assets/hero-bg/heroo.png";
  export default function Hero() {
    const [videoOpen, setVideoOpen] = useState(false);
    return (
      <div
        id="hero"
        className="hero relative bg-[#FAF7F1] bg-cover bg-no-repeat bg-center lg:bg-[right_center] overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 " />

        <div className="container_1200 px-6 lg:px-0 relative">
          <section className="relative flex flex-col lg:flex-row  w-full min-h-[480px] sm:min-h-[560px] lg:h-[680px] py-14 lg:py-0 gap-10 lg:gap-0">
            <div className="relative flex items-center order-2 lg:order-1">
              <div className="max-w-xl">
                <p className="text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 text-gray-600 tracking-wide">
                  Sizning orzudagi uy — biz bilan!
                </p>

                <h1 className="font-serif text-black leading-[0.95] text-4xl sm:text-5xl lg:text-7xl">
                  Ziynat
                </h1>
                <h2 className="font-serif leading-[0.95] text-4xl sm:text-5xl lg:text-7xl mb-5 sm:mb-8 text-[#d4a94a]">
                  Uy-joy savdo
                </h2>

                <p className="text-sm sm:text-base lg:text-lg mb-7 sm:mb-10 max-w-md text-gray-600 leading-relaxed">
                  Siz uchun turli xil uy-joylar, xonadonlar va ko'chmas mulk
                  e'lonlarini bir joyga jamladik!
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-5 sm:gap-8">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base bg-[#d4a94a] text-[#0a1522] hover:bg-[#e6bd5e] transition-colors shadow-lg shadow-[#d4a94a]/25">
                    <Search size={18} />
                    Uylarni ko'rish
                  </button>

                  <button
                    onClick={() => setVideoOpen(true)}
                    className="flex items-center gap-3 text-black text-sm cursor-pointer group"
                  >
                    <span className="flex items-center justify-center rounded-full w-11 h-11 sm:w-12 sm:h-12 border-[1px] border-[#eea404] group-hover:bg-[#d4a94a]/10 transition-colors">
                      <Play size={20} className="text-[#b78822]" fill="#d4a94a" />
                    </span>
                    <span className="leading-tight text-left">
                      <span className="block text-sm sm:text-base text-black font-medium">
                        Kompaniya haqida
                      </span>
                      <span className="block text-xs text-gray-600">video</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {videoOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-3 sm:px-4"
            onClick={() => setVideoOpen(false)}
          >
            <div
              className="relative w-full max-w-3xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-10 sm:-top-12 right-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Yopish"
              >
                <X size={18} />
              </button>

              <video
                src={video}
                controls
                autoPlay
                className="w-full h-full rounded-xl bg-black"
              >
                Brauzeringiz video formatini qo'llab-quvvatlamaydi.
              </video>
            </div>
          </div>
        )}
      </div>
    );
  }