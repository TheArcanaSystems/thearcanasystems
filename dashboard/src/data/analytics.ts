import type { DailyMetric, HeaterPost } from "@/lib/types";
import { daysAgo } from "@/data/dates";

const seedSeries = [
  { v: 42_000, s: 1_800, f: 120 },
  { v: 38_500, s: 1_600, f: 95 },
  { v: 51_200, s: 2_300, f: 180 },
  { v: 64_800, s: 3_100, f: 240 },
  { v: 59_300, s: 2_700, f: 205 },
  { v: 47_100, s: 2_000, f: 140 },
  { v: 88_400, s: 4_900, f: 410 },
  { v: 92_600, s: 5_300, f: 460 },
  { v: 71_200, s: 3_400, f: 290 },
  { v: 66_900, s: 3_000, f: 250 },
  { v: 54_300, s: 2_400, f: 175 },
  { v: 113_800, s: 7_100, f: 640 },
  { v: 97_500, s: 5_900, f: 520 },
  { v: 79_400, s: 4_200, f: 330 },
];

export const dailyMetrics: DailyMetric[] = seedSeries.map((row, i) => ({
  date: daysAgo(seedSeries.length - 1 - i),
  views: row.v,
  saves: row.s,
  follows: row.f,
}));

export const heaters: HeaterPost[] = [
  {
    id: "ht-1",
    hookId: "hk-4",
    caption: "Stop posting daily. Do this instead and watch saves triple.",
    platform: "tiktok",
    postedAt: daysAgo(6),
    views: 1_240_000,
    saves: 64_300,
    newFollows: 4_120,
    heatScore: 98,
  },
  {
    id: "ht-2",
    hookId: "hk-8",
    caption: "The algorithm isn't broken. Your first frame is.",
    platform: "instagram",
    postedAt: daysAgo(4),
    views: 612_000,
    saves: 38_900,
    newFollows: 2_640,
    heatScore: 91,
  },
  {
    id: "ht-3",
    hookId: "hk-6",
    caption: "If your reels flop in the first 3 seconds, it's never the topic.",
    platform: "youtube",
    postedAt: daysAgo(2),
    views: 388_000,
    saves: 21_400,
    newFollows: 1_510,
    heatScore: 84,
  },
  {
    id: "ht-4",
    hookId: "hk-7",
    caption: "I quit my agency to post 1 reel a day. Day 47 update.",
    platform: "tiktok",
    postedAt: daysAgo(1),
    views: 244_000,
    saves: 12_800,
    newFollows: 980,
    heatScore: 76,
  },
  {
    id: "ht-5",
    hookId: "hk-2",
    caption: "Nobody tells you this about your first 90 days as a creator.",
    platform: "instagram",
    postedAt: daysAgo(3),
    views: 198_000,
    saves: 9_300,
    newFollows: 740,
    heatScore: 69,
  },
];

export const summary = {
  views: dailyMetrics.reduce((sum, d) => sum + d.views, 0),
  saves: dailyMetrics.reduce((sum, d) => sum + d.saves, 0),
  follows: dailyMetrics.reduce((sum, d) => sum + d.follows, 0),
  viewsDeltaPct: 18.4,
  savesDeltaPct: 26.1,
  followsDeltaPct: 31.7,
  engagementRate: 7.8,
  engagementDeltaPct: 2.3,
};
