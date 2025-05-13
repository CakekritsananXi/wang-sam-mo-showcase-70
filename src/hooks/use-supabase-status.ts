
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

type ConnectionStatus = 'connecting' | 'connected' | 'error';

export function useSupabaseStatus() {
  const [status, setStatus] = useState<ConnectionStatus>('connecting');
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  const checkConnection = useCallback(async () => {
    try {
      // Try a simple query to test connection
      const { data, error } = await supabase
        .from('lovable_dev_prompts')
        .select('count(*)', { count: 'exact', head: true });
      
      if (error) {
        console.error('Supabase connection error:', error);
        setStatus('error');
        setError(error.message || 'Failed to connect to database');
        
        if (retryCount < MAX_RETRIES) {
          toast({
            variant: 'default',
            title: 'Database Connection Issue',
            description: 'Attempting to reconnect...',
          });
          setRetryCount(prev => prev + 1);
        } else {
          toast({
            variant: 'destructive',
            title: 'Database Connection Error',
            description: 'Could not connect to the database after multiple attempts. Please check your connection.',
          });
        }
        return;
      }

      if (status !== 'connected') {
        setStatus('connected');
        setError(null);
        setRetryCount(0);
        toast({
          title: 'Database Connected',
          description: 'Successfully connected to Supabase.',
        });
      }
    } catch (err) {
      console.error('Unexpected error checking Supabase connection:', err);
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Unknown connection error');
      
      toast({
        variant: 'destructive',
        title: 'Connection Error',
        description: 'An unexpected error occurred while connecting to Supabase.',
      });
    }
  }, [retryCount, status]);

  useEffect(() => {
    checkConnection();
    
    // Retry connection if in error state with delay based on retry count
    const retryTimeout = status === 'error' && retryCount < MAX_RETRIES 
      ? setTimeout(() => checkConnection(), 5000 * (retryCount + 1)) 
      : null;

    // Set up interval to periodically check connection (every 60 seconds)
    const intervalId = setInterval(checkConnection, 60000);

    // Clear interval and timeout on component unmount
    return () => {
      clearInterval(intervalId);
      if (retryTimeout) clearTimeout(retryTimeout);
    };
  }, [checkConnection, retryCount, status]);

  // Add manual reconnect function
  const reconnect = useCallback(() => {
    setRetryCount(0);
    setStatus('connecting');
    checkConnection();
  }, [checkConnection]);

  return { 
    status, 
    error, 
    isConnected: status === 'connected',
    reconnect
  };
}
