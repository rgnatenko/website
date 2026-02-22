import WeCooperate from "../generalne/components/WeCooperate";
import PriceTable from "../tsiny/components/PriceTable";

export default function ZaPidpyskoyu() {
  return (
    <>
      <div className="px-6 sm:px-12 md:px-16 relative col-start-1 col-span-4 sm:col-span-6 md:col-span-12 text-center text-[20px] sm:text-[30px] text-gray-900 mt-12 mb-5 uppercase">
        <p className="relative z-10">За підпискою</p>
        <div className="absolute -top-12 -left-[20%] w-[648px] h-[128px] rounded-[50%] bg-[#FFF8E4]" />
        <div className="absolute -bottom-96 rotate-45 -right-[20%] w-[548px] h-[208px] rounded-[50%] bg-[#DFECFF]" />
      </div>

      <div className="px-6 sm:px-12 md:px-16 relative z-20 col-start-1 col-span-4 sm:col-span-6 md:col-start-3 md:col-span-8 flex flex-col gap-3">
        <p className="text-[18px] sm:text-[24px] text-gray-900">
          Підписка на прибирання - це зручний та вигідний спосіб забезпечити
          чистоту та порядок у вашому домі без зайвих турбот. Ви можете вибрати
          зручний для вас графік прибирання, а також налаштувати його відповідно
          до ваших потреб. Наша команда професійних клінерів буде регулярно
          відвідувати ваш будинок, щоб підтримувати його в ідеальному стані.
        </p>
      </div>

      <div className="col-span-4 sm:col-span-6 md:col-span-12 px-6 sm:px-12 md:px-16">
        <div className="text-center mb-5 text-[20px] sm:text-[30px] text-gray-900">
          Що по цінам?
        </div>
        <PriceTable typeOfCleaning="za_pidpyskoyu" />
      </div>

      <div className="col-span-4 sm:col-span-6 md:col-span-12">
        <WeCooperate />
      </div>
    </>
  );
}
