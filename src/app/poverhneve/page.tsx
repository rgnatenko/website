"use client";
import OrderForm from "@/components/MakeOrderForm";
import Image from "next/image";
import PriceCalculator from "../tsiny/components/PriceCalculator";
import HowCleaningGoingOn from "./components/HowCleaningGoingOn";
import PriceVariation from "./components/PriceVariation";
import WeCooperate from "./components/WeCooperate";
import ScopeOfWork from "@/components/HomePage/ScopeOfWork";
import PriceTable from "../tsiny/components/PriceTable";

export default function BasicCleaning() {
  return (
    <div className="col-start-1 col-span-4 sm:col-span-6 md:col-span-12">
      <div className="relative text-[20px] sm:text-[30px] bg-[#FFFAED]  text-gray-900 h-[650px] min-[530px]:h-[800px] sm:h-[900px] md:h-[900px] lg:h-[500px] xl:h-[450px] 2xl:h-[800px] overflow-hidden">
        <div className="relative z-10 mt-6 mx-6 sm:ml-12 md:ml-16 lg:flex col-span-12 justify-between items-center lg:items-start gap-12 h-full lg:max-w-[500px] 2xl:max-w-[700px]">
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <div className="uppercase font-semibold md:text-[40px] lg:text-[30px] text-center lg:text-left 2xl:text-[70px]">
              Поверхневе прибирання від
              <span className="text-primary"> chisto</span>
            </div>
            <div className="flex flex-col items-start text-sm text-gray-900 max-w-[720px] text-center lg:text-left xl:text-md leading-[140%] 2xl:text-[24px]">
              Кожен дім потребує регулярного догляду, щоб зберігати порядок і
              чистоту. Наша послуга поверхневого прибирання — це ідеальне
              рішення для тих, хто прагне швидко й ефективно освіжити свою
              оселю, підтримуючи чистоту без зайвих зусиль.
            </div>
            <OrderForm />
          </div>
        </div>

        <div className="z-0 absolute bottom-0 right-0">
          <Image
            className="w-[342px] h-[342px] min-[530px]:w-[542px] min-[530px]:h-[520px] min-[560px]:h-[560px] sm:w-[580px] sm:h-[550px] md:w-[600px] md:h-[620px] lg:w-[480px] lg:h-[500px] xl:w-[440px] xl:h-[460px] 2xl:w-[760px] 2xl:h-[780px]"
            src="/poverhneve-screen.webp"
            width={622}
            height={654}
            alt=""
          />
        </div>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 px-6 sm:px-12 md:px-16">
        <ScopeOfWork title="Обсяг робіт" />
      </div>

      <div className="px-6 sm:px-12 md:px-16 bg-[#F4F6FC] py-[50px]">
        <div className="col-span-4 sm:col-start-1 sm:col-span-6 md:col-span-12 relative flex justify-center text-center text-[20px] sm:text-[30px] text-gray-900 mb-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4">Розрахуй</div>
            <span className="right-44 -top-4 -rotate-2 p-3 max-w-[70%] text-wrap bg-primary shadow-sm rounded-sm font-bold text-white uppercase text-sm sm:text-2xl">
              вартість поверхневого прибирання
            </span>
            у нашому калькуляторі
          </div>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-5 auto-rows-min">
          <PriceCalculator
            calculatorClassName="!ml-0"
            boxClassName="!mr-0"
            selectedCleaningType="poverhneve"
          />
        </div>
      </div>

      <HowCleaningGoingOn />

      <div className="px-6 sm:px-12 md:px-16">
        <div className="text-center mb-5 text-[20px] sm:text-[30px] text-gray-900">
          Що по цінам?
        </div>
        <PriceTable typeOfCleaning="poverhneve" />
      </div>

      <WeCooperate />
    </div>
  );
}
