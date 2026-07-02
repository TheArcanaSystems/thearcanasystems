import type { TrendingItem, TrendingSource } from "@/lib/types";
import { hoursAgo } from "@/data/dates";

export const sources: TrendingSource[] = [
  { id: "src-hbr", name: "HBR IdeaCast", type: "blog" },
  { id: "src-inc", name: "Inc. Magazine", type: "blog" },
  { id: "src-lenny", name: "Lenny's Newsletter", type: "blog" },
  { id: "src-amy", name: "Amy Porterfield Blog", type: "blog" },
  { id: "src-x-founders-ops", name: "Founders Ops X List", type: "x-list" },
  { id: "src-x-digital-products", name: "Digital Products X List", type: "x-list" },
  { id: "src-x-m365", name: "Microsoft 365 Creators X List", type: "x-list" },
  { id: "src-entrepreneur", name: "r/Entrepreneur RSS", type: "rss" },
  { id: "src-indiehackers", name: "Indie Hackers RSS", type: "rss" },
  { id: "src-producthunt", name: "Product Hunt RSS", type: "rss" },
  { id: "src-exploding", name: "Exploding Topics RSS", type: "rss" },
  { id: "src-hustle", name: "The Hustle RSS", type: "rss" },
];

export const trendingItems: TrendingItem[] = [
  {
    id: "tr-1",
    title: "LinkedIn's algorithm now heavily favors document carousels over text posts",
    summary:
      "Multiple B2B creators reporting 3-5x reach on PDF carousels vs. plain text this month — strong angle for a 'here's what's actually working on LinkedIn' hook.",
    sourceId: "src-x-founders-ops",
    publishedAt: hoursAgo(3),
    hookPotential: "high",
    tag: "hook potential",
  },
  {
    id: "tr-2",
    title: "Founders running on inboxes and spreadsheets are the fastest-growing segment buying SOPs",
    summary:
      "Inc. reports a spike in demand for pre-built SOP templates from small service businesses — direct validation for the 'stop winging your process' content angle.",
    sourceId: "src-inc",
    publishedAt: hoursAgo(7),
    hookPotential: "high",
    tag: "hook potential",
  },
  {
    id: "tr-3",
    title: "Digital product revenue hit a new ceiling: $1K/month template shops are everywhere now",
    summary:
      "Indie Hackers thread maps the exact funnel behind a wave of $1K/month template businesses — strong source material for a 'here's the playbook' proof hook.",
    sourceId: "src-indiehackers",
    publishedAt: hoursAgo(11),
    hookPotential: "high",
    tag: "hook potential",
  },
  {
    id: "tr-4",
    title: "Microsoft 365 Copilot now available to all Business Basic subscribers",
    summary:
      "Copilot dropped to the $6/month tier — relevant context for the M365-as-a-business-OS angle, but needs a strong 'here's what this actually means for your workflow' frame to land as a hook.",
    sourceId: "src-x-m365",
    publishedAt: hoursAgo(15),
    hookPotential: "medium",
    tag: "explainer",
  },
  {
    id: "tr-5",
    title: "Amy Porterfield breaks down the exact launch sequence behind a $2M digital product",
    summary:
      "Step-by-step breakdown of a digital product launch — clean 'documentary arc' hook opportunity around the pre-launch content system specifically.",
    sourceId: "src-amy",
    publishedAt: hoursAgo(18),
    hookPotential: "high",
    tag: "hook potential",
  },
  {
    id: "tr-6",
    title: "r/Entrepreneur debates whether Notion or Microsoft 365 is better for a solo service business",
    summary:
      "Low-signal thread, heavy on personal preference rather than systems thinking. Worth monitoring if it surfaces a recurring objection to address in content.",
    sourceId: "src-entrepreneur",
    publishedAt: hoursAgo(20),
    hookPotential: "low",
    tag: "skip",
  },
  {
    id: "tr-7",
    title: "HBR: the hidden cost of context-switching in small service businesses",
    summary:
      "Research-backed piece on how fragmented tools cost founders 2+ hours a day — strong explainer source, needs heavy simplification to land as a short-form hook.",
    sourceId: "src-hbr",
    publishedAt: hoursAgo(22),
    hookPotential: "medium",
    tag: "explainer",
  },
  {
    id: "tr-8",
    title: "Lenny's Newsletter: why the best B2B content right now shows the system, not the result",
    summary:
      "Contrarian strategy essay arguing that 'here's my result' content is saturated and 'here's the exact system' content is what's compounding — strong source for a content philosophy hook.",
    sourceId: "src-lenny",
    publishedAt: hoursAgo(26),
    hookPotential: "high",
    tag: "hook potential",
  },
  {
    id: "tr-9",
    title: "Product Hunt: a new intake automation tool for service businesses tops the charts",
    summary:
      "A new tool automates client intake from form to CRM to onboarding email in one step. Useful context for validating the pain point, but the tool itself isn't a hook — the problem it solves is.",
    sourceId: "src-producthunt",
    publishedAt: hoursAgo(29),
    hookPotential: "medium",
    tag: "hook potential",
  },
  {
    id: "tr-10",
    title: "Instagram quietly increased reach for carousel posts with 7+ slides",
    summary:
      "Multiple digital product creators on the Digital Products X List are reporting higher-than-usual reach on long carousels this week — worth testing, but early signal only.",
    sourceId: "src-x-digital-products",
    publishedAt: hoursAgo(33),
    hookPotential: "medium",
    tag: "explainer",
  },
  {
    id: "tr-11",
    title: "Exploding Topics: 'business operating system' searches up 340% year over year",
    summary:
      "Search interest is compounding fast — but the keyword is still vague enough that most searchers are in the awareness phase, not ready to buy. Better for top-of-funnel LinkedIn content than a direct offer hook.",
    sourceId: "src-exploding",
    publishedAt: hoursAgo(36),
    hookPotential: "low",
    tag: "skip",
  },
  {
    id: "tr-12",
    title: "The Hustle: solo consultants who built internal portals are retaining clients 40% longer",
    summary:
      "Data point from a Hustle survey on B2B retention — strong proof hook anchor: 'I built a client portal and retention went up. Here's the exact setup.'",
    sourceId: "src-hustle",
    publishedAt: hoursAgo(40),
    hookPotential: "high",
    tag: "hook potential",
  },
];
