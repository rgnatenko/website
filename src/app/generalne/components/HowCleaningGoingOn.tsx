export default function HowCleaningGoingOn() {
  return (
    <div className="px-6 sm:px-12 md:px-16 text-gray-900 py-[50px]">
      <div className="text-[20px] sm:text-[30px] lg:max-w-[60%] mb-8">
        Як відбувається генеральне прибирання
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
            До Вас приїде команда клінерів і наш бригадир;
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
            Ви зможете озвучити йому всі свої побажання (можливо щось не варто
            чіпати або на якусь поверхню звернути більше уваги);
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
            Після чого бригадир роздає завдання кожному із співробітників;
          </div>
        </div>

        <div
          className="col-span-4 sm:col-span-6 md:col-start-4 md:col-span-8 flex items-center gap-4 p-5 ext-gray-900 border border-primary text-gray-900 text-[14px] lg:text-sm rounded-md hover:scale-110 hover:-rotate-6 duration-150"
          style={{ boxShadow: "8px 8px 0px #0038FF" }}
        >
          <div className="w-10 h-10 leading-none flex items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
            4
          </div>
          <div className="w-[90%]">
            Протягом усього прибирання він відсуває шафи, переносить пилосос з
            кімнати в кімнату, пересуває всі великогабаритні предмети і
            контролює роботу всіх клінерів.
          </div>
        </div>
      </div>
    </div>
  );
}
