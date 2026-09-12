import {
  MessageCircleQuestion,
  Scale,
  ClipboardList,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";
import uy2 from "../../../assets/hauses-img/uy2.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

function Services() {
  return (
    <>
      <div id="services" className="Services bg-white">
        <div className="container_1200 py-20 sm:py-24 px-6 lg:px-0 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 rounded-2xl bg-amber-500"></div>
              <h3 className="text-1xl text-[#d4a94a]">Xizmatlar</h3>
            </div>

            <h2 className="text-2xl sm:text-3xl mt-5 font-bold text-[#0a1522]">
              Bizning xizmatlarimiz
            </h2>

            <p className="text-gray-500 py-4 max-w-md">
              Uy tanlashdan tortib, bitim yakunigacha — barcha jarayonlarda siz
              bilan.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 mt-8">
              <motion.div
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="text-center"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#ed585d] mb-4 mx-auto">
                  <MessageCircleQuestion
                    size={24}
                    strokeWidth={1.5}
                    className="text-[#fffcf5]"
                  />
                </span>
                <p className="font-semibold text-[#0a1522] text-sm mb-1">
                  Uy tanlashda maslahat
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Sizning ehtiyojingizga
                  <br />
                  mos variantlar
                </p>
              </motion.div>

              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="text-center"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#eb5e63] mb-4 mx-auto">
                  <Scale
                    size={24}
                    strokeWidth={1.5}
                    className="text-[#fffcf5]"
                  />
                </span>
                <p className="font-semibold text-[#0a1522] text-sm mb-1">
                  Huquqiy yordam
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Bitimni qonuniy va
                  <br />
                  xavfsiz qilish
                </p>
              </motion.div>

              <motion.div
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="text-center"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#ec5d62] mb-4 mx-auto">
                  <ClipboardList
                    size={24}
                    strokeWidth={1.5}
                    className="text-[#fffcf5]"
                  />
                </span>
                <p className="font-semibold text-[#0a1522] text-sm mb-1">
                  Hujjatlar bilan ishlash
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Barcha rasmiy
                  <br />
                  jarayonlar
                </p>
              </motion.div>

              <motion.div
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="text-center"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#f24e53]/100 mb-4 mx-auto">
                  <Landmark
                    size={24}
                    strokeWidth={1.5}
                    className="text-[#fffcf5]"
                  />
                </span>
                <p className="font-semibold text-[#0a1522] text-sm mb-1">
                  Bank kreditlari
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Bitimdan keyin ham
                  <br />
                  biz bilan
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative mt-6 lg:mt-0 ml-4 sm:ml-6 lg:ml-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 border-t-2 border-l-2 border-dashed border-[#d4a94a] rounded-tl-3xl"></div>

            <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96">
              <img
                src={uy2}
                alt="Ziynat uy-joy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Services;