import React from 'react';

interface DownloadButtonProps {
  downloadUrl?: string;
  markdownContent?: string;
  filename?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ downloadUrl, markdownContent, filename }) => {
  const handleDownload = async () => {
    try {
      // If we have direct markdown content, use it (more reliable for serverless)
      if (markdownContent && filename) {
        console.log('Using direct markdown content for download');
        const blob = new Blob([markdownContent], { type: 'text/markdown' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
        return;
      }

      // Fallback to server download
      if (!downloadUrl) {
        throw new Error('No download method available');
      }

      console.log('Using server download URL');
      const response = await fetch(downloadUrl);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server download failed:', errorText);
        throw new Error(`Download failed: ${response.status}`);
      }
      
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
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try converting the file again.');
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