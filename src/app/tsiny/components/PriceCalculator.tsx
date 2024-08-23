import { TypeOfCleaning } from "@/types/TypeOfCleaning";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import {
  ADDITIONAL_SERVICES,
  ADDITIONAL_SERVICES_PRICES,
  CLEANING_TYPES,
} from "@/constants";
import { Checkbox } from "@/components/ui/checkbox";
import Selector from "@/components/ui/Selector";
import { getCleaningPrice } from "@/lib/getPriceAndHoursForFlat";

export default function PriceCalculator() {
  const [typeOfCleaning, setTypeOfCleaning] =
    useState<TypeOfCleaning>("poverhneve");
  const [roomAmount, setRoomAmount] = useState(1);
  const [additionalServices, setAdditionalServices] = useState<
    {
      name: string;
      price: number;
      hourly: boolean;
      meterByMeter: boolean;
    }[]
  >([]);
  const [isOpen, setIsOpen] = useState<string[]>([]);
  const [count, setCount] = useState<{ [key: string]: number }>({});

  const getTotalPrice = () => {
    let totalPrice = getCleaningPrice(roomAmount, typeOfCleaning);

    if (additionalServices.length > 0) {
      const additionalServicesSum = additionalServices
        .map((service) => service.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

      totalPrice += additionalServicesSum;
    }

    return totalPrice;
  };

  return (
    <>
      <div className="col-span-4 sm:col-start-1 sm:col-span-6 md:col-span-6 lg:col-start-2 2xl:col-start-3 2xl:col-span-5 p-6 lg:p-12 rounded-lg bg-white flex flex-col gap-8 text-gray-900">
        <div className="w-full flex flex-col sm:flex-row md:flex-col lg:flex-row gap-5 justify-between items-center">
          <Selector
            title="Тип прибирання:"
            className="sm:flex-col items-center lg:items-start justify-between w-full"
            triggerClassName="w-full"
            items={CLEANING_TYPES}
            defaultValue="poverhneve"
            onValueChange={(e: string) =>
              setTypeOfCleaning(e as TypeOfCleaning)
            }
          />

          <Selector
            title="Кількість кімнат:"
            className="sm:flex-col items-center lg:items-start justify-between w-full"
            triggerClassName="w-full"
            items={[
              { name: 1, value: 1 },
              { name: 2, value: 2 },
              { name: 3, value: 3 },
              { name: 4, value: 4 },
              { name: 5, value: 5 },
              { name: 6, value: 6 },
            ]}
            defaultValue={1}
            onValueChange={(e: number) => setRoomAmount(e)}
          />
        </div>

        <div className="flex flex-col gap-4 text-sm">
          Додаткові послуги
          <div className="flex flex-col gap-3">
            {ADDITIONAL_SERVICES_PRICES.map((service) => (
              <div className="flex flex-col gap-3" key={service.name}>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={service.name}
                    onClick={() => {
                      const serviceIndex = additionalServices.findIndex(
                        (additionalService) =>
                          additionalService.name === service.name
                      );

                      if (serviceIndex !== -1) {
                        setAdditionalServices(
                          additionalServices.filter(
                            (_, index) => index !== serviceIndex
                          )
                        );
                        setIsOpen(
                          isOpen.filter((name) => name !== service.name)
                        );
                        setCount((prevCount) => ({
                          ...prevCount,
                          [service.name]: 1,
                        }));
                      } else {
                        if (service.hourly || service.meterByMeter) {
                          setIsOpen([...isOpen, service.name]);
                        }

                        setAdditionalServices([...additionalServices, service]);
                      }
                    }}
                  />
                  <label
                    htmlFor={service.name}
                    className="text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {service.name}
                  </label>
                </div>

                {isOpen.includes(service.name) && (
                  <div className="flex flex-col gap-3 text-sm text-semibold">
                    {service.hourly
                      ? "Кількість годин"
                      : service.meterByMeter
                      ? "Квадратних метрів"
                      : ""}
                    <div className="flex items-center gap-2">
                      <Button
                        className="p-0 w-6 h-6 rounded-full"
                        disabled={count[service.name] === 1}
                        onClick={() => {
                          const currentCount = count[service.name] ?? 1;
                          if (currentCount > 1) {
                            setCount((prevCount) => ({
                              ...prevCount,
                              [service.name]: currentCount - 1,
                            }));

                            setAdditionalServices((prevServices) =>
                              prevServices.map((prevService) =>
                                prevService.name === service.name
                                  ? {
                                      ...prevService,
                                      price: prevService.price - service.price,
                                    }
                                  : prevService
                              )
                            );
                          }
                        }}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <div className="flex items-center justify-center w-12 h-8 rounded-md border border-input text-gray-900">
                        {count[service.name] ?? 1}
                      </div>
                      <Button
                        className="p-0 w-6 h-6 rounded-full"
                        disabled={count[service.name] === 6}
                        onClick={() => {
                          const currentCount = count[service.name] ?? 1;
                          if (currentCount < 6) {
                            setCount((prevCount) => ({
                              ...prevCount,
                              [service.name]: currentCount + 1,
                            }));

                            setAdditionalServices((prevServices) =>
                              prevServices.map((prevService) =>
                                prevService.name === service.name
                                  ? {
                                      ...prevService,
                                      price: prevService.price + service.price,
                                    }
                                  : prevService
                              )
                            );
                          }
                        }}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="relative h-fit col-span-4 sm:col-start-1 sm:col-span-6 md:col-start-7 lg:col-start-8 lg:col-span-4 2xl:col-start-8 2xl:col-span-3 p-6 py-8 rounded-lg bg-white flex flex-col gap-6 text-gray-900 border border-primary"
        style={{ boxShadow: "8px 8px 0px #0038FF" }}
      >
        <div className="absolute -top-3 text-2xl">📌</div>

        <div className="flex flex-col gap-3">
          <div className="text-sm font-bold">Ваше замовлення</div>
          <div className="border-t border-primary h-1"></div>
        </div>

        <div className="flex flex-col gap-3 text-[12px] pb-12">
          <div className="w-full flex justify-between items-center">
            <p>Прибирання</p>
            <div className="font-bold">
              {
                CLEANING_TYPES.find((type) => type.value === typeOfCleaning)
                  ?.name
              }
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <p>Кімнат: {roomAmount}</p>
            <div className="font-bold">
              {getCleaningPrice(roomAmount, typeOfCleaning)} ГРН
            </div>
          </div>

          {additionalServices.map((additionalService) => (
            <div
              key={additionalService.name}
              className="w-full flex justify-between items-center"
            >
              <p className="w-[60%]">
                {additionalService.name.includes("погодинно")
                  ? additionalService.name
                      .split(" ")
                      .filter((item) => item !== "(погодинно)")
                      .join(" ")
                  : additionalService.name}
                {isOpen.includes(additionalService.name) &&
                  additionalService.hourly && (
                    <span>: {count[additionalService.name] ?? 1} год.</span>
                  )}
                {isOpen.includes(additionalService.name) &&
                  additionalService.meterByMeter && (
                    <span>: {count[additionalService.name] ?? 1} м2</span>
                  )}
              </p>
              <div className="font-bold w-max">
                {additionalService.price} ГРН
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-1">
          <div className="border-t border-primary h-1"></div>
          <div className="w-full flex justify-between items-center text-sm">
            <p>Вартість</p>
            <div className="font-bold">{getTotalPrice()} ГРН</div>
          </div>
        </div>
      </div>
    </>
  );
}
