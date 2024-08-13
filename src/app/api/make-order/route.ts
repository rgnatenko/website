// app/api/make-order/route.ts
import sendEmail from "@/lib/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { name, phone, city, premisesType, cleaningType, additionalServices } = await req.json();

        const emailMessage = {
            from: process.env.NEXT_USER,
            to: process.env.NEXT_USER,
            subject: `Заявка на прибирання від ${name}`,
            text: `
        Імʼя: ${name}, 
        Телефон: ${phone},
        Місто: ${city},
        Тип приміщення: ${premisesType},
        Тип прибирання: ${cleaningType},
        Додаткові послуги: ${additionalServices ? additionalServices.join(', ') : 'Немає'},
      `,
        };

        await sendEmail(emailMessage);

        return NextResponse.json({ message: `Дякую за замовлення, ${name}!` }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Йой! Сталася помилка під час відправлення вашої заявки, спробуйте ще раз' }, { status: 500 });
    }
}
