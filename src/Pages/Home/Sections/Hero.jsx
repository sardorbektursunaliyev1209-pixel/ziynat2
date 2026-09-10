import { useState } from "react";
import { Search, Play, X } from "lucide-react";
import heroBg from "../../../assets/hero-bg/img.jpg";
import video from "../../../assets/Video/kampaniya haqida video.mp4"
export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div
      id="hero"
      className="hero bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container_1200">
        <section className="relative w-full min-h-[520px] sm:min-h-[600px] lg:h-[680px] py-16 sm:py-0">
          <div className="absolute" />

          <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6">
            <div className="max-w-xl">
              <p className="text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 text-gray-300 tracking-wide">
                Sizning orzudagi uy — biz bilan!
              </p>

              <h1 className="text-white font-bold leading-[1.05] text-4xl sm:text-5xl lg:text-7xl">
                ZIYNAT
              </h1>
              <h2 className="font-bold leading-[1.05] text-4xl sm:text-5xl lg:text-7xl mb-5 sm:mb-8 text-[#d4a94a]">
                UY-JOY SAVDO
              </h2>

              <p className="text-sm sm:text-base lg:text-lg mb-7 sm:mb-10 max-w-md text-gray-300 leading-relaxed">
                Sizning ishonchli hamkoringiz. Eng yaxshi uylar, qulay shartlar, professional
                yondashuv!
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-5 sm:gap-8">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base bg-[#d4a94a] text-[#0a1522] hover:bg-[#e6bd5e] transition-colors">
                  <Search size={18} />
                  Uylarni ko'rish
                </button>

                <button
                  onClick={() => setVideoOpen(true)}
                  className="flex items-center gap-3 text-white text-sm cursor-pointer group"
                >
                  <span className="flex items-center justify-center rounded-full w-11 h-11 sm:w-12 sm:h-12 border border-[#d4a94a] group-hover:bg-[#d4a94a]/10 transition-colors">
                    <Play size={16} className="text-[#d4a94a]" fill="#d4a94a" />
                  </span>
                  <span className="leading-tight text-left">
                    <span className="block text-sm sm:text-base font-medium">Kompaniya haqida</span>
                    <span className="block text-xs text-gray-400">video</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Video modal */}
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