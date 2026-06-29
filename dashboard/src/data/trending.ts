import type { TrendingItem, TrendingSource } from "@/lib/types";
import { hoursAgo } from "@/data/dates";

export const sources: TrendingSource[] = [
  { id: "src-anthropic", name: "Anthropic Blog", type: "blog" },
  { id: "src-openai", name: "OpenAI Blog", type: "blog" },
  { id: "src-deepmind", name: "Google DeepMind Blog", type: "blog" },
  { id: "src-stratechery", name: "Stratechery", type: "blog" },
  { id: "src-x-creator-economy", name: "Creator Economy X List", type: "x-list" },
  { id: "src-x-ai-builders", name: "AI Builders X List", type: "x-list" },
  { id: "src-x-growth", name: "Growth Marketing X List", type: "x-list" },
  { id: "src-hn", name: "Hacker News RSS", type: "rss" },
  { id: "src-rartificial", name: "r/artificial RSS", type: "rss" },
  { id: "src-lenny", name: "Lenny's Newsletter RSS", type: "rss" },
  { id: "src-exploding-topics", name: "Exploding Topics RSS", type: "rss" },
  { id: "src-algorithm-report", name: "The Algorithm Report RSS", type: "rss" },
];

export const trendingItems: TrendingItem[] = [
  {
    id: "tr-1",
    title: "New model claims state-of-the-art reasoning at a fraction of the cost",
    summary:
      "A frontier lab released benchmarks showing a smaller model matching flagship reasoning scores, reigniting the 'efficiency beats scale' debate.",
    sourceId: "src-anthropic",
    publishedAt: hoursAgo(3),
    hookPotential: "high",
    tag: "hook potential",
  },
  {
    id: "tr-2",
    title: "Creators are using AI agents to run their entire content pipeline",
    summary:
      "From hook research to scheduling, solo creators are stitching together agents to replace small teams — a direct angle for a 'free assistant' hook.",
    sourceId: "src-openai",
    publishedAt: hoursAgo(7),
    hookPotential: "high",
    tag: "hook potential",
  },
  {
    id: "tr-3",
    title: "Major platform quietly changes how it ranks short-form video",
    summary:
      "A thread from the creator economy list claims watch-time-to-completion now outweighs raw view count — useful ammo for an 'algorithm changed' hook.",
    sourceId: "src-x-creator-economy",
    publishedAt: hoursAgo(11),
    hookPotential: "high",
    tag: "hook potential",
  },
  {
    id: "tr-4",
    title: "Open-source community ships a one-click voice cloning tool",
    summary:
      "The tool went viral on Hacker News for matching commercial voice clone quality. Useful context, but needs a strong simplification angle to land as a hook.",
    sourceId: "src-hn",
    publishedAt: hoursAgo(15),
    hookPotential: "medium",
    tag: "explainer",
  },
  {
    id: "tr-5",
    title: "Build-in-public thread breaks down a 0-to-90K reel cadence",
    summary:
      "An AI builders list thread maps the exact posting and testing cadence behind a creator's growth run — a clean 'documentary arc' hook.",
    sourceId: "src-x-ai-builders",
    publishedAt: hoursAgo(18),
    hookPotential: "medium",
    tag: "hook potential",
  },
  {
    id: "tr-6",
    title: "r/artificial debates whether AI-written hooks are getting flagged",
    summary:
      "Anecdotal thread, low signal, but worth monitoring if a platform confirms detection changes later.",
    sourceId: "src-rartificial",
    publishedAt: hoursAgo(20),
    hookPotential: "low",
    tag: "skip",
  },
  {
    id: "tr-7",
    title: "Google DeepMind rolls out on-device summarization for note-taking apps",
    summary:
      "Incremental feature update, mostly relevant to a productivity niche audience rather than broad creator content.",
    sourceId: "src-deepmind",
    publishedAt: hoursAgo(22),
    hookPotential: "medium",
    tag: "explainer",
  },
  {
    id: "tr-8",
    title: "Stratechery argues the next platform shift favors small creators",
    summary:
      "A contrarian strategy essay claiming distribution costs are collapsing — strong source material for a 'why now' business hook.",
    sourceId: "src-stratechery",
    publishedAt: hoursAgo(26),
    hookPotential: "high",
    tag: "hook potential",
  },
  {
    id: "tr-9",
    title: "Growth list thread claims daily posting is the wrong default",
    summary:
      "A growth marketing list thread argues batching hooks beats daily posting for saves — a relatable pain-point hook for solo creators.",
    sourceId: "src-x-growth",
    publishedAt: hoursAgo(29),
    hookPotential: "medium",
    tag: "hook potential",
  },
  {
    id: "tr-10",
    title: "Lenny's Newsletter breaks down creator-led growth loops",
    summary:
      "Thorough explainer on growth loops, useful for context but too dense for a punchy short-form hook without heavy simplification.",
    sourceId: "src-lenny",
    publishedAt: hoursAgo(33),
    hookPotential: "low",
    tag: "explainer",
  },
  {
    id: "tr-11",
    title: "Exploding Topics flags a micro-trend with flat search volume",
    summary:
      "Search interest looks flat week over week — low signal for a timely hook right now.",
    sourceId: "src-exploding-topics",
    publishedAt: hoursAgo(36),
    hookPotential: "low",
    tag: "skip",
  },
  {
    id: "tr-12",
    title: "The Algorithm Report covers a new benchmark for multimodal video understanding",
    summary:
      "Technical benchmark release; relevant for builders but needs a strong simplification angle to land as a hook.",
    sourceId: "src-algorithm-report",
    publishedAt: hoursAgo(40),
    hookPotential: "medium",
    tag: "explainer",
  },
];
