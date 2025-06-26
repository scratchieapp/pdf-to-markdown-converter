import React from 'react';

interface FooterProps {
  onContactClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="text-sm text-gray-300">
              Copyright 2025 Scratchie Pty Limited
            </div>
            {onContactClick && (
              <button
                onClick={onContactClick}
                className="text-sm text-blue-400 hover:text-blue-300 underline"
              >
                Contact Us
              </button>
            )}
          </div>
          <div className="text-sm text-gray-300 flex items-center">
            Made with ❤️ in Marseille, France
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;