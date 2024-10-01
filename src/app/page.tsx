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
    <div className="px-6 sm:px-12 md:px-16 col-span-4 sm:col-span-6 md:col-span-12 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12">
      <div className="hidden lg:flex col-span-12 justify-between items-center gap-12">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-start">
            <div className="w-fit bg-[#F1F7FF] drop-shadow-md rounded-sm font-bold text-gray-900 uppercase text-[30px] xl:text-[45px] 2xl:text-[55px] p-5">
              У вашій оселі
            </div>
            <div className="relative z-20 flex items-center">
              <div className="p-3 sm:p-6 md:p-3 w-fit bg-[#F1F7FF] drop-shadow-md rounded-sm font-bold text-gray-900 uppercase text-[30px] xl:text-[45px] 2xl:text-[55px] xl:p-5">
                все буде
              </div>
              <div className="-rotate-6 p-3 sm:p-6 md:p-3 w-fit bg-primary shadow-sm rounded-sm font-bold text-white uppercase text-[30px] xl:text-[45px] 2xl:text-[55px] xl:p-5">
                chisto
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 text-lg text-gray-900 max-w-[90%] xl:text-xl 2xl:text-2xl">
            Замовляй прибирання оселі або офісу чи коммерційного приміщення.
            Тримай усе в чистоті та порядку.
            <OrderForm />
          </div>
        </div>

        <div className="relative w-full flex items-center justify-center">
          <Image
            className="w-[342px] h-[360px] min-[530px]:w-[542px] min-[530px]:h-[520px] min-[560px]:h-[560px] sm:w-[580px] sm:h-[600px] md:h-[620px] lg:w-[400px] lg:h-[420px] xl:w-[580px] xl:h-[620px] 2xl:w-[680px] 2xl:h-[720px]"
            src="/first-screen-photo.png"
            width={622}
            height={654}
            alt=""
          />

          <div className="absolute bottom-0 xl:bottom-[10%] h-40 z-10 w-full">
            <div className="absolute -rotate-6">
              <div className="px-8 py-2 sm:px-3 text-sm lg:px-8 rounded-md text-gray-900 font-medium bg-white shadow-md">
                🇺🇦 Київ
              </div>
            </div>
            <div className="absolute bottom-0 w-fit -rotate-6">
              <div className="px-8 py-2 sm:px-3 text-sm lg:px-8 rounded-md text-gray-900 font-medium bg-white shadow-md">
                🇺🇦 Дніпро
              </div>
            </div>
            <div className="absolute right-0 top-[20%] -rotate-6">
              <div className="px-8 py-2 sm:px-3 text-sm lg:px-8 rounded-md text-gray-900 font-medium bg-white shadow-md">
                🇺🇦 Новомосковськ
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative col-span-4 flex flex-col items-center justify-center sm:col-span-6 md:col-span-12 xl:col-start-8 xl:col-span-6 lg:hidden">
        <div className="absolute bottom-0 h-40 z-10 w-full md:w-[70%]">
          <div className="absolute top-0 left-0 -rotate-6">
            <div className="px-8 py-2 sm:px-3 text-sm sm:text-lg lg:px-8 rounded-md text-gray-900 font-medium bg-white shadow-md">
              🇺🇦 Київ
            </div>
          </div>
          <div className="absolute bottom-0 right-[40%] md:right-[10%] md:bottom-[40%] w-fit -rotate-6">
            <div className="px-8 py-2 sm:px-3 text-sm sm:text-lg lg:px-8 rounded-md text-gray-900 font-medium bg-white shadow-md">
              🇺🇦 Дніпро
            </div>
          </div>
          <div className="absolute top-[40%] left-0 -rotate-6">
            <div className="px-8 py-2 sm:px-3 text-sm sm:text-lg lg:px-8 rounded-md text-gray-900 font-medium bg-white shadow-md">
              🇺🇦 Новомосковськ
            </div>
          </div>
        </div>

        <Image
          className="w-[342px] h-[360px] min-[530px]:w-[542px] min-[530px]:h-[520px] min-[560px]:h-[560px] sm:w-[580px] sm:h-[600px] md:h-[620px]"
          src="/first-screen-photo.png"
          width={622}
          height={654}
          alt=""
        />
      </div>

      <div className="lg:hidden mt-10 col-span-4 sm:col-span-6 md:col-span-12 xl:col-start-1 xl:col-span-6 flex flex-col items-center">
        <div className="p-3 sm:p-6 md:p-3 w-fit bg-[#F1F7FF] drop-shadow-md rounded-sm font-bold text-gray-900 uppercase text-[30px] sm:text-[45px] md:text-[50px] lg:text-[60px] xl:p-5">
          У вашій оселі
        </div>
        <div className="relative z-20 flex items-center">
          <div className="p-3 sm:p-6 md:p-3 w-fit bg-[#F1F7FF] drop-shadow-md rounded-sm font-bold text-gray-900 uppercase text-[30px] sm:text-[45px] md:text-[50px] lg:text-[60px] xl:p-5">
            все буде
          </div>
          <div className="-rotate-6 p-3 sm:p-6 md:p-3 w-fit bg-primary shadow-sm rounded-sm font-bold text-white uppercase text-[30px] sm:text-[45px] md:text-[50px] lg:text-[60px] xl:p-5">
            chisto
          </div>
        </div>
      </div>

      <div className="lg:hidden mt-5 flex flex-col items-center text-center gap-4 text-lg text-gray-900 col-span-4 sm:col-start-1 sm:col-span-6 md:col-span-12 lg:px-40 xl:px-0 xl:col-start-1 xl:col-span-6">
        Замовляй прибирання оселі або офісу чи коммерційного приміщення. Тримай
        усе в чистоті та порядку.
        <OrderForm />
      </div>

      <div className="col-span-4 sm:col-start-1 sm:col-span-3 md:col-start-1 md:col-span-6 mt-28">
        <div className="relative w-fit mx-auto sm:mx-0">
          <div className="w-[365px] h-[100px] sm:w-[200px] sm:h-[60px] md:w-[250px] md:h-[80px] lg:w-[365px] lg:h-[104px] rounded-[60%] rotate-12 border border-[#EDEDED]" />
          <div className="absolute -top-7 left-12 rotate-6">
            <div
              className="w-8 h-8 flex items-center justify-center bg-white
             rounded-full shadow-md absolute -top-3 -left-3 z-10"
            >
              ✅
            </div>
            <div className="px-8 py-2 sm:px-3 text-sm sm:text-lg lg:px-8 rounded-md text-white font-medium bg-[#6AA8FF]">
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
            <div className="px-8 py-2 sm:px-3 text-sm sm:text-lg lg:px-8 rounded-md text-white font-medium bg-primary">
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
            <div className="px-8 py-2 sm:px-3 text-sm sm:text-lg lg:px-8 rounded-md text-white font-medium bg-[#FFD766]">
              Якість
            </div>
          </div>
        </div>
      </div>

      <div className="col-start-1 col-span-4 sm:col-span-3 md:col-span-6 flex flex-col gap-5 mt-12">
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
    </div>
  );
}
