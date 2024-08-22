import { TypeOfCleaning } from "@/types/TypeOfCleaning";

export const getPriceAndHoursForFlat = (typeOfCleaning: TypeOfCleaning) => {
    switch (typeOfCleaning) {
        case "poverhneve":
            return {
                oneRoom: { price: 2000, hours: 4 },
                twoRooms: { price: 2500, hours: 5 },
                threeRooms: { price: 4000, hours: 6 },
                fourRooms: { price: 5000, hours: 8 },
                fiveRooms: { price: 6000, hours: 9 },
                sixRooms: { price: 7000, hours: 10 },
            };
        case "generalne":
            return {
                oneRoom: { price: 3000, hours: 6 },
                twoRooms: { price: 3500, hours: 7 },
                threeRooms: { price: 5000, hours: 8 },
                fourRooms: { price: 6000, hours: 9 },
                fiveRooms: { price: 7000, hours: 10 },
                sixRooms: { price: 8000, hours: 11 },
            };
        case "pislya_remontu":
            return {
                oneRoom: { price: 3000, hours: 7 },
                twoRooms: { price: 3500, hours: 8 },
                threeRooms: { price: 5000, hours: 8 },
                fourRooms: { price: 6000, hours: 9 },
                fiveRooms: { price: 7000, hours: 10 },
                sixRooms: { price: 8000, hours: 11 },
            };
        case "za_pidpyskoyu":
            return {
                oneRoom: { price: 1000, hours: 3 },
                twoRooms: { price: 1200, hours: 4 },
                threeRooms: { price: 1500, hours: 5 },
                fourRooms: { price: 1800, hours: 6 },
                fiveRooms: { price: 2100, hours: 7 },
                sixRooms: { price: 2400, hours: 8 },
            };
    }
};

export const getCleaningPrice = (roomAmount: number, typeOfCleaning: TypeOfCleaning) => {
    switch (roomAmount) {
        case 1:
            return getPriceAndHoursForFlat(typeOfCleaning).oneRoom.price;
        case 2:
            return getPriceAndHoursForFlat(typeOfCleaning).twoRooms.price;
        case 3:
            return getPriceAndHoursForFlat(typeOfCleaning).threeRooms.price;
        case 4:
            return getPriceAndHoursForFlat(typeOfCleaning).fourRooms.price;
        case 5:
            return getPriceAndHoursForFlat(typeOfCleaning).fiveRooms.price;
        case 6:
            return getPriceAndHoursForFlat(typeOfCleaning).sixRooms.price;
        default:
            return getPriceAndHoursForFlat(typeOfCleaning).oneRoom.price;
    }
};
