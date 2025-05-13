
import React from 'react';
import { cn } from '@/lib/utils';
import { MetricProps, MetricsDisplayProps } from '@/types/ui';
import { ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * Metric component for displaying a single metric
 */
const Metric = React.memo(({
  value,
  label,
  unit,
  trend,
  trendValue,
  previousValue,
  icon,
  className,
}: MetricProps) => {
  const getTrendDisplay = () => {
    if (!trend) return null;
    
    let trendIcon;
    let trendColor;
    
    switch (trend) {
      case 'up':
        trendIcon = <ArrowUp className="h-3 w-3" />;
        trendColor = 'text-green-500';
        break;
      case 'down':
        trendIcon = <ArrowDown className="h-3 w-3" />;
        trendColor = 'text-red-500';
        break;
      case 'neutral':
        trendIcon = <ArrowRight className="h-3 w-3" />;
        trendColor = 'text-gray-500';
        break;
    }
    
    return (
      <div className={cn("flex items-center text-xs gap-1", trendColor)}>
        {trendIcon}
        <span>{trendValue}</span>
      </div>
    );
  };

  return (
    <div className={cn("flex flex-col min-w-[80px]", className)}>
      <div className="flex items-center gap-2">
        {icon && <div className="text-muted-foreground">{icon}</div>}
        <div className="font-medium text-lg">
          {value}
          {unit && <span className="text-xs text-muted-foreground ml-1">{unit}</span>}
        </div>
      </div>
      <div className="flex justify-between items-center mt-1">
        <span className="text-xs text-muted-foreground">{label}</span>
        {getTrendDisplay()}
      </div>
      {previousValue && (
        <div className="text-xs text-muted-foreground mt-1">
          Previous: {previousValue}
        </div>
      )}
    </div>
  );
});

Metric.displayName = 'Metric';

/**
 * MetricsDisplay component for showing multiple metrics in a grid layout
 */
const MetricsDisplay = React.memo(({
  metrics,
  columns = 3,
  className,
  loading = false,
}: MetricsDisplayProps) => {
  const getGridClass = () => {
    switch (columns) {
      case 1: return "grid-cols-1";
      case 2: return "grid-cols-1 sm:grid-cols-2";
      case 3: return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
      case 4: return "grid-cols-1 sm:grid-cols-2 md:grid-cols-4";
      default: return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
    }
  };

  return (
    <div className={cn("bg-background p-4 rounded-md border", className)}>
      {loading ? (
        <div className={cn("grid gap-4", getGridClass())}>
          {[...Array(columns)].map((_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-4 w-28" />
            </div>
          ))}
        </div>
      ) : (
        <div className={cn("grid gap-4", getGridClass())}>
          {metrics.map((metric, index) => (
            <Metric key={index} {...metric} />
          ))}
        </div>
      )}
    </div>
  );
});

MetricsDisplay.displayName = 'MetricsDisplay';

export { MetricsDisplay, Metric };
