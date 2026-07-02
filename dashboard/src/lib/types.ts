export type Platform = "instagram" | "linkedin" | "tiktok" | "youtube" | "x" | "threads";

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
  rank: number;
  hookText: string;
  onScreenText: string;
  transcript: string;
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
  caption: string;
  script: string;
};

export type HookPotential = "high" | "medium" | "low";

export type TrendingTag = "hook potential" | "explainer" | "skip";

export type SourceType = "blog" | "x-list" | "rss";

export type TrendingSource = {
  id: string;
  name: string;
  type: SourceType;
};

export type TrendingItem = {
  id: string;
  title: string;
  summary: string;
  sourceId: string;
  publishedAt: string;
  hookPotential: HookPotential;
  tag: TrendingTag;
};
