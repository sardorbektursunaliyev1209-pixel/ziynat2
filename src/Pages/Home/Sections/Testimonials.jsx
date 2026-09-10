import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import def1 from "../../../assets/hauses-img/default.png"
    
function Testimonials() {
  return (
    <>
      <div id="testimonials" className="Testimonials bg-[#0a1522]">
        <div className="container_1200 py-20 px-6 lg:px-0 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 rounded-2xl bg-amber-500"></div>
              <h3 className="text-1xl text-[#d4a94a]">Mijozlar fikri</h3>
            </div>

            <h2 className="text-2xl sm:text-3xl mt-5 font-bold text-white leading-snug">
              Bizning mijozlarimiz
              <br />
              biz haqimizda nima deyishadi?
            </h2>

            <p className="text-gray-400 py-4 max-w-md">
              Mijozlarimizning ishonchi — bizning eng katta mukofotimiz.
              Ularning ijobiy fikrlari bizga yanada ko'proq harakat
              qilishga undaydi.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <button className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-600 text-white hover:border-[#d4a94a] hover:text-[#d4a94a] transition-colors">
                <ArrowLeft size={18} />
              </button>
              <button className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-600 text-white hover:border-[#d4a94a] hover:text-[#d4a94a] transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={def1}
                  alt="Azizbek Karimov"
                  className="w-11 h-11 rounded-full object-cover bg-gray-200"
                />
                <div>
                  <p className="font-semibold text-[#0a1522] text-sm">
                    Azizbek Karimov
                  </p>
                  <div className="flex items-center gap-0.5 mt-1">
                    <Star size={13} className="text-[#d4a94a]" fill="#d4a94a" />
                    <Star size={13} className="text-[#d4a94a]" fill="#d4a94a" />
                    <Star size={13} className="text-[#d4a94a]" fill="#d4a94a" />
                    <Star size={13} className="text-[#d4a94a]" fill="#d4a94a" />
                    <Star size={13} className="text-[#d4a94a]" fill="#d4a94a" />
                  </div>
                </div>
              </div>
              <Quote size={22} className="text-[#d4a94a] mb-2" />
              <p className="text-sm text-gray-500 leading-relaxed">
                "Ziynat kompaniyasidan uy sotib olish jarayoni juda oson va
                qulay bo'ldi. Xodimlar juda professional, har doim aloqada
                bo'lishdi. Tavsiya qilaman!"
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-2xl p-6"
            >

              <div className="flex items-center gap-3 mb-3">
                <img
                  src={def1}
                  alt="Dilshoda Tursunova"
                  className="w-11 h-11 rounded-full object-cover bg-gray-200"
                />
                <div>
                  <p className="font-semibold text-[#0a1522] text-sm">
                    Dilshoda Tursunova
                  </p>
                  <div className="flex items-center gap-0.5 mt-1">
                    <Star size={13} className="text-[#d4a94a]" fill="#d4a94a" />
                    <Star size={13} className="text-[#d4a94a]" fill="#d4a94a" />
                    <Star size={13} className="text-[#d4a94a]" fill="#d4a94a" />
                    <Star size={13} className="text-[#d4a94a]" fill="#d4a94a" />
                    <Star size={13} className="text-[#d4a94a]" fill="#d4a94a" />
                  </div>
                </div>
              </div>

              <Quote size={22} className="text-[#d4a94a] mb-2" />

              <p className="text-sm text-gray-500 leading-relaxed">
                "Orzudagi uyimizni aynan Ziynat orqali topdik. Barcha
                jarayonlar shaffof va tez bo'ldi. Rahmat butun jamoaga!"
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;