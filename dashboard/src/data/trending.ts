import type { TrendingItem } from "@/lib/types";
import { hoursAgo } from "@/data/dates";

export const sources = [
  "TechCrunch",
  "The Verge",
  "Ars Technica",
  "Hacker News",
  "Anthropic Blog",
  "OpenAI Blog",
  "Google AI Blog",
  "MIT Tech Review",
  "Stratechery",
  "Platformer",
  "The Information",
  "r/artificial",
];

export const trendingItems: TrendingItem[] = [
  {
    id: "tr-1",
    title: "New model claims state-of-the-art reasoning at a fraction of the cost",
    summary:
      "A frontier lab released benchmarks showing a smaller model matching flagship reasoning scores, reigniting the 'efficiency beats scale' debate.",
    source: "TechCrunch",
    publishedAt: hoursAgo(3),
    hookPotential: "high",
    tags: ["model release", "cost", "benchmarks"],
  },
  {
    id: "tr-2",
    title: "Creators are using AI agents to run their entire content pipeline",
    summary:
      "From hook research to scheduling, solo creators are stitching together agents to replace small teams — a direct angle for a 'free assistant' hook.",
    source: "The Verge",
    publishedAt: hoursAgo(7),
    hookPotential: "high",
    tags: ["creator economy", "agents", "automation"],
  },
  {
    id: "tr-3",
    title: "Major platform quietly changes how it ranks short-form video",
    summary:
      "Leaked internal docs suggest watch-time-to-completion now outweighs raw view count — useful ammo for an 'algorithm changed' hook.",
    source: "The Information",
    publishedAt: hoursAgo(11),
    hookPotential: "high",
    tags: ["algorithm", "ranking", "short-form"],
  },
  {
    id: "tr-4",
    title: "Open-source community ships a one-click voice cloning tool",
    summary:
      "The tool went viral on Hacker News for matching commercial voice clone quality. Ethically fraught, but a strong 'this is now possible' hook.",
    source: "Hacker News",
    publishedAt: hoursAgo(15),
    hookPotential: "medium",
    tags: ["open source", "voice", "tools"],
  },
  {
    id: "tr-5",
    title: "Anthropic publishes research on long-horizon agent reliability",
    summary:
      "New research digs into why agents drift on long tasks. Dense, but the headline stat is a clean 'X% failure after Y steps' hook.",
    source: "Anthropic Blog",
    publishedAt: hoursAgo(18),
    hookPotential: "medium",
    tags: ["research", "agents", "reliability"],
  },
  {
    id: "tr-6",
    title: "OpenAI expands usage limits for a popular consumer feature",
    summary:
      "A quiet limit increase is already driving comparison threads online — good fodder for a 'before vs after' creator hook.",
    source: "OpenAI Blog",
    publishedAt: hoursAgo(20),
    hookPotential: "medium",
    tags: ["product update", "limits"],
  },
  {
    id: "tr-7",
    title: "Google AI rolls out on-device summarization for note-taking apps",
    summary:
      "Incremental feature update, mostly relevant to a productivity niche audience rather than broad creator content.",
    source: "Google AI Blog",
    publishedAt: hoursAgo(22),
    hookPotential: "low",
    tags: ["on-device", "productivity"],
  },
  {
    id: "tr-8",
    title: "MIT review breaks down the energy cost of training frontier models",
    summary:
      "Thorough explainer, useful for context but too dense for a punchy short-form hook without heavy simplification.",
    source: "MIT Tech Review",
    publishedAt: hoursAgo(26),
    hookPotential: "low",
    tags: ["energy", "training", "explainer"],
  },
  {
    id: "tr-9",
    title: "Stratechery argues the next platform shift favors small creators",
    summary:
      "A contrarian strategy essay claiming distribution costs are collapsing — strong source material for a 'why now' business hook.",
    source: "Stratechery",
    publishedAt: hoursAgo(29),
    hookPotential: "high",
    tags: ["strategy", "distribution", "creator economy"],
  },
  {
    id: "tr-10",
    title: "Platformer reports on creator burnout tied to posting cadence",
    summary:
      "Survey data on daily-posting fatigue — a relatable pain-point hook for anyone managing a content calendar solo.",
    source: "Platformer",
    publishedAt: hoursAgo(33),
    hookPotential: "medium",
    tags: ["burnout", "survey", "cadence"],
  },
  {
    id: "tr-11",
    title: "r/artificial debates whether AI-written hooks are getting flagged",
    summary:
      "Anecdotal thread, low signal, but worth monitoring if a platform confirms detection changes later.",
    source: "r/artificial",
    publishedAt: hoursAgo(36),
    hookPotential: "low",
    tags: ["detection", "discussion"],
  },
  {
    id: "tr-12",
    title: "Ars Technica covers a new benchmark for multimodal video understanding",
    summary:
      "Technical benchmark release; relevant for builders but needs a strong simplification angle to land as a hook.",
    source: "Ars Technica",
    publishedAt: hoursAgo(40),
    hookPotential: "low",
    tags: ["benchmarks", "multimodal"],
  },
];
