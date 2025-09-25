import { XDatePicker, type XDatePickerProps } from "@/components/inputs/date-picker";
import { useFieldContext } from "../context";

type Props = Omit<XDatePickerProps, "value" | "onSelect" | "onBlur" | "disabled">;

export function DatePickerField(props: Props) {
  const field = useFieldContext<Date | undefined>();

  return (
    <XDatePicker
      onSelect={field.handleChange}
      onBlur={field.handleBlur}
      value={field.state.value}
      disabled={(date: Date) => date > new Date() || date < new Date("1900-01-01")}
      {...props}
    />
  );
}
