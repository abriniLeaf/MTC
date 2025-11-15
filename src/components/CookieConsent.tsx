import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Cookie, Shield, Settings } from 'lucide-react';

const CookieConsent = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Enable analytics, tracking, etc.
    console.log('Cookies accepted');
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    // Disable non-essential cookies
    console.log('Cookies rejected');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 md:p-4 animate-slide-up">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-white via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/20 rounded-xl shadow-xl border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500"></div>
          
          <div className={`relative p-4 md:p-5 ${isRTL ? 'text-right' : 'text-left'}`}>
            {/* Close button */}
            <button
              onClick={handleClose}
              className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all hover:rotate-90 duration-300`}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              {/* Icon with gradient background */}
              <div className="flex-shrink-0">
                <div className="relative w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/30 transform hover:scale-105 transition-transform duration-300">
                  <Cookie className="w-5 h-5 text-white" />
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
                    {t('cookieConsent.title')}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                  {t('cookieConsent.description')}{' '}
                  <a
                    href="/privacy"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline decoration-2 underline-offset-2 font-semibold transition-colors"
                  >
                    {t('cookieConsent.privacyPolicy')}
                  </a>
                  {' '}{t('cookieConsent.and')}{' '}
                  <a
                    href="/terms"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline decoration-2 underline-offset-2 font-semibold transition-colors"
                  >
                    {t('cookieConsent.cookiePolicy')}
                  </a>
                  .
                </p>

                {/* Cookie details toggle */}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>{showDetails ? 'Hide Details' : 'Manage Preferences'}</span>
                </button>

                {/* Expandable details */}
                {showDetails && (
                  <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 animate-fadeIn">
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <input type="checkbox" checked disabled className="mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">Essential Cookies</p>
                          <p className="text-gray-600 dark:text-gray-400 text-[10px]">Required for basic site functionality</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" defaultChecked className="mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">Analytics Cookies</p>
                          <p className="text-gray-600 dark:text-gray-400 text-[10px]">Help us improve your experience</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" defaultChecked className="mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">Marketing Cookies</p>
                          <p className="text-gray-600 dark:text-gray-400 text-[10px]">Personalized content and ads</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto lg:flex-shrink-0">
                <button
                  onClick={handleReject}
                  className="px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  {t('cookieConsent.reject')}
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-200 shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 transform hover:-translate-y-0.5"
                >
                  {t('cookieConsent.accept')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
