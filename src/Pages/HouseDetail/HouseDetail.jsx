import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  BedDouble,
  Maximize2,
  CheckCircle2,
  ArrowLeft,
  Phone,
  Send,
} from "lucide-react";
import { houses } from "../data/hauses";
import Navbar from "../Home/Sections/Navbar";
import Footer from "../Home/Sections/Footer";

function HouseDetail() {
  const { id } = useParams();
  const house = houses.find((item) => item.id === Number(id));
  const nearby = houses.filter((item) => item.id !== Number(id)).slice(0, 3);
  if (!house) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-xl font-semibold text-[#0a1522]">Uy topilmadi</p>
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-[#d4a94a] hover:underline"
        >
          <ArrowLeft size={16} />
          Bosh sahifaga qaytish
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar/>
      <div className="container_1200 py-10 px-4 lg:px-0">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#d4a94a] mb-6"
        >
          <ArrowLeft size={16} />
          Orqaga
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden h-72 sm:h-96 lg:h-[420px] relative mb-6">
              <img
                src={house.image}
                alt={house.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#d4a94a] text-[#0a1522] text-xs font-medium px-3 py-1 rounded-full">
                {house.status}
              </span>
              <span className="absolute top-4 right-4 bg-white/90 text-[#0a1522] text-xs font-medium px-3 py-1 rounded-full">
                {house.tag}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-[#0a1522]">
                  {house.title}
                </h1>
                <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                  <MapPin size={14} className="text-[#d4a94a]" />
                  {house.location}
                </div>
              </div>
              <p className="text-2xl font-bold text-[#0a1522] whitespace-nowrap">
                {house.price}
              </p>
            </div>

            <div className="flex items-center gap-8 border-y border-gray-100 py-4 mb-6 text-sm text-gray-600">
              <span className="flex flex-col items-center gap-1">
                <BedDouble size={18} className="text-[#d4a94a]" />
                {house.rooms}
              </span>
              <span className="flex flex-col items-center gap-1">
                <Maximize2 size={18} className="text-[#d4a94a]" />
                {house.area}
              </span>
              {house.landmark && (
                <span className="flex flex-col items-center gap-1 text-center">
                  <MapPin size={18} className="text-[#d4a94a]" />
                  {house.landmark}
                </span>
              )}  
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                house.location
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-gray-100 rounded-xl p-4 mb-6 hover:border-[#d4a94a] transition-colors group"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#faf3e2] shrink-0">
                <MapPin size={20} className="text-[#d4a94a]" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#0a1522] group-hover:text-[#d4a94a] transition-colors">
                  Xaritada ko'rish
                </p>
                <p className="text-xs text-gray-500">{house.location}</p>
              </div>
            </a>

            <div className="mb-6">
              <p className="font-semibold text-[#0a1522] mb-2">Tavsif</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {house.title} — {house.location} manzilida joylashgan,{" "}
                {house.rooms}, {house.area} maydonli qulay uy-joy. Xarid
                qilishdan oldin barcha savollaringizga javob berishga
                tayyormiz.
              </p>
            </div>

            {house.features && house.features.length > 0 && (
              <div>
                <p className="font-semibold text-[#0a1522] mb-3">
                  Qo'shimcha ma'lumotlar
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {house.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle2 size={16} className="text-[#d4a94a] shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="border border-gray-100 rounded-2xl p-6">
              <p className="font-semibold text-[#0a1522] mb-1">Ziynat uy-joy savdo</p>
              <p className="text-xs text-gray-500 mb-4">
                Ishonchli hamkoringiz
              </p>

              <div className="flex flex-col gap-3 text-sm text-gray-600 mb-5">
                <div className="flex items-center justify-between">
                  <span>Til:</span>
                  <span className="text-[#0a1522]">O'zbek, Rus</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Javob berish vaqti:</span>
                  <span className="text-[#0a1522]">1 soat ichida</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="tel:+998883676666"
                  className="flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-sm bg-[#d4a94a] text-[#0a1522] hover:bg-[#e6bd5e] transition-colors"
                >
                  <Phone size={16} />
                  Qo'ng'iroq qilish
                </a>
                <a
                  href="https://t.me/ziynatuyjoysavdo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-sm border border-gray-300 text-[#0a1522] hover:border-[#d4a94a] hover:text-[#d4a94a] transition-colors"
                >
                  <Send size={16} />
                  Telegram
                </a>
                <a
                  href={
                    house.lat && house.lng
                      ? `https://www.google.com/maps/search/?api=1&query=${house.lat},${house.lng}`
                      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          house.location
                        )}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-sm border border-gray-300 text-[#0a1522] hover:border-[#d4a94a] hover:text-[#d4a94a] transition-colors"
                >
                  <MapPin size={16} />
                  Lokatsiya
                </a>
              </div>
            </div>

            {nearby.length > 0 && (
              <div>
                <p className="font-semibold text-[#0a1522] mb-4">
                  Yaqin-atrofdagi takliflar
                </p>
                <div className="flex flex-col gap-4">
                  {nearby.map((item) => (
                    <Link
                      key={item.id}
                      to={`/uy/${item.id}`}
                      className="flex gap-3 border border-gray-100 rounded-xl p-3 hover:border-[#d4a94a] transition-colors"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-16 rounded-lg object-cover shrink-0"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[#0a1522]">
                          {item.price}
                        </p>
                        <p className="text-xs text-gray-500">{item.location}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                          <span className="flex items-center gap-1">
                            <BedDouble size={12} />
                            {item.rooms}
                          </span>
                          <span className="flex items-center gap-1">
                            <Maximize2 size={12} />
                            {item.area}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HouseDetail;