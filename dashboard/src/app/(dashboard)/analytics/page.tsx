"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Eye, Bookmark, UserPlus, MessageCircle, Flame } from "lucide-react";

import { PageHeader } from "@/components/dashboard/page-header";
import { MetricCard } from "@/components/dashboard/metric-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { dailyMetrics, posts } from "@/data/analytics";
import { findHeaters, getMedianViews } from "@/lib/heaters";
import { summarize } from "@/lib/metrics";
import { formatCompact, platformMeta } from "@/lib/platform";

const WINDOWS = [
  { value: "7", label: "7d" },
  { value: "30", label: "30d" },
  { value: "90", label: "90d" },
] as const;

const chartConfig: ChartConfig = {
  views: { label: "Views", color: "var(--chart-1)" },
  saves: { label: "Saves", color: "var(--chart-2)" },
};

const medianViews = getMedianViews(posts, 30);
const heaters = findHeaters(posts, 30, 2).slice(0, 5);

export default function AnalyticsPage() {
  const [windowDays, setWindowDays] = React.useState<"7" | "30" | "90">("30");
  const days = Number(windowDays);

  const windowMetrics = dailyMetrics.slice(-days);
  const summary = summarize(dailyMetrics, days);

  const chartData = windowMetrics.map((d) => ({
    date: new Date(d.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    views: d.views,
    saves: d.saves,
  }));

  return (
    <div>
      <PageHeader
        title="Analytics"
        description="IG views, saves, follows, and DM volume — plus your top heaters."
        action={
          <Tabs value={windowDays} onValueChange={(v) => setWindowDays(v as "7" | "30" | "90")}>
            <TabsList>
              {WINDOWS.map((w) => (
                <TabsTrigger key={w.value} value={w.value}>
                  {w.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        }
      />

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          label={`Views (${windowDays}d)`}
          value={formatCompact(summary.views)}
          deltaPct={summary.viewsDeltaPct}
          icon={Eye}
          sparklineId="views"
          sparklineData={windowMetrics.map((d) => ({ value: d.views }))}
          color="var(--chart-1)"
        />
        <MetricCard
          label={`Saves (${windowDays}d)`}
          value={formatCompact(summary.saves)}
          deltaPct={summary.savesDeltaPct}
          icon={Bookmark}
          sparklineId="saves"
          sparklineData={windowMetrics.map((d) => ({ value: d.saves }))}
          color="var(--chart-2)"
        />
        <MetricCard
          label={`New follows (${windowDays}d)`}
          value={formatCompact(summary.follows)}
          deltaPct={summary.followsDeltaPct}
          icon={UserPlus}
          sparklineId="follows"
          sparklineData={windowMetrics.map((d) => ({ value: d.follows }))}
          color="var(--chart-3)"
        />
        <MetricCard
          label={`DM volume (${windowDays}d)`}
          value={formatCompact(summary.dms)}
          deltaPct={summary.dmsDeltaPct}
          icon={MessageCircle}
          sparklineId="dms"
          sparklineData={windowMetrics.map((d) => ({ value: d.dms }))}
          color="var(--chart-4)"
        />
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Views &amp; saves, last {windowDays} days
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[260px] w-full">
            <AreaChart data={chartData} margin={{ left: -16, right: 8 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={24}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-views)" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="var(--color-views)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="fillSaves" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-saves)" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="var(--color-saves)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                dataKey="views"
                type="monotone"
                fill="url(#fillViews)"
                stroke="var(--color-views)"
                strokeWidth={2}
              />
              <Area
                dataKey="saves"
                type="monotone"
                fill="url(#fillSaves)"
                stroke="var(--color-saves)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm font-medium">
            <Flame className="size-4 text-primary" />
            Heaters — 2x+ your 30-day median ({formatCompact(medianViews)} views)
          </CardTitle>
        </CardHeader>
        <CardContent>
          {heaters.length === 0 ? (
            <p className="py-6 text-center text-sm text-muted-foreground">
              No posts have cleared 2x the 30-day median yet.
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Post</TableHead>
                  <TableHead>Platform</TableHead>
                  <TableHead className="text-right">Views</TableHead>
                  <TableHead className="text-right">vs median</TableHead>
                  <TableHead>Why it popped</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {heaters.map((post) => {
                  const meta = platformMeta[post.platform];
                  const Icon = meta.icon;

                  return (
                    <TableRow key={post.id}>
                      <TableCell className="max-w-[220px]">
                        <p className="truncate font-medium">{post.caption}</p>
                      </TableCell>
                      <TableCell>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Icon className={`size-3.5 ${meta.className}`} />
                          {meta.label}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCompact(post.views)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge className="bg-primary/15 text-primary">
                          {post.multiplier.toFixed(1)}x
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-[320px] whitespace-normal text-sm text-muted-foreground">
                        {post.popReason}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
