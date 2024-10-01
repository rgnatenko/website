import Icons from "@/components/ui/Icons";
import { Clock } from "lucide-react";
import Link from "next/link";

const { prybyrannya } = Icons();

const services = [
  {
    link: "poverhneve",
    name: "Поверхневе",
    price: 2000,
    hours: 6,
    popular: false,
    icon: prybyrannya.bazove,
  },
  {
    link: "generalne",
    name: "Генеральне",
    price: 3000,
    hours: 8,
    popular: true,
    icon: prybyrannya.generalne,
  },
  {
    link: "pislya-remontu",
    name: "Після ремонту",
    price: 3000,
    hours: 8,
    popular: false,
    icon: prybyrannya.pislya_remontu,
  },
  {
    link: "pidtrymuyuche",
    name: "Підтримуюче",
    price: 1000,
    hours: 6,
    popular: false,
    icon: prybyrannya.pidtrymuyuche,
  },
  {
    link: "khimchystka",
    name: "Хімчистка",
    price: 800,
    hours: null,
    popular: true,
    icon: prybyrannya.khimchystka,
  },
  {
    link: "prybyrannya-terytoriy",
    name: "Прибирання територій",
    price: 3000,
    hours: null,
    popular: false,
    icon: prybyrannya.prybyrannya_terytoriy,
  },
  {
    link: "ozelenennya",
    name: "Озеленення територій",
    price: 2200,
    hours: null,
    popular: false,
    icon: prybyrannya.ozelenennya_terytoriy,
  },
  {
    link: "ozonatsiya",
    name: "Озонація",
    price: 2200,
    hours: null,
    popular: false,
    icon: prybyrannya.ozonatsiya,
  },
];

export default function Services() {
  return (
    <div className="sm:px-12 md:px-16 col-start-1 col-span-4 sm:col-span-6 md:col-span-12 bg-[#F1F7FF] px-8 py-8 rounded-lg text-gray-900">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full text-[14px]">
        <h2 className="text-[30px] sm:text-[26px] md:text-[35px] lg:text-[40px] font-bold uppercase w-full">
          наші послуги
        </h2>
        <p>
          Досить витрачати час на те, що виснажує – делегуй прибирання справжнім
          професіоналам!
        </p>
      </div>

      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-7 w-full mt-16 pb-2">
        <div className="absolute z-10 -top-4 -left-6 p-2 bg-[#FFD766] text-white font-semibold text-[10px] rounded-md -rotate-12">
          Прибирання
        </div>
        {services.slice(0, 4).map((service) => (
          <Link
            key={service.link}
            href={service.link}
            className="relative flex flex-col justify-between p-2 lg:p-4 border border-primary bg-white rounded-md h-32 xl:h-44 text-[12px]"
            style={{ boxShadow: "8px 8px 0px #0038FF" }}
          >
            {service.popular && (
              <div className="absolute -top-3 right-3 p-1 bg-[#FFD766] text-[8px] sm:text-[9px] font-semibold rounded-sm text-gray-900">
                 🔥 Часто замовляється
              </div>
            )}
            <div className="w-full flex flex-wrap items-center gap-1 lg:gap-3">
              <div className="w-5 h-5">
                <service.icon />
              </div>
              <p className="font-semibold">{service.name}</p>
            </div>

            <div className="flex flex-col gap-1">
              {service.name === "Підтримуюче" && (
                <span className="font-bold text-sm text-primary">
                  {service.price} ГРН
                </span>
              )}

              {service.name !== "Підтримуюче" && (
                <p>
                  Від
                  <span className="font-bold text-sm text-primary">
                    {`  ${service.price} ГРН`}
                  </span>
                </p>
              )}

              {service.hours && (
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-3 h-3" /> ~{service.hours} годин
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-7 w-full mt-4 lg:mt-7 pb-2">
        <div className="absolute z-10 -top-6 lg:-top-4 -left-6 p-2 bg-[#6AA8FF] text-white font-semibold text-[10px] rounded-md -rotate-12">
          Інші послуги
        </div>
        {services.slice(4, 9).map((service) => (
          <div
            key={service.link}
            className="relative flex flex-col justify-between p-2 lg:p-4 border border-primary bg-white rounded-md h-32 xl:h-44 text-[12px]"
            style={{ boxShadow: "8px 8px 0px #0038FF" }}
          >
            {service.popular && (
              <div className="z-20 absolute -top-3 -right-3 p-1 bg-[#FFD766] text-[8px] sm:text-[9px] font-semibold rounded-sm text-gray-900">
                 🔥 Часто замовляється
              </div>
            )}
            <div className="w-full flex flex-wrap lg:flex-nowrap items-center gap-1 lg:gap-3">
              <div className="w-5 h-5">
                <service.icon />
              </div>
              <p className="font-semibold">{service.name}</p>
            </div>

            <div className="flex flex-col gap-1">
              {service.name === "Підтримуюче" && (
                <span className="font-bold text-sm text-primary">
                  {service.price} ГРН
                </span>
              )}

              {service.name !== "Підтримуюче" && (
                <p>
                  Від
                  <span className="font-bold text-sm text-primary">
                    {`  ${service.price} ГРН`}
                  </span>
                </p>
              )}

              {service.hours && (
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-3 h-3" /> ~{service.hours} годин
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
