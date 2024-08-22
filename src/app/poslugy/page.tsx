import Icons from "@/components/ui/Icons";
import { Clock } from "lucide-react";
import Services from "./components/Services";
import { Button } from "@/components/ui/button";
import OrderForm from "@/components/MakeOrderForm";
import BeforeAfter from "./components/BeforeAfter";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";

const { prybyrannya } = Icons();

const services = [
  {
    name: "Базове",
    price: 2000,
    hours: 6,
    popular: false,
    icon: prybyrannya.bazove,
  },
  {
    name: "Генеральне",
    price: 3000,
    hours: 8,
    popular: true,
    icon: prybyrannya.generalne,
  },
  {
    name: "Після ремонту",
    price: 3000,
    hours: 8,
    popular: false,
    icon: prybyrannya.pislya_remontu,
  },
  {
    name: "Підтримуюче",
    price: 1000,
    hours: 6,
    popular: false,
    icon: prybyrannya.pidtrymuyuche,
  },
  {
    name: "Хімчистка",
    price: 800,
    hours: null,
    popular: true,
    icon: prybyrannya.khimchystka,
  },
  {
    name: "Прибирання територій",
    price: 3000,
    hours: null,
    popular: false,
    icon: prybyrannya.prybyrannya_terytoriy,
  },
  {
    name: "Озеленення територій",
    price: 2200,
    hours: null,
    popular: false,
    icon: prybyrannya.ozelenennya_terytoriy,
  },
  {
    name: "Озонація",
    price: 2200,
    hours: null,
    popular: false,
    icon: prybyrannya.ozonatsiya,
  },
];

export default function Poslugy() {
  return (
    <>
      <Services />

      <div className="col-start-1 col-span-4 sm:col-span-6 md:col-span-12 flex flex-col min-[930px]:flex-row gap-6 xl:gap-40 items-center bg-[#FCF9F0] px-8 py-8 lg:py-12 xl:px-16 xl:py-16 rounded-lg mt-8 sm:mt-16">
        <h2 className="font-bold text-[24px] lg:text-[28px] xl:text-[36px] text-primary uppercase w-full">
          -15% на замовлення, зроблене на сайті
        </h2>

        <div className="w-full flex flex-col gap-5 text-gray-900 text-[14px]">
          <p>
            Пропозиція дійсня до кінці вересня. Усе, що вам потрібно, це вказати
            промокод <span className="text-primary">“chisto_website”</span> у
            коментарі до замовлення)
          </p>

          <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button
              variant="outline"
              className="w-full sm:w-[50%] bg-transparent border-primary text-primary"
            >
              +38 096 315 45 47
            </Button>
            <OrderForm className="w-full sm:w-[50%]" />
          </div>
        </div>
      </div>

      <BeforeAfter />

      <div className="col-start-1 col-span-4 sm:col-span-6 md:col-span-12 -mt-28">
          <Reviews />
      </div>
    </>
  );
}
