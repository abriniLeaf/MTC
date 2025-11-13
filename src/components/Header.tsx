import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import MTCLogo from '../assets/MTC_logo.png';
import { navigationItems } from '@/config/navigation';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md w-[95%] max-w-7xl mt-2 rounded-full '
          : ' w-full rounded-xl bg-white/40 backdrop-blur-md  '
      }`}
      style={{
        transition: 'background-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out, border-radius 0.5s ease-in-out, width 0.5s ease-in-out, margin-top 0.5s ease-in-out',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <img
                  src={MTCLogo}
                  alt="MTC Logo"
                  className="w-22 h-22 object-contain"
                />
                {/* <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <h1 className="text-xl font-bold text-gray-900">MTC</h1>
                  <p className="text-xs text-gray-600">Mindtree Technologies</p>
                </div> */}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="text-gray-700 hover:text-primary-800 cursor-pointer transition-colors duration-200 font-medium"
                activeClass="!text-primary-800 font-semibold"
              >
                {t(item.translationKey)}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            {!isSearchOpen ? (
              <div className="flex items-center gap-4 animate-fadeIn">
                {/* Search Icon */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 border border-[#d5d5d5]"
                  aria-label="Search"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                <button className="px-4 py-2 rounded-full bg-pink-600 hover:bg-pink-600 text-white font-medium transition-colors duration-200">
                  {t('nav.applyClient')}
                </button>
                <button className="px-4 py-2 rounded-full bg-blue-900 hover:bg-blue-950 text-white font-medium transition-colors duration-200">
                  {t('nav.applyVendor')}
                </button>
              </div>
            ) : (
              <div className="animate-fadeIn">
                {/* Search Input with Clear and Search buttons */}
                <div className={`flex items-center gap-2 bg-white border border-gray-200 rounded-full shadow-sm transition-all duration-300 ease-in-out`}>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 ${isRTL ? 'mr-3' : 'ml-3'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('nav.search')}
                    className="bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 flex-1 text-sm py-2"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchOpen(false);
                    }}
                    className="p-1.5 hover:bg-gray-100 rounded-full transition-colors duration-200 flex-shrink-0"
                    aria-label="Clear"
                  >
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <button className={`px-6 py-2 rounded-full bg-blue-900 hover:bg-blue-950 text-white font-medium transition-colors duration-200 text-sm flex-shrink-0 ${isRTL ? 'ml-0' : 'mr-0'}`}>
                    {t('nav.search')}
                  </button>
                </div>
              </div>
            )}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  className="text-gray-700 hover:text-primary-800 cursor-pointer transition-colors duration-200 font-medium py-2"
                  activeClass="!text-primary-800 font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.translationKey)}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                {/* Mobile Search */}
                {!isSearchOpen ? (
                  <div className="flex flex-col gap-3 animate-fadeIn">
                    <button
                      onClick={() => setIsSearchOpen(true)}
                      className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      {t('nav.search')}
                    </button>
                    <button className="px-6 py-2.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-medium transition-colors duration-200">
                      {t('nav.applyClient')}
                    </button>
                    <button className="px-6 py-2.5 rounded-full bg-blue-900 hover:bg-blue-950 text-white font-medium transition-colors duration-200">
                      {t('nav.applyVendor')}
                    </button>
                  </div>
                ) : (
                  <div className="animate-fadeIn">
                    <div className={`flex items-center gap-2 bg-white border border-gray-200 rounded-full shadow-sm transition-all duration-300 ease-in-out`}>
                      <svg
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 ${isRTL ? 'mr-3' : 'ml-3'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t('nav.search')}
                        className="bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 flex-1 text-sm py-2"
                        autoFocus
                      />
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setIsSearchOpen(false);
                        }}
                        className="p-1.5 hover:bg-gray-100 rounded-full transition-colors duration-200 flex-shrink-0"
                        aria-label="Clear"
                      >
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <button className={`px-6 py-2 rounded-full bg-blue-900 hover:bg-blue-950 text-white font-medium transition-colors duration-200 text-sm flex-shrink-0 ${isRTL ? 'ml-0' : 'mr-0'}`}>
                        {t('nav.search')}
                      </button>
                    </div>
                  </div>
                )}
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
