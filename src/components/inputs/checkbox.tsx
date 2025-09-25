import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

export type XCheckboxProps = {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;

  onBlur?: VoidFunction;

  classNames?: {
    label?: string;
    checkbox?: string;
    wrapper?: string;
  };
};

export function XCheckbox({ label, classNames, value, onChange, onBlur }: XCheckboxProps) {
  return (
    <div className={cn("flex items-center gap-2", classNames?.wrapper)}>
      <Checkbox onCheckedChange={onChange} onBlur={onBlur} checked={value} className={classNames?.checkbox} />

      <Label className={classNames?.label}>{label}</Label>
    </div>
  );
}
