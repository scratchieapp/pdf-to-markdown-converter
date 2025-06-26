import { useState } from 'react';

interface FileAnalysis {
  fileName: string;
  pageCount: number;
  fileSize: number;
  isFreeEligible: boolean;
  price: number;
  message: string;
}

interface UseFileAnalysisResult {
  analysis: FileAnalysis | null;
  isAnalyzing: boolean;
  error: string | null;
  analyzeFile: (file: File) => Promise<void>;
  reset: () => void;
}

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const useFileAnalysis = (): UseFileAnalysisResult => {
  const [analysis, setAnalysis] = useState<FileAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeFile = async (file: File): Promise<void> => {
    setIsAnalyzing(true);
    setError(null);
    setAnalysis(null);

    try {
      console.log('Analyzing file:', file.name, 'Size:', file.size, 'Type:', file.type);
      console.log('API URL:', `${API_URL}/api/analyze-pdf`);
      
      const formData = new FormData();
      formData.append('pdf', file);

      const response = await fetch(`${API_URL}/api/analyze-pdf`, {
        method: 'POST',
        body: formData,
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = { error: `HTTP ${response.status}: ${response.statusText}` };
        }
        console.error('API Error:', errorData);
        throw new Error(errorData.error || `Failed to analyze PDF (${response.status})`);
      }

      const data = await response.json();
      console.log('Analysis result:', data);
      setAnalysis(data.analysis);
    } catch (err) {
      console.error('Analysis error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to analyze PDF';
      setError(errorMessage);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const reset = () => {
    setAnalysis(null);
    setError(null);
    setIsAnalyzing(false);
  };

  return {
    analysis,
    isAnalyzing,
    error,
    analyzeFile,
    reset,
  };
};