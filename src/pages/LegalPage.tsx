import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import translations from '@/locales/translations.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type LegalPageType = 'cookies' | 'privacy' | 'terms';

interface LegalPageProps {
  pageType: LegalPageType;
}

const LegalPage: React.FC<LegalPageProps> = ({ pageType }) => {
  const { language, isRTL } = useLanguage();
  const t = translations.legalPages;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the appropriate content based on page type
  const pageData = t[pageType];
  const title = pageData.title[language as 'en' | 'ar'];
  const content = pageData.content[language as 'en' | 'ar'];
  const lastUpdatedText = t.lastUpdated[language as 'en' | 'ar'];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-4xl mx-auto px-4 mt-15 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Last Updated */}
        <p className="text-gray-600 text-sm mb-6" dir={isRTL ? 'rtl' : 'ltr'}>
          {lastUpdatedText} 12th July 2025
        </p>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {title}
        </h1>

        {/* Content */}
        <div
          className={`legal-content prose prose-lg max-w-none ${isRTL ? 'prose-rtl' : ''}`}
          dangerouslySetInnerHTML={{ __html: content }}
          dir={isRTL ? 'rtl' : 'ltr'}
        />
      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;
