import { Plus } from "lucide-react";
import Image from "next/image";

export default function ZoneOfCleaning({
  zoneOfCleaning,
}: {
  zoneOfCleaning: string;
}) {
  return (
    <>
      {zoneOfCleaning === "mebli" && (
        <div className="col-start-1 col-span-4 sm:col-start-1 sm:col-span-6 md:col-span-12 relative">
          <div className="absolute right-[40%] bottom-2 sm:bottom-[10%] md:bottom-[10%] md:right-[42%] xl:bottom-10 group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute bottom-5 left-[100%] invisible group-hover:visible min-w-44 text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
              Видаляємо засохлі та жирні плями
            </div>
          </div>

          <div className="absolute bottom-12 sm:bottom-[30%] md:bottom-[30%] right-[40%] xl:bottom-[30%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute bottom-5 left-[100%] invisible group-hover:visible text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
              Поліруємо
            </div>
          </div>

          <div className="absolute bottom-12 sm:bottom-[30%] md:bottom-[30%] right-[55%] xl:bottom-[30%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute z-20 bottom-5 left-[100%] invisible group-hover:visible min-w-44 text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
              Дезінфекція при потребі
            </div>
          </div>

          <div className="absolute bottom-20 sm:bottom-[40%] md:bottom-[40%] right-[45%] xl:bottom-[40%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute bottom-5 left-[100%] invisible group-hover:visible min-w-44 text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
              Хімчистка (як додаткова послуга)
            </div>
          </div>

          <Image
            src="/mebli.png"
            alt=""
            width={1300}
            height={697}
            className="w-full h-full rounded-md"
          />
        </div>
      )}

      {zoneOfCleaning === "pidloga" && (
        <div className="col-start-1 col-span-4 sm:col-start-1 sm:col-span-6 md:col-span-12 relative">
          <div className="absolute bottom-4 left-[20%] sm:bottom-[10%] sm:left-[40%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute z-10 bottom-5 left-[100%] invisible group-hover:visible min-w-44 text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
              Миємо водою мінімум 4 рази
            </div>
          </div>

          <div className="absolute bottom-5 right-[20%] sm:bottom-[10%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute z-10 bottom-5 right-[100%] invisible group-hover:visible text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px] w-64">
              Видаляємо засохлі та жирні плями, брудні точки, нерівності
            </div>
          </div>

          <div className="absolute bottom-6 right-[40% sm:bottom-[10%] sm:right-[35%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute z-20 bottom-5 left-[100%] invisible group-hover:visible min-w-44 text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
              Дезінфікуємо при потребі
            </div>
          </div>

          <Image
            src="/pidloga.png"
            alt=""
            width={1300}
            height={697}
            className="w-full h-full rounded-md"
          />
        </div>
      )}

      {zoneOfCleaning === "vanna" && (
        <div className="col-start-1 col-span-4 sm:col-start-1 sm:col-span-6 md:col-span-12 relative">
          <div className="absolute bottom-32 left-3 sm:bottom-[70%] sm:left-5 md:left-[10%] xl:bottom-[70%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute z-10 bottom-5 left-[100%] invisible group-hover:visible min-w-64 text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
              Натираємо дзеркало омивайкою та шкрубочком{" "}
            </div>
          </div>

          <div className="absolute bottom-12 left-[20%] sm:bottom-[30%] sm:left-[20%] xl:bottom-[30%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute z-10 bottom-5 left-[100%] invisible group-hover:visible text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px] w-64">
              Видаляємо іржу, брудні жовті плями
            </div>
          </div>

          <div className="absolute bottom-2 sm:bottom-[5%] right-[35%] xl:bottom-[10%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute z-20 bottom-5 -right-[140%] sm:right-[100%] invisible group-hover:visible w-72 text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
              Видаляємо наліт, накип та плями від води з ванни або душової
              кабінки
            </div>
          </div>

          <div className="absolute bottom-28 left-[40%] sm:bottom-[60%] sm:left-[45%] md:left-[45%] xl:bottom-[50%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute z-20 bottom-5 left-[100%] invisible group-hover:visible w-44 text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
              Видаляємо плями зі стін (кафелю)
            </div>
          </div>

          <Image
            src="/vanna.png"
            alt=""
            width={1300}
            height={697}
            className="w-full h-full rounded-md"
          />
        </div>
      )}

      {zoneOfCleaning === "kuhnya" && (
        <div className="col-start-1 col-span-4 sm:col-start-1 sm:col-span-6 md:col-span-12 relative">
          <div className="absolute bottom-28 left-[60%] sm:bottom-[60%] sm:left-[70%] xl:bottom-[60%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute z-10 -bottom-20 -right-[100%] sm:bottom-5 sm:right-[100%] invisible group-hover:visible min-w-64 text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
              Миємо плиту антипригаром та антижиром, видаляємо жирні чорні плями
            </div>
          </div>

          <div className="absolute bottom-36 right-[25%] sm:bottom-[80%] sm:left-[70%] xl:bottom-[80%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute z-10 -bottom-8 sm:bottom-5 -left-[300%] sm:left-[100%] invisible group-hover:visible text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px] w-max">
              Миємо витяжку
            </div>
          </div>

          <div className="absolute bottom-20 left-[30%] sm:bottom-[40%] sm:left-[40%] xl:bottom-[45%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute z-20 -bottom-12 -left-[50%] sm:right-[100%] invisible group-hover:visible w-44 text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
              Миємо кухонний стіл, стільці
            </div>
          </div>

          <div className="absolute bottom-20 left-[90%] sm:bottom-[50%] sm:left-[90%] xl:bottom-[50%] xl:left-[95%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute z-20 bottom-5 right-[100%] invisible group-hover:visible w-44 text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
              Миємо холодильник ззовні та всередині
            </div>

            <div className="absolute z-20 -bottom-8 right-16 invisible group-hover:visible w-44 text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
              Викидаємо зіпсовані продукти
              <div className="absolute -left-2 -top-5 bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md border-2 border-primary">
                <Plus className="w-4 h-4" />
              </div>
            </div>
          </div>

          <Image
            src="/kuhnya.png"
            alt=""
            width={1300}
            height={697}
            className="w-full h-full rounded-md"
          />
        </div>
      )}

      {zoneOfCleaning === "zagalom" && (
        <div className="col-start-1 col-span-4 sm:col-start-1 sm:col-span-6 md:col-span-12 relative">
          <div className="absolute bottom-12 sm:bottom-[30%] left-[80%] xl:bottom-[40%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute z-10 bottom-5 right-[100%] invisible group-hover:visible min-w-64 text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
              чистимо батареї, вентиляційні решітки
            </div>
          </div>

          <div className="absolute bottom-36 sm:bottom-[70%] left-[75%] xl:bottom-[80%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute z-10 -bottom-12 sm:bottom-5 right-[100%] invisible group-hover:visible text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px] w-64">
              Миємо вікна в усіх кімнатах, підвіконня, віконні рамки{" "}
            </div>
          </div>

          <div className="absolute bottom-20 left-[40%] sm:bottom-[45%] xl:bottom-[45%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute z-20 -bottom-12 -right-[150%] sm:-right-[50%] sm:-bottom-16 md:right-[100%] md:-bottom-12 invisible group-hover:visible w-44 text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
              Розкладаємо розкидані речі
              <div className="absolute z-20 -bottom-8 right-16 invisible group-hover:visible w-44 text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
                Виносимо сміття
                <div className="absolute -left-2 -top-5 bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md border-2 border-primary">
                  <Plus className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-16 sm:bottom-[40%] left-[90%] xl:bottom-[50%] xl:left-[95%] group">
            <button className="bg-white w-8 h-8 p-0 rounded-full text-primary flex items-center justify-center shadow-md hover:scale-110 duration-150">
              <Plus className="w-4 h-4" />
            </button>

            <div className="absolute z-20 bottom-5 right-[100%] invisible group-hover:visible w-44 text-center bg-white p-2 rounded-md shadow-md text-gray-900 text-[14px]">
              Поливаємо кімнатні рослини
            </div>
          </div>

          <Image
            src="/zagalom.png"
            alt=""
            width={1300}
            height={697}
            className="w-full h-full rounded-md"
          />
        </div>
      )}
    </>
  );
}
