import React from 'react';

interface DownloadButtonProps {
  downloadUrl: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ downloadUrl }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      // Extract filename from URL or use default
      const urlParts = downloadUrl.split('/');
      const serverFilename = urlParts[urlParts.length - 1];
      link.download = serverFilename || 'converted.md';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the object URL
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to direct link
      window.open(downloadUrl, '_blank');
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
    >
      <svg 
        className="w-5 h-5 mr-2" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
        />
      </svg>
      Download Markdown
    </button>
  );
};

export default DownloadButton;