import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { useTranslation } from 'react-i18next';
import yogaImg from '../assets/yoga.png';
import sitting_reading_img from '../assets/open-doodles-sitting-and-reading 1 (1).png';
import sitting_reading_chair_img from '../assets/sitting-and-reading_char.png';

const TrustedCompanies: React.FC = () => {
  const { t } = useTranslation();

  // Company logos - using well-known tech company logos
  const companies = [
    {
      name: 'Google',
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    },
    {
      name: 'Airbnb',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg',
    },
    {
      name: 'UNICEF',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/UNICEF_Logo.svg',
    },
    {
      name: 'Adobe',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg',
    },
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    },
    {
      name: 'ShipBob',
      logo: 'https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1397184179/b0b4c1e6c3e3f6c9e0f3c7e1e7e3e3e3.png',
    },
    {
      name: 'Slack',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
    },
    {
      name: 'Netflix',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    },
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="max-w-7xl font-semibold mx-auto text-[20px] md:text-[20px] text-gray-900 mb-4 whitespace-pre-line">
            {t('trustedCompanies.trustedBy')} <span className="font-bold text-primary text-3xl">{t('trustedCompanies.25_plus')}</span> {t('trustedCompanies.companies')}
          </h2>
        </div>

        {/* Infinite Slider with Gradient Fade Effect */}
        <div className="relative">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white/90 via-white/50 to-transparent z-10 pointer-events-none"></div>

          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white/90 via-white/50 to-transparent z-10 pointer-events-none"></div>

          {/* Slider */}
          <InfiniteSlider gap={48} duration={40} reverse className="py-8 pt-0">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-[100px] md:h-[100px] px-8"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-[30px] md:h-[30px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>

        {/* Feature Cards Section */}
        <div className="max-w-6xl mx-auto mt-8">
          {/* Description */}
          <p className="text-left text-gray-800  text-base md:text-2xl mb-12 ">
            {t('trustedCompanies.description')}
          </p>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: No Real-Time Oversight */}
            <div className="bg-main-background rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-2">
                <div className="w-30 h-30 flex items-center justify-center">

                <img src={sitting_reading_chair_img} alt="" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t('trustedCompanies.features.noOversight.title')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t('trustedCompanies.features.noOversight.description')}
              </p>
            </div>

            {/* Card 2: Disconnected Systems */}
            <div className="bg-main-background rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-2">
                <div className="w-30 h-30 flex items-center justify-center">

                <img src={sitting_reading_img} alt="" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t('trustedCompanies.features.disconnected.title')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t('trustedCompanies.features.disconnected.description')}
              </p>
            </div>

            {/* Card 3: Inconsistent Execution */}
            <div className="bg-main-background rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-2">
                <div className="w-30 h-30 flex items-center justify-center">

                  <img src={yogaImg} alt="" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t('trustedCompanies.features.inconsistent.title')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t('trustedCompanies.features.inconsistent.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
