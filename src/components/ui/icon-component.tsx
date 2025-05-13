
import React, { Suspense, lazy } from 'react';
import { LucideIcon, LucideProps } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import { icons } from 'lucide-react';

// Type for icon names
export type IconName = keyof typeof icons;

interface IconComponentProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
  fallback?: React.ReactNode;
}

/**
 * Skeleton component that shows while icon is loading
 */
const IconSkeleton = ({ size = 24 }: { size?: number }) => (
  <div 
    className="animate-pulse rounded bg-gray-200 dark:bg-gray-800"
    style={{ width: size, height: size }}
  />
);

/**
 * Error fallback component for when icon loading fails
 */
const IconError = ({ size = 24 }: { size?: number }) => (
  <div 
    className="flex items-center justify-center rounded border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800"
    style={{ width: size, height: size }}
  >
    <span className="text-[10px] text-red-500">!</span>
  </div>
);

/**
 * Icon component that handles lazy loading and provides fallback states
 */
export const IconComponent = React.memo(({
  name,
  size = 24,
  fallback,
  ...props
}: IconComponentProps) => {
  // If the icon exists in the available icons, use it directly
  if (icons[name]) {
    const Icon = icons[name];
    return <Icon size={size} {...props} />;
  }
  
  // Icon not found
  console.error(`Icon "${name}" not found in lucide-react icons`);
  return fallback || <IconError size={size} />;
});

IconComponent.displayName = 'IconComponent';

/**
 * Icons component that accepts a configuration array and renders multiple icons
 */
export interface IconConfig {
  name: IconName;
  size?: number;
  className?: string;
}

interface IconsComponentProps {
  icons: IconConfig[];
  className?: string;
}

export const Icons = React.memo(({ 
  icons: iconsConfig,
  className
}: IconsComponentProps) => {
  return (
    <div className={className}>
      {iconsConfig.map((icon, index) => (
        <IconComponent 
          key={`${icon.name}-${index}`}
          name={icon.name}
          size={icon.size}
          className={icon.className}
        />
      ))}
    </div>
  );
});

Icons.displayName = 'Icons';
