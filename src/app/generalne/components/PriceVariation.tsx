import { ArrowRight } from "lucide-react";

const variants = [
  {
    title: "30-40 грн/м2",
    vars: [
      "новий ремонт",
      "низька-середня степінь забруднення",
      "Необхідне прибирання всередині меблів та техніки, стандартна к-сть меблів",
      "прибирання після квартирантів (перед/після заїзду)",
      "60-120 м2",
    ],
  },
  {
    title: "40-50 грн/м2",
    vars: [
      "новий ремонт",
      "низька-середня степінь забруднення",
      "Необхідне прибирання всередині меблів та техніки, стандартна к-сть меблів, багато дрібних деталей (які потрібно протерти)",
      "комерційне приміщення або будинок",
      "прибирання не проводилося >6 міс",
      "50-130 м2",
    ],
  },
  {
    title: "60-70 грн/м2",
    vars: [
      "новий-звичайний ремонт",
      "повний комплект меблів та техніки",
      "прибирання не проводилося >6-12 міс",
      "низька-середня степінь забруднення",
      "40-120 м2",
    ],
  },
  {
    title: "70-85 грн/м2",
    vars: [
      "новий-звичайний ремонт",
      "прибирання всередині меблів та техніки",
      "кількість меблів на кухні вища за середню",
      "багато меблів, багато речей",
      "низька-середня степінь забруднення",
      "45-65 м2",
    ],
  },
  {
    title: "85-95 грн/м2",
    vars: [
      "новий-звичайний-старий ремонт",
      "прибирання всередині меблів та техніки",
      "прибирання не проводилося >12 міс",
      "середня-висока степінь забруднення",
      "40-60 м2",
    ],
  },
  {
    title: "95-120 грн/м22",
    vars: [
      "новий-звичайний-старий ремонт",
      "прибирання всередині меблів та техніки; прибирання не проводилося >12 міс",
      "середня-висока степінь забруднення",
      "35-55 м2",
    ],
  },
  {
    title: "150-200 грн/м2",
    vars: [
      "звичайний-старий ремонт",
      "повний комплект техніки та меблів, прибирання всередині техніки та меблів",
      "середня-висока степінь забруднення",
      "35-60 м2",
    ],
  },
  {
    title: "95-120 грн/м2",
    vars: [
      "звичайний-старий ремонт",
      "потрібне прибирання лише окремих кімнат (наприклад, лише кухня або лише ванна); багато особистих речей",
      "середня-висока степінь забруднення",
      "10-30 м2",
    ],
  },
];

export default function PriceVariation() {
  return (
    <div className="px-6 sm:px-12 md:px-16 py-[50px] grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-5 auto-rows-min">
      <div className="flex flex-col gap-[40px] col-span-4 sm:col-span-6 md:col-span-5">
        <div className="space-y-5">
          <div className="text-[16px] md:text-[22px] font-bold">
            Скільки коштуватиме генеральне прибирання вашої оселі/приміщення
          </div>
          <div className="text-[12px] md:text-[14px]">
            Ціна на генеральне прибирання варіюється від 35 до 200 грн за
            квадратний метр, залежно від ступеня забруднення та необхідності
            очищення внутрішніх поверхонь, наприклад, шафок.
            <br />
            <br />
            Миття вікон оплачується окремо за стандартною ставкою 200-240 грн за
            квадратний метр з обох сторін. За потреби можливе миття лише однієї
            сторони за 100-120 грн за квадратний метр.
          </div>
        </div>
        <div className="space-y-5">
          <div className="text-[16px] md:text-[22px] font-bold">
            <div className="w-[90%]">
              За якими критеріями ми розраховуємо вартість прибирання
            </div>
          </div>
          <div className="flex flex-col gap-3 text-[12px] md:text-[14px]">
            <div className="flex items-center gap-2">
              <ArrowRight className="w-6 text-primary" />
              <div className="w-[90%]">
                Кількість меблів, мілких, особистих речей
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-6 text-primary" />
              <div className="w-[90%]">Степінь забруднення</div>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-6 text-primary" />
              <div className="w-[90%]">Площа і тип приміщення</div>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-6 text-primary" />
              <div className="w-[90%]">
                Особливості приміщення (наприклад, велика частина приміщення
                вкрита плиткою, яку потрібно відмити та відпарити)
              </div>
            </div>
          </div>
        </div>
        <div className="text-[12px] md:text-[14px]">
          Зазвичай, ми просимо відправити нам фото/відео приміщення, аби точно
          прорахувати ціну у режимі онлайн. Якщо у вас немає такої можливості,
          то ми можемо виїхати до вас, подивитися приміщення та обговорити ціну
          на місці.
        </div>
      </div>

      <div className="bg-[#F1F7FF] rounded-lg col-span-4 sm:col-span-6 md:col-start-7 md:col-span-6 grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5 p-4">
        {variants.map((v, i) => (
          <div className="bg-white rounded-md text-[11px] p-3" key={i}>
            <div className="font-semibold mb-2 text-[14px]">{v.title}</div>
            <ul>
              {v.vars.map((text, i) => (
                <li key={i}>• {text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
