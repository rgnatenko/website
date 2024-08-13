"use client";
import Image from "next/image";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

export default function PremisesType() {
  const [typeOfRoom, setTypeOfRoom] = useState("zhitlovi_prymishenya");

  const handleTypeOfRoomChange = (e: any) => {
    console.log(e);
    setTypeOfRoom(e);
  };

  return (
    <>
      <div className="col-start-1 col-span-4 sm:col-span-6 md:col-span-12 text-center text-[20px] sm:text-[30px] text-gray-900 mt-36 sm:mt-24 mb-5">
        Прибираємо усі типи приміщень
      </div>

      <div className="relative col-start-1 col-span-4 sm:col-span-6 md:col-start-3 md:col-span-8 flex flex-col gap-5">
        {typeOfRoom === "zhitlovi_prymishenya" && (
          <Image
            src="/house.png"
            alt=""
            width={856}
            height={635}
            className="w-full h-full z-10"
          />
        )}

        {typeOfRoom === "ofisy" && (
          <Image
            src="/ofis.png"
            alt=""
            width={856}
            height={635}
            className="w-full h-full z-10"
          />
        )}

        {typeOfRoom === "gotelni_nomera" && (
          <Image
            src="/gotel.png"
            alt=""
            width={856}
            height={635}
            className="w-full h-full z-10"
          />
        )}

        {typeOfRoom === "commerciyni_prymishenya" && (
          <Image
            src="/magazyn.png"
            alt=""
            width={856}
            height={635}
            className="w-full h-full z-10"
          />
        )}

        <div className="absolute  -top-40 right-4 md:-top-[35%] md:-right-[30%] xl:-right-[20%] xl:-top-[10%]">
          <div className="relative z-10 w-44 px-4 py-1 text-sm rounded-md text-white font-medium bg-[#FFD766] rotate-6">
            Будь-якої степені забрудненості ✅
          </div>
          <div className="absolute top-[50%] -left-[50%] w-[450px] h-[100px] border border-primary rounded-[60%]"></div>
        </div>

        <div className="absolute -bottom-24 md:-bottom-[20%] md:-left-[20%] lg:-bottom-[10%] xl:-left-[15%]">
          <div className="relative z-10 rotate-6 px-4 py-1 text-sm rounded-md text-white font-medium bg-[#6AA8FF]">
            Будь-яка локація ✅
          </div>

          <div className="absolute -top-[150%] -left-[200%] w-[450px] h-[120px] border border-primary rounded-[60%]"></div>
        </div>

        <RadioGroup
          defaultValue="zhitlovi_prymishenya"
          className="flex w-full justify-between flex-col sm:flex-row space-y-2 sm:space-y-0"
          onValueChange={(e) => handleTypeOfRoomChange(e)}
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
                офісні приміщення
              </Label>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="gotelni_nomera" id="r3" />
              <Label htmlFor="r3" className="uppercase font-semibold w-max">
                готельні номери
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="commerciyni_prymishenya" id="r3" />
              <Label htmlFor="r3" className="uppercase font-semibold w-max">
                комерційні приміщення
              </Label>
            </div>
          </div>
        </RadioGroup>
      </div>
    </>
  );
}
