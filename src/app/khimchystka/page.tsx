"use client";
import OrderForm from "@/components/MakeOrderForm";
import { Button } from "@/components/ui/button";
import PriceListForDryCleaning from "./components/PriceListForDryCleaning";

export default function Khimchystka() {
  return (
    <>
      <div className="px-6 sm:px-12 md:px-16 relative col-start-1 col-span-4 sm:col-span-6 md:col-span-12 text-center text-[20px] sm:text-[30px] text-gray-900 mt-12 mb-5 uppercase">
        <p className="relative z-10">Хімчистка</p>
        <div className="absolute -top-12 -left-[20%] w-[648px] h-[128px] rounded-[50%] bg-[#FFF8E4]" />
        <div className="absolute -bottom-96 rotate-45 -right-[20%] w-[548px] h-[208px] rounded-[50%] bg-[#DFECFF]" />
      </div>

      <div className="px-6 sm:px-12 md:px-16 relative z-20 col-start-1 col-span-4 sm:col-span-6 md:col-start-3 md:col-span-8 flex flex-col gap-3">
        <p className="text-[18px] sm:text-[24px] text-gray-900">
          Наша послуга хімчистки - це ідеальне рішення для тих, хто хоче
          повернути своїм речам первісну чистоту та свіжість. Ми використовуємо
          сучасні технології та безпечні засоби для очищення різних типів
          тканин, забезпечуючи найкращий результат без шкоди для матеріалу.
        </p>
      </div>

      <PriceListForDryCleaning />

      <div className="sm:px-12 md:px-16 col-start-1 col-span-4 sm:col-span-6 md:col-span-12 flex flex-col min-[930px]:flex-row gap-6 xl:gap-40 items-center bg-[#FCF9F0] px-8 py-8 lg:py-12 xl:px-16 xl:py-16 rounded-lg mt-8 sm:mt-16">
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
    </>
  );
}
