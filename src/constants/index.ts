export const ADDITIONAL_SERVICES = [
    "Всередині холодильника",
    "Всередині духової печі",
    "Всередині мікрохвильової печі",
    "Миття вікон",
    "Миття посуду (погодинно)",
    "Прання речей (погодинно)",
    "Прасування речей (погодинно)",
    "Миття витяжки всередині",
    "Прибирання всередині шафок (погодинно)",
    "Гардероб (погодинно)",
    "Прибирання лотка домашнього улюбленця",
    "Хімчистка",
];

export const ADDITIONAL_SERVICES_PRICES = [
    { name: ADDITIONAL_SERVICES[0], price: 350, hourly: false, meterByMeter: false, },
    { name: ADDITIONAL_SERVICES[1], price: 245, hourly: false, meterByMeter: false, },
    { name: ADDITIONAL_SERVICES[2], price: 160, hourly: false, meterByMeter: false, },
    { name: ADDITIONAL_SERVICES[3], price: 200, hourly: false, meterByMeter: true, },
    { name: ADDITIONAL_SERVICES[4], price: 210, hourly: true, meterByMeter: false },
    { name: ADDITIONAL_SERVICES[5], price: 150, hourly: true, meterByMeter: false },
    { name: ADDITIONAL_SERVICES[6], price: 230, hourly: true, meterByMeter: false },
    { name: ADDITIONAL_SERVICES[7], price: 290, hourly: false, meterByMeter: false, },
    { name: ADDITIONAL_SERVICES[8], price: 220, hourly: true, meterByMeter: false, },
    { name: ADDITIONAL_SERVICES[9], price: 140, hourly: true, meterByMeter: false },
    { name: ADDITIONAL_SERVICES[10], price: 180, hourly: false, meterByMeter: false, },
    { name: ADDITIONAL_SERVICES[11], price: 70, hourly: false, meterByMeter: true, },
];

export const SERVICES = [
    {
        name: "Генеральне прибирання",
        link: "/generalne",
    },
    {
        name: "Поверхневе прибирання",
        link: "/poverhneve",
    },
    {
        name: "Прибирання після ремонту",
        link: "/pislya-remontu",
    },
    {
        name: "Прибирання за підпискою",
        link: "/za-pidpyskoyu",
    },
    {
        name: "Прибирання територій",
        link: "/prybyrannya-terytoriy",
    },
    {
        name: "Озеленення територій",
        link: "/ozelenennya",
    },
    {
        name: "Озонація, прибирання запаху",
        link: "/ozonatsiya",
    },
    {
        name: "Хімчистка",
        link: "/khimchystka",
    },
];

export const CLEANING_TYPES = [
    {
        name: "Генеральне",
        value: "generalne",
    },
    {
        name: "Поверхневе",
        value: "poverhneve",
    },
    {
        name: "Після ремонту",
        value: "pislya_remontu",
    },
    {
        name: "За підпискою",
        value: "za_pidpyskoyu",
    },
];
