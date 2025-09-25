import { XText, type XTextProps } from "@/components/inputs/text";
import { FieldInfo } from "../common/info";
import { useFieldContext } from "../context";

type Props = Omit<XTextProps, "onChange" | "value" | "onBlur"> & {};

export function TextField(props: Props) {
  const field = useFieldContext<string>();

  return (
    <div>
      <XText value={field.state.value} onChange={field.handleChange} onBlur={field.handleBlur} {...props} />
      <FieldInfo field={field} />
    </div>
  );
}
