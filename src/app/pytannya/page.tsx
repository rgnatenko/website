import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Pytannya() {
  return (
    <>
      <div className="relative col-start-1 col-span-4 sm:col-span-6 md:col-span-12 text-center text-[20px] sm:text-[30px] text-gray-900 mt-12 mb-5 uppercase">
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
              Присутність власника помешкання не є обов&apos;язковою, але
              бажаною. Однак, можливо з нашого боку виконати весь об&apos;м
              послуг без присутності замовника. В такому разі попередньо перед
              початком робіт замовнику потрібно провести &quot;екскурсію&quot;
              для нашої бригади. А після завершення ми відправляємо
              відеодоповідь про проведену роботу. Також розрахунок можливо
              здійснити онлайн безготівково.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Чи працюєте ви з безпечними засобами миття?
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
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Чи можна замовити прибитрання окремих зон оселі? Холодильника,
              наприклад або вікон 
            </AccordionTrigger>
            <AccordionContent>
              Авжеж! Ми виконуємо як повноцінне прибирання приміщень із великим
              обсягом робіт, так і миття деяких окремих частин приміщень.
              <br />
              <br />
              Якщо замовляти мийку вікон разом з прибиранням квартири, то
              вартість буде 110 грн 1 вікно (130 на 140 см). Якщо замовляти
              окремо тільки миття вікон, без прибирання квартири – 160 грн 1
              вікно (130 на 140 см).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Що таке прибирання за підпискою?
            </AccordionTrigger>
            <AccordionContent>
              Прибирання за підпискою - це послуга, яка дозволяє підтримувати
              чистоту у вашому домі постійно.
              <br />
              <br />
              У чому суть: ви обираєте будь-який день тижня та час, і у цей день
              та час до вас приходитиме клінер і робитиме підтримуюче
              прибирання.
              <br />
              <br />
              Вартість такого прибирання – 1000 грн/тиждень. Кількість прибирань
              в тиждень, які ви можете замовити за підпискою – необмежена.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Чи робите ви хімчистку мʼяких меблів?
            </AccordionTrigger>
            <AccordionContent>
              Так, і не тільки! Хімчистимо меблі, килими, матраци, подушки та
              машини. Вартість хімчистки становить 75 грн/м2.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              Я маю заплатити за прибирання заздалегідь?
            </AccordionTrigger>
            <AccordionContent>
              Ні, ми не працюємо за передоплатою і беремо гроші тільки після
              того, як прибралися, здали вам роботу, і ви сказали нам, що вас
              все влаштовує. Якщо ж ви помітили якісь недоліки, ви кажете про це
              нам, і ми одразу ж на місці їх усуваємо – ми дбаємо про наш
              сервіс, і тому, прибираємо до тих пір, поки ви не скажете, що усім
              задоволені.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              Я боюсь пускати у свою оселю незнайомих мені людей, раптом щось
              вкрадуть?
            </AccordionTrigger>
            <AccordionContent>
              Усі співробітники працюють у нас офіційно, якщо потрібно, то
              можуть показати документи. У разі пропажі якоїсь речі, збитки ми
              відшкодувуємо.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>
              Чим відрізняється базове прибирання від генерального?
            </AccordionTrigger>
            <AccordionContent>
              Ці два типи прибирання відрізняються переліком робіт: генеральне
              прибирання більш детальне, у нього окрім стандартних робіт,
              входить миття вікон ззовні та всередині, миття холодильника
              всередині, всередині усіх кухонних приладів, печі, розбирання та
              миття витяжки, миття шафок всередині, рух меблів та миття ділянок
              за ними. 
              <br />
              <br />
              Базове прибирання не включає у себе ці роботи, в ньому
              приділяється менше уваги закуткам, вікнам, всередині кухні і так далі.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
