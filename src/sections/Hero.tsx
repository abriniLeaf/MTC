import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section id="hero" className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('hero.title')}
            </h1>

            <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              {/* Icons */}
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className={`bg-white p-6 rounded-2xl shadow-lg mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t('hero.subtitle')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'} grid grid-cols-1 sm:grid-cols-2 gap-4`}>
            {/* Large Card */}
            <div className="sm:col-span-2 bg-gradient-to-br from-blue-100 to-purple-200 rounded-3xl p-8 relative overflow-hidden min-h-[200px] group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className={`text-2xl font-bold text-gray-900 relative z-10 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('services.outsourcing')}
              </h3>
              {/* Decorative gradient blob */}
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-30"></div>
            </div>

            {/* UI/UX Card */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl p-6 min-h-[160px] group hover:shadow-xl transition-shadow duration-300">
              <h3 className={`text-xl font-bold text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('services.uiux')}
              </h3>
            </div>

            {/* Software Solutions Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 min-h-[160px] group hover:shadow-xl transition-shadow duration-300">
              <h3 className={`text-xl font-bold text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('services.software')}
              </h3>
            </div>

            {/* Quality Assurance Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 min-h-[160px] group hover:shadow-xl transition-shadow duration-300">
              <h3 className={`text-xl font-bold text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('services.quality')}
              </h3>
              {/* Decorative gradient */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
            </div>

            {/* Consulting Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg min-h-[160px] border border-gray-200 group hover:shadow-xl transition-shadow duration-300">
              <h3 className={`text-xl font-bold text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('services.consulting')}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
