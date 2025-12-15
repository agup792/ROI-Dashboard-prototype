import React from "react";
import { ChevronDown } from "lucide-react";

interface FunnelStage {
  name: string;
  count: number;
  color: string;
}

interface FunnelChartProps {
  data: FunnelStage[];
  compact?: boolean;
  onStageClick?: (stageName: string) => void;
}

export function FunnelChart({ data, compact = false, onStageClick }: FunnelChartProps) {
  // Calculate conversion rates
  const getConversionRate = (currentIndex: number) => {
    if (currentIndex === 0) return null;
    const previous = data[currentIndex - 1]?.count || 0;
    const current = data[currentIndex].count;
    if (previous === 0) return 0;
    return Math.round((current / previous) * 100);
  };

  if (compact) {
    // Compact view for Executive Summary
    return (
      <div className="space-y-3">
        {data.map((stage, index) => {
          const conversionRate = getConversionRate(index);
          const isOutcome = stage.name === "Hired" || stage.name === "Offer Rejected";
          
          return (
            <div
              key={stage.name}
              className={`flex items-center gap-3 ${
                onStageClick ? "cursor-pointer hover:bg-slate-50 rounded-lg p-2 -m-2 transition-colors" : ""
              }`}
              onClick={() => onStageClick?.(stage.name)}
            >
              <ChevronDown className={`w-4 h-4 flex-shrink-0 ${
                isOutcome 
                  ? (stage.name === "Hired" ? "text-emerald-600" : "text-rose-600")
                  : "text-slate-400"
              }`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className={`font-mono font-semibold ${
                    isOutcome 
                      ? (stage.name === "Hired" ? "text-emerald-700" : "text-rose-700")
                      : "text-slate-900"
                  }`}>
                    {stage.count.toLocaleString()}
                  </span>
                  <span className="text-sm text-slate-600 truncate">{stage.name}</span>
                  {conversionRate !== null && (
                    <span className="text-xs text-slate-500 font-mono">
                      ({conversionRate}%)
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Detailed view for Activity Report
  return (
    <div className="space-y-2">
      {data.map((stage, index) => {
        const conversionRate = getConversionRate(index);
        const maxCount = data[0]?.count || 1;
        const widthPercentage = (stage.count / maxCount) * 100;
        const isOutcome = stage.name === "Hired" || stage.name === "Offer Rejected";
        
        return (
          <div key={stage.name} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">{stage.name}</span>
              <div className="flex items-center gap-2">
                <span className="font-mono font-semibold text-slate-900">
                  {stage.count.toLocaleString()}
                </span>
                {conversionRate !== null && (
                  <span className="text-xs text-slate-500 font-mono">
                    ({conversionRate}%)
                  </span>
                )}
              </div>
            </div>
            <div
              className={`h-10 rounded-md flex items-center px-3 transition-all ${
                onStageClick ? "cursor-pointer hover:opacity-80" : ""
              }`}
              style={{
                width: `${Math.max(widthPercentage, 10)}%`,
                backgroundColor: isOutcome
                  ? stage.name === "Hired"
                    ? "hsl(142, 76%, 36%)"
                    : "hsl(0, 84%, 60%)"
                  : stage.color,
              }}
              onClick={() => onStageClick?.(stage.name)}
            >
              <span className="text-xs font-medium text-white truncate">
                {stage.count.toLocaleString()} candidates
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

