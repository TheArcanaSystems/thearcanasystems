import { Flame, Newspaper, Wand2 } from "lucide-react";

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
import { cn } from "@/lib/utils";
import type { HookPotential } from "@/lib/types";

const potentialStyles: Record<HookPotential, string> = {
  high: "bg-primary/15 text-primary",
  medium: "bg-amber-500/15 text-amber-400",
  low: "bg-muted text-muted-foreground",
};

const potentialLabel: Record<HookPotential, string> = {
  high: "High hook potential",
  medium: "Medium hook potential",
  low: "Low hook potential",
};

function hoursAgoLabel(iso: string) {
  const hours = Math.round((Date.now() - new Date(iso).getTime()) / 36e5);
  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}

export default function TrendingPage() {
  const sorted = [...trendingItems].sort(
    (a, b) =>
      ({ high: 0, medium: 1, low: 2 } as const)[a.hookPotential] -
      ({ high: 0, medium: 1, low: 2 } as const)[b.hookPotential]
  );

  return (
    <div>
      <PageHeader
        title="What's Trending"
        description="AI news from 12 sources, tagged for hook potential."
      />

      <Card className="mb-6">
        <CardContent className="flex flex-wrap items-center gap-2 py-4">
          <Newspaper className="size-4 shrink-0 text-muted-foreground" />
          <span className="mr-1 text-xs text-muted-foreground">
            Monitoring {sources.length} sources:
          </span>
          {sources.map((source) => (
            <Badge key={source} variant="outline" className="text-xs">
              {source}
            </Badge>
          ))}
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        {sorted.map((item) => (
          <Card key={item.id} className="flex flex-col">
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <Badge variant="secondary" className="text-xs">
                  {item.source}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {hoursAgoLabel(item.publishedAt)}
                </span>
              </div>
              <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
            </CardHeader>
            <CardContent className="flex-1 space-y-3">
              <p className="text-sm text-muted-foreground">{item.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <span
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                  potentialStyles[item.hookPotential]
                )}
              >
                <Flame className="size-3.5" />
                {potentialLabel[item.hookPotential]}
              </span>
              <Button variant="ghost" size="sm" className="h-7 px-2">
                <Wand2 className="size-3.5" />
                Draft hook
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
