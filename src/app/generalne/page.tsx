"use client";
import OrderForm from "@/components/MakeOrderForm";
import Image from "next/image";
import ScopeOfWork from "./components/ScopeOfWork";
import PriceCalculator from "../tsiny/components/PriceCalculator";
import HowCleaningGoingOn from "./components/HowCleaningGoingOn";
import PriceVariation from "./components/PriceVariation";
import WeCooperate from "./components/WeCooperate";

export default function GeneralCleaning() {
  return (
    <div className="col-start-1 col-span-4 sm:col-span-6 md:col-span-12">
      <div className="relative text-[20px] sm:text-[30px] bg-[#F1F7FF] text-gray-900 h-[650px] sm:h-[800px] md:h-[900px] lg:h-[450px] 2xl:h-[700px] overflow-hidden">
        <div className="relative z-10 mt-6 mx-6 sm:ml-12 md:ml-16 lg:flex col-span-12 justify-between items-center lg:items-start gap-12 h-full lg:max-w-[500px] 2xl:max-w-[700px]">
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <div className="uppercase font-semibold md:text-[40px] lg:text-[30px] text-center lg:text-left 2xl:text-[70px]">
              генеральне прибирання від
              <span className="text-primary"> chisto</span>
            </div>
            <div className="flex flex-col items-start text-sm text-gray-900 max-w-[720px] text-center lg:text-left xl:text-md leading-[140%] 2xl:text-[24px]">
              Кожен дім потребує періодичного глибокого очищення, щоб
              підтримувати затишок та комфорт. Наша послуга генерального
              прибирання — це ідеальне рішення для тих, хто хоче повернути своїй
              оселі первісну чистоту та свіжість.
            </div>
            <OrderForm />
          </div>
        </div>

        <div className="z-0 absolute bottom-0 right-0">
          <Image
            className="w-[342px] h-[360px] min-[530px]:w-[542px] min-[530px]:h-[520px] min-[560px]:h-[560px] sm:w-[580px] sm:h-[600px] md:w-[600px] md:h-[620px] lg:w-[480px] lg:h-[500px] 2xl:w-[760px] 2xl:h-[780px]"
            src="/generalne-screen.webp"
            width={622}
            height={654}
            alt=""
          />
        </div>
        <div className="z-10 absolute bottom-0 right-0 h-[100px] w-[300px] flex flex-col">
          
        </div>
      </div>

      <ScopeOfWork />

      <div className="px-6 sm:px-12 md:px-16 bg-[#F4F6FC] py-[50px]">
        <div className="col-span-4 sm:col-start-1 sm:col-span-6 md:col-span-12 relative flex justify-center text-center text-[20px] sm:text-[30px] text-gray-900 mb-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4">Розрахуй</div>
            <span className="right-44 -top-4 -rotate-2 p-3 max-w-[70%] text-wrap bg-primary shadow-sm rounded-sm font-bold text-white uppercase text-sm sm:text-2xl">
              вартість генерального прибирання
            </span>
            у нашому калькуляторі
          </div>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-5 auto-rows-min">
          <PriceCalculator
            calculatorClassName="!ml-0"
            boxClassName="!mr-0"
            selectedCleaningType="generalne"
          />
        </div>
      </div>

      <HowCleaningGoingOn />

      <PriceVariation />

      <WeCooperate />
    </div>
  );
}
