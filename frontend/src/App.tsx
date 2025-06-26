import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import FileUpload from './components/FileUpload';
import ProgressBar from './components/ProgressBar';
import DownloadButton from './components/DownloadButton';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
const WS_URL = process.env.REACT_APP_WS_URL || 'ws://localhost:3001';

interface ProgressData {
  status: 'idle' | 'processing' | 'converting' | 'complete' | 'error';
  message: string;
  progress: number;
  currentPage?: number;
  totalPages?: number;
  downloadUrl?: string;
  substatus?: {
    task: string;
    current: number;
    total: number;
    taskProgress: number;
  };
}

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<ProgressData>({
    status: 'idle',
    message: '',
    progress: 0
  });
  const [sessionId, setSessionId] = useState<string | null>(null);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (sessionId) {
      const ws = new WebSocket(WS_URL);
      wsRef.current = ws;

      ws.onopen = () => {
        console.log('WebSocket connected, subscribing to session:', sessionId);
        ws.send(JSON.stringify({ type: 'subscribe', sessionId }));
      };

      ws.onmessage = (event) => {
        console.log('WebSocket message received:', event.data);
        const data = JSON.parse(event.data);
        if (data.type === 'progress' && data.sessionId === sessionId) {
          console.log('Progress update:', data);
          setProgress({
            status: data.status,
            message: data.message,
            progress: data.progress,
            currentPage: data.currentPage,
            totalPages: data.totalPages,
            downloadUrl: data.downloadUrl,
            substatus: data.substatus
          });
        }
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      ws.onclose = (event) => {
        console.log('WebSocket closed:', event.code, event.reason);
      };

      return () => {
        ws.close();
      };
    }
  }, [sessionId]);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    setProgress({ status: 'idle', message: '', progress: 0 });
  };

  const handleUpload = async () => {
    if (!file) return;

    // Generate session ID on frontend first
    const sessionId = `session-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    setSessionId(sessionId);

    const formData = new FormData();
    formData.append('pdf', file);
    formData.append('sessionId', sessionId); // Send session ID to backend

    try {
      setProgress({ status: 'processing', message: 'Uploading PDF...', progress: 5 });
      
      await axios.post(`${API_URL}/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

    } catch (error) {
      setProgress({
        status: 'error',
        message: 'Failed to upload PDF. Please try again.',
        progress: 0
      });
      console.error('Upload error:', error);
    }
  };

  const handleReset = () => {
    setFile(null);
    setProgress({ status: 'idle', message: '', progress: 0 });
    setSessionId(null);
    if (wsRef.current) {
      wsRef.current.close();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          PDF to Markdown Converter
        </h1>
        
        <div className="space-y-6">
          {progress.status === 'idle' && (
            <>
              <FileUpload onFileSelect={handleFileSelect} />
              {file && (
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                  <button
                    onClick={handleUpload}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Start Conversion
                  </button>
                </div>
              )}
            </>
          )}

          {(progress.status === 'processing' || progress.status === 'converting') && (
            <ProgressBar
              progress={progress.progress}
              message={progress.message}
              currentPage={progress.currentPage}
              totalPages={progress.totalPages}
              substatus={progress.substatus}
            />
          )}

          {progress.status === 'complete' && progress.downloadUrl && (
            <div className="text-center space-y-4">
              <div className="text-green-600 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg font-semibold mt-2">{progress.message}</p>
              </div>
              <DownloadButton downloadUrl={`${API_URL}${progress.downloadUrl}`} />
              <div className="mt-6">
                <button
                  onClick={handleReset}
                  className="text-sm text-gray-600 hover:text-gray-800 underline"
                >
                  Convert another PDF
                </button>
              </div>
            </div>
          )}

          {progress.status === 'error' && (
            <div className="text-center">
              <div className="text-red-600 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg font-semibold mt-2">{progress.message}</p>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;