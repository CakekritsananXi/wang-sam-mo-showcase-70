
import React from 'react';
import { cn } from '@/lib/utils';
import { StatusType, StatusBadgeProps } from '@/types/ui';
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  AlertTriangle,
  Loader2,
  CircleDot,
} from 'lucide-react';

/**
 * StatusBadge component for displaying various status states
 * with appropriate colors and icons
 */
const StatusBadge = React.memo(({
  status,
  text,
  pulse = false,
  className,
}: StatusBadgeProps) => {
  const getStatusConfig = (status: StatusType): {
    icon: React.ReactNode;
    bgColor: string;
    textColor: string;
    defaultText: string;
  } => {
    switch (status) {
      case 'online':
        return {
          icon: <CheckCircle className="h-4 w-4" />,
          bgColor: 'bg-green-100 dark:bg-green-900/30',
          textColor: 'text-green-700 dark:text-green-400',
          defaultText: 'Online',
        };
      case 'offline':
        return {
          icon: <XCircle className="h-4 w-4" />,
          bgColor: 'bg-gray-100 dark:bg-gray-800',
          textColor: 'text-gray-700 dark:text-gray-400',
          defaultText: 'Offline',
        };
      case 'error':
        return {
          icon: <XCircle className="h-4 w-4" />,
          bgColor: 'bg-red-100 dark:bg-red-900/30',
          textColor: 'text-red-700 dark:text-red-400',
          defaultText: 'Error',
        };
      case 'warning':
        return {
          icon: <AlertTriangle className="h-4 w-4" />,
          bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
          textColor: 'text-yellow-700 dark:text-yellow-400',
          defaultText: 'Warning',
        };
      case 'success':
        return {
          icon: <CheckCircle className="h-4 w-4" />,
          bgColor: 'bg-green-100 dark:bg-green-900/30',
          textColor: 'text-green-700 dark:text-green-400',
          defaultText: 'Success',
        };
      case 'loading':
        return {
          icon: <Loader2 className="h-4 w-4 animate-spin" />,
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-700 dark:text-blue-400',
          defaultText: 'Loading',
        };
      case 'idle':
        return {
          icon: <CircleDot className="h-4 w-4" />,
          bgColor: 'bg-gray-100 dark:bg-gray-800',
          textColor: 'text-gray-700 dark:text-gray-400',
          defaultText: 'Idle',
        };
      default:
        return {
          icon: <AlertCircle className="h-4 w-4" />,
          bgColor: 'bg-gray-100 dark:bg-gray-800',
          textColor: 'text-gray-700 dark:text-gray-400',
          defaultText: 'Unknown',
        };
    }
  };

  const { icon, bgColor, textColor, defaultText } = getStatusConfig(status);
  const displayText = text || defaultText;

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        bgColor,
        textColor,
        pulse && 'animate-pulse',
        className
      )}
    >
      <span className="mr-1">{icon}</span>
      {displayText}
    </div>
  );
});

StatusBadge.displayName = 'StatusBadge';

export { StatusBadge };
