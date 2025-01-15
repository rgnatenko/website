import Image from "next/image";

export default function Info() {
  return (
    <div className="mt-[50px] col-span-4 sm:col-span-6 md:col-span-12">
      <div className="flex lg:w-[70%] items-center justify-between">
        <div className="-rotate-12 flex flex-col items-center uppercase text-[12px] sm:text-[20px] text-white font-bold">
          <div className="px-2 py-0.5 bg-primary w-fit rounded-t-sm">як</div>
          <div className="px-2 py-0.5 bg-primary w-fit rounded-sm">
            відбувається?
          </div>
        </div>

        <div className="rotate-12 flex flex-col items-center uppercase text-[12px] sm:text-[20px] text-white font-bold">
          <div className="px-2 py-0.5 bg-primary w-fit rounded-t-sm">
            скільки
          </div>
          <div className="px-2 py-0.5 bg-primary w-fit rounded-sm">
            часу займає?
          </div>
        </div>

        <div className="-rotate-12 flex flex-col items-center uppercase text-[12px] sm:text-[20px] text-white font-bold">
          <div className="px-2 py-0.5 bg-primary w-fit rounded-t-sm">
            послуги
          </div>
        </div>
      </div>

      <Image
        loading="lazy"
        src="/info.webp"
        width={500}
        height={500}
        alt=""
        className="w-full lg:w-[70%]"
      />

      <div className="relative md:w-[50%]">
        <div className="section sticky top-0  bg-white p-[40px] rounded-md shadow-md z-10 flex flex-col justify-center gap-[-12px]">
          <div className="absolute -top-2 -left-2 flex items-center gap-2">
            <div className="w-12 h-12 text-[20px] flex items-center justify-center rounded-full bg-[#D1DBFF]">
              🔎
            </div>
            <div className="p-1 px-4 text-[16px] h-fit text-white font-semibold rounded-md bg-[#6AA8FF]">
              Як відбувається
            </div>
          </div>
          <div className="text-slate-700 font-medium text-[14px] sm:text-[16px]">
            Прибирання після ремонту починається зі збору та вивезення
            будівельного сміття. Тільки після цього можна приступати до
            видалення залишків піску і дрібних частинок з поверхні підлоги. Для
            цієї мети ми використовуємо промисловий пилосос, який дозволяє
            виконати завдання, не пошкодивши поверхню.
          </div>
        </div>
        <div className="section sticky top-0  bg-white p-[40px] rounded-md shadow-md z-20 flex flex-col justify-center gap-[-12px]">
          <div className="absolute -top-2 -left-2 flex items-center gap-2">
            <div className="w-12 h-12 text-[20px] flex items-center justify-center rounded-full bg-[#D1DBFF]">
              ⏳
            </div>
            <div className="p-1 px-4 text-[16px] h-fit text-white font-semibold rounded-md bg-[#6AA8FF]">
              Скільки часу займає
            </div>
          </div>
          <div className="text-slate-700 font-medium text-[14px] sm:text-[16px]">
            Точну тривалість клінінгу передбачити досить складно, але наші
            виконавці зазвичай виконують всі заявлені роботи протягом 6-8 годин.
            У будь-якому випадку навіть прибирання котеджу після ремонту не
            розтягується на кілька днів. Для величезних приміщень формуються
            команди до 10 виконавців. Прямо зараз ви можете зв’язатися з нашим
            менеджером та замовити прибирання після ремонту на зручний для вас
            час.
          </div>
        </div>
        <div className="section sticky top-0  bg-white p-[40px] rounded-md shadow-md z-30 flex flex-col justify-center gap-[-12px]">
          <div className="absolute -top-2 -left-2 flex items-center gap-2">
            <div className="w-12 h-12 text-[20px] flex items-center justify-center rounded-full bg-[#D1DBFF]">
              🧹
            </div>
            <div className="p-1 px-4 text-[16px] h-fit text-white font-semibold rounded-md bg-[#6AA8FF]">
              Послуги
            </div>
          </div>
          <div className="text-slate-700 font-medium text-[14px] sm:text-[16px]">
            видалення плям фарби, клею та інших будівельних сумішей;
            <br />
            чистка світильників, батарей, кондиціонерів та інших
            електроприладів;
            <br />
            видалення пилу і інших забруднень зі стін і плінтусів;
            <br />
            миття підлоги із застосуванням спеціальних засобів (на великих
            площах нами використовуються спеціальні миючі машини);
            <br />
            миття вікон (скла, рам і підвіконь); миття дверей.
          </div>
        </div>
      </div>
    </div>
  );
}
