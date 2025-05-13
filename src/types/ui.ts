
import { ReactNode } from 'react';

export type StatusType = 'online' | 'offline' | 'warning' | 'error' | 'success' | 'loading' | 'idle';

export interface StatusBadgeProps {
  status: StatusType;
  text?: string;
  pulse?: boolean;
  className?: string;
}

export interface InfoCardProps {
  title: string;
  value: string | number | ReactNode;
  icon?: ReactNode;
  className?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string | number;
  loading?: boolean;
}

export interface MetricProps {
  value: number | string;
  label: string;
  unit?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string | number;
  previousValue?: number | string;
  icon?: ReactNode;
  className?: string;
}

export interface MetricsDisplayProps {
  metrics: MetricProps[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
  loading?: boolean;
}
