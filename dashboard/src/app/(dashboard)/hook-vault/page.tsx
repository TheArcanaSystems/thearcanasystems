import { Sparkles, BookmarkCheck, CalendarClock, Layers } from "lucide-react";

import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { hooks } from "@/data/hooks";
import { formatCompact } from "@/lib/platform";
import { platformMeta } from "@/lib/platform";

const statusLabel: Record<string, string> = {
  unused: "Unused",
  scheduled: "Scheduled",
  used: "Used",
};

const statusVariant: Record<string, "outline" | "secondary" | "default"> = {
  unused: "outline",
  scheduled: "secondary",
  used: "default",
};

export default function HookVaultPage() {
  const unused = hooks.filter((h) => h.status === "unused").length;
  const used = hooks.filter((h) => h.status === "used").length;
  const niches = new Set(hooks.map((h) => h.niche)).size;

  return (
    <div>
      <PageHeader
        title="Hook Vault"
        description="Every viral hook you've saved, transcribed and templatized."
        action={
          <Button>
            <Sparkles className="size-4" />
            Save new hook
          </Button>
        }
      />

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Hooks saved" value={String(hooks.length)} icon={Layers} />
        <StatCard label="Ready to use" value={String(unused)} icon={BookmarkCheck} />
        <StatCard label="Already used" value={String(used)} icon={CalendarClock} />
        <StatCard label="Niches covered" value={String(niches)} icon={Sparkles} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {hooks.map((hook) => {
          const meta = platformMeta[hook.platform];
          const Icon = meta.icon;

          return (
            <Card key={hook.id} className="flex flex-col">
              <CardHeader className="flex-row items-start justify-between gap-2 space-y-0">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon className={`size-4 ${meta.className}`} />
                  {meta.label}
                  <span aria-hidden>·</span>
                  {hook.sourceHandle}
                </div>
                <Badge variant={statusVariant[hook.status]}>
                  {statusLabel[hook.status]}
                </Badge>
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                <p className="text-sm font-medium leading-snug">
                  &ldquo;{hook.hookText}&rdquo;
                </p>
                <p className="rounded-md bg-muted px-3 py-2 text-xs text-muted-foreground">
                  {hook.template}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="outline" className="text-xs">
                    {hook.niche}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {hook.angle}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{formatCompact(hook.views)} views at source</span>
                <Button variant="ghost" size="sm" className="h-7 px-2">
                  Use in calendar
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
