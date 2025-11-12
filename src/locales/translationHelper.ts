import translations from './translations.json';

type TranslationValue = {
  en: string;
  ar: string;
};

type TranslationObject = {
  [key: string]: TranslationValue | TranslationObject;
};

/**
 * Extract translations for a specific language from the unified translation structure
 * @param lang - Language code ('en' or 'ar')
 * @returns Flattened translation object for the specified language
 */
export function extractLanguageTranslations(lang: 'en' | 'ar'): any {
  const extract = (obj: TranslationObject): any => {
    const result: any = {};
    
    for (const key in obj) {
      const value = obj[key];
      
      // Check if this is a translation value (has 'en' and 'ar' properties)
      if (value && typeof value === 'object' && 'en' in value && 'ar' in value) {
        result[key] = value[lang];
      } else if (value && typeof value === 'object') {
        // Recursively process nested objects
        result[key] = extract(value as TranslationObject);
      }
    }
    
    return result;
  };
  
  return extract(translations as unknown as TranslationObject);
}
