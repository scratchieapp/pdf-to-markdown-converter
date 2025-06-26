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
const stripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
const isTestMode = stripeKey?.startsWith('pk_test_');
console.log('Stripe publishable key:', stripeKey ? `Set (${isTestMode ? 'TEST' : 'LIVE'} mode)` : 'Not set');
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
  const [uploadProgress, setUploadProgress] = useState<string>('');
  const [uploadStartTime, setUploadStartTime] = useState<number | null>(null);

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
    console.log('Payment successful, payment intent ID:', paymentId);
    setPaymentIntentId(paymentId);
    // Don't set processing step until after upload starts
    await startConversion(false); // false = paid conversion
  };

  const startConversion = async (isFree: boolean) => {
    if (!selectedFile || !analysis) {
      console.error('Missing file or analysis:', { selectedFile, analysis });
      return;
    }

    try {
      console.log('Starting conversion...', { isFree, fileName: selectedFile.name });
      
      // Set processing step now that we're starting
      setCurrentStep('processing');
      setUploadProgress('Preparing upload...');
      
      const formData = new FormData();
      formData.append('pdf', selectedFile);
      
      if (isFree) {
        // Mark free trial as used
        setUploadProgress('Updating free trial status...');
        const token = localStorage.getItem('auth_token');
        if (token) {
          console.log('Marking free trial as used...');
          const freeTrialResponse = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api/auth/use-free-trial`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
          });
          console.log('Free trial response:', freeTrialResponse.status);
        }
      } else if (paymentIntentId) {
        console.log('Adding payment intent to form:', paymentIntentId);
        formData.append('paymentIntentId', paymentIntentId);
      }

      setUploadProgress('Uploading PDF file...');
      setUploadStartTime(Date.now());
      // Use upload-only endpoint to avoid timeout issues
      const uploadUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api/upload-only`;
      console.log('Uploading to:', uploadUrl);
      console.log('File size:', selectedFile.size, 'bytes');
      
      // Longer timeout for actual upload (2 minutes)
      const uploadController = new AbortController();
      const uploadTimeoutId = setTimeout(() => {
        setUploadProgress('Upload timeout - file may be too large');
        uploadController.abort();
      }, 120000);
      
      try {
        const uploadResponse = await fetch(uploadUrl, {
          method: 'POST',
          body: formData,
          signal: uploadController.signal,
        });
        
        clearTimeout(uploadTimeoutId);
        console.log('Upload response:', uploadResponse.status);
        
        if (!uploadResponse.ok) {
          const errorData = await uploadResponse.text();
          console.error('Upload failed:', errorData);
          throw new Error(`Upload failed: ${errorData}`);
        }
        
        setUploadProgress('Processing response...');
        const uploadResult = await uploadResponse.json();
        console.log('Upload result:', uploadResult);
        
        setSessionId(uploadResult.sessionId);
        
        // Now trigger OCR processing in background via simplified endpoint
        console.log('Starting background OCR processing...');
        setUploadProgress('Upload complete! Processing PDF with Mistral AI...');
        
        // Use the working upload endpoint for OCR processing
        const ocrFormData = new FormData();
        ocrFormData.append('pdf', selectedFile);
        if (paymentIntentId) {
          ocrFormData.append('paymentIntentId', paymentIntentId);
        }
        
        // Start OCR processing but don't wait for it - let progress polling handle it
        console.log('Making OCR request to:', `${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api/upload`);
        fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api/upload`, {
          method: 'POST',
          body: ocrFormData,
        }).then(async (ocrResponse) => {
          console.log('OCR processing response status:', ocrResponse.status);
          console.log('OCR processing response headers:', Object.fromEntries(ocrResponse.headers.entries()));
          
          if (ocrResponse.ok) {
            const ocrResult = await ocrResponse.json();
            console.log('OCR processing complete:', ocrResult);
            if (ocrResult.success && ocrResult.downloadUrl) {
              setDownloadUrl(ocrResult.downloadUrl);
              setCurrentStep('complete');
            }
          } else {
            const errorText = await ocrResponse.text();
            console.error('OCR processing failed with status:', ocrResponse.status, 'Error:', errorText);
            setError(`OCR processing failed: ${ocrResponse.status}`);
            setCurrentStep('error');
          }
        }).catch((ocrError) => {
          console.error('OCR processing network error:', ocrError);
          setError('OCR processing failed. Please try again.');
          setCurrentStep('error');
        });
        
        setUploadProgress('');
        
      } catch (uploadError: any) {
        clearTimeout(uploadTimeoutId);
        if (uploadError.name === 'AbortError') {
          console.error('Upload timeout after 2 minutes');
          setUploadProgress('Upload timeout - file may be too large');
          throw new Error('Upload timeout - file may be too large');
        }
        setUploadProgress(`Upload failed: ${uploadError.message}`);
        throw uploadError;
      }

    } catch (err) {
      console.error('Conversion error:', err);
      setError('Conversion failed. Please try again.');
      setCurrentStep('error');
      setUploadProgress('');
    }
  };

  const handleReset = () => {
    setCurrentStep('upload');
    setSelectedFile(null);
    setError(null);
    setDownloadUrl(null);
    setPaymentIntentId(null);
    setSessionId(null);
    setUploadProgress('');
    setUploadStartTime(null);
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
        console.log('Rendering processing step, progress:', progress);
        console.log('Session ID:', sessionId);
        console.log('Upload progress:', uploadProgress);
        return (
          <div className="text-center py-8">
            {/* Upload Progress Section */}
            {!sessionId && (
              <div className="mb-6">
                <div className="text-blue-600 mb-2">
                  <svg className="w-8 h-8 mx-auto animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Uploading PDF</h3>
                <p className="text-sm text-gray-600">{uploadProgress || 'Preparing upload...'}</p>
                {uploadStartTime && (
                  <p className="text-xs text-gray-500 mt-1">
                    {Math.floor((Date.now() - uploadStartTime) / 1000)}s elapsed
                  </p>
                )}
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000" style={{ 
                    width: uploadStartTime ? `${Math.min(90, (Date.now() - uploadStartTime) / 1000 * 3)}%` : '10%' 
                  }}></div>
                </div>
                {uploadStartTime && (Date.now() - uploadStartTime) > 30000 && (
                  <p className="text-xs text-orange-600 mt-2">
                    Upload taking longer than expected... This may indicate OCR processing has started.
                  </p>
                )}
                {uploadStartTime && (Date.now() - uploadStartTime) > 60000 && (
                  <button
                    onClick={() => {
                      setError('Upload timeout - please try again with a smaller PDF');
                      setCurrentStep('error');
                    }}
                    className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
                  >
                    Cancel Upload
                  </button>
                )}
              </div>
            )}
            
            {/* OCR Processing Section */}
            {sessionId && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Processing with Mistral AI</h3>
                <ProgressBar
                  progress={progress.progress}
                  message={progress.message || 'Converting PDF to Markdown...'}
                  currentPage={undefined}
                  totalPages={undefined}
                />
                {progress.status === 'idle' && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      Starting OCR processing... Session: {sessionId.substring(0, 8)}...
                    </p>
                  </div>
                )}
              </div>
            )}
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