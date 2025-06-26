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
  const [markdownContent, setMarkdownContent] = useState<string | null>(null);
  const [downloadFilename, setDownloadFilename] = useState<string | null>(null);
  const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<string>('');
  const [uploadStartTime, setUploadStartTime] = useState<number | null>(null);
  const [uploadPercentage, setUploadPercentage] = useState<number>(0);
  
  // Separate status tracking for different phases
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'complete' | 'error'>('idle');
  const [ocrStatus, setOcrStatus] = useState<'idle' | 'processing' | 'complete' | 'error'>('idle');
  const [overallProgress, setOverallProgress] = useState<number>(0);

  const { analysis, isAnalyzing, error: analysisError, analyzeFile, reset: resetAnalysis } = useFileAnalysis();
  const { login } = useAuth();
  const { progress, resetProgress } = useProgressPolling(sessionId, currentStep === 'processing');

  // Handle progress updates and completion
  useEffect(() => {
    if (progress.status === 'complete' && progress.downloadUrl) {
      setOcrStatus('complete');
      setOverallProgress(100);
      setDownloadUrl(progress.downloadUrl);
      setCurrentStep('complete');
      onConversionComplete?.(progress.downloadUrl);
    } else if (progress.status === 'error') {
      setOcrStatus('error');
      setError(progress.message || 'Conversion failed');
      setCurrentStep('error');
    } else if (progress.status === 'processing' && sessionId) {
      // Update OCR progress (second half of overall progress: 50% + progress/2)
      const ocrProgress = progress.progress || 0;
      setOverallProgress(50 + Math.floor(ocrProgress * 0.5));
    }
  }, [progress, onConversionComplete, sessionId]);

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

    // Check file size limit for serverless processing
    const fileSizeInMB = selectedFile.size / (1024 * 1024);
    if (fileSizeInMB > 3) {
      setError(`File too large for current infrastructure. Please try a file smaller than 3MB. Your file is ${fileSizeInMB.toFixed(1)}MB.`);
      setCurrentStep('error');
      return;
    }

    try {
      console.log('Starting conversion...', { isFree, fileName: selectedFile.name, sizeInMB: fileSizeInMB.toFixed(1) });
      
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
      const uploadUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api/upload`;
      console.log('Uploading to:', uploadUrl);
      console.log('File size:', selectedFile.size, 'bytes');
      
      // Shorter timeout for initial upload (2 minutes) - if it takes longer, it's likely a serverless timeout
      const uploadController = new AbortController();
      const uploadTimeoutId = setTimeout(() => {
        setUploadProgress('Upload timeout - file may be too large for serverless processing');
        uploadController.abort();
      }, 120000);
      
      let progressInterval: NodeJS.Timeout | null = null;
      
      try {
        // Start upload phase
        setUploadStatus('uploading');
        setUploadProgress('Starting upload...');
        setUploadPercentage(10);
        setOverallProgress(5); // Upload is first 50% of overall process
        
        // Simulate upload progress more accurately
        progressInterval = setInterval(() => {
          setUploadPercentage(prev => {
            const newProgress = prev < 50 ? prev + Math.random() * 8 :
                               prev < 75 ? prev + Math.random() * 4 :
                               prev < 90 ? prev + Math.random() * 2 :
                               prev + Math.random() * 0.5;
            
            // Update overall progress (upload is 50% of total)
            setOverallProgress(Math.floor(newProgress * 0.5));
            return newProgress;
          });
        }, 800);
        
        const uploadResponse = await fetch(uploadUrl, {
          method: 'POST',
          body: formData,
          signal: uploadController.signal,
        });
        
        if (progressInterval) clearInterval(progressInterval);
        setUploadPercentage(100);
        setUploadStatus('complete');
        setOverallProgress(50); // Upload complete, now 50% done overall
        clearTimeout(uploadTimeoutId);
        console.log('Upload response status:', uploadResponse.status);
        console.log('Upload response headers:', Object.fromEntries(uploadResponse.headers.entries()));
        
        if (!uploadResponse.ok) {
          setUploadStatus('error');
          const errorData = await uploadResponse.text();
          console.error('Upload failed with status:', uploadResponse.status, 'Data:', errorData);
          throw new Error(`Upload failed (${uploadResponse.status}): ${errorData}`);
        }
        
        setUploadProgress('Upload complete, processing PDF...');
        setOcrStatus('processing'); // Start OCR phase
        const uploadResult = await uploadResponse.json();
        console.log('Upload result:', uploadResult);
        
        if (!uploadResult.success) {
          throw new Error(uploadResult.error || 'Upload failed');
        }
        
        setSessionId(uploadResult.sessionId);
        
        // Check if processing is complete or we need to poll for progress
        if (uploadResult.downloadUrl) {
          setOcrStatus('complete');
          setOverallProgress(100);
          setDownloadUrl(uploadResult.downloadUrl);
          setCurrentStep('complete');
          console.log('Processing complete immediately');
          
          // Store markdown content for direct download
          if (uploadResult.markdownContent && uploadResult.filename) {
            setMarkdownContent(uploadResult.markdownContent);
            setDownloadFilename(uploadResult.filename);
            console.log('Markdown content stored for direct download');
          }
        } else {
          // Continue with progress polling for OCR
          setUploadProgress('OCR processing started...');
          console.log('Waiting for OCR processing, session:', uploadResult.sessionId);
        }
        
        setUploadProgress('');
        
      } catch (uploadError: any) {
        // Clear any ongoing progress interval
        if (progressInterval) {
          clearInterval(progressInterval);
        }
        clearTimeout(uploadTimeoutId);
        if (uploadError.name === 'AbortError') {
          console.error('Upload timeout after 2 minutes');
          setUploadProgress('Upload timeout - serverless function limit reached');
          throw new Error('Upload timeout - file may be too large for current infrastructure');
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
    setMarkdownContent(null);
    setDownloadFilename(null);
    setPaymentIntentId(null);
    setSessionId(null);
    setUploadProgress('');
    setUploadStartTime(null);
    setUploadPercentage(0);
    
    // Reset all status tracking
    setUploadStatus('idle');
    setOcrStatus('idle');
    setOverallProgress(0);
    
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
            {/* Overall Progress */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Converting PDF to Markdown</h2>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div className="bg-green-600 h-3 rounded-full transition-all duration-500" style={{ 
                  width: `${overallProgress}%` 
                }}></div>
              </div>
              <p className="text-sm text-gray-600">{overallProgress}% Complete</p>
            </div>

            {/* Upload Phase */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-2">
                {uploadStatus === 'uploading' && (
                  <svg className="w-5 h-5 text-blue-600 animate-spin mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                )}
                {uploadStatus === 'complete' && (
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {uploadStatus === 'error' && (
                  <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                <h3 className="text-lg font-medium text-gray-900">1. Upload File</h3>
              </div>
              {uploadStatus === 'uploading' && (
                <>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ 
                      width: `${uploadPercentage}%` 
                    }}></div>
                  </div>
                  <p className="text-sm text-gray-600">{uploadProgress || 'Uploading...'}</p>
                </>
              )}
              {uploadStatus === 'complete' && (
                <p className="text-sm text-green-600">File uploaded successfully</p>
              )}
              {uploadStatus === 'error' && (
                <p className="text-sm text-red-600">Upload failed</p>
              )}
            </div>

            {/* OCR Phase */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-2">
                {ocrStatus === 'processing' && (
                  <svg className="w-5 h-5 text-blue-600 animate-spin mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                )}
                {ocrStatus === 'complete' && (
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {ocrStatus === 'error' && (
                  <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                {ocrStatus === 'idle' && uploadStatus === 'complete' && (
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <h3 className="text-lg font-medium text-gray-900">2. OCR Processing</h3>
              </div>
              {ocrStatus === 'processing' && (
                <>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ 
                      width: `${progress.progress || 0}%` 
                    }}></div>
                  </div>
                  <p className="text-sm text-gray-600">{progress.message || 'Processing with Mistral AI...'}</p>
                </>
              )}
              {ocrStatus === 'complete' && (
                <p className="text-sm text-green-600">OCR processing completed</p>
              )}
              {ocrStatus === 'error' && (
                <p className="text-sm text-red-600">OCR processing failed</p>
              )}
              {ocrStatus === 'idle' && uploadStatus === 'complete' && (
                <p className="text-sm text-gray-600">Waiting to start OCR processing...</p>
              )}
            </div>

            {uploadStartTime && (Date.now() - uploadStartTime) > 90000 && uploadStatus === 'uploading' && (
              <button
                onClick={() => {
                  setError('Upload timeout - file may be too large for serverless processing');
                  setCurrentStep('error');
                }}
                className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
              >
                Cancel Upload
              </button>
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
            <DownloadButton 
              downloadUrl={downloadUrl ? `${process.env.REACT_APP_API_URL || 'http://localhost:3001'}${downloadUrl}` : undefined}
              markdownContent={markdownContent || undefined}
              filename={downloadFilename || undefined}
            />
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