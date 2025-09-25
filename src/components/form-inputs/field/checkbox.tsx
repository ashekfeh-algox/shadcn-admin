import { XCheckbox, type XCheckboxProps } from "@/components/inputs/checkbox";
import { useFieldContext } from "../context";

type Props = Omit<XCheckboxProps, "onChange" | "onBlur" | "value"> & {};

export function CheckboxField(props: Props) {
  const field = useFieldContext<boolean>();

  return <XCheckbox value={field.state.value} onBlur={field.handleBlur} onChange={field.handleChange} {...props} />;
}
