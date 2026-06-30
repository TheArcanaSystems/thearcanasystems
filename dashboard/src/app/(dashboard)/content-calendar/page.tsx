"use client";

import * as React from "react";
import { Terminal, User } from "lucide-react";

import { PageHeader } from "@/components/dashboard/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { calendarEntries } from "@/data/calendar";
import { cn } from "@/lib/utils";
import { platformMeta } from "@/lib/platform";
import type { CalendarEntry } from "@/lib/types";

function startOfMonthGrid(year: number, month: number) {
  const first = new Date(year, month, 1);
  const startOffset = first.getDay();
  const gridStart = new Date(year, month, 1 - startOffset);
  return Array.from({ length: 42 }, (_, i) => {
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + i);
    return d;
  });
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatFullDateTime(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function ContentCalendarPage() {
  const [selected, setSelected] = React.useState<CalendarEntry | null>(null);

  const today = new Date();
  const days = startOfMonthGrid(today.getFullYear(), today.getMonth());
  const monthLabel = today.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const entriesByDay = days.map((day) =>
    calendarEntries
      .filter((entry) => isSameDay(new Date(entry.date), day))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  );

  const selectedMeta = selected ? platformMeta[selected.platform] : null;
  const SelectedIcon = selectedMeta?.icon;

  return (
    <div>
      <PageHeader
        title="Content Calendar"
        description="Auto-filled by /script with hooks and angles. Click any slot for the full script and caption."
        action={
          <Badge variant="outline" className="gap-1.5">
            <Terminal className="size-3.5" />
            Synced via /script
          </Badge>
        }
      />

      <Card>
        <CardContent className="p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between px-1">
            <h3 className="text-sm font-semibold">{monthLabel}</h3>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Terminal className="size-3 text-primary" /> /script
              </span>
              <span className="flex items-center gap-1.5">
                <User className="size-3" /> manual
              </span>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-px overflow-hidden rounded-md border border-border bg-border text-xs font-medium text-muted-foreground">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="bg-card px-2 py-1.5 text-center">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-px overflow-hidden rounded-md border border-x border-b border-border bg-border">
            {days.map((day, i) => {
              const inMonth = day.getMonth() === today.getMonth();
              const isToday = isSameDay(day, today);
              const entries = entriesByDay[i];

              return (
                <div
                  key={day.toISOString()}
                  className={cn(
                    "min-h-[104px] bg-card p-1.5",
                    !inMonth && "bg-card/40 text-muted-foreground/50"
                  )}
                >
                  <div
                    className={cn(
                      "mb-1 flex size-5 items-center justify-center rounded-full text-[11px]",
                      isToday && "bg-primary font-semibold text-primary-foreground"
                    )}
                  >
                    {day.getDate()}
                  </div>
                  <div className="flex flex-col gap-1">
                    {entries.slice(0, 2).map((entry) => {
                      const meta = platformMeta[entry.platform];
                      const Icon = meta.icon;
                      return (
                        <button
                          key={entry.id}
                          type="button"
                          onClick={() => setSelected(entry)}
                          className="flex w-full items-start gap-1 rounded-sm bg-accent px-1.5 py-1 text-left text-[11px] leading-tight text-accent-foreground transition-colors hover:bg-accent/70"
                        >
                          <Icon className={`mt-0.5 size-3 shrink-0 ${meta.className}`} />
                          <span className="min-w-0 flex-1 truncate">
                            <span className="font-medium">{formatTime(entry.date)}</span>{" "}
                            {entry.angle}
                          </span>
                          {entry.source === "/script" ? (
                            <Terminal className="mt-0.5 size-3 shrink-0 text-primary" />
                          ) : null}
                        </button>
                      );
                    })}
                    {entries.length > 2 ? (
                      <span className="px-1.5 text-[10px] text-muted-foreground">
                        +{entries.length - 2} more
                      </span>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Sheet open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent>
          {selected && selectedMeta && SelectedIcon ? (
            <>
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <SelectedIcon className={`size-4 ${selectedMeta.className}`} />
                  {selectedMeta.label}
                  {selected.source === "/script" ? (
                    <Badge variant="outline" className="gap-1 text-[10px]">
                      <Terminal className="size-3" />
                      /script
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="gap-1 text-[10px]">
                      <User className="size-3" />
                      manual
                    </Badge>
                  )}
                </SheetTitle>
                <SheetDescription>{formatFullDateTime(selected.date)}</SheetDescription>
              </SheetHeader>

              <div className="space-y-4 overflow-y-auto px-4 pb-4 text-sm">
                <div>
                  <p className="mb-1 text-xs font-medium text-muted-foreground">Hook</p>
                  <p className="font-medium leading-snug">&ldquo;{selected.hookText}&rdquo;</p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium text-muted-foreground">Angle</p>
                  <p className="text-muted-foreground">{selected.angle}</p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium text-muted-foreground">Caption</p>
                  <p className="rounded-md bg-muted px-3 py-2 text-xs leading-relaxed text-muted-foreground">
                    {selected.caption}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium text-muted-foreground">Full script</p>
                  <p className="whitespace-pre-line rounded-md bg-muted px-3 py-2 text-xs leading-relaxed text-muted-foreground">
                    {selected.script}
                  </p>
                </div>
              </div>
            </>
          ) : null}
        </SheetContent>
      </Sheet>
    </div>
  );
}
