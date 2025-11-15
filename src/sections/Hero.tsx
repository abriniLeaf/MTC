import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import meetTechLogo from '../assets/meet_tech_logo.png';
import heroBackground from '../assets/hero_background .png';
import ServiceCardsGrid from '../components/ServiceCardsGrid';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-0 md:gap-0 lg:gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 leading-tight whitespace-pre-line ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('hero.where_tecnology')}
              {t('hero.meets_strategy')}
            </h1>


          </div>

          {/* Right Content - Service Cards */}
          <div className={`flex flex-col transition-all duration-1000 ease-out delay-300 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}>
            {/* Large Card */}
            <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              {/* Logo */}
              <div className="flex gap-3">
                <img src={meetTechLogo} alt="Meet Tech Logo" className="h-7 w-auto object-contain" />
              </div>
            </div>

            <div className={`rounded-2xl ${isRTL ? 'text-right' : 'text-left'}`}>

              <p className="text-primary leading-relaxed">
             <span className="font-bold ">{t('hero.subtitle')}</span> {t('hero.description')}
              </p>
            </div>
          </div>

        </div>
        <div className={`transition-all mt-8 duration-1000 ease-out delay-500 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}>
            <ServiceCardsGrid></ServiceCardsGrid>
          </div>
      </div>
    </section>
  );
};

export default Hero;


// <div className="sm:col-span-2 bg-gradient-to-br from-blue-100 to-purple-200 rounded-3xl p-8 relative overflow-hidden min-h-[200px] group hover:shadow-xl transition-shadow duration-300">
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               <h3 className={`text-2xl font-bold text-gray-900 relative z-10 ${isRTL ? 'text-right' : 'text-left'}`}>
//                 {t('services.outsourcing')}
//               </h3>

//               <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-30"></div>
//             </div>


//             <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl p-6 min-h-[160px] group hover:shadow-xl transition-shadow duration-300">
//               <h3 className={`text-xl font-bold text-white ${isRTL ? 'text-right' : 'text-left'}`}>
//                 {t('services.uiux')}
//               </h3>
//             </div>


//             <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 min-h-[160px] group hover:shadow-xl transition-shadow duration-300">
//               <h3 className={`text-xl font-bold text-white ${isRTL ? 'text-right' : 'text-left'}`}>
//                 {t('services.software')}
//               </h3>
//             </div>


//             <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 min-h-[160px] group hover:shadow-xl transition-shadow duration-300">
//               <h3 className={`text-xl font-bold text-white ${isRTL ? 'text-right' : 'text-left'}`}>
//                 {t('services.quality')}
//               </h3>

//               <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
//             </div>

//             <div className="bg-white rounded-3xl p-6 shadow-lg min-h-[160px] border border-gray-200 group hover:shadow-xl transition-shadow duration-300">
//               <h3 className={`text-xl font-bold text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
//                 {t('services.consulting')}
//               </h3>
//             </div>