import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { XCheckbox } from "./checkbox";

export type XCheckboxGroupProps = {
  label: string;
  value: string[];
  onChange: (v: string[]) => void;
  options: string[];

  onBlur?: VoidFunction;

  classNames?: {
    label?: string;
    checkbox?: string;
    wrapper?: string;
  };
};

export function XCheckboxGroup({ label, classNames, options, value, onChange, onBlur }: XCheckboxGroupProps) {
  const onChangeHandler = (o: string, v: boolean) => {
    if (v) {
      if (value.includes(o)) return;
      onChange([...value, o]);
    } else {
      if (!value.includes(o)) return;
      const newValue = value.filter((v) => v !== o);
      onChange(newValue);
    }
  };

  return (
    <div className={cn("flex flex-col gap-2", classNames?.wrapper)}>
      <Label className={classNames?.label}>{label}</Label>

      {options.map((o) => (
        <XCheckbox
          key={o}
          value={value.includes(o)}
          onChange={(v) => onChangeHandler(o, v)}
          label={o}
          onBlur={onBlur}
        />
      ))}
    </div>
  );
}
