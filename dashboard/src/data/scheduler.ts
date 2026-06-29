import type { ScheduledPost } from "@/lib/types";
import { daysFromNow, daysAgo } from "@/data/dates";

export const scheduledPosts: ScheduledPost[] = [
  {
    id: "sp-1",
    title: "Hook formula breakdown",
    caption:
      "I audited 100 reels. The hook pattern that won every time: front-load the result, withhold the method, cut on the third word. Save this for your next script. #contentstrategy #creatoreconomy",
    platforms: ["instagram", "tiktok"],
    scheduledFor: daysFromNow(1),
    status: "scheduled",
    hookId: "hk-3",
  },
  {
    id: "sp-2",
    title: "Day 47 founder update",
    caption:
      "I quit my agency to post 1 reel a day. Day 47 update: 0 to 94K, here's the exact posting cadence that got me here. #founderjourney",
    platforms: ["tiktok", "youtube"],
    scheduledFor: daysFromNow(2),
    status: "scheduled",
    hookId: "hk-7",
  },
  {
    id: "sp-3",
    title: "Caption formula carousel",
    caption:
      "This is the exact caption formula that got me 40,000 saves. Swipe for the 4-part structure you can copy today. #copywriting",
    platforms: ["instagram"],
    scheduledFor: daysFromNow(4),
    status: "draft",
    hookId: "hk-5",
  },
  {
    id: "sp-4",
    title: "Algorithm myth-bust",
    caption:
      "The algorithm isn't broken. Your first frame is. Three fixes that doubled my average view duration this month.",
    platforms: ["instagram", "tiktok", "youtube"],
    scheduledFor: daysAgo(1),
    status: "posted",
    hookId: "hk-8",
  },
  {
    id: "sp-5",
    title: "90-day creator reality check",
    caption:
      "Nobody tells you this about your first 90 days as a creator. A breakdown of what actually moves the needle vs. what's noise.",
    platforms: ["instagram"],
    scheduledFor: daysAgo(3),
    status: "posted",
    hookId: "hk-2",
  },
  {
    id: "sp-6",
    title: "X thread: hook teardown",
    caption:
      "Stop posting daily. Do this instead and watch saves triple — a 6-tweet teardown of the strategy.",
    platforms: ["x"],
    scheduledFor: daysAgo(5),
    status: "failed",
    hookId: "hk-4",
  },
];
