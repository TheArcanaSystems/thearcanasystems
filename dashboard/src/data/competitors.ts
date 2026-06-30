import type { CompetitorReel, TrackedCreator } from "@/lib/types";
import { daysAgo, hoursAgo } from "@/data/dates";

// The 8 accounts the weekly Sunday-6am scrape job covers. lastScrapedAt
// values are staggered to model a batch job that works through accounts
// one at a time rather than all finishing at the exact same instant.
export const trackedCreators: TrackedCreator[] = [
  {
    id: "cr-1",
    handle: "@growthwithava",
    platform: "tiktok",
    niche: "business",
    followers: 482_000,
    lastScrapedAt: hoursAgo(23),
  },
  {
    id: "cr-2",
    handle: "@reelmechanic",
    platform: "instagram",
    niche: "content strategy",
    followers: 311_000,
    lastScrapedAt: hoursAgo(27),
  },
  {
    id: "cr-3",
    handle: "@creatorlex",
    platform: "instagram",
    niche: "creator economy",
    followers: 198_000,
    lastScrapedAt: hoursAgo(22),
  },
  {
    id: "cr-4",
    handle: "@dataoverdesign",
    platform: "youtube",
    niche: "content strategy",
    followers: 156_000,
    lastScrapedAt: hoursAgo(29),
  },
  {
    id: "cr-5",
    handle: "@marcbuildsthings",
    platform: "tiktok",
    niche: "founder journey",
    followers: 94_500,
    lastScrapedAt: hoursAgo(21),
  },
  {
    id: "cr-6",
    handle: "@theclipdesk",
    platform: "instagram",
    niche: "social strategy",
    followers: 267_000,
    lastScrapedAt: hoursAgo(25),
  },
  {
    id: "cr-7",
    handle: "@copywithjune",
    platform: "instagram",
    niche: "copywriting",
    followers: 142_000,
    lastScrapedAt: hoursAgo(24),
  },
  {
    id: "cr-8",
    handle: "@shortformsteph",
    platform: "youtube",
    niche: "short-form editing",
    followers: 121_000,
    lastScrapedAt: hoursAgo(26),
  },
];

// Top 5 reels per tracked account, as returned by the weekly scrape +
// transcription pass. hookText/onScreenText are pulled separately because
// the spoken hook and the on-screen text overlay frequently differ.
export const competitorReels: CompetitorReel[] = [
  // @growthwithava (business)
  {
    id: "rl-1",
    creatorId: "cr-1",
    rank: 1,
    hookText: "I made $40k before I had 1,000 followers. Here's the system.",
    onScreenText: "$40K. 0 followers. 1 system.",
    transcript:
      "I made $40k before I had 1,000 followers. Here's the system. I stopped chasing follower count and started chasing one number: replies that turned into a paid call. Every hook after that was built around getting that one reply.",
    views: 1_840_000,
    likes: 212_000,
    postedAt: daysAgo(2),
  },
  {
    id: "rl-2",
    creatorId: "cr-1",
    rank: 2,
    hookText: "Three brands paid me $0 in year one. Here's what changed.",
    onScreenText: "Year 1: $0 from brands.",
    transcript:
      "Three brands paid me $0 in year one. Here's what changed. I stopped pitching myself as a creator and started pitching a deliverable with a price next to it.",
    views: 502_000,
    likes: 61_000,
    postedAt: daysAgo(9),
  },
  {
    id: "rl-3",
    creatorId: "cr-1",
    rank: 3,
    hookText: "Stop waiting for a brand deal. Build the offer first.",
    onScreenText: "Brand deals are the wrong first move.",
    transcript:
      "Stop waiting for a brand deal. Build the offer first. The creators getting paid aren't the biggest, they're the ones who already had something to sell when the DM came in.",
    views: 318_000,
    likes: 38_000,
    postedAt: daysAgo(14),
  },
  {
    id: "rl-4",
    creatorId: "cr-1",
    rank: 4,
    hookText: "The DM script that turned 40 cold follows into 6 clients.",
    onScreenText: "1 DM script. 6 clients.",
    transcript:
      "The DM script that turned 40 cold follows into 6 clients. No pitch in the first message, just one specific observation about their account.",
    views: 247_000,
    likes: 29_000,
    postedAt: daysAgo(18),
  },
  {
    id: "rl-5",
    creatorId: "cr-1",
    rank: 5,
    hookText: "I tracked every dollar I made from content for 12 months. Here's the breakdown.",
    onScreenText: "12 months. Every dollar. Tracked.",
    transcript:
      "I tracked every dollar I made from content for 12 months. Here's the breakdown. Brand deals were the smallest slice. Templates and the DM funnel did the heavy lifting.",
    views: 168_000,
    likes: 19_000,
    postedAt: daysAgo(21),
  },

  // @reelmechanic (content strategy)
  {
    id: "rl-6",
    creatorId: "cr-2",
    rank: 1,
    hookText: "The algorithm isn't broken. Your first frame is.",
    onScreenText: "Not the algorithm. Your first frame.",
    transcript:
      "The algorithm isn't broken. Your first frame is. If someone can't tell what they're about to watch in the first half-second, the algorithm never gets a chance to push it anywhere.",
    views: 1_960_000,
    likes: 304_000,
    postedAt: daysAgo(5),
  },
  {
    id: "rl-7",
    creatorId: "cr-2",
    rank: 2,
    hookText: "If your reels flop in the first 3 seconds, it's never the topic.",
    onScreenText: "It's never the topic.",
    transcript:
      "If your reels flop in the first 3 seconds, it's never the topic. It's the gap between what the cover frame promises and what the first line of audio actually delivers.",
    views: 1_120_000,
    likes: 178_000,
    postedAt: daysAgo(3),
  },
  {
    id: "rl-8",
    creatorId: "cr-2",
    rank: 3,
    hookText: "Your hook is fine. Your pacing is killing retention.",
    onScreenText: "Hook: fine. Pacing: the problem.",
    transcript:
      "Your hook is fine. Your pacing is killing retention. People aren't leaving at second one, they're leaving at second four when nothing new has happened yet.",
    views: 402_000,
    likes: 55_000,
    postedAt: daysAgo(10),
  },
  {
    id: "rl-9",
    creatorId: "cr-2",
    rank: 4,
    hookText: "I rewatched 50 of my flops. Same mistake, every time.",
    onScreenText: "50 flops. 1 mistake.",
    transcript:
      "I rewatched 50 of my flops. Same mistake, every time. I was explaining the hook instead of just showing it.",
    views: 286_000,
    likes: 37_000,
    postedAt: daysAgo(13),
  },
  {
    id: "rl-10",
    creatorId: "cr-2",
    rank: 5,
    hookText: "Captions don't save reels. The first second does.",
    onScreenText: "Captions don't save reels.",
    transcript:
      "Captions don't save reels. The first second does. By the time someone's reading your caption, they've already decided to keep scrolling or not.",
    views: 211_000,
    likes: 26_000,
    postedAt: daysAgo(16),
  },

  // @creatorlex (creator economy)
  {
    id: "rl-11",
    creatorId: "cr-3",
    rank: 1,
    hookText: "POV: you finally find the hook formula that matches your niche.",
    onScreenText: "POV: the formula finally clicks.",
    transcript:
      "POV: you finally find the hook formula that matches your niche. Every post stops feeling like a guess and starts feeling like a template you're just filling in.",
    views: 1_430_000,
    likes: 201_000,
    postedAt: daysAgo(1),
  },
  {
    id: "rl-12",
    creatorId: "cr-3",
    rank: 2,
    hookText: "Nobody tells you this about your first 90 days as a creator.",
    onScreenText: "Nobody tells you this about day 1-90.",
    transcript:
      "Nobody tells you this about your first 90 days as a creator. Almost none of your early growth comes from the algorithm, it comes from other creators sharing your stuff.",
    views: 612_000,
    likes: 89_000,
    postedAt: daysAgo(4),
  },
  {
    id: "rl-13",
    creatorId: "cr-3",
    rank: 3,
    hookText: "The creator economy doesn't reward consistency. It rewards specificity.",
    onScreenText: "Not consistency. Specificity.",
    transcript:
      "The creator economy doesn't reward consistency. It rewards specificity. The accounts that grew fastest this year all got narrower, not broader.",
    views: 356_000,
    likes: 48_000,
    postedAt: daysAgo(11),
  },
  {
    id: "rl-14",
    creatorId: "cr-3",
    rank: 4,
    hookText: "I studied 30 creators who 'made it.' None of them went viral first.",
    onScreenText: "None of them went viral first.",
    transcript:
      "I studied 30 creators who 'made it.' None of them went viral first. They all had a small, repeat audience before any single post broke out.",
    views: 274_000,
    likes: 33_000,
    postedAt: daysAgo(15),
  },
  {
    id: "rl-15",
    creatorId: "cr-3",
    rank: 5,
    hookText: "Your niche isn't too small. Your offer is too vague.",
    onScreenText: "Niche: fine. Offer: too vague.",
    transcript:
      "Your niche isn't too small. Your offer is too vague. 'Helping creators grow' isn't a niche, it's a category. Name the specific result you get people.",
    views: 189_000,
    likes: 22_000,
    postedAt: daysAgo(19),
  },

  // @dataoverdesign (content strategy)
  {
    id: "rl-16",
    creatorId: "cr-4",
    rank: 1,
    hookText: "I audited 100 reels. The hook pattern that won every time:",
    onScreenText: "100 reels audited. 1 pattern won.",
    transcript:
      "I audited 100 reels. The hook pattern that won every time: state the outcome before you explain how. Every top-quartile reel led with a result, not a setup.",
    views: 944_000,
    likes: 132_000,
    postedAt: daysAgo(1),
  },
  {
    id: "rl-17",
    creatorId: "cr-4",
    rank: 2,
    hookText: "I ran an A/B test on 60 hooks. The data surprised me.",
    onScreenText: "60 hooks. A/B tested.",
    transcript:
      "I ran an A/B test on 60 hooks. The data surprised me. Question-based hooks consistently underperformed flat statements, even when the question was more provocative.",
    views: 412_000,
    likes: 58_000,
    postedAt: daysAgo(8),
  },
  {
    id: "rl-18",
    creatorId: "cr-4",
    rank: 3,
    hookText: "Your thumbnail isn't the problem. Your first 8 words are.",
    onScreenText: "First 8 words > thumbnail.",
    transcript:
      "Your thumbnail isn't the problem. Your first 8 words are. I tested identical thumbnails against six different opening lines and watch time varied by 3x.",
    views: 301_000,
    likes: 41_000,
    postedAt: daysAgo(12),
  },
  {
    id: "rl-19",
    creatorId: "cr-4",
    rank: 4,
    hookText: "I plotted view count against post length. The chart doesn't lie.",
    onScreenText: "Views vs. length: the chart.",
    transcript:
      "I plotted view count against post length. The chart doesn't lie. Past 45 seconds, views drop off fast unless the topic is a step-by-step.",
    views: 229_000,
    likes: 30_000,
    postedAt: daysAgo(17),
  },
  {
    id: "rl-20",
    creatorId: "cr-4",
    rank: 5,
    hookText: "The 'best time to post' advice is mostly noise. Here's the actual signal.",
    onScreenText: "Best time to post: mostly noise.",
    transcript:
      "The 'best time to post' advice is mostly noise. Here's the actual signal. Posting time mattered less than posting right after your last winner while it was still circulating.",
    views: 174_000,
    likes: 21_000,
    postedAt: daysAgo(20),
  },

  // @marcbuildsthings (founder journey)
  {
    id: "rl-21",
    creatorId: "cr-5",
    rank: 1,
    hookText: "I quit my agency to post 1 reel a day. Day 47 update.",
    onScreenText: "Day 47. Still going.",
    transcript:
      "I quit my agency to post 1 reel a day. Day 47 update. Revenue is still below what the agency made, but for the first time it's growing every single week.",
    views: 763_000,
    likes: 98_000,
    postedAt: daysAgo(5),
  },
  {
    id: "rl-22",
    creatorId: "cr-5",
    rank: 2,
    hookText: "I quit my 9-to-5 the same week my biggest brand deal fell through.",
    onScreenText: "Quit my job. Lost the deal. Same week.",
    transcript:
      "I quit my 9-to-5 the same week my biggest brand deal fell through. Worst timing of my life, and also the thing that forced me to stop relying on one client.",
    views: 412_000,
    likes: 54_000,
    postedAt: daysAgo(7),
  },
  {
    id: "rl-23",
    creatorId: "cr-5",
    rank: 3,
    hookText: "7 things I wish I knew before going full-time as a creator.",
    onScreenText: "7 things. Full-time creator.",
    transcript:
      "7 things I wish I knew before going full-time as a creator. Number one: your worst income month will probably come after your best content month, not before.",
    views: 318_000,
    likes: 40_000,
    postedAt: daysAgo(9),
  },
  {
    id: "rl-24",
    creatorId: "cr-5",
    rank: 4,
    hookText: "My first month full-time, I made less than my old paycheck. Here's month six.",
    onScreenText: "Month 1 vs. month 6.",
    transcript:
      "My first month full-time, I made less than my old paycheck. Here's month six. The gap didn't close because I posted more, it closed because I finally had something to sell.",
    views: 201_000,
    likes: 24_000,
    postedAt: daysAgo(13),
  },
  {
    id: "rl-25",
    creatorId: "cr-5",
    rank: 5,
    hookText: "Everyone said quitting was reckless. Day 180 says otherwise.",
    onScreenText: "Day 180 says otherwise.",
    transcript:
      "Everyone said quitting was reckless. Day 180 says otherwise. I'm not rich, but I've replaced the paycheck and I own all of my time back.",
    views: 142_000,
    likes: 17_000,
    postedAt: daysAgo(17),
  },

  // @theclipdesk (social strategy)
  {
    id: "rl-26",
    creatorId: "cr-6",
    rank: 1,
    hookText: "Stop posting daily. Do this instead and watch saves triple.",
    onScreenText: "Stop posting daily.",
    transcript:
      "Stop posting daily. Do this instead and watch saves triple. Post half as often, but make every post answer a question your audience actually searched for.",
    views: 2_310_000,
    likes: 338_000,
    postedAt: daysAgo(6),
  },
  {
    id: "rl-27",
    creatorId: "cr-6",
    rank: 2,
    hookText: "Cold DMs just killed my agency's entire sales call backlog.",
    onScreenText: "Cold DMs killed our backlog.",
    transcript:
      "Cold DMs just killed my agency's entire sales call backlog. We replaced our outreach with a single warm comment-to-DM flow and it outperformed three months of cold pitching.",
    views: 1_080_000,
    likes: 156_000,
    postedAt: daysAgo(8),
  },
  {
    id: "rl-28",
    creatorId: "cr-6",
    rank: 3,
    hookText: "Your posting schedule isn't the strategy. Your follow-up is.",
    onScreenText: "Schedule isn't the strategy.",
    transcript:
      "Your posting schedule isn't the strategy. Your follow-up is. Most accounts let a viral comment section go cold instead of turning it into DMs.",
    views: 387_000,
    likes: 52_000,
    postedAt: daysAgo(11),
  },
  {
    id: "rl-29",
    creatorId: "cr-6",
    rank: 4,
    hookText: "I turned off comments for a week. Saves went up 40%.",
    onScreenText: "Comments off. Saves +40%.",
    transcript:
      "I turned off comments for a week. Saves went up 40%. Without a comment section to scroll, people defaulted to saving the post instead.",
    views: 298_000,
    likes: 36_000,
    postedAt: daysAgo(14),
  },
  {
    id: "rl-30",
    creatorId: "cr-6",
    rank: 5,
    hookText: "Engagement bait is dead. Here's what's replacing it.",
    onScreenText: "Engagement bait is dead.",
    transcript:
      "Engagement bait is dead. Here's what's replacing it. Platforms started quietly suppressing 'comment X below' posts, so we switched to genuinely useful checklists instead.",
    views: 224_000,
    likes: 27_000,
    postedAt: daysAgo(18),
  },

  // @copywithjune (copywriting)
  {
    id: "rl-31",
    creatorId: "cr-7",
    rank: 1,
    hookText: "This is the exact caption formula that got me 40,000 saves.",
    onScreenText: "The exact formula. 40,000 saves.",
    transcript:
      "This is the exact caption formula that got me 40,000 saves. Open with the result, give one specific number, end with a single clear action — no more than that.",
    views: 388_000,
    likes: 61_000,
    postedAt: daysAgo(8),
  },
  {
    id: "rl-32",
    creatorId: "cr-7",
    rank: 2,
    hookText: "I rewrote the same caption 12 times. Only one version got saved.",
    onScreenText: "12 rewrites. 1 winner.",
    transcript:
      "I rewrote the same caption 12 times. Only one version got saved. The winner was the shortest one, by far.",
    views: 256_000,
    likes: 34_000,
    postedAt: daysAgo(10),
  },
  {
    id: "rl-33",
    creatorId: "cr-7",
    rank: 3,
    hookText: "Your caption isn't the hook. Your hook is the caption's first line.",
    onScreenText: "Caption isn't the hook.",
    transcript:
      "Your caption isn't the hook. Your hook is the caption's first line. Everything after the first line is only read by people who already decided to stay.",
    views: 198_000,
    likes: 25_000,
    postedAt: daysAgo(13),
  },
  {
    id: "rl-34",
    creatorId: "cr-7",
    rank: 4,
    hookText: "I banned 5 words from my captions. Saves doubled.",
    onScreenText: "5 banned words. Saves x2.",
    transcript:
      "I banned 5 words from my captions. Saves doubled. 'Just', 'really', and 'honestly' were doing nothing but softening the point.",
    views: 161_000,
    likes: 19_000,
    postedAt: daysAgo(16),
  },
  {
    id: "rl-35",
    creatorId: "cr-7",
    rank: 5,
    hookText: "The caption template that out-performs every CTA I've tested.",
    onScreenText: "Beats every CTA I've tested.",
    transcript:
      "The caption template that out-performs every CTA I've tested. It doesn't ask for anything — it just tells people exactly where to find the rest.",
    views: 117_000,
    likes: 14_000,
    postedAt: daysAgo(19),
  },

  // @shortformsteph (short-form editing)
  {
    id: "rl-36",
    creatorId: "cr-8",
    rank: 1,
    hookText: "I edited the same reel 3 ways. Only the jump-cut version survived the algorithm.",
    onScreenText: "3 edits. 1 survivor.",
    transcript:
      "I edited the same reel 3 ways. Only the jump-cut version survived the algorithm. The smooth, cinematic cut had the highest drop-off in the first two seconds.",
    views: 534_000,
    likes: 71_000,
    postedAt: daysAgo(3),
  },
  {
    id: "rl-37",
    creatorId: "cr-8",
    rank: 2,
    hookText: "Stop adding 6 transitions. The algorithm rewards stillness now.",
    onScreenText: "Stop adding transitions.",
    transcript:
      "Stop adding 6 transitions. The algorithm rewards stillness now. Every extra transition I removed this month, retention went up, not down.",
    views: 372_000,
    likes: 48_000,
    postedAt: daysAgo(6),
  },
  {
    id: "rl-38",
    creatorId: "cr-8",
    rank: 3,
    hookText: "I tested silence vs. trending audio on identical hooks. Silence won.",
    onScreenText: "Silence beat trending audio.",
    transcript:
      "I tested silence vs. trending audio on identical hooks. Silence won. The trending sound was competing with the voiceover for attention instead of supporting it.",
    views: 289_000,
    likes: 35_000,
    postedAt: daysAgo(9),
  },
  {
    id: "rl-39",
    creatorId: "cr-8",
    rank: 4,
    hookText: "Your captions are too slow. Here's the timing that actually retains.",
    onScreenText: "Your caption timing is too slow.",
    transcript:
      "Your captions are too slow. Here's the timing that actually retains. Word-by-word reveal synced exactly to speech beat the static full-line caption every time.",
    views: 203_000,
    likes: 24_000,
    postedAt: daysAgo(12),
  },
  {
    id: "rl-40",
    creatorId: "cr-8",
    rank: 5,
    hookText: "I removed my intro from 20 reels. Watch time went up every time.",
    onScreenText: "Removed my intro. Watch time up.",
    transcript:
      "I removed my intro from 20 reels. Watch time went up every time. The 'hey guys, welcome back' three seconds was pure dead air.",
    views: 149_000,
    likes: 17_000,
    postedAt: daysAgo(15),
  },
];
