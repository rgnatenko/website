"use client";
import { ChevronRight, Clock } from "lucide-react";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "../ui/table";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { TypeOfCleaning } from "@/types/TypeOfCleaning";
import PriceTable from "@/app/tsiny/components/PriceTable";
import Selector from "../ui/Selector";
import { CLEANING_TYPES } from "@/constants";

export default function PriceSection() {
  const [typeOfCleaning, setTypeOfCleaning] =
    useState<TypeOfCleaning>("poverhneve");

  return (
    <>
      <div className="col-span-4 sm:col-start-1 sm:col-span-6 md:col-span-12 relative flex justify-center text-center text-[20px] sm:text-[30px] text-gray-900 mt-24 mb-5">
        <div className="absolute top-0 left-0 rotate-12 w-12 h-12 bg-white flex items-center justify-center shadow-md rounded-full">
          💰
        </div>
        <div className="absolute bottom-0 right-0 -rotate-12 w-12 h-12 bg-white flex items-center justify-center shadow-md rounded-full">
          🧹
        </div>
        <div className="flex flex-col items-center w-[70%] xl:w-[50%]">
          <div className="flex items-center gap-4">
            У нас
            <span className="right-44 -top-4 -rotate-6 p-3 w-fit bg-primary shadow-sm rounded-sm font-bold text-white uppercase text-sm sm:text-2xl">
              прозорі ціни
            </span>
          </div>
          та індивідуальний розрахунок вартості прибирання
        </div>
      </div>

      <div className="col-start-1 col-span-4 sm:col-span-6 md:col-span-12 flex flex-col gap-8 justify-center">
        <Selector
          title="Тип прибирання:"
          className="flex-col items-start gap-1"
          items={CLEANING_TYPES}
          defaultValue="poverhneve"
          onValueChange={(e: string) => setTypeOfCleaning(e as TypeOfCleaning)}
        />

        <PriceTable typeOfCleaning={typeOfCleaning} />
      </div>

      <div className="col-start-1 col-span-4 sm:col-span-6 md:col-span-12 flex items-center justify-center text-center">
        <Link
          href="/tsiny"
          className="w-fit flex gap-3 items-center p-2 bg-primary hover:bg-[#0033E8] duration-150 text-white text-sm rounded-md"
        >
          Дивитись ціни для усіх типів приміщень
          <ChevronRight />
        </Link>
      </div>
    </>
  );
}
