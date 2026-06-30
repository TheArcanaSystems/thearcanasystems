import { BadgeCheck } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function CreatorProfile() {
  return (
    <div className="flex items-center gap-3 px-3 py-4">
      <Avatar className="size-10 border border-sidebar-border">
        <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground font-semibold">
          TM
        </AvatarFallback>
      </Avatar>
      <div className="flex min-w-0 flex-col">
        <div className="flex items-center gap-1">
          <span className="truncate font-display text-base font-semibold text-sidebar-foreground">
            @tenfoldmarc
          </span>
          <BadgeCheck className="size-3.5 shrink-0 text-sidebar-primary" />
        </div>
        <span className="truncate text-xs text-sidebar-foreground/55">
          Creator OS
        </span>
      </div>
    </div>
  );
}
