"use client";

import * as React from "react";
import {
  Bookmark,
  BookmarkCheck,
  CalendarClock,
  FileText,
  RefreshCw,
  Trophy,
  Users,
} from "lucide-react";

import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { competitorReels, trackedCreators } from "@/data/competitors";
import { formatCompact, formatRelativeDate, platformMeta } from "@/lib/platform";
import { formatRunTime, nextWeeklyRun } from "@/lib/schedule";

function initialsFromHandle(handle: string) {
  return handle.replace("@", "").slice(0, 2).toUpperCase();
}

function scrapedAgo(iso: string) {
  const hours = Math.round((Date.now() - new Date(iso).getTime()) / 36e5);
  if (hours < 24) return `Scraped ${hours}h ago`;
  return `Scraped ${Math.round(hours / 24)}d ago`;
}

const creatorById = new Map(trackedCreators.map((c) => [c.id, c]));

export default function CompetitorTrackerPage() {
  const [savedIds, setSavedIds] = React.useState<Set<string>>(new Set());

  const reelsByViews = [...competitorReels].sort((a, b) => b.views - a.views);
  const nextScrape = nextWeeklyRun(0, 6);

  function handleSave(reelId: string) {
    setSavedIds((prev) => new Set(prev).add(reelId));
  }

  return (
    <div>
      <PageHeader
        title="Competitor Tracker"
        description="Top 5 reels from every account you follow, scraped and transcribed every Sunday at 6:00 AM."
        action={
          <Button variant="outline">
            <RefreshCw className="size-4" />
            Re-scrape now
          </Button>
        }
      />

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Accounts tracked"
          value={String(trackedCreators.length)}
          icon={Users}
        />
        <StatCard
          label="Reels scraped this week"
          value={String(competitorReels.length)}
          icon={FileText}
        />
        <StatCard
          label="Top view count"
          value={formatCompact(reelsByViews[0].views)}
          icon={Trophy}
        />
        <StatCard
          label="Next scrape"
          value={formatRunTime(nextScrape)}
          icon={CalendarClock}
        />
      </div>

      <Card className="mb-6">
        <CardContent className="grid gap-3 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {trackedCreators.map((creator) => {
            const meta = platformMeta[creator.platform];
            const Icon = meta.icon;
            return (
              <div
                key={creator.id}
                className="flex items-start gap-3 rounded-md border border-border p-3"
              >
                <Avatar className="size-9 shrink-0">
                  <AvatarFallback className="text-xs">
                    {initialsFromHandle(creator.handle)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-1.5 truncate text-sm font-medium">
                    {creator.handle}
                    <Icon className={`size-3.5 shrink-0 ${meta.className}`} />
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {formatCompact(creator.followers)} followers · {creator.niche}
                  </p>
                  <Badge variant="secondary" className="mt-1.5 whitespace-nowrap text-xs">
                    {scrapedAgo(creator.lastScrapedAt)}
                  </Badge>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reel</TableHead>
                <TableHead>Creator</TableHead>
                <TableHead className="text-right">Followers</TableHead>
                <TableHead className="text-right">Views</TableHead>
                <TableHead className="text-right">Posted</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reelsByViews.map((reel) => {
                const creator = creatorById.get(reel.creatorId)!;
                const meta = platformMeta[creator.platform];
                const Icon = meta.icon;
                const saved = savedIds.has(reel.id);

                return (
                  <TableRow key={reel.id}>
                    <TableCell className="max-w-[320px]">
                      <p className="truncate font-medium">{reel.hookText}</p>
                      <p className="mt-0.5 truncate text-xs text-muted-foreground">
                        On-screen: &ldquo;{reel.onScreenText}&rdquo;
                      </p>
                    </TableCell>
                    <TableCell>
                      <span className="flex items-center gap-1.5 text-sm">
                        {creator.handle}
                        <Icon className={`size-3.5 ${meta.className}`} />
                      </span>
                    </TableCell>
                    <TableCell className="text-right text-sm text-muted-foreground">
                      {formatCompact(creator.followers)}
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {formatCompact(reel.views)}
                    </TableCell>
                    <TableCell className="text-right text-xs text-muted-foreground">
                      {formatRelativeDate(reel.postedAt)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-7 px-2">
                              <FileText className="size-3.5" />
                              <span className="sr-only">View transcript</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-2">
                                {creator.handle}
                                <Icon className={`size-4 ${meta.className}`} />
                              </DialogTitle>
                              <DialogDescription>
                                {formatCompact(reel.views)} views ·{" "}
                                {formatRelativeDate(reel.postedAt)}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-3 text-sm">
                              <p className="font-medium leading-snug">
                                &ldquo;{reel.hookText}&rdquo;
                              </p>
                              <p className="rounded-md bg-muted px-3 py-2 text-xs text-muted-foreground">
                                On-screen text: &ldquo;{reel.onScreenText}&rdquo;
                              </p>
                              <div>
                                <p className="mb-1 text-xs font-medium text-muted-foreground">
                                  Transcript
                                </p>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {reel.transcript}
                                </p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant={saved ? "secondary" : "outline"}
                          size="sm"
                          className="h-7 px-2"
                          disabled={saved}
                          onClick={() => handleSave(reel.id)}
                        >
                          {saved ? (
                            <BookmarkCheck className="size-3.5" />
                          ) : (
                            <Bookmark className="size-3.5" />
                          )}
                          {saved ? "Saved" : "Save to Hook Vault"}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
