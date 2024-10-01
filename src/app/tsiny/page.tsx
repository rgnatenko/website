"use client";
import type { TypeOfCleaning } from "@/types/TypeOfCleaning";
import { useState } from "react";

import PriceTable from "./components/PriceTable";
import PriceCalculator from "./components/PriceCalculator";
import Selector from "@/components/ui/Selector";
import { CLEANING_TYPES } from "@/constants";

export default function Tsiny() {
  const [typeOfCleaning, setTypeOfCleaning] =
    useState<TypeOfCleaning>("poverhneve");

  return (
    <>
      <div className="pt-[50px] px-6 sm:px-12 md:px-16 col-start-1 col-span-4 sm:col-span-6 md:col-span-12 flex flex-col gap-8 justify-center">
        <Selector
          title="Тип прибирання:"
          items={CLEANING_TYPES}
          defaultValue="poverhneve"
          onValueChange={(e: string) => setTypeOfCleaning(e as TypeOfCleaning)}
          className="mt-10 sm:mt-0"
        />

        <PriceTable typeOfCleaning={typeOfCleaning} />
      </div>

      <div className="px-6 sm:px-12 md:px-16 col-span-4 sm:col-start-1 sm:col-span-6 md:col-span-12 relative flex justify-center text-center text-[20px] sm:text-[30px] text-gray-900 mt-10 sm:mt-20 mb-5">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4">
            Розрахуй
            <span className="right-44 -top-4 -rotate-2 p-3 w-fit bg-primary shadow-sm rounded-sm font-bold text-white uppercase text-sm sm:text-2xl">
              вартість прибирання
            </span>
          </div>
          у нашому калькуляторі
        </div>
      </div>

      <PriceCalculator />
    </>
  );
}
