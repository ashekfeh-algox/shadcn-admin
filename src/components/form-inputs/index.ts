import { createFormHook } from "@tanstack/react-form";
import { SubmitButton } from "./components/button";
import { fieldContext, formContext } from "./context";
import { CheckboxField } from "./field/checkbox";
import { CheckboxGroupField } from "./field/checkbox-group";
import { DatePickerField } from "./field/date-picker";
import { NumberField } from "./field/number";
import { PasswordField } from "./field/password";
import { SelectField } from "./field/select";
import { TextField } from "./field/text";

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    PasswordField,
    DatePickerField,
    CheckboxField,
    SelectField,
    NumberField,
    CheckboxGroupField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
