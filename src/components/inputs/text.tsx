import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type XTextProps = {
  value: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  onBlur: VoidFunction;
  onChange: (v: string) => void;
  label?: string;

  classNames?: {
    label?: string;
    input?: string;
    wrapper?: string;
  };
};

export function XText({ value, type, placeholder, onBlur, onChange, classNames, label }: XTextProps) {
  return (
    <div className={cn("grid w-full max-w-sm items-center gap-3", classNames?.wrapper)}>
      {label !== undefined && <Label className={classNames?.label}>{label}</Label>}
      <Input
        value={value}
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
