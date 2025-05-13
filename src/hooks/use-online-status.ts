
import { useState, useEffect, useCallback } from 'react';

interface OnlineStatusOptions {
  pollingInterval?: number;
  pingUrl?: string;
}

interface OnlineStatusResult {
  isOnline: boolean;
  checkConnection: () => Promise<boolean>;
  latency: number | null;
  lastChecked: number | null;
}

/**
 * Custom hook for detecting network connectivity status
 * 
 * @param options Configuration options for connectivity checks
 * @returns Object with online status information and control functions
 */
export function useOnlineStatus({
  pollingInterval = 30000,
  pingUrl = 'https://www.google.com/generate_204',
}: OnlineStatusOptions = {}): OnlineStatusResult {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [latency, setLatency] = useState<number | null>(null);
  const [lastChecked, setLastChecked] = useState<number | null>(null);

  const checkConnection = useCallback(async (): Promise<boolean> => {
    try {
      const startTime = Date.now();
      const response = await fetch(pingUrl, {
        mode: 'no-cors',
        cache: 'no-store',
      });
      
      const endTime = Date.now();
      const currentLatency = endTime - startTime;
      setLatency(currentLatency);
      
      const connectionAvailable = response.type === 'opaque' || response.ok;
      setIsOnline(connectionAvailable);
      setLastChecked(Date.now());
      
      return connectionAvailable;
    } catch (error) {
      console.error('Connection check failed:', error);
      setIsOnline(false);
      setLastChecked(Date.now());
      return false;
    }
  }, [pingUrl]);

  // Handle browser online/offline events
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      checkConnection(); // Verify actual connectivity
    };

    const handleOffline = () => {
      setIsOnline(false);
      setLatency(null);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial check
    checkConnection();

    // Regular polling
    const intervalId = setInterval(checkConnection, pollingInterval);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(intervalId);
    };
  }, [checkConnection, pollingInterval]);

  return {
    isOnline,
    checkConnection,
    latency,
    lastChecked,
  };
}
