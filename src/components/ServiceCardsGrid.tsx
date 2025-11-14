import React from 'react';
import ServiceCard from './ServiceCard';
import './ServiceCardsGrid.css';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales/translations.json';

// Import background images from hero_card folder
import outsourcingBg from '../assets/hero_card/outsource_card.png';
import tailoredSoftwareBg from '../assets/hero_card/trailor_software.png';

const ServiceCardsGrid: React.FC = () => {
  const { language } = useLanguage();
  const t = translations.services;

  return (
    <div className="service-cards-grid">
      {/* Large Card with Background Image - Outsourcing & Talent Portal */}
      <ServiceCard
        title={t.outsourcing[language as 'en' | 'ar']}
        backgroundImage={outsourcingBg}
        textColor="#FFFFFF"
        size="large"
      />

      {/* UI/UX Design Services */}
      <ServiceCard
        title={t.uiux[language as 'en' | 'ar']}
        backgroundColor="#0A2540"
        textColor="#FFFFFF"
        size="medium"
      />

      {/* Tailored Software Solutions */}
      <ServiceCard
        title={t.software[language as 'en' | 'ar']}
        backgroundImage={tailoredSoftwareBg}
        textColor="#FFFFFF"
        size="medium"
      />

      {/* Quality Assurance System Services */}
      <ServiceCard
        title={t.quality[language as 'en' | 'ar']}
        backgroundColor="#0D3B5C"
        textColor="#FFFFFF"
        size="medium"
      />

      {/* Professional Business Consulting */}
      <ServiceCard
        title={t.consulting[language as 'en' | 'ar']}
        backgroundColor="#FFFFFF"
        textColor="#1A1F2E"
        size="small"
      />
    </div>
  );
};

export default ServiceCardsGrid;
