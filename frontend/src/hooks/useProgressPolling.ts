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
    if (!sessionId || !enabled) {
      console.log('Progress polling skipped:', { sessionId, enabled });
      return false;
    }

    try {
      const url = `${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api/progress?sessionId=${sessionId}`;
      console.log('Polling progress:', url);
      
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log('Progress data:', data);
        setProgress(data);
        
        // Stop polling if complete or error
        if (data.status === 'complete' || data.status === 'error') {
          console.log('Stopping polling - status:', data.status);
          return false; // Signal to stop polling
        }
      } else {
        console.error('Progress poll failed:', response.status);
      }
    } catch (error) {
      console.error('Error polling progress:', error);
      return false; // Stop polling on error
    }
    
    return true; // Continue polling
  }, [sessionId, enabled]);

  useEffect(() => {
    if (!sessionId || !enabled) return;

    // For serverless, check if we already have a download URL
    // This means the conversion is complete
    if (progress.downloadUrl) {
      console.log('Progress already has downloadUrl, skipping polling');
      return;
    }

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
  }, [sessionId, enabled, pollProgress, progress.downloadUrl]);

  const resetProgress = useCallback(() => {
    setProgress({
      status: 'idle',
      message: '',
      progress: 0
    });
  }, []);

  return { progress, resetProgress };
};