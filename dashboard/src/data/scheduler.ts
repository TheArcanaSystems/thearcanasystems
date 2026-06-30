import type { ScheduledPost } from "@/lib/types";
import { daysFromNow, daysAgo } from "@/data/dates";

export const scheduledPosts: ScheduledPost[] = [
  {
    id: "sp-1",
    title: "Hook formula breakdown",
    caption:
      "I audited 100 reels. The hook pattern that won every time: front-load the result, withhold the method, cut on the third word. A closer look at the research flex angle for content strategy creators. Save this before it disappears from your feed.",
    platforms: ["instagram", "threads"],
    scheduledFor: daysFromNow(1),
    status: "scheduled",
    hookId: "hk-3",
  },
  {
    id: "sp-2",
    title: "Day 47 founder update",
    caption:
      "I quit my agency to post 1 reel a day. Day 47 update: 0 to 94K. A closer look at the documentary arc angle for founder journey creators. Follow for more breakdowns like this.",
    platforms: ["threads"],
    scheduledFor: daysFromNow(2),
    status: "scheduled",
    hookId: "hk-7",
  },
  {
    id: "sp-3",
    title: "Caption formula carousel",
    caption:
      "This is the exact caption formula that got me 40,000 saves. A closer look at the proof + template angle for copywriting creators. Comment \"SEND\" and I'll DM you the template.",
    platforms: ["instagram"],
    scheduledFor: daysFromNow(4),
    status: "draft",
    hookId: "hk-5",
  },
  {
    id: "sp-4",
    title: "Algorithm myth-bust",
    caption:
      "The algorithm isn't broken. Your first frame is. A closer look at the reframe angle for content strategy creators. Drop a 🔥 if you're trying this on your next post.",
    platforms: ["instagram", "threads"],
    scheduledFor: daysAgo(1),
    status: "posted",
    hookId: "hk-8",
  },
  {
    id: "sp-5",
    title: "90-day creator reality check",
    caption:
      "Nobody tells you this about your first 90 days as a creator. A closer look at the insider secret angle for creator economy creators. Share this with the creator who needs to hear it.",
    platforms: ["instagram"],
    scheduledFor: daysAgo(3),
    status: "posted",
    hookId: "hk-2",
  },
  {
    id: "sp-6",
    title: "Stop posting daily teardown",
    caption:
      "Stop posting daily. Do this instead and watch saves triple. A closer look at the contrarian angle for social strategy creators. Follow for more breakdowns like this.",
    platforms: ["threads"],
    scheduledFor: daysAgo(5),
    status: "failed",
    hookId: "hk-4",
  },
];
