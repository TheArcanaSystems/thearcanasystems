"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { platformMeta } from "@/lib/platform";
import type { Platform } from "@/lib/types";

const allPlatforms: Platform[] = ["instagram", "tiktok", "youtube", "x", "threads"];

export function PlatformCheckboxRow({
  selected,
  onChange,
  options = allPlatforms,
}: {
  selected: Platform[];
  onChange: (next: Platform[]) => void;
  options?: Platform[];
}) {
  return (
    <div className="flex flex-wrap gap-4">
      {options.map((platform) => {
        const meta = platformMeta[platform];
        const Icon = meta.icon;
        const checked = selected.includes(platform);

        return (
          <div key={platform} className="flex items-center gap-2">
            <Checkbox
              id={`platform-${platform}`}
              checked={checked}
              onCheckedChange={(value) => {
                if (value) onChange([...selected, platform]);
                else onChange(selected.filter((p) => p !== platform));
              }}
            />
            <Label
              htmlFor={`platform-${platform}`}
              className="flex items-center gap-1.5 text-sm font-normal"
            >
              <Icon className={`size-3.5 ${meta.className}`} />
              {meta.label}
            </Label>
          </div>
        );
      })}
    </div>
  );
}
