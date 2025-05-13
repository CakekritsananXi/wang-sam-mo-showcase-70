
# Technical Components Documentation

This document outlines the technical components created to enhance application performance, maintainability, and user experience.

## Custom Hooks

### useMotionDetection

Detects device motion and provides motion state information.

**Usage:**
```tsx
const { isMotionDetected, lastMotionTimestamp, resetMotionState, setEnabled } = useMotionDetection({
  sensitivity: 15,
  debounceTime: 200,
  enabled: true
});
```

**Options:**
- `sensitivity`: Threshold for motion detection (default: 15)
- `debounceTime`: Time in ms before motion state resets (default: 200)
- `enabled`: Whether motion detection is active (default: true)

**Returns:**
- `isMotionDetected`: Boolean indicating if motion is detected
- `lastMotionTimestamp`: Timestamp of the last detected motion
- `resetMotionState`: Function to reset the motion state
- `setEnabled`: Function to enable/disable motion detection

### useOnlineStatus

Monitors network connectivity status with active ping checks.

**Usage:**
```tsx
const { isOnline, checkConnection, latency, lastChecked } = useOnlineStatus({
  pollingInterval: 30000,
  pingUrl: 'https://www.google.com/generate_204'
});
```

**Options:**
- `pollingInterval`: Time in ms between connectivity checks (default: 30000)
- `pingUrl`: URL to ping for connectivity check (default: 'https://www.google.com/generate_204')

**Returns:**
- `isOnline`: Boolean indicating if the device is online
- `checkConnection`: Function to manually check connection status
- `latency`: Current network latency in ms
- `lastChecked`: Timestamp of last connectivity check

### useVoiceCommand

Provides voice command functionality using the Web Speech API.

**Usage:**
```tsx
const { isListening, lastCommand, startListening, stopListening, setEnabled, error } = useVoiceCommand({
  commands: {
    'navigate home': () => navigate('/'),
    'show dashboard': () => navigate('/dashboard')
  },
  enabled: false,
  language: 'en-US'
});
```

**Options:**
- `commands`: Object mapping command phrases to action functions
- `enabled`: Whether voice recognition is active (default: false)
- `language`: Language for speech recognition (default: 'en-US')

**Returns:**
- `isListening`: Boolean indicating if voice recognition is active
- `lastCommand`: Last recognized voice command
- `startListening`: Function to start voice recognition
- `stopListening`: Function to stop voice recognition
- `setEnabled`: Function to enable/disable voice recognition
- `error`: Error message if speech recognition fails

## UI Components

### StatusBadge

Displays various status states with appropriate styling and icons.

**Usage:**
```tsx
<StatusBadge status="online" text="System Online" pulse={true} />
```

**Props:**
- `status`: Status type ('online', 'offline', 'warning', 'error', 'success', 'loading', 'idle')
- `text`: Custom text to display (optional)
- `pulse`: Whether to apply a pulsing animation (default: false)
- `className`: Additional CSS classes

### InfoCard

Displays key metrics or information in a card format.

**Usage:**
```tsx
<InfoCard
  title="Active Users"
  value={1250}
  icon={<Users className="h-4 w-4" />}
  trend="up"
  trendValue="12% from last week"
/>
```

**Props:**
- `title`: Card title
- `value`: Main value to display
- `icon`: Optional icon component
- `trend`: Trend direction ('up', 'down', 'neutral')
- `trendValue`: Value describing the trend
- `loading`: Whether to show loading state
- `className`: Additional CSS classes

### MetricsDisplay

Displays multiple metrics in a responsive grid layout.

**Usage:**
```tsx
<MetricsDisplay
  metrics={[
    {
      label: "Deliveries",
      value: 85,
      unit: "%",
      trend: "up",
      trendValue: "+5%"
    },
    {
      label: "Response Time",
      value: 320,
      unit: "ms",
      trend: "down",
      trendValue: "-50ms"
    }
  ]}
  columns={2}
/>
```

**Props:**
- `metrics`: Array of metric objects
- `columns`: Number of columns (1-4)
- `loading`: Whether to show loading state
- `className`: Additional CSS classes

### IconComponent

Lazy-loads icons with fallback states.

**Usage:**
```tsx
<IconComponent name="users" size={24} />
```

**Props:**
- `name`: Icon name from Lucide icons
- `size`: Icon size in pixels
- `fallback`: Custom fallback component if icon fails to load
- `...props`: Additional props passed to the icon

### ErrorBoundary

Catches JavaScript errors and displays a fallback UI.

**Usage:**
```tsx
<ErrorBoundary fallback={<CustomErrorPage />}>
  <ComponentThatMightError />
</ErrorBoundary>
```

**Props:**
- `children`: Components to wrap with error handling
- `fallback`: Optional custom fallback UI component

## Performance Optimizations

1. **React.memo Usage**:
   - Applied to all UI components to prevent unnecessary re-renders
   - Example: `const StatusBadge = React.memo(({ status, text, pulse = false, className }) => {...});`

2. **useCallback for Event Handlers**:
   - All event handlers use useCallback with appropriate dependencies
   - Example: `const handleDeviceMotion = useCallback((event) => {...}, [isEnabled, sensitivity, debounceTime]);`

3. **Optimized useEffect Dependencies**:
   - All useEffect hooks have proper dependency arrays
   - Example: `useEffect(() => {...}, [isEnabled, handleDeviceMotion]);`

4. **Code Splitting**:
   - Icon component implements lazy loading for better initial load performance

5. **Touch Target Optimizations**:
   - All interactive elements are at least 44x44px with adequate spacing
   - Example: Button padding set to ensure minimum touch target sizes

## Mobile Responsiveness

1. **Tailwind Breakpoints**:
   - sm (640px): Small devices and up
   - md (768px): Medium devices and up
   - lg (1024px): Large devices and up

2. **Responsive Design Patterns**:
   - Grid layouts that adapt based on screen size
   - Example: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`

3. **Font Sizes**:
   - Body text: 16px (`text-base`)
   - Headers: 20px+ (`text-lg` and above)
   - Labels: 14px (`text-sm`)

## Code Quality Standards

1. **TypeScript Interfaces**:
   - Defined for all component props
   - Example: `interface StatusBadgeProps { status: StatusType; text?: string; pulse?: boolean; className?: string; }`

2. **JSDoc Comments**:
   - Added to all components and hooks
   - Example: `/** * Custom hook for detecting network connectivity status... */`

3. **Error Handling**:
   - ErrorBoundary component for React error capturing
   - Try/catch blocks for async operations
