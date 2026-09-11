import { useState } from "react";
import { Search, Play, X } from "lucide-react";
import video from "../../../assets/Video/ziynat_vd.mp4";
import heroBg from "../../../assets/hero-bg/heroo.png";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section
        id="hero"
        className="hero relative overflow-hidden bg-[#FAF7F1]"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "min(52vw, 760px)",
            backgroundPosition: "right 45%",
          }}
        />

        <style>
          {`
            @media (max-width: 1023px) {
              .hero > div:first-child {
                background-size: 88vw !important;
                background-position: center bottom 15px !important;
              }
            }

            @media (max-width: 640px) {
              .hero > div:first-child {
                background-size: 100vw !important;
                background-position: center bottom 0 !important;
              }
            }
          `}
        </style>

        <div
          className="absolute right-[-120px] top-[80px] hidden lg:block w-[620px] h-[620px] rounded-full bg-gradient-to-br from-[#faf0d9] to-[#f3dfb8] opacity-80"
          style={{ zIndex: 0 }}
        />

        <div className="container_1200 relative z-10 px-5 sm:px-6 lg:px-0">
          <section className="relative flex flex-col lg:flex-row w-full min-h-[760px] sm:min-h-[820px] lg:min-h-[680px] lg:h-[680px] pt-24 sm:pt-28 lg:pt-0 pb-10 lg:pb-0">
            <div className="relative flex items-center order-1 lg:order-1 w-full lg:w-[55%] lg:min-h-full">
              <div className="w-full max-w-xl text-center lg:text-left mx-auto lg:mx-0 pb-[330px] sm:pb-[370px] lg:pb-0">
                <p className="text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 text-gray-500 tracking-wide">
                  Sizning orzudagi uy — biz bilan!
                </p>

                <h1 className="font-serif text-black leading-[0.9] text-[46px] sm:text-6xl md:text-7xl lg:text-7xl">
                  Ziynat
                </h1>

                <h2 className="font-serif leading-[0.9] text-[43px] sm:text-6xl md:text-7xl lg:text-7xl mb-5 sm:mb-7 lg:mb-8 text-[#d4a94a]">
                  Uy-joy savdo
                </h2>

                <p className="text-sm sm:text-base lg:text-lg mb-7 sm:mb-9 lg:mb-10 max-w-md mx-auto lg:mx-0 text-gray-500 leading-relaxed">
                  Siz uchun turli xil uy-joylar, xonadonlar va ko'chmas mulk
                  e'lonlarini bir joyga jamladik!
                </p>

                <div className="flex flex-col sm:flex-row items-center lg:items-center justify-center lg:justify-start gap-4 sm:gap-6">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full px-7 sm:px-8 py-3.5 sm:py-4 font-semibold text-sm sm:text-base bg-[#d4a94a] text-[#0a1522] hover:bg-[#e6bd5e] transition-all duration-300 shadow-lg shadow-[#d4a94a]/25 active:scale-95">
                    <Search size={18} />
                    Uylarni ko'rish
                  </button>

                  <button
                    onClick={() => setVideoOpen(true)}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <span className="flex items-center justify-center rounded-full w-11 h-11 sm:w-12 sm:h-12 border border-[#eea404] group-hover:bg-[#d4a94a]/10 transition-all duration-300">
                      <Play
                        size={19}
                        className="text-[#b78822]"
                        fill="#d4a94a"
                      />
                    </span>

                    <span className="leading-tight text-left">
                      <span className="block text-sm sm:text-base text-black font-medium">
                        Kompaniya haqida
                      </span>
                      <span className="block text-xs text-gray-600">
                        video
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:w-[45%]" />
          </section>
        </div>
      </section>

      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-3 sm:px-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-11 sm:-top-12 right-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Yopish"
            >
              <X size={18} />
            </button>

            <video
              src={video}
              controls
              autoPlay
              playsInline
              className="w-full h-full rounded-xl sm:rounded-2xl bg-black object-contain"
            >
              Brauzeringiz video formatini qo'llab-quvvatlamaydi.
            </video>
          </div>
        </div>
      )}
    </>
  );
}