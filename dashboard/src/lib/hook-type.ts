import type { HookType } from "@/lib/types";

export const hookTypeLabel: Record<HookType, string> = {
  callout: "Callout",
  command: "Command",
  listicle: "Listicle",
  proof: "Proof",
  pov: "POV",
  contrarian: "Contrarian",
  secret: "Insider secret",
  documentary: "Documentary arc",
};
