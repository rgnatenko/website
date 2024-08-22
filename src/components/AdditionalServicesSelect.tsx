"use client";
import { useEffect, useState } from "react";
import {
  MultiSelector,
  MultiSelectorTrigger,
  MultiSelectorInput,
  MultiSelectorContent,
  MultiSelectorList,
  MultiSelectorItem,
} from "@/components/ui/multi-select";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { ADDITIONAL_SERVICES } from "@/constants";

const options = ADDITIONAL_SERVICES.map((service) => ({
  label: service,
  value: service,
}));

interface Props {
  register: UseFormRegister<{
    name: string;
    phone: string;
    city: string;
    premisesType: string;
    cleaningType: string;
    additionalServices?: string[] | undefined;
  }>;
  setValue: UseFormSetValue<{
    name: string;
    phone: string;
    city: string;
    premisesType: string;
    cleaningType: string;
    additionalServices?: string[];
  }>;
  clearServices: boolean;
}

export default function AdditionalServicesSelect({
  register,
  setValue: setAdditionalServicesValue,
  clearServices,
}: Props) {
  const [value, setValue] = useState<string[]>([]);

  useEffect(() => {
    setAdditionalServicesValue("additionalServices", value);
  }, [value, setAdditionalServicesValue]);

  return (
    <MultiSelector
      {...register("additionalServices")}
      values={!clearServices ? value : []}
      onValuesChange={setValue}
      loop={false}
    >
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder="Додаткові послуги" />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList>
          {options.map((option) => (
            <MultiSelectorItem key={option.value} value={option.label}>
              {option.label}
            </MultiSelectorItem>
          ))}
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  );
}
