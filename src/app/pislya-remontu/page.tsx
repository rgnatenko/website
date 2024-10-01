"use client";
import OrderForm from "@/components/MakeOrderForm";
import Image from "next/image";
import Info from "./components/Info";
import PriceCalculator from "../tsiny/components/PriceCalculator";
import PriceTable from "../tsiny/components/PriceTable";
import WeCooperate from "../generalne/components/WeCooperate";

export default function CleaningAfterRenovation() {
  return (
    <div className="px-6 sm:px-12 md:px-16 col-span-4 sm:col-span-6 md:col-span-12 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12">
      <div className="col-span-4 sm:col-span-6 md:col-span-12">
        <div
          className="p-[30px] lg:px-[60px] lg:py-[20px] rounded-2xl"
          style={{
            background: "linear-gradient(to bottom right, #A0C8FF, #E5E5E5)",
          }}
        >
          <div className="w-full flex flex-col gap-10 md:flex-row justify-between items-center text-gray-900">
            <div className="flex flex-col items-center md:items-start md:w-[70%] gap-6">
              <div className="uppercase text-center md:text-left text-[30px] lg:text-[50px] font-bold leading-[100%]">
                прибирання після ремонту
              </div>
              <div className="flex flex-col items-start text-sm text-gray-900 text-center md:text-left xl:text-md leading-[140%] 2xl:text-[24px]">
                Кожен дім потребує періодичного глибокого очищення, щоб
                підтримувати затишок та комфорт. Наша послуга генерального
                прибирання — це ідеальне рішення для тих, хто хоче повернути
                своїй оселі первісну чистоту та свіжість.
              </div>
              <OrderForm />
            </div>
            <Image
              src="/lader.webp"
              width={303}
              height={571}
              alt=""
              className="w-[200px] sm:w-[300px]"
            />
          </div>
        </div>
      </div>

      <Info />

      <div className="col-span-4 sm:col-span-6 md:col-span-12 px-6 sm:px-12 md:px-16 py-[50px]">
        <div className="col-span-4 sm:col-start-1 sm:col-span-6 md:col-span-12 relative flex justify-center text-center text-[20px] sm:text-[30px] text-gray-900 mb-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4">Розрахуй</div>
            <span className="right-44 -top-4 -rotate-2 p-3 max-w-[70%] text-wrap bg-primary shadow-sm rounded-sm font-bold text-white uppercase text-sm sm:text-2xl">
              вартість прибирання після ремонту
            </span>
            у нашому калькуляторі
          </div>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-5 auto-rows-min">
          <PriceCalculator
            calculatorClassName="!ml-0"
            boxClassName="!mr-0"
            selectedCleaningType="pislya_remontu"
          />
        </div>
      </div>

      <div className="col-span-4 sm:col-span-6 md:col-span-12 px-6 sm:px-12 md:px-16">
        <div className="text-center mb-5 text-[20px] sm:text-[30px] text-gray-900">
          Що по цінам?
        </div>
        <PriceTable typeOfCleaning="pislya_remontu" />
      </div>

      <div className="col-span-4 sm:col-span-6 md:col-span-12">
        <WeCooperate />
      </div>
    </div>
  );
}
