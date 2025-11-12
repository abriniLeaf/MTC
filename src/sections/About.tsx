import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t('about.description')}
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {t('about.mission')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.missionText')}
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-purple-900 mb-3">
                  {t('about.vision')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.visionText')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats/Features */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl text-white text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-3xl text-white text-center">
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-purple-100">Happy Clients</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-700 p-8 rounded-3xl text-white text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-pink-100">Team Members</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 p-8 rounded-3xl text-white text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
