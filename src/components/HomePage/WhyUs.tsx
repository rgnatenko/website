export default function WhyUs() {
  return (
    <>
      <div className="relative col-start-1 col-span-4 sm:col-span-6 md:col-span-12 flex justify-center items-center gap-5 mt-24 mb-5">
        <div className="relative z-10 font-bold text-2xl text-gray-900 max-w-64 text-center">
          Чому варто вибирати нас?
        </div>

        <div className="absolute -top-3 rotate-12 p-2 bg-primary text-white rounded-md text-[11px] left-[50%]">
          Переваги chisto.com.ua
        </div>
      </div>

      <div className="col-start-1 col-span-4 sm:col-span-6 md:col-span-12 flex flex-col sm:flex-row justify-between gap-12 sm:gap-5">
        <div className="w-full flex flex-col items-center gap-5 sm:gap-3">
          <p className="text-gray-900 sm:max-w-44 text-lg sm:text-sm text-center">
            Виїзджяємо у будь-яку точку міста протягом години
          </p>
          <div
            className="w-full overflow-hidden h-[450px] sm:h-[200px] md:h-[350px] xl:h-[450px] 2xl:h-[600px] flex items-center rounded-md"
            style={{ boxShadow: "8px 8px 0px #0038FF" }}
          >
            <iframe
              src="https://giphy.com/embed/bBabks7GYp0iPdOx07"
              className="w-full h-[1000px] pointer-events-none"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-5 sm:gap-3">
          <p className="sm:hidden text-gray-900 sm:max-w-44 text-lg sm:text-sm text-center">
            Відповідально ставимося до роботи, прибираємо доти, допоки вас не
            влаштує результат
          </p>

          <div
            className="w-full overflow-hidden h-[450px] sm:h-[200px] md:h-[350px] xl:h-[450px] 2xl:h-[600px] flex items-center rounded-md"
            style={{ boxShadow: "8px -8px 0px #FFD766" }}
          >
            <iframe
              src="https://giphy.com/embed/3dipmy9f0vBdKyJHLj"
              className="w-full h-[1000px] pointer-events-none"
            />
          </div>
          <p className="hidden sm:block text-gray-900 sm:max-w-44 text-lg sm:text-sm text-center">
            Відповідально ставимося до роботи, прибираємо доти, допоки вас не
            влаштує результат
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-5 sm:gap-3">
          <p className="text-gray-900 sm:max-w-44 text-lg sm:text-sm text-center">
            Даємо знижки постійним клієнтам, маємо свою програму лояльності
          </p>
          <div
            className="w-full overflow-hidden h-[450px] sm:h-[200px] md:h-[350px] xl:h-[450px] 2xl:h-[600px] flex items-center rounded-md"
            style={{ boxShadow: "8px 8px 0px #6AA8FF" }}
          >
            <iframe
              src="https://giphy.com/embed/XF0peGVvyw4fYNCgSE"
              className="w-full h-[1000px] pointer-events-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}
