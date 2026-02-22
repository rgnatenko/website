"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { useForm } from "react-hook-form";

const formSchema = z.object({
    name: z.string().min(1, "Ім'я є обов'язковим"),
    phone: z
        .string()
        .regex(/^\+?[0-9]{10,15}$/, "Введіть коректний номер телефону"),
    motivation: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Robota() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const clearForm = () => {
        register("name").onChange({ target: { value: "" } } as any);
        register("phone").onChange({ target: { value: "" } } as any);
        register("motivation").onChange({ target: { value: "" } } as any);
    };

    const onSubmit = async (data: FormData) => {
        try {
            await axios.post("/api/make-order", data);
            clearForm();
            toast({
                description: (
                    <>
                        <h4 className="text-green-600 font-bold">Успіх!</h4>
                        <p className="text-slate-900">
                            Ваша заявка успішно відправлена, ми зв&apos;яжемося з вами найближчим
                            часом.
                        </p>
                    </>
                ),
            });
        } catch (error) {
            console.error(error);
            clearForm();
            toast({
                description: (
                    <>
                        <h4 className="text-red-600 font-bold">Йой!</h4>
                        <p className="text-slate-900">
                            Сталася помилка під час відправлення вашої заявки, спробуйте ще
                            раз.
                        </p>
                    </>
                ),
            });
        }
    };

    return (
        <>
            <div className="px-6 sm:px-12 md:px-16 relative col-start-1 col-span-4 sm:col-span-6 md:col-span-12 text-center text-[20px] sm:text-[30px] text-gray-900 mt-12 mb-5 uppercase">
                <p className="relative z-10">Робота в компанії</p>
                <div className="absolute -top-12 -left-[20%] w-[648px] h-[128px] rounded-[50%] bg-[#FFF8E4]" />
                <div className="absolute -bottom-96 rotate-45 -right-[20%] w-[548px] h-[208px] rounded-[50%] bg-[#DFECFF]" />
            </div>

            <div className="px-6 sm:px-12 md:px-16 relative z-20 col-start-1 col-span-4 sm:col-span-6 md:col-start-3 md:col-span-8 flex flex-col gap-3">
                <p className="text-[18px] sm:text-[24px] text-gray-900">
                    Ми завжди шукаємо талановитих та відповідальних людей, які хочуть
                    приєднатися до нашої команди. Якщо ви зацікавлені в роботі в нашій
                    компанії, будь ласка, заповніть форму нижче.
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 mt-6"
                >
                    <label className="flex flex-col">
                        <span className="text-gray-900 text-[16px] sm:text-[18px]">
                            Ваше ім&apos;я
                        </span>
                        <input
                            type="text"
                            {...register("name")}
                            className={`border ${
                                errors.name ? "border-red-500" : "border-gray-300"
                            } rounded-md px-4 py-2 text-gray-900`}
                            placeholder="Введіть ваше ім'я"
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm">
                                {errors.name.message}
                            </span>
                        )}
                    </label>

                    <label className="flex flex-col">
                        <span className="text-gray-900 text-[16px] sm:text-[18px]">
                            Номер телефону
                        </span>
                        <input
                            type="text"
                            {...register("phone")}
                            className={`border ${
                                errors.phone ? "border-red-500" : "border-gray-300"
                            } rounded-md px-4 py-2 text-gray-900`}
                            placeholder="Введіть ваш номер телефону"
                        />
                        {errors.phone && (
                            <span className="text-red-500 text-sm">
                                {errors.phone.message}
                            </span>
                        )}
                    </label>

                    <label className="flex flex-col">
                        <span className="text-gray-900 text-[16px] sm:text-[18px]">
                            Мотиваційний лист (необов&apos;язково)
                        </span>
                        <textarea
                            {...register("motivation")}
                            className={`border ${
                                errors.motivation ? "border-red-500" : "border-gray-300"
                            } rounded-md px-4 py-2 text-gray-900`}
                            placeholder="Напишіть, чому ви хочете працювати у нас"
                            rows={5}
                        />
                        {errors.motivation && (
                            <span className="text-red-500 text-sm">
                                {errors.motivation.message}
                            </span>
                        )}
                    </label>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Надіслати
                    </button>
                </form>
            </div>
        </>
    );
}
