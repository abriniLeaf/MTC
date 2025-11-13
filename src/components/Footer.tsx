import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import translations from '@/locales/translations.json';
import mtcLogo from '@/assets/Logo_white.svg';
import { navigationItems } from '@/config/navigation';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { t: translate } = useTranslation();
  const currentYear = new Date().getFullYear();
  const t = translations.footer;

  return (
    <footer className="bg-primary text-white py-8">
      {/* Top Section - Logo & Description */}
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-start md:items-end gap-10">

{/* Left Section */}
<div className="w-full  md:w-auto">
  <div className=" px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
    <img src={mtcLogo} alt="MTC Logo" className="h-15 mb-4" />

    <p className="text-gray-300 text-sm font-bold max-w-md">
      {t.description[language as 'en' | 'ar']}
    </p>
  </div>

  {/* Navigation Links */}
  <div className="px-4 sm:px-6 lg:px-8">
    <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
      {navigationItems.map((item) => (
        <ScrollLink
          key={item.key}
          to={item.to}
          smooth={true}
          duration={500}
          className="text-gray-300 hover:text-white cursor-pointer transition-colors"
        >
          {translate(item.translationKey)}
        </ScrollLink>
      ))}
    </nav>
  </div>
</div>

{/* Right Section */}
<div className="w-full md:w-auto px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col gap-2">
  <div className="flex gap-3">
      {/* LinkedIn */}
      <a
        href="#"
        className="w-8 h-8  hover:bg-white/20 rounded flex items-center justify-center transition-colors duration-200"
        aria-label="LinkedIn"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>

      {/* Twitter */}
      <a
        href="#"
        className="w-8 h-8  hover:bg-white/20 rounded flex items-center justify-center transition-colors duration-200"
        aria-label="Twitter"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* YouTube */}
      <a
        href="#"
        className="w-8 h-8  hover:bg-white/20 rounded flex items-center justify-center transition-colors duration-200"
        aria-label="YouTube"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </a>
    </div>
    {/* Contact Info */}
    <div className="text-sm text-gray-300 space-y-1">
      <p>{t.phone[language as 'en' | 'ar']}</p>
      <p>{t.email[language as 'en' | 'ar']}</p>
      <a href="#" className="hover:text-white transition-colors block">
        {t.viewOnMaps[language as 'en' | 'ar']}
      </a>
    </div>

    {/* Social Icons */}

  </div>
</div>

</div>

      {/* Contact & Social Section */}


      {/* Bottom Section - Legal Links & Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-5 sm:px-6 lg:px-8">

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between items-center gap-4 text-sm font-bold  text-gray-400">
          <div className="flex gap-6">
            <RouterLink to="/cookies" className="hover:text-white transition-colors">
              {t.cookies[language as 'en' | 'ar']}
            </RouterLink>
            <RouterLink to="/privacy" className="hover:text-white transition-colors">
              {t.privacy[language as 'en' | 'ar']}
            </RouterLink>
            <RouterLink to="/terms" className="hover:text-white transition-colors">
              {t.terms[language as 'en' | 'ar']}
            </RouterLink>
          </div>
          <p>© {currentYear} {t.copyright[language as 'en' | 'ar']}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
