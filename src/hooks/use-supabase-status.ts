
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

type ConnectionStatus = 'connecting' | 'connected' | 'error';

export function useSupabaseStatus() {
  const [status, setStatus] = useState<ConnectionStatus>('connecting');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function checkConnection() {
      try {
        // First try a simple query to test connection
        const { data, error } = await supabase
          .from('contact_submissions')
          .select('count(*)', { count: 'exact', head: true });
        
        if (error) {
          // If we get an error with contact_submissions table, try a different table
          const fallbackCheck = await supabase
            .from('lovable_dev_prompts')
            .select('count(*)', { count: 'exact', head: true });
            
          if (fallbackCheck.error) {
            console.error('Supabase connection error:', fallbackCheck.error);
            setStatus('error');
            setError(fallbackCheck.error.message);
            toast({
              variant: 'destructive',
              title: 'Database Connection Error',
              description: 'Could not connect to the database. Please try again later.',
            });
            return;
          }
        }

        setStatus('connected');
        setError(null);
      } catch (err) {
        console.error('Unexpected error checking Supabase connection:', err);
        setStatus('error');
        setError(err instanceof Error ? err.message : 'Unknown error');
        toast({
          variant: 'destructive',
          title: 'Connection Error',
          description: 'An unexpected error occurred while connecting to Supabase.',
        });
      }
    }

    checkConnection();

    // Set up interval to periodically check connection (every 60 seconds)
    const intervalId = setInterval(checkConnection, 60000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return { status, error, isConnected: status === 'connected' };
}
