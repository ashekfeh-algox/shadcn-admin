import { createFileRoute } from "@tanstack/react-router";
import { Search } from "@/components/command/search";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { ForbiddenError } from "@/features/errors/forbidden";
import { GeneralError } from "@/features/errors/general-error";
import { MaintenanceError } from "@/features/errors/maintenance-error";
import { NotFoundError } from "@/features/errors/not-found-error";
import { UnauthorisedError } from "@/features/errors/unauthorized-error";
import { Header } from "@/layout/header";
import { SettingDrawer } from "@/settings";
import { ThemeSwitch } from "@/theme/theme-switch";

export const Route = createFileRoute("/_authenticated/errors/$error")({
  component: RouteComponent,
});

function RouteComponent() {
  const { error } = Route.useParams();

  const errorMap: Record<string, React.ComponentType> = {
    unauthorized: UnauthorisedError,
    forbidden: ForbiddenError,
    "not-found": NotFoundError,
    "internal-server-error": GeneralError,
    "maintenance-error": MaintenanceError,
  };
  const ErrorComponent = errorMap[error] || NotFoundError;

  return (
    <>
      <Header fixed className="border-b">
        <Search />
        <div className="ms-auto flex items-center space-x-4">
          <ThemeSwitch />
          <SettingDrawer />
          <ProfileDropdown />
        </div>
      </Header>
      <div className="flex-1 [&>div]:h-full">
        <ErrorComponent />
      </div>
    </>
  );
}
