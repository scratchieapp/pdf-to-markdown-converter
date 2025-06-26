import React from 'react';

const EnvDebugger: React.FC = () => {
  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const envVars = {
    'REACT_APP_API_URL': process.env.REACT_APP_API_URL,
    'REACT_APP_WS_URL': process.env.REACT_APP_WS_URL,
    'REACT_APP_STRIPE_PUBLISHABLE_KEY': process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY ? 'Set (hidden)' : 'Not set',
    'REACT_APP_GOOGLE_CLIENT_ID': process.env.REACT_APP_GOOGLE_CLIENT_ID ? 'Set (hidden)' : 'Not set',
    'NODE_ENV': process.env.NODE_ENV,
  };

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg text-xs max-w-xs">
      <h3 className="font-bold mb-2">Environment Variables</h3>
      {Object.entries(envVars).map(([key, value]) => (
        <div key={key} className="mb-1">
          <span className="text-gray-400">{key}:</span>{' '}
          <span className={value && value !== 'Not set' ? 'text-green-400' : 'text-red-400'}>
            {value || 'Not set'}
          </span>
        </div>
      ))}
    </div>
  );
};

export default EnvDebugger;