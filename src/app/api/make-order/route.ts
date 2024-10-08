// app/api/make-order/route.ts
import sendEmail from "@/lib/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, city, premisesType, cleaningType, additionalServices, comment } = await req.json();

        const emailMessage = {
            from: email,
            to: process.env.NEXT_USER,
            subject: `Заявка на прибирання від ${name}`,
            text: `
        Імʼя: ${name}, 
        Телефон: ${phone},
        Місто: ${city},
        Тип приміщення: ${premisesType},
        Тип прибирання: ${cleaningType},
        Додаткові послуги: ${additionalServices ? additionalServices.join(', ') : 'Немає'},
        Комментар до замовлення: ${comment}
      `,
        };

        await sendEmail(emailMessage);

        return NextResponse.json({ message: `Дякую за замовлення, ${name}!` }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Йой! Сталася помилка під час відправлення вашої заявки, спробуйте ще раз' }, { status: 500 });
    }
}
