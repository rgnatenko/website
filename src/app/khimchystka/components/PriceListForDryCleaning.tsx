import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PriceListForDryCleaning() {
  return (
    <div className="col-span-4 sm:col-span-6 md:col-span-12 px-6 sm:px-12 md:px-16">
      <div className="text-center mb-5 text-[20px] sm:text-[30px] text-gray-900">
        Ціни на хімчистку
      </div>
      <Table className="w-full text-left border-collapse">
        <TableHeader className="w-full h-16">
          <TableRow className="h-16">
            <TableHead className="border-b h-full border-gray-300 py-2">
              Тип послуги
            </TableHead>
            <TableHead className="border-b h-full border-gray-300 py-2">
              Ціна
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow className="h-12">
            <TableCell className="border-b border-gray-300 py-2">
              Хімчистка дивана
            </TableCell>
            <TableCell className="border-b border-gray-300 py-2 text-primary">
              від 800 грн
            </TableCell>
          </TableRow>

          <TableRow className="h-12">
            <TableCell className="border-b border-gray-300 py-2">
              Хімчистка крісла
            </TableCell>
            <TableCell className="border-b border-gray-300 py-2 text-primary">
              від 400 грн
            </TableCell>
          </TableRow>

          <TableRow className="h-12">
            <TableCell className="border-b border-gray-300 py-2">
              Хімчистка матраца
            </TableCell>
            <TableCell className="border-b border-gray-300 py-2 text-primary">
              від 1200 грн
            </TableCell>
          </TableRow>

          <TableRow className="h-12">
            <TableCell className="border-b border-gray-300 py-2">
              Хімчистка килима
            </TableCell>
            <TableCell className="border-b border-gray-300 py-2 text-primary">
              від 150 грн/м²
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
