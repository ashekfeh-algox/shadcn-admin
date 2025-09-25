import { z } from "zod";
import { useAppForm } from "@/components/form-inputs";

const formSchema = z.object({
  email: z.email({
    error: (iss) => (iss.input === "" ? "Please enter your email" : undefined),
  }),
});

export function ForgotPasswordForm() {
  const form = useAppForm({
    defaultValues: { email: "" },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: (data) => {
      alert(JSON.stringify(data.value));
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.handleSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <form.AppField name="email">{(field) => <field.TextField type="email" label="Email" />}</form.AppField>
    </form>
  );
}
