import { useState } from "react";
import { z } from "zod";
import { useAppForm } from "@/components/form-inputs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SignupFormSchema = z
  .object({
    email: z.email({
      error: (iss) => (iss.input === "" ? "Please enter your email" : undefined),
    }),
    password: z.string().min(1, "Please enter your password").min(7, "Password must be at least 7 characters long"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });

interface SingupFormProps {
  className?: string;
}

export function SignUpForm({ className }: SingupFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useAppForm({
    validators: {
      onSubmit: SignupFormSchema,
    },
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (data) => {
      setIsLoading(true);
      // eslint-disable-next-line no-console
      console.log(data);

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    },
  });

  function onSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    form.handleSubmit;
  }

  return (
    <form onSubmit={onSubmitHandler} className={cn("grid gap-3", className)}>
      <form.AppField name="email">{(field) => <field.TextField type="email" label="Email" />}</form.AppField>

      <form.AppField name="password">
        {(field) => <field.TextField type="password" label="password" placeholder="********" />}
      </form.AppField>

      <form.AppField name="confirmPassword">
        {(field) => <field.TextField type="password" label="Confirm Password" placeholder="********" />}
      </form.AppField>

      <Button className="mt-2" disabled={isLoading}>
        Create Account
      </Button>

      <div className="relative my-2">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" className="w-full" type="button" disabled={isLoading}>
          GitHub
        </Button>
        <Button variant="outline" className="w-full" type="button" disabled={isLoading}>
          Facebook
        </Button>
      </div>
    </form>
  );
}
