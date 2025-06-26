import React, { useEffect } from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';

interface GoogleSignInProps {
  onSuccess: (credentialResponse: CredentialResponse) => void;
  onError: (error: string) => void;
}

const GoogleSignIn: React.FC<GoogleSignInProps> = ({ onSuccess, onError }) => {
  useEffect(() => {
    // Debug current URL and expected redirect URI
    console.log('=== Google OAuth Debug Info ===');
    console.log('Current URL:', window.location.href);
    console.log('Origin:', window.location.origin);
    console.log('Hostname:', window.location.hostname);
    console.log('Protocol:', window.location.protocol);
    console.log('Google Client ID:', process.env.REACT_APP_GOOGLE_CLIENT_ID);
    console.log('Google Client ID length:', process.env.REACT_APP_GOOGLE_CLIENT_ID?.length);
    console.log('================================');
    
    // Check backend OAuth debug
    fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api/debug-oauth`)
      .then(res => res.json())
      .then(data => console.log('Backend OAuth Debug:', data))
      .catch(err => console.error('Failed to fetch OAuth debug:', err));
  }, []);

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    console.log('Google sign-in successful:', credentialResponse);
    onSuccess(credentialResponse);
  };

  const handleError = () => {
    console.error('Google sign-in error occurred');
    onError('Google sign-in failed. Please try again.');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Sign in for Free Conversion
        </h3>
        <p className="text-sm text-gray-600">
          Convert up to 10 pages free with your Google account
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            theme="outline"
            size="large"
            width="300"
            text="signin_with"
          />
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            By signing in, you agree to our terms and privacy policy
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span>Secure authentication with Google</span>
        </div>
      </div>
    </div>
  );
};

export default GoogleSignIn;