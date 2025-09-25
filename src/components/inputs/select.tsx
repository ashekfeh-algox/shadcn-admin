import { useId } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export type XSelectProps<T extends string> = {
  value: T;
  options: T[] | Readonly<T[]>;
  onChange: (v: T) => void;

  onBlur?: VoidFunction;
  label?: string;
  placeholder?: string;

  classNames?: {
    label?: string;
    trigger?: string;
    wrapper?: string;
  };
};

export function XSelect<T extends string>({
  value,
  options,
  label,
  placeholder,
  classNames,
  onBlur,
  onChange,
}: XSelectProps<T>) {
  const id = useId();

  return (
    <div className={cn("space-y-2", classNames?.wrapper)}>
      {label !== undefined && (
        <Label className={classNames?.label} htmlFor={id}>
          {label}
        </Label>
      )}
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger id={id} className={classNames?.trigger} onBlur={onBlur}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
