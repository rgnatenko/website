"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectValue,
  SelectItem,
} from "./ui/select";
import AdditionalServicesSelect from "./AdditionalServicesSelect";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { X } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  email: z.string().email({ message: "Некоректна пошта" }),
  name: z.string().min(1, "Імʼя обов'язкове"),
  phone: z.string().min(10, "Введіть коректний номер телефону"),
  city: z.string({ message: "Виберіть місто" }),
  premisesType: z.string({ message: "Виберіть тип приміщення" }),
  cleaningType: z.string({ message: "Виберіть тип прибирання" }),
  additionalServices: z.array(z.string()).optional(),
  comment: z.string().optional(),
});

type FormDataType = z.infer<typeof formSchema>;

interface Props {
  className?: string;
}

export default function OrderForm({ className }: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(formSchema),
  });

  const { toast } = useToast();
  const [clearServices, setClearServices] = useState(false);

  const clearErrors = () => {
    setError("email", { message: "" });
    setError("name", { message: "" });
    setError("phone", { message: "" });
    setError("city", { message: "" });
    setError("premisesType", { message: "" });
    setError("cleaningType", { message: "" });
  };

  const clearForm = () => {
    setValue("email", "");
    setValue("name", "");
    setValue("phone", "");
    setValue("city", "");
    setValue("premisesType", "");
    setValue("cleaningType", "");
    setClearServices(true);
    setValue("comment", "");
  };

  const onSubmit = async (data: FormDataType) => {
    try {
      await axios.post("/api/make-order", data);
      clearForm();
      toast({
        description: (
          <>
            <h4 className="text-green-600 font-bold">{`Дякую за замовлення!`}</h4>
            <p className="text-slate-900">
              Ми зв&apos;яжемось з вами протягом години
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
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("sm:w-fit", className)}>
          Замовити прибирання
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[450px] sm:max-w-[425px] lg:w-[700px] rounded-xl h-[9`0%] overflow-auto">
        <DialogClose
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          onClick={clearErrors}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader>
          <DialogTitle>Замовити прибирання</DialogTitle>
          <DialogDescription>
            Заповніть форму, і наш менеджер набере протягом 10 хвилин💙
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <div>
              <Input
                id="name"
                {...register("name")}
                placeholder="Імʼя"
                value={watch("name")}
              />
              {errors.name?.message && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="Номер телефону"
                value={watch("phone")}
              />
              {errors.phone?.message && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <Input
                id="email"
                {...register("email")}
                placeholder="Електронна пошта"
                value={watch("email")}
              />
              {errors.email?.message && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Select
                {...register("city")}
                onValueChange={(e) => setValue("city", e)}
                // defaultValue="Дніпро"
                value={watch("city")}
              >
                <SelectTrigger className="focus-visible:border-0">
                  <SelectValue placeholder="Місто" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem defaultChecked value="Дніпро">
                      Дніпро
                    </SelectItem>
                    <SelectItem value="Новомосковськ">Новомосковськ</SelectItem>
                    <SelectItem value="Київ">Київ</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.city?.message && (
                <p className="text-red-500">{errors.city.message}</p>
              )}
            </div>
            <div>
              <Select
                {...register("premisesType")}
                onValueChange={(e) => setValue("premisesType", e)}
                value={watch("premisesType")}
              >
                <SelectTrigger className="focus-visible:border-0">
                  <SelectValue placeholder="Тип приміщення" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Житлове">Житлове</SelectItem>
                    <SelectItem value="Офісне">Офісне</SelectItem>
                    <SelectItem value="Готельний номер">
                      Готельний номер
                    </SelectItem>
                    <SelectItem value="Комерційне">Комерційне</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.premisesType?.message && (
                <p className="text-red-500">{errors.premisesType.message}</p>
              )}
            </div>
            <div>
              <Select
                {...register("cleaningType")}
                onValueChange={(e) => setValue("cleaningType", e)}
                value={watch("cleaningType")}
              >
                <SelectTrigger className="focus-visible:border-0">
                  <SelectValue placeholder="Тип прибирання" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Генеральне">
                      Генеральне прибирання
                    </SelectItem>
                    <SelectItem value="Поверхневе">
                      Поверхневе прибирання
                    </SelectItem>
                    <SelectItem value="Після ремонту">
                      Прибирання після ремонту
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.cleaningType?.message && (
                <p className="text-red-500">{errors.cleaningType?.message}</p>
              )}
            </div>

            <AdditionalServicesSelect
              register={register}
              setValue={setValue}
              clearServices={clearServices}
            />

            <Textarea
              id="comment"
              {...register("comment")}
              placeholder="Комментар до замовлення"
            />
          </div>

          <DialogFooter className="mt-6 flex w-full justify-end gap-4">
            <DialogClose asChild onClick={clearErrors}>
              <Button type="button" variant="secondary">
                Закрити
              </Button>
            </DialogClose>
            <Button type="submit">Відправити</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
