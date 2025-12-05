import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number; // Percentage change
  trend?: "up" | "down" | "neutral";
  tooltip?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function MetricCard({ title, value, change, trend, tooltip, icon, className }: MetricCardProps) {
  return (
    <Card className={cn("overflow-hidden border-slate-200 shadow-sm hover:shadow-md transition-all duration-200", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-500 flex items-center gap-2">
          {title}
          {tooltip && (
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-3.5 w-3.5 text-slate-400 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          )}
        </CardTitle>
        {icon && <div className="text-slate-400">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold text-slate-900">{value}</div>
        </div>
        {change !== undefined && (
          <div className="flex items-center pt-1">
            {change > 0 ? (
              <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-rose-500 mr-1" />
            )}
            <span
              className={cn(
                "text-xs font-medium",
                change > 0 ? "text-emerald-600" : "text-rose-600"
              )}
            >
              {Math.abs(change)}%
            </span>
            <span className="text-xs text-slate-400 ml-2">vs last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
