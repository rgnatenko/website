import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function BeforeAfter() {
  return (
    <div className="px-6 sm:px-12 md:px-16 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 items-center gap-5 auto-rows-min col-span-4 sm:col-span-6 md:col-span-12 flex-col text-gray-900 mt-8 sm:mt-16">
      <div className="col-span-4 sm:col-span-6 flex flex-col gap-4 text-gray-900">
        <h2 className="text-[26px] font-bold uppercase">Наші до/після</h2>

        <Carousel className="relative">
          <div className="absolute top-12 -left-2 -rotate-12 z-20 p-1 text-gray-900 text-[12px] bg-[#FFD766] rounded-md">
            До
          </div>
          <div className="absolute top-44 -right-3 -rotate-12 z-20 p-1 text-gray-900 text-[12px] bg-[#FFD766] rounded-md">
            Після
          </div>
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <Image
                  src="/beforeAfter1.png"
                  width={635}
                  height={406}
                  alt="1"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Image
                  src="/beforeAfter2.png"
                  width={635}
                  height={406}
                  alt="1"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Image
                  src="/beforeAfter3.png"
                  width={635}
                  height={406}
                  alt="1"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Image
                  src="/beforeAfter4.png"
                  width={635}
                  height={406}
                  alt="1"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Image
                  src="/beforeAfter5.png"
                  width={635}
                  height={406}
                  alt="1"
                />
              </div>
            </CarouselItem>
          </CarouselContent>

          <div className="w-full flex gap-3 justify-center mt-5">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>

      <div className="col-span-4 sm:col-span-6 md:col-start-8 md:col-span-6 text-gray-900 text-[14px]">
        Ми компанія із багаторічним досвідом, на ринку більше 7 років, тож у
        нашій практиці було багато обʼєктів різного типу складності. Ми відмиємо
        найскладніші плями, залізимо у найтрудніші місця, аби навести лад у
        вашій оселі. Працюємо із безпечною, гіпоаллергенною хімією.
      </div>
    </div>
  );
}
