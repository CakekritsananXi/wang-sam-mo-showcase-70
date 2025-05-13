
import { useState, useEffect, useCallback, useRef } from 'react';

interface MotionDetectionOptions {
  sensitivity?: number;
  debounceTime?: number;
  enabled?: boolean;
}

interface MotionDetectionResult {
  isMotionDetected: boolean;
  lastMotionTimestamp: number | null;
  resetMotionState: () => void;
  setEnabled: (enabled: boolean) => void;
}

/**
 * Custom hook for detecting device motion
 * 
 * @param options Configuration options for motion detection
 * @returns Object containing motion state and control functions
 */
export function useMotionDetection({
  sensitivity = 15,
  debounceTime = 200,
  enabled = true,
}: MotionDetectionOptions = {}): MotionDetectionResult {
  const [isMotionDetected, setIsMotionDetected] = useState<boolean>(false);
  const [lastMotionTimestamp, setLastMotionTimestamp] = useState<number | null>(null);
  const [isEnabled, setIsEnabled] = useState<boolean>(enabled);
  const lastDeviceMotion = useRef({ x: 0, y: 0, z: 0 });
  const timeoutRef = useRef<number | null>(null);

  const handleDeviceMotion = useCallback(
    (event: DeviceMotionEvent) => {
      if (!isEnabled) return;
      
      const { accelerationIncludingGravity } = event;
      if (!accelerationIncludingGravity) return;

      const { x, y, z } = accelerationIncludingGravity;
      const currentMotion = {
        x: x || 0,
        y: y || 0,
        z: z || 0,
      };

      const deltaX = Math.abs(currentMotion.x - lastDeviceMotion.current.x);
      const deltaY = Math.abs(currentMotion.y - lastDeviceMotion.current.y);
      const deltaZ = Math.abs(currentMotion.z - lastDeviceMotion.current.z);
      
      lastDeviceMotion.current = currentMotion;

      if (deltaX > sensitivity || deltaY > sensitivity || deltaZ > sensitivity) {
        setIsMotionDetected(true);
        setLastMotionTimestamp(Date.now());
        
        // Reset motion detected status after debounce time
        if (timeoutRef.current !== null) {
          window.clearTimeout(timeoutRef.current);
        }
        
        timeoutRef.current = window.setTimeout(() => {
          setIsMotionDetected(false);
        }, debounceTime);
      }
    },
    [isEnabled, sensitivity, debounceTime]
  );

  const resetMotionState = useCallback(() => {
    setIsMotionDetected(false);
    setLastMotionTimestamp(null);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const setEnabled = useCallback((enabled: boolean) => {
    setIsEnabled(enabled);
    if (!enabled) {
      resetMotionState();
    }
  }, [resetMotionState]);

  useEffect(() => {
    if (isEnabled) {
      window.addEventListener('devicemotion', handleDeviceMotion);
    }
    
    return () => {
      window.removeEventListener('devicemotion', handleDeviceMotion);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [isEnabled, handleDeviceMotion]);

  return {
    isMotionDetected,
    lastMotionTimestamp,
    resetMotionState,
    setEnabled,
  };
}
