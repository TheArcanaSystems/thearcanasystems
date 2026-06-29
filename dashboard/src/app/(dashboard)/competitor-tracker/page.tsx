import { Radar, RefreshCw } from "lucide-react";

import { PageHeader } from "@/components/dashboard/page-header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { competitorReels, trackedCreators } from "@/data/competitors";
import { formatCompact, formatRelativeDate, platformMeta } from "@/lib/platform";

function initialsFromHandle(handle: string) {
  return handle.replace("@", "").slice(0, 2).toUpperCase();
}

function scrapedAgo(iso: string) {
  const hours = Math.round((Date.now() - new Date(iso).getTime()) / 36e5);
  if (hours < 24) return `Scraped ${hours}h ago`;
  return `Scraped ${Math.round(hours / 24)}d ago`;
}

export default function CompetitorTrackerPage() {
  return (
    <div>
      <PageHeader
        title="Competitor Tracker"
        description="Top reels from creators you track, scraped weekly."
        action={
          <Button variant="outline">
            <RefreshCw className="size-4" />
            Re-scrape now
          </Button>
        }
      />

      <div className="space-y-6">
        {trackedCreators.map((creator) => {
          const meta = platformMeta[creator.platform];
          const Icon = meta.icon;
          const reels = competitorReels
            .filter((r) => r.creatorId === creator.id)
            .sort((a, b) => b.views - a.views);

          return (
            <Card key={creator.id}>
              <CardHeader className="flex-row items-center justify-between gap-3 space-y-0">
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarFallback>
                      {initialsFromHandle(creator.handle)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                      {creator.handle}
                      <Icon className={`size-3.5 ${meta.className}`} />
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      {formatCompact(creator.followers)} followers · {creator.niche}
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="whitespace-nowrap text-xs">
                  {scrapedAgo(creator.lastScrapedAt)}
                </Badge>
              </CardHeader>
              <Separator />
              <CardContent className="pt-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  {reels.map((reel) => (
                    <div
                      key={reel.id}
                      className="flex gap-3 rounded-md border border-border p-3"
                    >
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
                        <Radar className="size-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {reel.hookSnippet}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {formatCompact(reel.views)} views ·{" "}
                          {formatCompact(reel.likes)} likes ·{" "}
                          {formatRelativeDate(reel.postedAt)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
