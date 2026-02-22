"use client";

import Image from "next/image";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const imageMap = {
  zhitlovi_prymishenya: "/house.webp",
  ofisy: "/ofis.webp",
  gotelni_nomera: "/gotel.webp",
  commerciyni_prymishenya: "/magazyn.webp",
};

export default function PremisesType() {
  const [typeOfRoom, setTypeOfRoom] = useState("zhitlovi_prymishenya");

  return (
    <>
      <div className="col-start-1 col-span-4 sm:col-span-6 md:col-span-12 text-center text-[20px] sm:text-[30px] text-gray-900 mt-36 sm:mt-24 mb-5">
        Прибираємо усі типи приміщень
      </div>

      <div className="relative col-start-1 col-span-4 sm:col-span-6 md:col-start-3 md:col-span-8 flex flex-col gap-5">
        <div className="relative w-full aspect-[856/635]">
          {Object.entries(imageMap).map(([key, src]) => (
            <Image
              key={key}
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              priority={key === "zhitlovi_prymishenya"}
              className={`object-contain transition-opacity duration-500 ease-in-out ${
                typeOfRoom === key
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            />
          ))}
        </div>

        {/* Yellow badge */}
        <div className="absolute -top-40 right-4 md:-top-[35%] md:-right-[30%] xl:-right-[20%] xl:-top-[10%]">
          <div className="relative z-10 w-44 px-4 py-1 text-sm rounded-md text-white font-medium bg-[#FFD766] rotate-6">
            Будь-якої степені забрудненості ✅
          </div>
          <div className="absolute top-[50%] -left-[50%] w-[450px] h-[100px] border border-primary rounded-[60%]" />
        </div>

        {/* Blue badge */}
        <div className="absolute -bottom-24 md:-bottom-[20%] md:-left-[20%] lg:-bottom-[10%] xl:-left-[15%]">
          <div className="relative z-10 rotate-6 px-4 py-1 text-sm rounded-md text-white font-medium bg-[#6AA8FF]">
            Будь-яка локація ✅
          </div>
          <div className="absolute -top-[150%] -left-[200%] w-[450px] h-[120px] border border-primary rounded-[60%]" />
        </div>

        {/* Radio Buttons */}
        <RadioGroup
          value={typeOfRoom}
          onValueChange={setTypeOfRoom}
          className="flex w-full justify-between flex-col sm:flex-row space-y-2 sm:space-y-0"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="zhitlovi_prymishenya" id="r1" />
              <Label htmlFor="r1" className="uppercase font-semibold w-max">
                Житлові приміщення
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ofisy" id="r2" />
              <Label htmlFor="r2" className="uppercase font-semibold w-max">
                Офісні приміщення
              </Label>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="gotelni_nomera" id="r3" />
              <Label htmlFor="r3" className="uppercase font-semibold w-max">
                Готельні номери
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="commerciyni_prymishenya" id="r4" />
              <Label htmlFor="r4" className="uppercase font-semibold w-max">
                Комерційні приміщення
              </Label>
            </div>
          </div>
        </RadioGroup>
      </div>
    </>
  );
}
