import type { DailyMetric } from "@/lib/types";

export type MetricTotals = {
  views: number;
  saves: number;
  follows: number;
  dms: number;
  viewsDeltaPct: number;
  savesDeltaPct: number;
  followsDeltaPct: number;
  dmsDeltaPct: number;
};

type MetricKey = "views" | "saves" | "follows" | "dms";

function sum(rows: DailyMetric[], key: MetricKey): number {
  return rows.reduce((total, row) => total + row[key], 0);
}

function pctChange(current: number, previous: number): number {
  if (previous === 0) return current === 0 ? 0 : 100;
  return ((current - previous) / previous) * 100;
}

export function summarize(
  dailyMetrics: DailyMetric[],
  windowDays: number,
): MetricTotals {
  const current = dailyMetrics.slice(-windowDays);
  const previous = dailyMetrics.slice(-windowDays * 2, -windowDays);

  return {
    views: sum(current, "views"),
    saves: sum(current, "saves"),
    follows: sum(current, "follows"),
    dms: sum(current, "dms"),
    viewsDeltaPct: pctChange(sum(current, "views"), sum(previous, "views")),
    savesDeltaPct: pctChange(sum(current, "saves"), sum(previous, "saves")),
    followsDeltaPct: pctChange(sum(current, "follows"), sum(previous, "follows")),
    dmsDeltaPct: pctChange(sum(current, "dms"), sum(previous, "dms")),
  };
}
