import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function ScopeOfWork() {
  return (
    <>
      <div className="py-[50px] w-full px-6 sm:px-12 md:px-16 text-slate-900">
        <div className="font-bold text-[30px] md:text-[40px] text-center mb-5 md:mb-10">
          Обсяг робіт
        </div>

        <div className="lg:hidden w-full grid grid-cols-1 justify-center gap-[30px]">
          <div className="sm:w-[70%] justify-self-center flex justify-center p-8 text-primary bg-[#F1F7FF] rounded-2xl gap-4">
            <div className="bg-primary h-full w-[10%] rounded-full"></div>
            <div className="flex flex-col h-full justify-between gap-3 w-[90%]">
              <div className="text-[18px] font-semibold text-primary">
                У всіх кімнатах:
              </div>
              <ul className="text-[11px] text-gray-900 leading-[140%]">
                <li>• Протираємо двері і лутку дверей</li>
                <li>
                  • Всі речі збираємо і складаємо в стопку на горизонтальну
                  поверхню
                </li>
                <li>• Складаємо всі предмети на робочих поверхнях</li>
                <li>• Протираємо все з висоти свого росту</li>
                <li>
                  • Протираємо все (на шафах, кондиціонери), використовуючи
                  стійку поверхню або драбину клієнта
                </li>
                <li>
                  • Піднімаємо і протираємо всі легкі предмети і під ними
                  (статуетки, фоторамки)
                </li>
                <li>• Чистимо всі скляні поверхні і дзеркала</li>
                <li>• Всі плями відтираємо до видимого ефекту</li>
                <li>• Протираємо і натираємо всі ручки, вимикачі, розетки</li>
                <li>• Протираємо лампи та світильники</li>
                <li>
                  • Протираємо стільці (витираємо спинку, ніжки) і підстави
                  меблів
                </li>
                <li>• Протираємо підвіконня</li>
                <li>• Пилососимо і протираємо батареї</li>
                <li>• Пилососимо меблі</li>
                <li>• Протираємо плінтуса</li>
                <li>• Пилососимо і миємо підлогу</li>
                <li>• Виносимо сміття</li>
                <li>• Пилососимо і миємо під ліжком</li>
                <li>• Збираємо обгортки і сміття</li>
                <li>• Протираємо побутову техніку</li>
                <li>
                  • Спустошуємо і миємо попільнички (натираємо, якщо потрібно)
                </li>
                <li>• Протираємо вазони для квітів</li>
              </ul>
            </div>
          </div>

          <div className="sm:w-[70%] justify-self-center flex justify-center p-8 text-primary bg-[#FFF8E4] rounded-2xl gap-4">
            <div className="bg-[#FFD766] h-full w-[10%] rounded-full"></div>
            <div className="flex flex-col h-full justify-between gap-3 w-[90%]">
              <div className="text-[18px] font-semibold text-[#FFD766]">
                Кухня
              </div>
              <ul className="text-[11px] text-gray-900 leading-[140%]">
                <li>• Витираємо холодильник, з фасаду (зовнішня частина)</li>
                <li>• До 10 хв. миємо посуд (безкоштовно)</li>
                <li>• Миємо раковину і складаємо весь посуд</li>
                <li>• Чистимо витяжку (зовні)</li>
                <li>• Чистимо плиту</li>
                <li>• Чистимо плитку біля плити і раковини</li>
                <li>• Чистимо фасади шафок</li>
                <li>
                  • Чистимо фасади кухонної техніки (мікрохвильова піч, духовка,
                  тостер, мультиварка, чайник і т.д.)
                </li>
                <li>
                  • Миємо місце для сміття (миємо підлогу, дверцята), виносимо
                  сміття, залишаємо чистий пакет з нашим брендом
                </li>
                <li>• Протираємо стільницю</li>
                <li>• Протираємо обідній стіл</li>
              </ul>
            </div>
          </div>

          <div className="sm:w-[70%] justify-self-center flex justify-center p-8 text-primary bg-[#F1F7FF] rounded-2xl gap-4">
            <div className="bg-[#6AA8FF] h-full w-[10%] rounded-full"></div>
            <div className="flex flex-col h-full justify-between gap-3 w-[90%]">
              <div className="text-[18px] font-semibold text-[#6AA8FF]">
                Ванна кімната/туалет
              </div>
              <ul className="text-[11px] text-gray-900 leading-[140%]">
                <li>• Протираємо двері і лутку дверей</li>
                <li>
                  • Всі речі збираємо і складаємо в стопку на горизонтальну
                  поверхню
                </li>
                <li>• Складаємо всі предмети на робочих поверхнях</li>
                <li>• Протираємо все з висоти свого росту</li>
                <li>• Всі плями відтираємо до видимого ефекту</li>

                <li>• Протираємо двері і лутку дверей</li>
                <li>
                  • Миємо підлогу та робимо вологе прибирання усіх поверхонь
                </li>
                <li>
                  • Складаємо всі предмети на пральній машинці, поличках, ванній
                </li>
                <li>
                  • Натираємо сантехніку, унітаз, прибираємо наліт з вани або
                  душової кабінки, чистимо раковину
                </li>
                <li>• Натираємо дзеркало, усі скляні поверхні</li>
                <li>• Видаляємо іржу з кафелю</li>
                <li>• Протираємо і натираємо всі ручки, вимикачі, розетки</li>
              </ul>
            </div>
          </div>

          <div className="w-full sm:w-[70%] justify-self-center flex justify-center p-8 text-primary bg-[#F1F7FF] rounded-2xl gap-4">
            <div className="bg-[#6AA8FF] h-full w-[10%] rounded-full"></div>
            <div className="flex flex-col h-full justify-between gap-3 w-[90%]">
              <div className="text-[18px] font-semibold md:text-[26px] text-[#6AA8FF]">
                Коридор
              </div>
              <ul className="text-[11px] text-gray-900 leading-[140%]">
                <li>Протираємо вхідні двері і лутку дверей</li>
                <li>Миємо поличку для взуття</li>
                <li>Складаємо взуття</li>
                <li>Підтримуюче прибирання</li>
              </ul>
            </div>
          </div>
        </div>

        <ResizablePanelGroup
          direction="horizontal"
          className="!hidden lg:!flex  gap-[30px]"
        >
          <ResizablePanel>
            <ResizablePanelGroup direction="vertical" className="gap-[30px]">
              <ResizablePanel className="h-fit !overflow-visible">
                <div className="flex justify-center p-[20px] text-primary bg-[#F1F7FF] px-[70px] py-[40px] rounded-2xl gap-8">
                  <div className="bg-primary w-[10%] rounded-full"></div>
                  <div className="flex flex-col h-full justify-between gap-3 w-[90%]">
                    <div className="text-[20px] font-semibold md:text-[26px] text-primary">
                      У всіх кімнатах:
                    </div>
                    <ul className="text-[12px] text-gray-900 leading-[140%]">
                      <li>• Протираємо двері і лутку дверей</li>
                      <li>
                        • Всі речі збираємо і складаємо в стопку на
                        горизонтальну поверхню
                      </li>
                      <li>• Складаємо всі предмети на робочих поверхнях</li>
                      <li>• Протираємо все з висоти свого росту</li>
                      <li>
                        • Протираємо все (на шафах, кондиціонери),
                        використовуючи стійку поверхню або драбину клієнта
                      </li>
                      <li>
                        • Піднімаємо і протираємо всі легкі предмети і під ними
                        (статуетки, фоторамки)
                      </li>
                      <li>• Чистимо всі скляні поверхні і дзеркала</li>
                      <li>• Всі плями відтираємо до видимого ефекту</li>
                      <li>
                        • Протираємо і натираємо всі ручки, вимикачі, розетки
                      </li>
                    </ul>
                  </div>
                </div>
              </ResizablePanel>
              <ResizablePanel className="h-fit !overflow-visible">
                <div className="flex justify-center p-[20px] text-primary bg-[#F1F7FF] px-[70px] py-[40px] rounded-2xl gap-8 h-fit">
                  <div className="bg-primary w-[10%] rounded-full"></div>
                  <div className="flex flex-col h-full justify-between gap-3 w-[90%]">
                    <ul className="text-[12px] text-gray-900 leading-[140%]">
                      <li>• Протираємо лампи та світильники</li>
                      <li>
                        • Протираємо стільці (витираємо спинку, ніжки) і
                        підстави меблів
                      </li>
                      <li>• Протираємо підвіконня</li>
                      <li>• Пилососимо і протираємо батареї</li>
                      <li>• Пилососимо меблі</li>
                      <li>• Протираємо плінтуса</li>
                      <li>• Пилососимо і миємо підлогу</li>
                      <li>• Виносимо сміття</li>
                      <li>• Пилососимо і миємо під ліжком</li>
                      <li>• Збираємо обгортки і сміття</li>
                      <li>• Протираємо побутову техніку</li>
                      <li>
                        • Спустошуємо і миємо попільнички (натираємо, якщо
                        потрібно)
                      </li>
                      <li>• Протираємо вазони для квітів</li>
                    </ul>
                  </div>
                </div>
              </ResizablePanel>
              <ResizablePanel className="h-fit !overflow-visible">
                <div className="flex p-[20px] text-primary bg-[#F1F7FF] px-[70px] py-[40px] rounded-2xl gap-8">
                  <div className="bg-[#6AA8FF] w-[10%] rounded-full"></div>
                  <div className="flex flex-col h-full justify-between gap-3 w-[90%]">
                    <div className="text-[20px] font-semibold md:text-[26px] text-[#6AA8FF]">
                      Коридор
                    </div>
                    <ul className="text-[12px] text-gray-900 leading-[140%]">
                      <li>Протираємо вхідні двері і лутку дверей</li>
                      <li>Миємо поличку для взуття</li>
                      <li>Складаємо взуття</li>
                      <li>Підтримуюче прибирання</li>
                    </ul>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>

          <ResizablePanel>
            <ResizablePanelGroup direction="vertical" className="gap-[30px]">
              <ResizablePanel className="h-fit !overflow-visible">
                <div className="flex justify-center p-[20px] text-primary bg-[#FFF8E4] px-[70px] py-[40px] rounded-2xl gap-8 h-full">
                  <div className="bg-[#FFD766] w-[10%] rounded-full"></div>
                  <div className="flex flex-col h-full justify-center gap-3 w-[90%]">
                    <div className="text-[20px] font-semibold md:text-[26px] text-[#FFD766]">
                      Кухня
                    </div>
                    <ul className="text-[12px] text-gray-900 leading-[140%]">
                      <li>
                        • Витираємо холодильник, з фасаду (зовнішня частина)
                      </li>
                      <li>• До 10 хв. миємо посуд (безкоштовно)</li>
                      <li>• Миємо раковину і складаємо весь посуд</li>
                      <li>• Чистимо витяжку (зовні)</li>
                      <li>• Чистимо плиту</li>
                      <li>• Чистимо плитку біля плити і раковини</li>
                      <li>• Чистимо фасади шафок</li>
                      <li>
                        • Чистимо фасади кухонної техніки (мікрохвильова піч,
                        духовка, тостер, мультиварка, чайник і т.д.)
                      </li>
                      <li>
                        • Миємо місце для сміття (миємо підлогу, дверцята),
                        виносимо сміття, залишаємо чистий пакет з нашим брендом
                      </li>
                      <li>• Протираємо стільницю</li>
                      <li>• Протираємо обідній стіл</li>
                    </ul>
                  </div>
                </div>
              </ResizablePanel>
              <ResizablePanel className="h-fit !overflow-visible">
                <div className="flex justify-center p-[20px] text-primary bg-[#F1F7FF] px-[70px] py-[40px] rounded-2xl gap-8 h-full">
                  <div className="bg-[#6AA8FF] w-[10%] rounded-full"></div>
                  <div className="flex flex-col h-full justify-center gap-3 w-[90%]">
                    <div className="text-[20px] font-semibold md:text-[26px] text-[#6AA8FF]">
                      Ванна кімната/туалет
                    </div>
                    <ul className="text-[12px] text-gray-900 leading-[140%]">
                      <li>• Протираємо двері і лутку дверей</li>
                      <li>
                        • Всі речі збираємо і складаємо в стопку на
                        горизонтальну поверхню
                      </li>
                      <li>• Складаємо всі предмети на робочих поверхнях</li>
                      <li>• Протираємо все з висоти свого росту</li>
                      <li>• Всі плями відтираємо до видимого ефекту</li>

                      <li>• Протираємо двері і лутку дверей</li>
                      <li>
                        • Миємо підлогу та робимо вологе прибирання усіх
                        поверхонь
                      </li>
                      <li>
                        • Складаємо всі предмети на пральній машинці, поличках,
                        ванній
                      </li>
                      <li>
                        • Натираємо сантехніку, унітаз, прибираємо наліт з вани
                        або душової кабінки, чистимо раковину
                      </li>
                      <li>• Натираємо дзеркало, усі скляні поверхні</li>
                      <li>• Видаляємо іржу з кафелю</li>
                      <li>
                        • Протираємо і натираємо всі ручки, вимикачі, розетки
                      </li>
                    </ul>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
}
