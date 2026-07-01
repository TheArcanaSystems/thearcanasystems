import type { ScheduledPost } from "@/lib/types";
import { daysFromNow, daysAgo } from "@/data/dates";

export const scheduledPosts: ScheduledPost[] = [
  {
    id: "sp-1",
    title: "Desktop audit carousel",
    caption:
      "I audited 50 founder desktops. The chaos is always the same 4 problems. A closer look at the research reveal angle for business systems creators. Save this — your ops problem isn't unique.",
    platforms: ["linkedin"],
    scheduledFor: daysFromNow(1),
    status: "scheduled",
    hookId: "hk-3",
  },
  {
    id: "sp-2",
    title: "M365 portal — month 6 update",
    caption:
      "I built a client portal in Microsoft 365 for $0. Month 6 update. A closer look at the documentary arc angle for business systems creators. Follow for monthly progress posts.",
    platforms: ["linkedin"],
    scheduledFor: daysFromNow(2),
    status: "scheduled",
    hookId: "hk-7",
  },
  {
    id: "sp-3",
    title: "Template launch funnel breakdown",
    caption:
      "I sold 300 templates in 30 days with zero ad spend. Here's the funnel. A closer look at the proof + funnel reveal angle for digital products creators. Comment 'FUNNEL' and I'll send you the breakdown.",
    platforms: ["instagram"],
    scheduledFor: daysFromNow(4),
    status: "draft",
    hookId: "hk-9",
  },
  {
    id: "sp-4",
    title: "CRM reframe",
    caption:
      "Your CRM isn't the problem. Your intake process is. A closer look at the reframe angle for business systems creators. Drop a 🔥 if this just described your stack.",
    platforms: ["instagram", "linkedin"],
    scheduledFor: daysAgo(1),
    status: "posted",
    hookId: "hk-6",
  },
  {
    id: "sp-5",
    title: "Spreadsheet reality check",
    caption:
      "Nobody tells you this about running a service business on spreadsheets. A closer look at the insider truth angle for business operations creators. Save this before your spreadsheet collapses again.",
    platforms: ["instagram"],
    scheduledFor: daysAgo(3),
    status: "posted",
    hookId: "hk-2",
  },
  {
    id: "sp-6",
    title: "Stop buying tools",
    caption:
      "Stop buying more tools. Build the system first. A closer look at the contrarian command angle for business operations creators. Follow for more breakdowns like this.",
    platforms: ["linkedin"],
    scheduledFor: daysAgo(5),
    status: "failed",
    hookId: "hk-4",
  },
];
