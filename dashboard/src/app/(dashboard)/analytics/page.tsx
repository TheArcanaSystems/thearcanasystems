"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Eye, Bookmark, UserPlus, Flame, TrendingUp } from "lucide-react";

import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { dailyMetrics, heaters, summary } from "@/data/analytics";
import { hooks } from "@/data/hooks";
import { formatCompact, platformMeta } from "@/lib/platform";

const chartConfig: ChartConfig = {
  views: { label: "Views", color: "var(--chart-1)" },
  saves: { label: "Saves", color: "var(--chart-2)" },
};

const chartData = dailyMetrics.map((d) => ({
  date: new Date(d.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  }),
  views: d.views,
  saves: d.saves,
}));

export default function AnalyticsPage() {
  return (
    <div>
      <PageHeader
        title="Analytics"
        description="IG views, saves, follows, and your top heaters of the week."
      />

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Views (14d)"
          value={formatCompact(summary.views)}
          deltaPct={summary.viewsDeltaPct}
          icon={Eye}
        />
        <StatCard
          label="Saves (14d)"
          value={formatCompact(summary.saves)}
          deltaPct={summary.savesDeltaPct}
          icon={Bookmark}
        />
        <StatCard
          label="New follows (14d)"
          value={formatCompact(summary.follows)}
          deltaPct={summary.followsDeltaPct}
          icon={UserPlus}
        />
        <StatCard
          label="Engagement rate"
          value={`${summary.engagementRate}%`}
          deltaPct={summary.engagementDeltaPct}
          icon={TrendingUp}
        />
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Views &amp; saves, last 14 days
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
            This week&apos;s heaters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Post</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead className="text-right">Views</TableHead>
                <TableHead className="text-right">Saves</TableHead>
                <TableHead className="text-right">New follows</TableHead>
                <TableHead className="text-right">Heat</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {heaters.map((post) => {
                const meta = platformMeta[post.platform];
                const Icon = meta.icon;
                const hook = hooks.find((h) => h.id === post.hookId);

                return (
                  <TableRow key={post.id}>
                    <TableCell className="max-w-[280px]">
                      <p className="truncate font-medium">{post.caption}</p>
                      {hook ? (
                        <p className="truncate text-xs text-muted-foreground">
                          via {hook.sourceHandle}
                        </p>
                      ) : null}
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
                      {formatCompact(post.saves)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCompact(post.newFollows)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge className="bg-primary/15 text-primary">
                        {post.heatScore}
                      </Badge>
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
