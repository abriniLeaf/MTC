import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { extractLanguageTranslations } from './locales/translationHelper';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: extractLanguageTranslations('en'),
      },
      ar: {
        translation: extractLanguageTranslations('ar'),
      },
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
