import Image from "next/image";

export default function WeCooperate() {
  const images = [
    "https://www.riviera.com.ua/wp-content/uploads/2019/12/eva.jpg",
    "https://giftmall.com.ua/uploads/media/catalog_preview/0001/08/3af86d50e38bb3ef328373051c295c6b3c2f7912.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIkrs6kovCbf0tQg3MQEwTHGcaAzmOGwHdg&s",
    "https://retroville.ua/storage/establishments/logo/large/mCul2Kz7ege1tRSnn4kfMLErhYVGPdr1tuZttqND.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-zM2cbm_V4ShltbfgExU12bjTt7BBs9PY-g&s",
    "https://images.prom.ua/4292224747_rozetka.jpg",
  ];

  return (
    <div className="px-6 sm:px-12 md:px-16 py-[50px]">
      <div className="text-lg lg:text-[30px] text-center mb-12 sm:mb-24">Ми співпрацюємо💙</div>

      <div className="w-full inline-flex flex-nowrap overflow no-scrollbar">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {[
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
          ].map((img) => (
            <li key={img}>
              <Image
                src={img}
                alt={img}
                width={1000}
                height={1000}
                className=" w-[100px] sm:w-[200px] rounded-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
