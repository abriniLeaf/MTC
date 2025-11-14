import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-3 py-2 xl:px-4 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border border-blue-200 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md flex-shrink-0 group"
      aria-label="Toggle Language"
    >
      {/* Globe Icon */}
      <svg
        className="w-4 h-4 xl:w-5 xl:h-5 text-blue-600 group-hover:text-blue-700 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      
      {/* Language Text */}
      <span className="text-xs xl:text-sm font-semibold text-blue-700 group-hover:text-blue-800 transition-colors whitespace-nowrap">
        {language === 'en' ? 'ع' : 'EN'}
      </span>
      
      {/* Tooltip on hover - hidden on mobile */}
      <span className="hidden lg:block absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
        {language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
