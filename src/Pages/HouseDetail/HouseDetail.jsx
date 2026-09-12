import { useParams, Link } from "react-router-dom";
import { MapPin, BedDouble, Maximize2, CheckCircle2, ArrowLeft, Phone, Send } from "lucide-react";
import { houses } from "../data/hauses";

function HouseDetail() {
  const { id } = useParams();
  const house = houses.find((item) => item.id === Number(id));

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
      <div className="container_1200 py-10 px-4 lg:px-0">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#d4a94a] mb-6"
        >
          <ArrowLeft size={16} />
          Orqaga
        </Link>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 lg:h-[420px]">
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

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0a1522] mb-4">
              {house.title}
            </h1>

            <div className="flex items-start gap-2 text-gray-500 text-sm mb-2">
              <MapPin size={16} className="text-[#d4a94a] mt-0.5 shrink-0" />
              <span>
                <span className="text-gray-400">Manzil:</span> {house.location}
              </span>
            </div>

            {house.landmark && (
              <div className="flex items-start gap-2 text-gray-500 text-sm mb-4">
                <MapPin size={16} className="text-[#d4a94a] mt-0.5 shrink-0" />
                <span>
                  <span className="text-gray-400">Mo'ljal:</span> {house.landmark}
                </span>
              </div>
            )}

            <div className="flex items-center gap-6 text-gray-600 text-sm mb-6">
              <span className="flex items-center gap-1">
                <BedDouble size={16} className="text-[#d4a94a]" />
                <span className="text-gray-400">Xona soni:</span> {house.rooms}
              </span>
              <span className="flex items-center gap-1">
                <Maximize2 size={16} className="text-[#d4a94a]" />
                <span className="text-gray-400">Maydoni:</span> {house.area}
              </span>
            </div>

            {house.features && house.features.length > 0 && (
              <div className="mb-6">
                <p className="font-semibold text-[#0a1522] mb-3">
                  Qo'shimcha ma'lumotlar:
                </p>
                <div className="flex flex-col gap-2">
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

            <div className="flex items-center justify-between border-t border-gray-100 pt-6 mb-6">
              <p className="text-2xl font-bold text-[#0a1522]">
                <span className="text-sm font-normal text-gray-400">Narx:</span>{" "}
                {house.price}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
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
                Telegram orqali yozish
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseDetail;