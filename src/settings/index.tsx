import { Settings } from "lucide-react";
import { useId } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useDirection } from "@/settings/context/direction-provider";
import { useFont } from "@/settings/context/font-provider";
import { useLayout } from "@/settings/context/layout-provider";
import { useTheme } from "@/theme/theme-provider";
import { useSidebar } from "../components/ui/sidebar";
import { FontConfig } from "./font";
import { LayoutConfig } from "./layout";
import { SidebarConfig } from "./sidebar";
import { ThemeConfig } from "./theme";

export function SettingDrawer() {
  const { setOpen } = useSidebar();
  const { resetDir } = useDirection();
  const { resetTheme } = useTheme();
  const { resetLayout } = useLayout();
  const { resetFont } = useFont();

  const handleReset = () => {
    setOpen(true);
    resetDir();
    resetTheme();
    resetLayout();
    resetFont();
  };

  const sheetId = useId();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full">
          <Settings aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="pb-0 text-start">
          <SheetTitle>Theme Settings</SheetTitle>
          <SheetDescription id={sheetId}>Adjust the appearance and layout to suit your preferences.</SheetDescription>
        </SheetHeader>
        <div className="space-y-6 overflow-y-auto px-4">
          <ThemeConfig />
          <SidebarConfig />
          <LayoutConfig />
          <FontConfig />
          {/* <DirConfig /> */}
        </div>
        <SheetFooter className="gap-2">
          <Button variant="destructive" onClick={handleReset}>
            Reset
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
