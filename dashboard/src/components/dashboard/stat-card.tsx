import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  deltaPct,
  icon: Icon,
}: {
  label: string;
  value: string;
  deltaPct?: number;
  icon: LucideIcon;
}) {
  const positive = (deltaPct ?? 0) >= 0;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {label}
        </CardTitle>
        <Icon className="size-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold tracking-tight">{value}</div>
        {deltaPct !== undefined ? (
          <p
            className={cn(
              "mt-1 flex items-center gap-1 text-xs",
              positive ? "text-emerald-400" : "text-destructive"
            )}
          >
            {positive ? (
              <ArrowUpRight className="size-3.5" />
            ) : (
              <ArrowDownRight className="size-3.5" />
            )}
            {Math.abs(deltaPct).toFixed(1)}% vs last week
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}
