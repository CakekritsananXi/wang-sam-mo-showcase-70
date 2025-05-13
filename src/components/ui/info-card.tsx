
import React from 'react';
import { cn } from '@/lib/utils';
import { InfoCardProps } from '@/types/ui';
import { ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * InfoCard component for displaying key metrics or information
 * with optional trend indicators
 */
const InfoCard = React.memo(({
  title,
  value,
  icon,
  className,
  trend,
  trendValue,
  loading = false,
}: InfoCardProps) => {
  const renderTrend = () => {
    if (!trend || !trendValue) return null;
    
    let trendIcon;
    let trendColor;
    
    switch (trend) {
      case 'up':
        trendIcon = <ArrowUp className="h-4 w-4" />;
        trendColor = 'text-green-500';
        break;
      case 'down':
        trendIcon = <ArrowDown className="h-4 w-4" />;
        trendColor = 'text-red-500';
        break;
      case 'neutral':
        trendIcon = <ArrowRight className="h-4 w-4" />;
        trendColor = 'text-gray-500';
        break;
    }
    
    return (
      <div className={cn("mt-1 flex items-center text-sm", trendColor)}>
        {trendIcon}
        <span className="ml-1">{trendValue}</span>
      </div>
    );
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
        <h3 className="text-sm font-medium">
          {loading ? <Skeleton className="h-4 w-24" /> : title}
        </h3>
        {icon && !loading && (
          <div className="text-muted-foreground">{icon}</div>
        )}
        {loading && <Skeleton className="h-5 w-5 rounded-full" />}
      </CardHeader>
      <CardContent className="p-4 pt-2">
        {loading ? (
          <div className="space-y-2">
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-4 w-16" />
          </div>
        ) : (
          <>
            <div className="text-2xl font-bold">{value}</div>
            {renderTrend()}
          </>
        )}
      </CardContent>
    </Card>
  );
});

InfoCard.displayName = 'InfoCard';

export { InfoCard };
