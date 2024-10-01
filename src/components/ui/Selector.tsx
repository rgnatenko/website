import type { TypeOfCleaning } from "@/types/TypeOfCleaning";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { cn } from "@/lib/utils";

interface Props {
  onValueChange: (arg?: any) => void;
  className?: string;
  triggerClassName?: string;
  title: string;
  items: { name: any; value: any }[];
  defaultValue?: any;
  disabled?: boolean;
}

export default function Selector({
  onValueChange,
  className,
  title,
  items,
  triggerClassName,
  defaultValue,
  disabled,
}: Props) {
  return (
    <div className={cn("flex gap-4 items-center text-sm", className)}>
      {title}
      <Select
        disabled={disabled}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
      >
        <SelectTrigger
          className={cn(
            "relative w-48 focus-visible:border-0 text-left",
            triggerClassName
          )}
        >
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent className="absolute top-[100%]">
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
