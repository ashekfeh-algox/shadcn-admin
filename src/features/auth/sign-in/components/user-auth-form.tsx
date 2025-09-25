import { useNavigate } from "@tanstack/react-router";
import { Loader2, LogIn } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { useAppForm } from "@/components/form-inputs";
import { Button } from "@/components/ui/button";
import { cn, sleep } from "@/lib/utils";
import { useAuthStore } from "@/stores/auth-store";

const AuthFormSchema = z.object({
  email: z.email({
    error: (iss) => (iss.input === "" ? "Please enter your email" : undefined),
  }),
  password: z.string().min(1, "Please enter your password").min(7, "Password must be at least 7 characters long"),
});

interface UserAuthFormProps {
  className?: string;
  redirectTo?: string;
}

//TODO: Continue from here

export function UserAuthForm({ className, redirectTo }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { auth } = useAuthStore();

  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: AuthFormSchema,
    },
    onSubmit: (data) => {
      setIsLoading(true);

      // Mock successful authentication
      const mockUser = {
        accountNo: "ACC001",
        email: data.value.email,
        role: ["user"],
        exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours from now
      };

      toast.promise(sleep(2000), {
        loading: "Signing in...",
        success: () => {
          setIsLoading(false);

          // Set user and access token
          auth.setUser(mockUser);
          auth.setAccessToken("mock-access-token");

          // Redirect to the stored location or default to dashboard
          const targetPath = redirectTo || "/";
          navigate({ to: targetPath, replace: true });

          return `Welcome back, ${data.value.email}!`;
        },
        error: "Error",
      });
    },
  });

  function onSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    form.handleSubmit();
  }

  return (
    <form onSubmit={onSubmitHandler} className={cn("grid gap-3", className)}>
      <form.AppField name="email">{(field) => <field.TextField type="email" label="email" />}</form.AppField>

      <form.AppField name="password">
        {(field) => <field.TextField type="password" label="password" placeholder="********" />}
      </form.AppField>
      <Button className="mt-2" disabled={isLoading}>
        {isLoading ? <Loader2 className="animate-spin" /> : <LogIn />}
        Sign in
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
        <Button variant="outline" type="button" disabled={isLoading}>
          GitHub
        </Button>
        <Button variant="outline" type="button" disabled={isLoading}>
          Facebook
        </Button>
      </div>
    </form>
  );
}
