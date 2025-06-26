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
      const formData = new FormData();
      formData.append('pdf', file);

      const response = await fetch(`${API_URL}/api/analyze/pdf`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to analyze PDF');
      }

      const data = await response.json();
      setAnalysis(data.analysis);
    } catch (err) {
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