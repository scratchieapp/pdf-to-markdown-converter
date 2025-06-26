import React from 'react';

interface ProgressBarProps {
  progress: number;
  message: string;
  currentPage?: number;
  totalPages?: number;
  substatus?: {
    task: string;
    current: number;
    total: number;
    taskProgress: number;
  };
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  message, 
  currentPage, 
  totalPages,
  substatus
}) => {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <p className="text-lg font-medium text-gray-700 mb-2">{message}</p>
        {currentPage && totalPages && (
          <p className="text-xs text-gray-500">
            Page {currentPage} of {totalPages}
          </p>
        )}
      </div>
      
      {/* Main Progress Bar */}
      <div className="relative">
        <div className="overflow-hidden h-4 text-xs flex rounded-full bg-gray-200">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500 ease-out"
          />
        </div>
        <div className="text-center mt-2">
          <span className="text-sm font-semibold text-gray-700">Overall: {progress}%</span>
        </div>
      </div>

      {/* Substatus Progress */}
      {substatus && (
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="text-center mb-2">
            <p className="text-sm font-medium text-gray-600">{substatus.task}</p>
            <p className="text-xs text-gray-500">
              {substatus.current} of {substatus.total} completed
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-300">
              <div
                style={{ width: `${substatus.taskProgress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-300 ease-out"
              />
            </div>
            <div className="text-center mt-1">
              <span className="text-xs font-medium text-gray-600">{substatus.taskProgress}%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;