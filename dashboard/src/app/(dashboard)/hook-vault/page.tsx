"use client";

import * as React from "react";
import { Sparkles, BookmarkCheck, CalendarClock, Layers, Search, Terminal } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { hooks as seedHooks } from "@/data/hooks";
import { hookTypeLabel } from "@/lib/hook-type";
import { formatCompact, platformMeta } from "@/lib/platform";
import type { Hook } from "@/lib/types";

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
  const [hooks, setHooks] = React.useState<Hook[]>(seedHooks);
  const [query, setQuery] = React.useState("");
  const [niche, setNiche] = React.useState("all");
  const [hookType, setHookType] = React.useState("all");
  const [minViews, setMinViews] = React.useState("");
  const [sentId, setSentId] = React.useState<string | null>(null);

  const niches = React.useMemo(
    () => Array.from(new Set(seedHooks.map((h) => h.niche))).sort(),
    [],
  );
  const hookTypes = React.useMemo(
    () => Array.from(new Set(seedHooks.map((h) => h.hookType))).sort(),
    [],
  );

  const filteredHooks = hooks.filter((hook) => {
    const minViewsNum = Number(minViews) || 0;
    const matchesQuery =
      query.trim() === "" ||
      hook.hookText.toLowerCase().includes(query.toLowerCase()) ||
      hook.sourceHandle.toLowerCase().includes(query.toLowerCase());
    const matchesNiche = niche === "all" || hook.niche === niche;
    const matchesHookType = hookType === "all" || hook.hookType === hookType;
    const matchesViews = hook.views >= minViewsNum;
    return matchesQuery && matchesNiche && matchesHookType && matchesViews;
  });

  const unused = hooks.filter((h) => h.status === "unused").length;
  const used = hooks.filter((h) => h.status === "used").length;
  const nicheCount = niches.length;

  function handleUseThis(hookId: string) {
    setHooks((prev) =>
      prev.map((h) =>
        h.id === hookId && h.status === "unused" ? { ...h, status: "scheduled" } : h,
      ),
    );
    setSentId(hookId);
  }

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
        <StatCard label="Niches covered" value={String(nicheCount)} icon={Sparkles} />
      </div>

      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search hook text or creator..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={niche} onValueChange={setNiche}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Niche" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All niches</SelectItem>
            {niches.map((n) => (
              <SelectItem key={n} value={n}>
                {n}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={hookType} onValueChange={setHookType}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Hook type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All hook types</SelectItem>
            {hookTypes.map((t) => (
              <SelectItem key={t} value={t}>
                {hookTypeLabel[t]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="number"
          min={0}
          placeholder="Min views (e.g. 500000)"
          value={minViews}
          onChange={(e) => setMinViews(e.target.value)}
        />
      </div>

      {filteredHooks.length === 0 ? (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No hooks match those filters.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredHooks.map((hook) => {
            const meta = platformMeta[hook.platform];
            const Icon = meta.icon;
            const justSent = sentId === hook.id;

            return (
              <Card key={hook.id} className="flex flex-col">
                <CardHeader className="flex-row items-start justify-between gap-2 space-y-0">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon className={`size-4 ${meta.className}`} />
                    {meta.label}
                    <span aria-hidden>·</span>
                    by {hook.sourceHandle}
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
                      {hookTypeLabel[hook.hookType]}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {hook.angle}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{formatCompact(hook.views)} views at source</span>
                  <Button
                    variant={justSent ? "secondary" : "ghost"}
                    size="sm"
                    className="h-7 px-2"
                    disabled={justSent}
                    onClick={() => handleUseThis(hook.id)}
                  >
                    <Terminal className="size-3.5" />
                    {justSent ? "Sent to /script" : "Use this"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
