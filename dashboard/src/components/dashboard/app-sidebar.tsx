import { CreatorProfile } from "@/components/dashboard/creator-profile";
import { NavLinks } from "@/components/dashboard/nav-links";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

export function AppSidebar() {
  return (
    <aside className="hidden h-svh w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground md:flex">
      <CreatorProfile />
      <Separator className="bg-sidebar-border" />
      <div className="flex-1 overflow-y-auto py-3">
        <NavLinks />
      </div>
      <Separator className="bg-sidebar-border" />
      <div className="flex items-center justify-between px-3 py-3">
        <span className="text-xs text-sidebar-foreground/45">
          Arcana Creator OS
        </span>
        <ThemeToggle />
      </div>
    </aside>
  );
}
