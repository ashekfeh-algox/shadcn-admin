import { Outlet } from "@tanstack/react-router";
import { SearchProvider } from "@/components/command/context/search-provider";
import { Search } from "@/components/command/search";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/layout/sidebar";
import { getCookie } from "@/lib/cookies";
import { cn } from "@/lib/utils";
import { SettingDrawer } from "@/settings";
import { LayoutProvider } from "@/settings/context/layout-provider";
import { ThemeSwitch } from "@/theme/theme-switch";
import { Header } from "../header";

type Props = {
  children?: React.ReactNode;
};

export function AuthenticatedLayout({ children }: Props) {
  const defaultOpen = getCookie("sidebar_state") !== "false";
  return (
    <SearchProvider>
      <LayoutProvider>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <SidebarInset
            className={cn(
              // Set content container, so we can use container queries
              "@container/content",

              // If layout is fixed, set the height
              // to 100svh to prevent overflow
              "has-[[data-layout=fixed]]:h-svh",

              // If layout is fixed and sidebar is inset,
              // set the height to 100svh - spacing (total margins) to prevent overflow
              "peer-data-[variant=inset]:has-[[data-layout=fixed]]:h-[calc(100svh-(var(--spacing)*4))]",
            )}
          >
            <Header fixed className="border-b">
              <Search />
              <div className="ms-auto flex items-center space-x-4">
                <ThemeSwitch />
                <SettingDrawer />
                <ProfileDropdown />
              </div>
            </Header>
            {children ?? <Outlet />}
          </SidebarInset>
        </SidebarProvider>
      </LayoutProvider>
    </SearchProvider>
  );
}
