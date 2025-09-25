import { cn } from "@/lib/utils";
import dashboardDark from "./assets/dashboard-dark.png";
import dashboardLight from "./assets/dashboard-light.png";
import { UserAuthForm } from "./components/user-auth-form";

export function SignIn2() {
  return (
    <div className="container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-[480px] sm:p-8">
          <div className="mb-4 flex items-center justify-center">
            {/* TODO: Add Logo */}
            <h1 className="font-medium text-xl">Shadcn Admin</h1>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-sm flex-col justify-center space-y-2">
          <div className="flex flex-col space-y-2 text-start">
            <h2 className="font-semibold text-lg tracking-tight">Sign in</h2>
            <p className="text-muted-foreground text-sm">
              Enter your email and password below <br />
              to log into your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-muted-foreground text-sm">
            By clicking sign in, you agree to our{" "}
            <a href="/terms" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>

      <div
        className={cn(
          "relative h-full overflow-hidden bg-muted max-lg:hidden",
          "[&>img]:absolute [&>img]:top-[15%] [&>img]:left-20 [&>img]:h-full [&>img]:w-full [&>img]:select-none [&>img]:object-cover [&>img]:object-top-left",
        )}
      >
        <img src={dashboardLight} className="dark:hidden" width={1024} height={1151} alt="Shadcn-Admin" />
        <img src={dashboardDark} className="hidden dark:block" width={1024} height={1138} alt="Shadcn-Admin" />
      </div>
    </div>
  );
}
