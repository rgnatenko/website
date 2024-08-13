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

export default function PriceSection() {
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

      <div className="col-start-1 col-span-4 sm:col-span-6 md:col-span-12 flex justify-center">
        <div className="flex flex-col w-full">
          <div className="flex justify-center items-center h-12 bg-gray-100 text-md text-slate-900 rounded-t-md">
            Квартира
          </div>
          <Table>
            <TableHeader>
              <TableRow className="bg-white pointer-events-none border border-gray-300 border-t-0">
                <TableHead className="border-l text-center text-[14px] sm:text-sm w-80">
                  <div className="block w-max m-auto">1-кімнатна</div>
                </TableHead>
                <TableHead className="border-l text-center text-[14px] sm:text-sm w-80">
                  <div className="block w-max m-auto">2-кімнатна</div>
                </TableHead>
                <TableHead className="border-l text-center text-[14px] sm:text-sm w-80">
                  <div className="block w-max m-auto">3-кімнатна</div>
                </TableHead>
                <TableHead className="border-l text-center text-[14px] sm:text-sm w-80">
                  <div className="block w-max m-auto">4-кімнатна</div>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell className="text-center border">
                  <div className="w-max flex flex-col items-start gap-4 font-bold text-gray-900">
                    Від 1000 ГРН
                    <div className="text-[12px] text-gray-400 flex items-center gap-2 font-medium">
                      <Clock className="text-gray-300 w-4 h-4" />
                      ~6 годин
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center border">
                  <div className="w-max flex flex-col items-start gap-4 font-bold text-gray-900">
                    Від 1500 ГРН
                    <div className="text-[12px] text-gray-400 flex items-center gap-2 font-medium">
                      <Clock className="text-gray-300 w-4 h-4" />
                      ~8 годин
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center border">
                  <div className="w-max flex flex-col items-start gap-4 font-bold text-gray-900">
                    Від 2200 ГРН
                    <div className="text-[12px] text-gray-400 flex items-center gap-2 font-medium">
                      <Clock className="text-gray-300 w-4 h-4" />
                      ~8 годин
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center border">
                  <div className="w-max flex flex-col items-start gap-4 font-bold text-gray-900">
                    Від 2800 ГРН
                    <div className="text-[12px] text-gray-400 flex items-center gap-2 font-medium">
                      <Clock className="text-gray-300 w-4 h-4" />
                      ~8 годин
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
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
