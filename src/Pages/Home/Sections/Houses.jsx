import { Link } from "react-router-dom";
import { MapPin, BedDouble, Maximize2, ArrowRight } from "lucide-react";
import { houses } from '../../data/hauses'
function Houses() {
  return (
    <>
      <div id="houses" className="Houses bg-white">
        <div className="container_1200 py-20 px-4 lg:px-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 rounded-2xl bg-amber-500"></div>
                <h3 className="text-2xl text-[#d79912]">Uy turlari</h3>
              </div>
              <h2 className="text-2xl sm:text-3xl mt-5 font-bold text-black">
                Bizning eng yaxshi takliflarimiz
              </h2>
              <p className="text-gray-500 py-4">
                Siz uchun eng qulay va ishonchli uy-joylar. <br /> Har bir mijoz
                o'z orzusidagi uyni topishi uchun.
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-full px-6 py-3 font-medium text-sm border border-gray-600 text-black      hover:border-[#d4a94a] hover:text-red-600 transition-colors w-fit">
              Barcha uylar
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {
              houses.map((item)=>(

            <Link to={`/uy/${item.id}`} key={item.id} className="bg-[#101f34] rounded-2xl overflow-hidden  hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-44">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#d4a94a] text-[#0a1522] text-xs font-medium px-3 py-1 rounded-full">
                  {
                    item.status
                  }
                </span>
                <span className="absolute top-3 right-3 bg-white/90 text-[#0a1522] text-xs font-medium px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <p className="font-semibold text-white text-base mb-2">
                  {item.title}
                </p>
                <div className="flex items-start gap-1 text-gray-400 text-xs mb-3">
                  <MapPin
                    size={14}
                    className="text-[#d4a94a] mt-0.5 shrink-0"
                  />
                  <span>
                    <span className="text-gray-500">Manzil:</span> {item.location}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                  <span className="flex items-center gap-1">
                    <BedDouble size={14} className="text-[#d4a94a]" />
                    {item.rooms}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize2 size={14} className="text-[#d4a94a]" />
                    {item.area}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-white font-semibold">
                    <span className="text-gray-500 font-normal text-xs">
                      Narx:
                    </span>{" "}
                    {item.price}
                  </p>
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#faf3e2]">
                    <ArrowRight size={16} className="text-[#d4a94a]" />
                  </span>
                </div>
              </div>
            </Link>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Houses;