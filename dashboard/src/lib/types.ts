export type Platform = "instagram" | "tiktok" | "youtube" | "x";

export type HookType =
  | "callout"
  | "command"
  | "listicle"
  | "proof"
  | "pov"
  | "contrarian"
  | "secret"
  | "documentary";

export type Hook = {
  id: string;
  hookText: string;
  template: string;
  hookType: HookType;
  platform: Platform;
  sourceHandle: string;
  niche: string;
  angle: string;
  views: number;
  savedAt: string;
  status: "unused" | "scheduled" | "used";
};

export type Post = {
  id: string;
  hookId?: string;
  caption: string;
  platform: Platform;
  postedAt: string;
  views: number;
  saves: number;
  newFollows: number;
  popReason: string;
};

export type DailyMetric = {
  date: string;
  views: number;
  saves: number;
  follows: number;
  dms: number;
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
