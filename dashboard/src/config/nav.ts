import {
  Flame,
  LineChart,
  Radar,
  Send,
  CalendarDays,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
};

export const navItems: NavItem[] = [
  {
    title: "Hook Vault",
    href: "/hook-vault",
    icon: Sparkles,
    description: "Every viral hook you've saved, transcribed and templatized",
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: LineChart,
    description: "Views, saves, follows, and this week's heaters",
  },
  {
    title: "Competitor Tracker",
    href: "/competitor-tracker",
    icon: Radar,
    description: "Top reels from creators you track, scraped weekly",
  },
  {
    title: "Scheduler",
    href: "/scheduler",
    icon: Send,
    description: "One-click scheduling to Instagram and Threads via Zernio MCP",
  },
  {
    title: "Content Calendar",
    href: "/content-calendar",
    icon: CalendarDays,
    description: "Exact times, platforms, and hooks for everything scheduled",
  },
  {
    title: "What's Trending",
    href: "/trending",
    icon: Flame,
    description: "12 sources, auto-tagged hook potential / explainer / skip",
  },
];
