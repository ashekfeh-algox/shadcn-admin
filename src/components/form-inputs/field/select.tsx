import { XSelect, type XSelectProps } from "@/components/inputs/select";
import { useFieldContext } from "../context";

type Props = Omit<XSelectProps<string>, "onChange" | "value" | "onBlur"> & {};

export function SelectField(props: Props) {
  const field = useFieldContext<string>();

  return <XSelect value={field.state.value} onChange={field.handleChange} onBlur={field.handleBlur} {...props} />;
}
