"use client";
import OrderForm from "@/components/MakeOrderForm";
import PriceSection from "@/components/HomePage/PriceSection";
import Reviews from "@/components/Reviews";
import WhyUs from "@/components/HomePage/WhyUs";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PremisesType from "@/components/HomePage/PremisesType";
import ScopeOfWork from "@/components/HomePage/ScopeOfWork";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <div className="relative sm:w-fit h-fit mt-56 mb-7 sm:mt-[400px] md:mt-0 col-span-4 sm:col-span-6">
        <div className="relative z-10 p-3 sm:p-6 md:p-3 w-fit ml-5 sm:ml-0 sm:w-fit bg-[#F1F7FF] drop-shadow-md rounded-sm font-bold text-gray-900 uppercase text-2xl sm:text-[40px] md:text-2xl xl:text-[50px] xl:p-5">
          У вашій оселі
        </div>
        <div className="relative z-10 p-3 sm:p-6 md:p-3 sm:ml-3 w-fit ml-12  bg-[#F1F7FF] drop-shadow-md rounded-sm font-bold text-gray-900 uppercase text-2xl sm:text-[40px] md:text-2xl xl:text-[50px] xl:p-5">
          все буде
        </div>
        <div className="absolute z-20 right-12 bottom-1 -rotate-6 sm:-right-24 md:-right-16 xl:-right-24 p-3 sm:p-6 md:p-3 w-fit bg-primary shadow-sm rounded-sm font-bold text-white uppercase text-2xl sm:text-[40px] md:text-2xl xl:text-[50px] xl:p-5">
          chisto
        </div>
      </div>

      <div className="flex flex-col gap-4 text-lg text-gray-900 md:max-w-[454px] xl:max-w-full col-span-4 sm:col-start-1 sm:col-span-6">
        Замовляй прибирання оселі або офісу чи коммерційного приміщення. Тримай
        усе в чистоті та порядку.
        <OrderForm />
      </div>

      <Image
        className="absolute right-16 sm:top-0 sm:right-20 md:-top-20 md:right-12 w-[320px] h-[360px] sm:w-[524px] sm:h-[589px] md:w-[467px] md:h-[547px] xl:w-[537px] xl:h-[617px]"
        src="/first-screen-photo.png"
        width={1037}
        height={1117}
        alt=""
      />

      <div className="col-span-4 sm:col-start-1 sm:col-span-3 md:col-start-1 md:col-span-6 mt-28 md:mt-52 xl:mt-72">
        <div className="relative w-fit">
          <div className="w-[365px] h-[100px] sm:w-[200px] sm:h-[60px] md:w-[250px] md:h-[80px] lg:w-[365px] lg:h-[104px] rounded-[60%] rotate-12 border border-[#EDEDED]" />
          <div className="absolute -top-7 left-12 rotate-6">
            <div
              className="w-8 h-8 flex items-center justify-center bg-white
             rounded-full shadow-md absolute -top-3 -left-3 z-10"
            >
              ✅
            </div>
            <div className="px-8 py-2 sm:px-3 sm:text-[14px] text-md lg:text-md lg:px-8 rounded-md text-white font-medium bg-[#6AA8FF]">
              Швидкість
            </div>
          </div>

          <div className="absolute bottom-0 -right-3 rotate-6">
            <div
              className="w-8 h-8 flex items-center justify-center bg-white
             rounded-full shadow-md absolute -top-3 -left-3 z-10"
            >
              ✅
            </div>
            <div className="px-8 py-2 sm:px-3 sm:text-[14px] text-md lg:text-md lg:px-8 rounded-md text-white font-medium bg-primary">
              Сервіс
            </div>
          </div>

          <div className="absolute left-16 -bottom-2 rotate-6">
            <div
              className="w-8 h-8 flex items-center justify-center bg-white
             rounded-full shadow-md absolute -top-3 -left-3 z-10"
            >
              ✅
            </div>
            <div className="px-8 py-2 sm:px-3 sm:text-[14px] text-md lg:text-md lg:px-8 rounded-md text-white font-medium bg-[#FFD766]">
              Якість
            </div>
          </div>
        </div>
      </div>

      <div className="col-start-1 col-span-4 sm:col-span-3 md:col-span-6 flex flex-col gap-5 mt-12 md:mt-52 xl:mt-72">
        <Link
          href="/generalne"
          className="flex justify-between items-center w-full duration-150 rounded-md border p-3 hover:text-primary border-[#D9D9D9]"
        >
          Генеральне прибирання
          <ChevronRight className="w-4 h-4" />
        </Link>
        <Link
          href="/poverhneve"
          className="flex justify-between items-center w-full duration-150 rounded-md border p-3 hover:text-primary border-[#D9D9D9]"
        >
          Поверхневе прибирання
          <ChevronRight className="w-4 h-4" />
        </Link>
        <Link
          href="/pislya-remontu"
          className="flex justify-between items-center w-full duration-150 rounded-md border p-3 hover:text-primary border-[#D9D9D9]"
        >
          Прибирання після ремонту
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <WhyUs />

      <ScopeOfWork />

      <PriceSection />

      <PremisesType />

      <Reviews />

      <FAQ />
    </>
  );
}
