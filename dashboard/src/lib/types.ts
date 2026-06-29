export type Platform = "instagram" | "tiktok" | "youtube" | "x";

export type Hook = {
  id: string;
  hookText: string;
  template: string;
  platform: Platform;
  sourceHandle: string;
  niche: string;
  angle: string;
  views: number;
  savedAt: string;
  status: "unused" | "scheduled" | "used";
};

export type HeaterPost = {
  id: string;
  hookId: string;
  caption: string;
  platform: Platform;
  postedAt: string;
  views: number;
  saves: number;
  newFollows: number;
  heatScore: number;
};

export type DailyMetric = {
  date: string;
  views: number;
  saves: number;
  follows: number;
};

export type TrackedCreator = {
  id: string;
  handle: string;
  platform: Platform;
  niche: string;
  followers: number;
  lastScrapedAt: string;
};

export type CompetitorReel = {
  id: string;
  creatorId: string;
  caption: string;
  hookSnippet: string;
  views: number;
  likes: number;
  postedAt: string;
};

export type ScheduledPost = {
  id: string;
  title: string;
  caption: string;
  platforms: Platform[];
  scheduledFor: string;
  status: "draft" | "scheduled" | "posted" | "failed";
  hookId?: string;
};

export type CalendarEntry = {
  id: string;
  date: string;
  hookText: string;
  angle: string;
  platform: Platform;
  source: "/script" | "manual";
};

export type HookPotential = "high" | "medium" | "low";

export type TrendingItem = {
  id: string;
  title: string;
  summary: string;
  source: string;
  publishedAt: string;
  hookPotential: HookPotential;
  tags: string[];
};
