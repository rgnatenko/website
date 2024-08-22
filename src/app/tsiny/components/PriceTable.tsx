import { TypeOfCleaning } from "@/types/TypeOfCleaning";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Clock } from "lucide-react";
import { getPriceAndHoursForFlat } from "@/lib/getPriceAndHoursForFlat";

export default function PriceTable({
  typeOfCleaning,
}: {
  typeOfCleaning: TypeOfCleaning;
}) {
  const priceAndHoursForFlat = [
    getPriceAndHoursForFlat(typeOfCleaning).oneRoom,
    getPriceAndHoursForFlat(typeOfCleaning).twoRooms,
    getPriceAndHoursForFlat(typeOfCleaning).threeRooms,
    getPriceAndHoursForFlat(typeOfCleaning).fourRooms,
  ];

  return (
    <div className="flex flex-col w-full rounded-t-md">
      <div className="flex justify-center items-center h-12 bg-white text-md text-slate-900 border rounded-t-md">
        Квартира/Дім
      </div>
      <Table className="bg-white">
        <TableHeader>
          <TableRow className="bg-white pointer-events-none border border-gray-300 border-t-0">
            <TableHead className="border-l text-center text-sm sm:text-sm w-80">
              <div className="block w-max m-auto">1 кімната</div>
            </TableHead>
            <TableHead className="border-l text-center text-sm sm:text-sm w-80">
              <div className="block w-max m-auto">2 кімнати</div>
            </TableHead>
            <TableHead className="border-l text-center text-sm sm:text-sm w-80">
              <div className="block w-max m-auto">3 кімнати</div>
            </TableHead>
            <TableHead className="border-l text-center text-sm sm:text-sm w-80">
              <div className="block w-max m-auto">4 кімнати</div>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            {priceAndHoursForFlat.map((item, i) => (
              <TableCell key={i} className="text-center border">
                <div className="w-max flex flex-col items-start gap-4 text-gray-900">
                  <p>
                    Від{" "}
                    <span className="font-bold text-primary">{item.price}</span>{" "}
                    ГРН
                  </p>
                  <div className="text-[12px] text-gray-400 flex items-center gap-2 font-medium">
                    <Clock className="text-gray-300 w-4 h-4" />~{item.hours}{" "}
                    годин
                  </div>
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
