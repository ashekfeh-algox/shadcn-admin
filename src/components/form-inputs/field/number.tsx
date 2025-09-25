import { useId } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldInfo } from "../common/info";
import { useFieldContext } from "../context";

type Props = {
  label: string;
  placeholder?: string;
};

export function NumberField({ label, placeholder }: Props) {
  const field = useFieldContext<number>();
  const id = useId();

  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        value={field.state.value}
        placeholder={placeholder}
        type="number"
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.valueAsNumber)}
      />

      <FieldInfo field={field} />
    </div>
  );
}
