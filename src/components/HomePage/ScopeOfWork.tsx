import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "../ui/select";
import ZoneOfCleaning from "./ZoneOfCleaning";

interface Props {
  title?: string;
}

export default function ScopeOfWork({ title }: Props) {
  const [zoneOfCleaning, setZoneOfCleaning] = useState("mebli");

  const handleZoneOfCleaningChange = (event: any) => {
    setZoneOfCleaning(event);
  };

  return (
    <>
      <div className="col-start-1 col-span-4 sm:col-span-6 md:col-span-12 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 text-center text-[20px] sm:text-[30px] text-gray-900 mt-24 mb-5">
        {title ? (
          <>{title}</>
        ) : (
          <>
            Обсяг робіт типового прибирання жилого приміщення від{" "}
            <span className="text-primary">chisto.com.ua</span>
          </>
        )}
      </div>

      <Select defaultValue="mebli" onValueChange={handleZoneOfCleaningChange}>
        <SelectTrigger className=" col-span-full sm:col-span-3 focus-visible:border-0 mb-4">
          <SelectValue placeholder="" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="mebli">Меблі</SelectItem>
            <SelectItem value="pidloga">Підлога</SelectItem>
            <SelectItem value="vanna">Вання кімната</SelectItem>
            <SelectItem value="kuhnya">Кухня</SelectItem>
            <SelectItem value="zagalom">Загалом</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <ZoneOfCleaning zoneOfCleaning={zoneOfCleaning} />
    </>
  );
}
