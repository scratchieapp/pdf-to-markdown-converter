import { useState, useEffect, useCallback } from 'react';

interface ProgressData {
  status: 'idle' | 'processing' | 'converting' | 'complete' | 'error';
  message: string;
  progress: number;
  currentPage?: number;
  totalPages?: number;
  downloadUrl?: string;
}

export const useProgressPolling = (sessionId: string | null, enabled: boolean = false) => {
  const [progress, setProgress] = useState<ProgressData>({
    status: 'idle',
    message: '',
    progress: 0
  });

  const pollProgress = useCallback(async (): Promise<boolean> => {
    if (!sessionId || !enabled) return false;

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api/progress?sessionId=${sessionId}`);
      if (response.ok) {
        const data = await response.json();
        setProgress(data);
        
        // Stop polling if complete or error
        if (data.status === 'complete' || data.status === 'error') {
          return false; // Signal to stop polling
        }
      }
    } catch (error) {
      console.error('Error polling progress:', error);
      return false; // Stop polling on error
    }
    
    return true; // Continue polling
  }, [sessionId, enabled]);

  useEffect(() => {
    if (!sessionId || !enabled) return;

    let intervalId: NodeJS.Timeout;
    let shouldContinue = true;

    const startPolling = async () => {
      // Initial poll
      shouldContinue = await pollProgress();
      
      // Set up interval if we should continue
      if (shouldContinue) {
        intervalId = setInterval(async () => {
          const continuePolling = await pollProgress();
          if (!continuePolling) {
            clearInterval(intervalId);
          }
        }, 2000); // Poll every 2 seconds
      }
    };

    startPolling();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [sessionId, enabled, pollProgress]);

  const resetProgress = useCallback(() => {
    setProgress({
      status: 'idle',
      message: '',
      progress: 0
    });
  }, []);

  return { progress, resetProgress };
};