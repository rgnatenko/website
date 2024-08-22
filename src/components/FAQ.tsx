import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

export default function FAQ() {
  return (
    <>
      <div className="relative col-start-1 col-span-4 sm:col-span-6 md:col-span-12 text-center text-[20px] sm:text-[30px] text-gray-900 mt-24 mb-5 uppercase">
        <p className="relative z-10">Поширені запитання</p>
        <div className="absolute -top-12 -left-[20%] w-[648px] h-[128px] rounded-[50%] bg-[#FFF8E4]" />
        <div className="absolute -bottom-96 rotate-45 -right-[20%] w-[548px] h-[208px] rounded-[50%] bg-[#DFECFF]" />
      </div>

      <div className="relative z-20 col-start-1 col-span-4 sm:col-span-6 md:col-start-3 md:col-span-8 flex flex-col gap-3">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Як підготувати приміщення для прибирання?
            </AccordionTrigger>
            <AccordionContent>
              Наші клінери привозять з собою усе необхідне. Та ви можете
              підготувати звичайний побутовий пилосос (якщо він є). В іншому
              разі ми привеземо власний. Також буде дуже зручно і це прискорить
              процес прибирання, якщо в помешканні буде вільний доступ до води
              та електроенергії.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Чи потрібна присутність власника (замовника)?
            </AccordionTrigger>
            <AccordionContent>
              Присутність власника помешкання не є обов&apos;язковою, але бажаною.
              Однак, можливо з нашого боку виконати весь об&apos;м послуг без
              присутності замовника. В такому разі попередньо перед початком
              робіт замовнику потрібно провести &quot;екскурсію&quot; для нашої бригади. А
              після завершення ми відправляємо відеодоповідь про проведену
              роботу. Також розрахунок можливо здійснити онлайн безготівково.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Чи працюете ви з безпечними засобами миття?
            </AccordionTrigger>
            <AccordionContent>
              Звісно, ми використовуємо тільки безпечні, високоякісні та
              гіпоалергенні миючі засоби і чистячі розчини від провідних
              виробників промислової та побутової хімії. Ми обираємо лише дорогі
              та ефективні продукти, щоб забезпечити найкращий результат і
              зберегти безпеку ваших приміщень.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Чи проводите ви дезінфекцію? </AccordionTrigger>
            <AccordionContent>
              Під час прибирання поверхонь меблів та предметів обстановки
              проводиться також їх дезінфекція. Якщо потрібно, ми можемо
              виконати додаткову локальну глибоку дезінфекцію в окремих
              випадках. Наприклад, дезінфекція туалетної кімнати або унітазу. За
              необхідності буде проведене знезараження та дезінсекція.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
