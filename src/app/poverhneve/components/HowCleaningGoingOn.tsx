export default function HowCleaningGoingOn() {
  return (
    <div className="px-6 sm:px-12 md:px-16 text-gray-900 py-[50px]">
      <div className="text-[20px] sm:text-[30px] lg:max-w-[60%] mb-8">
        Як відбувається поверхневе прибирання
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-8">
        <div
          className="col-span-4 sm:col-span-6 md:col-start-2 md:col-span-8 flex items-center gap-4 p-5 ext-gray-900 border border-primary text-gray-900 text-[14px] lg:text-sm rounded-md hover:scale-110 hover:rotate-6 duration-150"
          style={{ boxShadow: "8px 8px 0px #0038FF" }}
        >
          <div className="w-10 h-10 leading-none flex items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
            1
          </div>
          <div className="w-[90%]">
            До Вас приїде декілька клінерів або один (залежить від розміру
            приміщення);
          </div>
        </div>

        <div
          className="col-span-4 sm:col-span-6 md:col-start-4 md:col-span-8 flex items-center gap-4 p-5 ext-gray-900 border border-primary text-gray-900 text-[14px] lg:text-sm rounded-md hover:scale-110 hover:-rotate-6 duration-150"
          style={{ boxShadow: "8px 8px 0px #0038FF" }}
        >
          <div className="w-10 h-10 leading-none flex items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
            2
          </div>
          <div className="w-[90%]">
            Ви озвучуєте усі свої побажання (можливо щось не варто чіпати або на
            якусь поверхню звернути більше уваги), ми перераховуємо увесь обсяг
            робіт, підсумовуємо, можливо, додаємо додаткові послуги
          </div>
        </div>

        <div
          className="col-span-4 sm:col-span-6 md:col-start-2 md:col-span-8 flex items-center gap-4 p-5 ext-gray-900 border border-primary text-gray-900 text-[14px] lg:text-sm rounded-md hover:scale-110 hover:rotate-6 duration-150"
          style={{ boxShadow: "8px 8px 0px #0038FF" }}
        >
          <div className="w-10 h-10 leading-none flex items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
            3
          </div>
          <div className="w-[90%]">
            Після чого клінер(и) приступає(ють) до роботи;
          </div>
        </div>
        <div
          className="col-span-4 sm:col-span-6 md:col-start-4 md:col-span-8 flex items-center gap-4 p-5 ext-gray-900 border border-primary text-gray-900 text-[14px] lg:text-sm rounded-md hover:scale-110 hover:rotate-6 duration-150"
          style={{ boxShadow: "8px 8px 0px #0038FF" }}
        >
          <div className="w-10 h-10 leading-none flex items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
            4
          </div>
          <div className="w-[90%]">
            Під кінець ми здаємо вам обʼєкт, упевнюємося, що ви усім задоволені, (якщо ні, то усуваємо усі неполадки, вами помічені, якщо ж вам не сподобалося взагалі, як ми поприбирали, то домовляємося за дату для переприбирання)
          </div>
        </div>
      </div>
    </div>
  );
}
