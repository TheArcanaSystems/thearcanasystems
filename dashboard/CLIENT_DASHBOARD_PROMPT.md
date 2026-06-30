# Reusable prompt: build a Creator OS dashboard for a new client

Copy the block below into Claude, filling in the bracketed placeholders.
It reproduces the same six-page content dashboard built for `@tenfoldmarc`
in this repo — Next.js app, mocked data seam, Arcana Systems brand theme —
scoped to a new client. Hand a Next.js 16 + Tailwind v4 + shadcn/ui repo
(or an empty one) as the working directory before running it.

---

```
Build a 6-page content-creator dashboard called "[CLIENT_HANDLE] Creator OS"
for the creator/brand @[CLIENT_HANDLE] (niche: [NICHE]). This is a white-label
build on The Arcana Systems' Creator OS product — same architecture and scope
as our reference build, re-skinned and re-scoped for this client.

Stack: Next.js 16 (App Router, Turbopack, TypeScript, src/ dir), Tailwind CSS
v4 (CSS-variable theme via @theme inline in globals.css, no tailwind.config.*),
shadcn/ui ("new-york" style, hand-written if the CLI registry is unreachable),
next-themes (dark default), recharts for the one chart, lucide-react for icons.

Branding: theme the dashboard on The Arcana Systems' brand system, not the
client's own brand — this is OUR product wrapping their data, so cards/nav/
chrome stay on Arcana's identity:
  - Colors: Royal Violet #3a1f61 (light primary) / Arcana Violet #5b3a83
    (dark primary) for buttons/nav/emphasis; Spark Gold #c8a063 as an accent
    only (dividers, brand mark, chart highlight) — never a base/background
    color; Ivory #faf6f0 (light bg) / Deep Plum #140b22 (dark bg); Lavender
    Mist #f4f0f9 for secondary/muted surfaces.
  - Typography: Cormorant Garamond for headlines/logo moments (page titles,
    sidebar handle), Inter for everything else (body, nav, forms, captions).
  - Brand mark: a stacked starburst/compass "spark" mark (inline SVG, tints
    via currentColor) — show it gold-tinted next to an "Arcana Creator OS"
    label in the sidebar footer, and use it as the favicon on a Deep Plum
    tile.
  - If the client has their own brand colors for [CLIENT_HANDLE], do NOT
    apply them to the dashboard chrome — note them only as a reference for
    future caption/copy tone, since the dashboard itself is Arcana-branded.

Data: everything is mocked in typed fixtures under src/data/*.ts (types in
src/lib/types.ts) — there is no backend. Each page's data file is the
intended integration seam for wiring up a real source later; computation/
derived logic (medians, deltas, schedule math) lives in src/lib/*.ts so
swapping the data source doesn't change that logic. Use deterministic
synthetic data (relative-date helpers, no Math.random) so the seed data
reads as realistic for a creator in the [NICHE] niche.

Pages:

1. **Hook Vault** — card grid of saved hooks: hook text, fill-in-the-blank
   template, platform/niche/angle tags, status (unused/scheduled/used).
   Searchable/filterable by free text, niche, hook type, and a min-views
   threshold. "Use this" marks a hook scheduled (local state only).

2. **Analytics** — a 7d/30d/90d window selector drives: metric cards (views,
   saves, new follows, DM volume) each with a delta vs. the prior
   equal-length period and an embedded sparkline; an area chart re-titled
   and re-sliced per window; and a "heaters" table — posts at >=2x the
   trailing 30-day median view count, computed from raw post data, not
   pre-baked.

3. **Competitor Tracker** — models a weekly scrape job (pick a day/time)
   that pulls the top 5 reels from each of [N, default 8] tracked accounts
   in the [NICHE] space, transcribes audio, and extracts the spoken hook
   separately from on-screen text overlay and full transcript (model these
   as three distinct fields — they differ in real reels). Stat cards for
   accounts tracked / reels scraped / top view count / next scrape time; a
   table of all reels sorted by views with a transcript dialog and "Save to
   Hook Vault" action.

4. **Scheduler** — one-click scheduling to [PLATFORMS, e.g. "Instagram and
   Threads" — restrict the platform picker to just these, additively, not
   by narrowing the shared Platform type/component]. Autogenerate a caption
   from hook + angle + a selected CTA. Posting is handed off to
   [POSTING_ENGINE_NAME, default "Zernio MCP"] — label this in the UI (a
   stat card + dialog footnote) as a mocked integration point, not a real
   one, unless a real posting MCP/tool is available in this environment.

5. **Content Calendar** — custom month grid (no date-picker library) of
   everything scheduled, each slot showing the exact time and angle, tagged
   by source (auto-generated script vs. manually added). Clicking a slot
   opens a side panel with the full caption and script.

6. **What's Trending** — pulls from [N, default 12] sources across blogs,
   X/Twitter lists, and niche RSS feeds relevant to [NICHE]. Auto-tags each
   item "hook potential" / "explainer" / "skip". Surfaces the top 5
   hook-potential items sorted by recency in a feed; a second section lists
   everything. Mock a daily email digest badge (e.g. "Next digest: 7:00 AM")
   — no real email is sent.

Shared shell: a sidebar with the creator's handle pinned at the top (avatar
initials + handle + "Creator OS" subtitle), a 6-item nav, and an
"Arcana Creator OS" + brand-mark footer; a topbar for mobile with the same
nav in a sheet. Dark mode is the default; light mode is reachable via a
toggle.

Document every non-obvious decision in this repo's CLAUDE.md as you build —
especially anything you interpret from ambiguous wording in this brief, and
the mocked-integration points (posting engine, scrape job, email digest) so
a future pass knows exactly what to replace with a real backend.
```

---

## Placeholders to fill in

| Placeholder | What it controls |
|---|---|
| `[CLIENT_HANDLE]` | Creator/brand handle shown in the sidebar, page titles, and seed data |
| `[NICHE]` | Flavors the seed hooks, competitor accounts, and trending sources |
| `[PLATFORMS]` | Which platforms the Scheduler restricts to (additive to the shared `Platform` type) |
| `[POSTING_ENGINE_NAME]` | The mocked (or real, if available) posting integration's display name |
| `[N, default 8]` / `[N, default 12]` | Tracked-competitor count / trending-source count, if the client wants a different number |

The Arcana Systems brand colors/typography/mark are intentionally **not**
parameterized — every client's dashboard ships on the same Arcana Creator OS
visual identity, since the dashboard is Arcana's product, not the client's.
