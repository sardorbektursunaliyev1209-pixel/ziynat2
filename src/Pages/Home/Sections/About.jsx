import { ArrowRight, ShieldCheck, Star, Clock, Zap, Lock, Home } from "lucide-react";

function About() {
  return (
    <>
      <div id="about" className="About bg-white">
        <div className="container_1200 py-20 flex flex-col lg:flex-row gap-10 lg:gap-20 px-4 lg:px-0">
          <div className="left w-full lg:w-[550px]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 rounded-2xl bg-amber-500"></div>
              <h3 className="text-1xl ">Nma uchun biz ?</h3>
            </div>
            <h2 className="text-3xl sm:text-4xl  mt-5 font-bold">
              Biz bilan sizning orzuyingiz haqiq bo'ladi
            </h2>
            <p className="text-gray-500 w-full lg:w-110 py-4 ">
              Ziynat uy-joy savdo kompaniyasi sifatida biz mijozlarimizga eng
              yaxshi sharoitlarda uy tanlash va xarid qilishda yordam beramiz.
              Bizning asosiy maqsadimiz — ishonch, qulaylik va sifatli xizmat.
            </p>
            <button className="flex items-center gap-2 rounded-full px-6 py-3 font-medium text-sm bg-[#d4a94a] text-[#0a1522] hover:bg-[#e6bd5e] transition-colors">
              Kompaniya haqida
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="right grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-50 p-8 flex flex-col items-center text-center w-full max-w-[260px] hover:shadow-[0_12px_28px_rgba(212,169,74,0.25)] hover:-translate-y-1 transition-all duration-300">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#faf3e2] mb-2">
                <ShieldCheck
                  size={25}
                  strokeWidth={1.5}
                  className="text-[#d4a94a]"
                />
              </span>
              <p className="font-semibold text-[#0a1522] text-base mb-2">
                Ishonchli
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Har bir bitimda
                <br />
                siz bilan
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-gray-50 p-8 flex flex-col items-center text-center w-full max-w-[260px] hover:shadow-[0_12px_28px_rgba(212,169,74,0.25)] hover:-translate-y-1 transition-all duration-300">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#faf3e2] mb-2">
                <Star
                  size={25}
                  strokeWidth={1.5}
                  className="text-[#d4a94a]"
                />
              </span>
              <p className="font-semibold text-[#0a1522] text-base mb-2">
                Professional
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Tajribali
                <br />
                mutaxassislar
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-50 p-8 flex flex-col items-center text-center w-full max-w-[260px] hover:shadow-[0_12px_28px_rgba(212,169,74,0.25)] hover:-translate-y-1 transition-all duration-300">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#faf3e2] mb-2">
                <Clock
                  size={25}
                  strokeWidth={1.5}
                  className="text-[#d4a94a]"
                />
              </span>
              <p className="font-semibold text-[#0a1522] text-base mb-2">
                Qulay shartlar
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Siz uchun eng
                <br />
                yaxshi takliflar
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-50 p-8 flex flex-col items-center text-center w-full max-w-[260px] hover:shadow-[0_12px_28px_rgba(212,169,74,0.25)] hover:-translate-y-1 transition-all duration-300">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#faf3e2] mb-2">
                <Zap
                  size={25}
                  strokeWidth={1.5}
                  className="text-[#d4a94a]"
                />
              </span>
              <p className="font-semibold text-[#0a1522] text-base mb-2">
                Tezkor xizmat
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Vaqtingiz
                <br />
                qadrlidir
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-50 p-8 flex flex-col items-center text-center w-full max-w-[260px] hover:shadow-[0_12px_28px_rgba(212,169,74,0.25)] hover:-translate-y-1 transition-all duration-300">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#faf3e2] mb-2">
                <Lock
                  size={25}
                  strokeWidth={1.5}
                  className="text-[#d4a94a]"
                />
              </span>
              <p className="font-semibold text-[#0a1522] text-base mb-2">
                Xavfsiz bitim
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Qonuniy
                <br />
                kafolat
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-50 p-8 flex flex-col items-center text-center w-full max-w-[260px] hover:shadow-[0_12px_28px_rgba(212,169,74,0.25)] hover:-translate-y-1 transition-all duration-300">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#faf3e2] mb-2">
                <Home
                  size={25}
                  strokeWidth={1.5}
                  className="text-[#d4a94a]"
                />
              </span>
              <p className="font-semibold text-[#0a1522] text-base mb-2">
                Keng tanlov
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Turli hududlarda
                <br />
                uylar
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;