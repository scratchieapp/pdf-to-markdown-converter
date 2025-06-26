import React, { useState, useEffect } from 'react';

const ApiHealthCheck: React.FC = () => {
  const [health, setHealth] = useState<{ status: string; message?: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const checkHealth = async () => {
    setLoading(true);
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
    
    try {
      console.log('Checking health at:', `${apiUrl}/api/health`);
      const response = await fetch(`${apiUrl}/api/health`);
      
      console.log('Health check response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('Health check data:', data);
        setHealth({ status: 'healthy', message: 'API is responding' });
      } else {
        setHealth({ status: 'error', message: `HTTP ${response.status}` });
      }
    } catch (error) {
      console.error('Health check error:', error);
      setHealth({ status: 'error', message: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkHealth();
  }, []);

  // Only show in development or if there's an error
  if (process.env.NODE_ENV === 'production' && health?.status === 'healthy') {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 bg-white border rounded-lg shadow-lg p-4 max-w-sm z-50">
      <h3 className="font-bold text-sm mb-2">API Health Check</h3>
      <div className="text-xs space-y-1">
        <div>URL: {process.env.REACT_APP_API_URL}</div>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${
            loading ? 'bg-yellow-500' : 
            health?.status === 'healthy' ? 'bg-green-500' : 'bg-red-500'
          }`}></div>
          <span>{
            loading ? 'Checking...' :
            health?.status === 'healthy' ? 'API Healthy' :
            `Error: ${health?.message || 'Unknown'}`
          }</span>
        </div>
        <button 
          onClick={checkHealth}
          className="text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded mt-2"
          disabled={loading}
        >
          Recheck
        </button>
      </div>
    </div>
  );
};

export default ApiHealthCheck;