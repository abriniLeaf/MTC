import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';

const AboutMTC: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  return (
    <section id="about" className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-0 md:mb-20 flex md:flex-row flex-col justify-between md:gap-19 gap-5 align-bottom items-end">
            <div>
          <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-6">
            {t('aboutMTC.title')}
          </h2>
          <p className="text-white/90 text-base md:text-2xl leading-relaxed">
            {t('aboutMTC.description')}
          </p></div>
          <div className="flex justify-end gap-4 mt-0 md:mt-8">
          <a
            href="#"
            className="w-10 h-10  hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300"
            aria-label="X (Twitter)"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10  hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300"
            aria-label="YouTube"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10  hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr_1fr] gap-8 mt-12 md:divide-x md:divide-white/20">
  {/* First Small Card */}
  <div className="bg-transparent pr-0 md:pr-8">

  </div>

  {/* Vision Card */}
  <div className={`${isRTL ? 'md:pl-13 md:pr-1 ' : 'pl-0 md:pl-0 md:pr-15'} bg-transparent  `}>
    <h3 className="text-2xl font-bold text-white mb-3 text-justify">
      {t('aboutMTC.vision.title')}
    </h3>
    <p className="text-white/80 text-sm md:text-base mb-6 leading-relaxed  ">
      {t('aboutMTC.vision.description')}
    </p>
    <div className="rounded-2xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
        alt="Vision"
        className="w-full h-[200px] object-cover rounded-2xl"
      />
    </div>
  </div>

  {/* Mission Card */}
  <div className={`${isRTL ? 'md:pl-10 md:pr-1 ' : 'pl-0 md:pl-0 md:pr-10'} bg-transparent  `}>
    <h3 className="text-2xl font-bold text-white mb-3">
      {t('aboutMTC.mission.title')}
    </h3>
    <p className="text-white/80 text-sm md:text-base mb-6 leading-relaxed ">
      {t('aboutMTC.mission.description')}
    </p>
    <div className="rounded-2xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
        alt="Mission"
        className="w-full h-[200px] object-cover rounded-2xl"
      />
    </div>
  </div>
</div>


        {/* Social Media Icons */}

      </div>
    </section>
  );
};

export default AboutMTC;
