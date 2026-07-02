"use client";

import { AtSign, Flame, Mail, Newspaper, Rss, SkipForward, Wand2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { PageHeader } from "@/components/dashboard/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { sources, trendingItems } from "@/data/trending";
import { nextDailyRun, formatRunTime } from "@/lib/schedule";
import { cn } from "@/lib/utils";
import type { SourceType, TrendingTag } from "@/lib/types";

const sourceTypeIcon: Record<SourceType, typeof Newspaper> = {
  blog: Newspaper,
  "x-list": AtSign,
  rss: Rss,
};

const sourceTypeLabel: Record<SourceType, string> = {
  blog: "Blog",
  "x-list": "X list",
  rss: "RSS feed",
};

const tagStyles: Record<TrendingTag, string> = {
  "hook potential": "bg-primary/15 text-primary",
  explainer: "bg-amber-500/15 text-amber-400",
  skip: "bg-muted text-muted-foreground",
};

const tagIcon: Record<TrendingTag, typeof Flame> = {
  "hook potential": Flame,
  explainer: Newspaper,
  skip: SkipForward,
};

const sourceById = new Map(sources.map((s) => [s.id, s]));

function hoursAgoLabel(iso: string) {
  const hours = Math.round((Date.now() - new Date(iso).getTime()) / 36e5);
  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}

export default function TrendingPage() {
  const router = useRouter();
  const byRecency = [...trendingItems].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const topHooks = byRecency.filter((item) => item.tag === "hook potential").slice(0, 5);
  const nextDigest = nextDailyRun(7);

  return (
    <div>
      <PageHeader
        title="What's Trending"
        description="Pulled daily from 12 sources, auto-tagged hook potential / explainer / skip."
        action={
          <Badge variant="outline" className="gap-1.5">
            <Mail className="size-3.5" />
            Next digest: {formatRunTime(nextDigest)}
          </Badge>
        }
      />

      <Card className="mb-6">
        <CardContent className="grid gap-3 pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {sources.map((source) => {
            const Icon = sourceTypeIcon[source.type];
            return (
              <div
                key={source.id}
                className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm"
              >
                <Icon className="size-3.5 shrink-0 text-muted-foreground" />
                <span className="min-w-0 flex-1 truncate">{source.name}</span>
                <Badge variant="secondary" className="shrink-0 text-[10px]">
                  {sourceTypeLabel[source.type]}
                </Badge>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold">
        <Flame className="size-4 text-primary" />
        Top 5 hook-worthy, sorted by recency
      </h2>
      <div className="mb-8 grid gap-4 lg:grid-cols-2">
        {topHooks.map((item) => {
          const source = sourceById.get(item.sourceId)!;
          return (
            <Card key={item.id} className="flex flex-col border-primary/30">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {source.name}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {hoursAgoLabel(item.publishedAt)}
                  </span>
                </div>
                <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">{item.summary}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <span
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                    tagStyles[item.tag]
                  )}
                >
                  <Flame className="size-3.5" />
                  Hook potential
                </span>
                <Button variant="ghost" size="sm" className="h-7 px-2" onClick={() => router.push("/hook-vault")}>
                  <Wand2 className="size-3.5" />
                  Draft hook
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <h2 className="mb-3 text-sm font-semibold">All items today</h2>
      <div className="grid gap-4 lg:grid-cols-2">
        {byRecency.map((item) => {
          const source = sourceById.get(item.sourceId)!;
          const TagIcon = tagIcon[item.tag];
          return (
            <Card key={item.id} className="flex flex-col">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {source.name}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {hoursAgoLabel(item.publishedAt)}
                  </span>
                </div>
                <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">{item.summary}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <span
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium capitalize",
                    tagStyles[item.tag]
                  )}
                >
                  <TagIcon className="size-3.5" />
                  {item.tag}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2"
                  disabled={item.tag === "skip"}
                  onClick={() => router.push("/hook-vault")}
                >
                  <Wand2 className="size-3.5" />
                  Draft hook
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
