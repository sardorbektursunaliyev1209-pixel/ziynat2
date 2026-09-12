  import { ArrowRight, Play, X } from "lucide-react";
  import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
  import { useEffect, useRef, useState } from "react";
  import uy from "../../../assets/hauses-img/uy.jpg";
  import video from "../../../assets/Video/ziynat_vd.mp4";

  function Counter({ value, suffix = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, value, motionValue]);

    useEffect(() => {
      return springValue.on("change", (latest) => {
        setDisplayValue(Math.floor(latest));
      });
    }, [springValue]);

    return (
      <span ref={ref}>
        {displayValue}
        {suffix}
      </span>
    );
  }

  function AboutCompany() {
    const [videoOpen, setVideoOpen] = useState(false);

    return (
      <>
        <div className="AboutCompany bg-white">
          <div className="container_1200 py-20 px-6 lg:px-0 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 rounded-2xl bg-amber-500"></div>
                <h3 className="text-1xl text-[#d4a94a]">Biz haqimizda</h3>
              </div>

              <h2 className="text-2xl sm:text-3xl mt-5 font-bold text-[#0a1522] leading-snug">
                Ziynat — ishonch va
                <br />
                sifat kafolati
              </h2>

              <p className="text-gray-500 py-4 max-w-md">
                Ziynat uy-joy savdo kompaniyasi 15 yillik tajribaga ega bo'lib,
                minglab oilalarning orzusidagi uyini topishda ko'maklashgan. Biz
                har bir mijozimizga individual yondashuv bilan xizmat ko'rsatamiz.
              </p>

              <div className="flex items-center gap-6 sm:gap-10 py-6">
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#0a1522]">
                    <Counter value={15} suffix="+" />
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    yillik tajriba
                  </p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#0a1522]">
                    <Counter value={500} suffix="+" />
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">baxtli oila</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#0a1522]">
                    <Counter value={1000} suffix="+" />
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    sotilgan uylar
                  </p>
                </div>
              </div>
              <a
                href="https://t.me/ziynatuyjoysavdo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram orqali yozish"
              >
                <button className="flex items-center gap-2 rounded-full px-6 py-3 font-medium text-sm bg-[#d4a94a] text-[#0a1522] hover:bg-[#e6bd5e] transition-colors">
                  Biz bilan bog'lanish
                  <ArrowRight size={16} />
                </button>
              </a>
            </motion.div>

            <motion.div
              className="relative mr-4 sm:mr-5 lg:mr-0 mb-4 sm:mb-5 lg:mb-0"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 w-full h-full rounded-2xl border-2 border-[#d4a94a]"></div>

              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96">
                <img
                  src={uy}
                  alt="Kompaniya haqida"
                  className="w-full h-full object-cover"
                />

                <div
                      onClick={() => setVideoOpen(true)}
                
                className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 flex items-center gap-3 bg-white/95 rounded-xl px-3 py-2 sm:px-4 sm:py-3">
                  <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#d4a94a]">
                    <Play size={16} className="text-[#0a1522]" fill="#0a1522" />
                  </span>
                  <div>
                    <p className="font-semibold text-[#0a1522] text-sm">
                      Kompaniya haqida
                    </p>
                    <button
                      className="text-xs text-gray-500"
                    >
                      video ko'rish
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
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
      </>
    );
  }
              
  export default AboutCompany;
