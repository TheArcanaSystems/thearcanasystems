"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { navItems } from "@/config/nav";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CreatorProfile } from "@/components/dashboard/creator-profile";
import { NavLinks } from "@/components/dashboard/nav-links";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

export function Topbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const current = navItems.find((item) => item.href === pathname);

  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur md:px-6">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="left"
          className="w-64 border-sidebar-border bg-sidebar p-0 text-sidebar-foreground"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <CreatorProfile />
          <Separator className="bg-sidebar-border" />
          <div className="py-3">
            <NavLinks onNavigate={() => setOpen(false)} />
          </div>
        </SheetContent>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
        >
          <Menu className="size-5" />
        </Button>
      </Sheet>

      <div className="flex min-w-0 flex-col">
        <h1 className="truncate text-sm font-semibold">
          {current?.title ?? "Dashboard"}
        </h1>
        {current?.description ? (
          <p className="hidden truncate text-xs text-muted-foreground sm:block">
            {current.description}
          </p>
        ) : null}
      </div>

      <div className="ml-auto md:hidden">
        <ThemeToggle />
      </div>
    </header>
  );
}
