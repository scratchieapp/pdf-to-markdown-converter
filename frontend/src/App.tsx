import React from 'react';
import SmartUploadFlow from './components/SmartUploadFlow';
import EnvDebugger from './components/EnvDebugger';
import ApiHealthCheck from './components/ApiHealthCheck';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The No-Nonsense PDF to Markdown Converter
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Powered by Mistral AI • Convert 500-page documents in minutes
          </p>
          <p className="text-lg text-gray-500">
            <span className="text-green-600 font-semibold">Free trial: 10 pages</span>
            {' • '}
            <span className="text-blue-600 font-semibold">Full service: $5/document</span>
          </p>
        </div>
      </div>

      {/* Main Upload Area */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full bg-white rounded-lg shadow-lg p-8">
          <SmartUploadFlow 
            onConversionComplete={(downloadUrl) => {
              console.log('Conversion completed:', downloadUrl);
            }}
          />
        </div>
      </div>

      {/* Trust Signals */}
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Secure payments by Stripe</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Latest Mistral AI technology</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Instant processing</span>
          </div>
        </div>
      </div>
      
      <ApiHealthCheck />
      <EnvDebugger />
    </div>
  );
}

export default App;