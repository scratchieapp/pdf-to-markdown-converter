import React from 'react';

interface FileAnalysisProps {
  fileName: string;
  pageCount: number;
  fileSize: number;
  isFreeEligible: boolean;
  price: number;
  message: string;
  onProceed: () => void;
  onCancel: () => void;
}

const FileAnalysis: React.FC<FileAnalysisProps> = ({
  fileName,
  pageCount,
  fileSize,
  isFreeEligible,
  price,
  message,
  onProceed,
  onCancel,
}) => {
  const formatFileSize = (bytes: number): string => {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF Analysis Complete</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>File:</span>
              <span className="font-medium">{fileName}</span>
            </div>
            <div className="flex justify-between">
              <span>Pages:</span>
              <span className="font-medium">{pageCount}</span>
            </div>
            <div className="flex justify-between">
              <span>Size:</span>
              <span className="font-medium">{formatFileSize(fileSize)}</span>
            </div>
          </div>
        </div>
        
        <div className="ml-4">
          {isFreeEligible ? (
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Free Trial Eligible
            </div>
          ) : (
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              ${price} to Convert
            </div>
          )}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-center text-lg font-medium text-gray-900">
          {message}
        </p>
        {!isFreeEligible && (
          <p className="text-center text-sm text-gray-600 mt-2">
            Powered by Mistral AI • Instant processing • Up to 500 pages
          </p>
        )}
      </div>

      <div className="flex space-x-3">
        <button
          onClick={onCancel}
          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Choose Different File
        </button>
        <button
          onClick={onProceed}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            isFreeEligible
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isFreeEligible ? 'Sign In & Convert Free' : `Pay $${price} & Convert`}
        </button>
      </div>
    </div>
  );
};

export default FileAnalysis;