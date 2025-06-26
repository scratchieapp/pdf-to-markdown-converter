import React, { useState, useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import FileUpload from './FileUpload';
import FileAnalysis from './FileAnalysis';
import GoogleSignIn from './GoogleSignIn';
import PaymentForm from './PaymentForm';
import ProgressBar from './ProgressBar';
import DownloadButton from './DownloadButton';
import { useFileAnalysis } from '../hooks/useFileAnalysis';
import { useAuth, useAuthProvider, AuthContext } from '../hooks/useAuth';
import { useProgressPolling } from '../hooks/useProgressPolling';

// Debug environment variables
console.log('Stripe publishable key:', process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY ? 'Set' : 'Not set');
console.log('Google client ID:', process.env.REACT_APP_GOOGLE_CLIENT_ID ? 'Set' : 'Not set');
console.log('API URL:', process.env.REACT_APP_API_URL);

const stripePublishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  console.error('Missing REACT_APP_STRIPE_PUBLISHABLE_KEY environment variable');
}

const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;

type FlowStep = 'upload' | 'analysis' | 'auth' | 'payment' | 'processing' | 'complete' | 'error';

interface SmartUploadFlowProps {
  onConversionComplete?: (downloadUrl: string) => void;
}

const SmartUploadFlowContent: React.FC<SmartUploadFlowProps> = ({ onConversionComplete }) => {
  const [currentStep, setCurrentStep] = useState<FlowStep>('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);

  const { analysis, isAnalyzing, error: analysisError, analyzeFile, reset: resetAnalysis } = useFileAnalysis();
  const { login } = useAuth();
  const { progress, resetProgress } = useProgressPolling(sessionId, currentStep === 'processing');

  // Handle progress updates and completion
  useEffect(() => {
    if (progress.status === 'complete' && progress.downloadUrl) {
      setDownloadUrl(progress.downloadUrl);
      setCurrentStep('complete');
      onConversionComplete?.(progress.downloadUrl);
    } else if (progress.status === 'error') {
      setError(progress.message || 'Conversion failed');
      setCurrentStep('error');
    }
  }, [progress, onConversionComplete]);

  const handleFileSelect = async (file: File) => {
    setSelectedFile(file);
    setError(null);
    setCurrentStep('analysis');
    
    try {
      await analyzeFile(file);
    } catch (err) {
      setError('Failed to analyze PDF. Please try again.');
      setCurrentStep('error');
    }
  };

  const handleAnalysisProceed = () => {
    if (!analysis) return;

    if (analysis.isFreeEligible) {
      setCurrentStep('auth');
    } else {
      setCurrentStep('payment');
    }
  };

  const handleGoogleSignInSuccess = async (credentialResponse: any) => {
    try {
      if (!credentialResponse.credential) {
        throw new Error('No credential received');
      }

      await login(credentialResponse.credential);
      
      // Check if user can use free trial
      setCurrentStep('processing');
      await startConversion(true); // true = free conversion
    } catch (err) {
      setError('Sign-in failed. Please try again.');
      setCurrentStep('error');
    }
  };

  const handlePaymentSuccess = async (paymentId: string) => {
    setPaymentIntentId(paymentId);
    setCurrentStep('processing');
    await startConversion(false); // false = paid conversion
  };

  const startConversion = async (isFree: boolean) => {
    if (!selectedFile || !analysis) return;

    try {
      const formData = new FormData();
      formData.append('pdf', selectedFile);
      
      if (isFree) {
        // Mark free trial as used
        const token = localStorage.getItem('auth_token');
        if (token) {
          await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api/auth/use-free-trial`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
          });
        }
      } else if (paymentIntentId) {
        formData.append('paymentIntentId', paymentIntentId);
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Conversion failed');
      }

      const result = await response.json();
      setSessionId(result.sessionId);
      setDownloadUrl(result.downloadUrl);
      
      // The polling will handle progress updates and completion detection

    } catch (err) {
      setError('Conversion failed. Please try again.');
      setCurrentStep('error');
    }
  };

  const handleReset = () => {
    setCurrentStep('upload');
    setSelectedFile(null);
    setError(null);
    setDownloadUrl(null);
    setPaymentIntentId(null);
    setSessionId(null);
    resetProgress();
    resetAnalysis();
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'upload':
        return <FileUpload onFileSelect={handleFileSelect} />;

      case 'analysis':
        if (isAnalyzing) {
          return (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Analyzing PDF...</p>
            </div>
          );
        }

        if (analysisError) {
          return (
            <div className="text-center py-8">
              <div className="text-red-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <p className="text-red-600 mb-4">{analysisError}</p>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Try Again
              </button>
            </div>
          );
        }

        if (analysis) {
          return (
            <FileAnalysis
              fileName={analysis.fileName}
              pageCount={analysis.pageCount}
              fileSize={analysis.fileSize}
              isFreeEligible={analysis.isFreeEligible}
              price={analysis.price}
              message={analysis.message}
              onProceed={handleAnalysisProceed}
              onCancel={handleReset}
            />
          );
        }
        break;

      case 'auth':
        return (
          <GoogleSignIn
            onSuccess={handleGoogleSignInSuccess}
            onError={(error) => {
              setError(error);
              setCurrentStep('error');
            }}
          />
        );

      case 'payment':
        if (!analysis) return null;
        if (!stripePromise) {
          return (
            <div className="text-center py-8">
              <div className="text-red-600 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg font-semibold mt-2">Payment system not configured</p>
                <p className="text-sm text-gray-600 mt-2">Please contact support or try again later.</p>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Go Back
              </button>
            </div>
          );
        }
        return (
          <Elements stripe={stripePromise}>
            <PaymentForm
              amount={analysis.price}
              fileName={analysis.fileName}
              pageCount={analysis.pageCount}
              onSuccess={handlePaymentSuccess}
              onError={(error) => {
                setError(error);
                setCurrentStep('error');
              }}
              onCancel={handleReset}
            />
          </Elements>
        );

      case 'processing':
        return (
          <div className="text-center py-8">
            <ProgressBar
              progress={progress.progress}
              message={progress.message}
              currentPage={undefined}
              totalPages={undefined}
            />
          </div>
        );

      case 'complete':
        if (!downloadUrl) return null;
        return (
          <div className="text-center py-8">
            <div className="text-green-600 mb-6">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-lg font-semibold mt-2">Conversion Complete!</p>
            </div>
            <DownloadButton downloadUrl={`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}${downloadUrl}`} />
            <div className="mt-6">
              <button
                onClick={handleReset}
                className="text-sm text-gray-600 hover:text-gray-800 underline"
              >
                Convert another PDF
              </button>
            </div>
          </div>
        );

      case 'error':
        return (
          <div className="text-center py-8">
            <div className="text-red-600 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-lg font-semibold mt-2">{error}</p>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {renderCurrentStep()}
    </div>
  );
};

const SmartUploadFlow: React.FC<SmartUploadFlowProps> = (props) => {
  const authValue = useAuthProvider();
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';
  
  if (!googleClientId) {
    console.error('Missing REACT_APP_GOOGLE_CLIENT_ID environment variable');
  }

  return (
    <GoogleOAuthProvider 
      clientId={googleClientId}
      onScriptLoadError={() => console.error('Google OAuth script load error')}
      onScriptLoadSuccess={() => console.log('Google OAuth script loaded successfully')}
    >
      <AuthContext.Provider value={authValue}>
        <SmartUploadFlowContent {...props} />
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
};

export default SmartUploadFlow;