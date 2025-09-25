import { Eye, EyeOff } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useFieldContext } from "../context";

type Props = {
  className?: string;
};

export function PasswordField({ className }: Props) {
  const field = useFieldContext<string>();
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className={cn("relative rounded-md", className)}>
      <Input
        type={showPassword ? "text" : "password"}
        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="-translate-y-1/2 absolute end-1 top-1/2 h-6 w-6 rounded-md text-muted-foreground"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
      </Button>
    </div>
  );
}
