// Computes run times for the weekly competitor-scrape job (Sundays at 6am)
// without needing a real cron/scheduler backend yet.
export function nextWeeklyRun(targetDay: number, targetHour: number, from = new Date()) {
  const next = new Date(from);
  next.setHours(targetHour, 0, 0, 0);
  next.setDate(next.getDate() + ((targetDay - next.getDay() + 7) % 7));
  if (next <= from) next.setDate(next.getDate() + 7);
  return next;
}

export function previousWeeklyRun(targetDay: number, targetHour: number, from = new Date()) {
  const prev = nextWeeklyRun(targetDay, targetHour, from);
  prev.setDate(prev.getDate() - 7);
  return prev;
}

export function formatRunTime(date: Date) {
  return date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
