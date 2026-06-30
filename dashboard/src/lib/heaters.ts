import type { Post } from "@/lib/types";

export type Heater = Post & { multiplier: number };

function median(nums: number[]): number {
  if (nums.length === 0) return 0;
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

function postsInWindow(posts: Post[], windowDays: number): Post[] {
  const cutoff = Date.now() - windowDays * 24 * 60 * 60 * 1000;
  return posts.filter((p) => new Date(p.postedAt).getTime() >= cutoff);
}

export function getMedianViews(posts: Post[], windowDays = 30): number {
  return median(postsInWindow(posts, windowDays).map((p) => p.views));
}

export function findHeaters(
  posts: Post[],
  windowDays = 30,
  multiplierThreshold = 2,
): Heater[] {
  const windowPosts = postsInWindow(posts, windowDays);
  const medianViews = median(windowPosts.map((p) => p.views));
  if (medianViews === 0) return [];

  return windowPosts
    .filter((p) => p.views >= medianViews * multiplierThreshold)
    .map((p) => ({ ...p, multiplier: p.views / medianViews }))
    .sort((a, b) => b.views - a.views);
}
