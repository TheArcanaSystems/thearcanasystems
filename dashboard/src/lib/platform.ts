import { Camera, Clapperboard, Music2, X, type LucideIcon } from "lucide-react";

import type { Platform } from "@/lib/types";

// lucide-react dropped trademarked brand glyphs (Instagram/Youtube/Twitter) for
// licensing reasons, so platforms are represented with neutral icons + brand color.
export const platformMeta: Record<
  Platform,
  { label: string; icon: LucideIcon; className: string }
> = {
  instagram: {
    label: "Instagram",
    icon: Camera,
    className: "text-pink-400",
  },
  tiktok: {
    label: "TikTok",
    icon: Music2,
    className: "text-teal-300",
  },
  youtube: {
    label: "YouTube",
    icon: Clapperboard,
    className: "text-red-400",
  },
  x: {
    label: "X",
    icon: X,
    className: "text-sky-300",
  },
};

export function formatCompact(n: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(n);
}

export function formatRelativeDate(iso: string) {
  const date = new Date(iso);
  const diffMs = date.getTime() - Date.now();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays === -1) return "Yesterday";
  if (diffDays > 0) return `In ${diffDays}d`;
  return `${Math.abs(diffDays)}d ago`;
}
