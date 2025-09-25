import { XCheckboxGroup, type XCheckboxGroupProps } from "@/components/inputs/checkbox-group";
import { useFieldContext } from "../context";

type Props = Omit<XCheckboxGroupProps, "onChange" | "onBlur" | "value"> & {};

export function CheckboxGroupField(props: Props) {
  const field = useFieldContext<string[]>();

  return (
    <XCheckboxGroup value={field.state.value} onBlur={field.handleBlur} onChange={field.handleChange} {...props} />
  );
}
