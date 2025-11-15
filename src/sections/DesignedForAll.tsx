import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/locales/translations.json";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import clientsImg from '../assets/client.png';
import vendorsImg from '../assets/vendoor.png';
import employeesImg from '../assets/employees.png';

// Hover images
import clientsHoverImg from '../assets/client_hover.png';
import vendorsHoverImg from '../assets/vedoor_hover.png';
import employeesHoverImg from '../assets/employee_hover.png';

// Detail images
import soloTalkImag from '../assets/solo_talk.png';
import beautifulTalkImag from '../assets/beautiful-city-view 1.png';
import teamTalkImag from '../assets/group_talk.png';

const DesignedForAll = () => {
  const { language } = useLanguage();
  const t = translations.designedForAll;
  const [selectedStakeholder, setSelectedStakeholder] = useState<string | null>('clients');
  const [hoveredStakeholder, setHoveredStakeholder] = useState<string | null>(null);
  const { isVisible, elementRef } = useScrollAnimation();

  const stakeholders = [
    {
      id: 'clients',
      title: t.clients.title[language as 'en' | 'ar'],
      img: clientsImg,
      hoverImg: clientsHoverImg,
      heading: t.clients.heading[language as 'en' | 'ar'],
      steps: t.clients.steps,
      detailImg: teamTalkImag
    },
    {
      id: 'vendors',
      title: t.vendors.title[language as 'en' | 'ar'],
      img: vendorsImg,
      hoverImg: vendorsHoverImg,
      heading: t.vendors.heading[language as 'en' | 'ar'],
      steps: t.vendors.steps,
      detailImg: beautifulTalkImag
    },
    {
      id: 'employees',
      title: t.employees.title[language as 'en' | 'ar'],
      img: employeesImg,
      hoverImg: employeesHoverImg,
      heading: t.employees.heading[language as 'en' | 'ar'],
      steps: t.employees.steps,
      detailImg: soloTalkImag
    }
  ];

  const selectedData = stakeholders.find(s => s.id === selectedStakeholder);

  return (
    <section ref={elementRef as React.RefObject<HTMLElement>} className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-7 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
            {t.title[language as 'en' | 'ar']}
          </h2>
          <p className="text-xl  max-w-4xl mx-auto leading-relaxed ">
            {t.subtitle[language as 'en' | 'ar']}
          </p>
        </div>

        {/* Stakeholder Cards */}
        <div className={`grid grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto mb-12 transition-all duration-1000 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stakeholders.map((stakeholder) => (
            <div
              key={stakeholder.id}
              onClick={() => setSelectedStakeholder(stakeholder.id)}
              onMouseEnter={() => setHoveredStakeholder(stakeholder.id)}
              onMouseLeave={() => setHoveredStakeholder(null)}
              className={`group relative bg-white rounded-lg md:rounded-2xl p-3 md:p-8 transition-all duration-300 cursor-pointer ${
                selectedStakeholder === stakeholder.id
                  ? ''
                  : 'border-transparent '
              }`}
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-2 md:mb-6">
                <img
                  src={hoveredStakeholder === stakeholder.id || selectedStakeholder === stakeholder.id ? stakeholder.hoverImg : stakeholder.img}
                  alt={stakeholder.title}
                  className="w-16 h-16 md:w-40 md:h-40 object-contain transition-all duration-300 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className={`text-xs md:text-xl text-center transition-colors duration-300 ${
                hoveredStakeholder === stakeholder.id || selectedStakeholder === stakeholder.id
                  ? 'text-primary font-semibold'
                  : 'text-gray-500 md:text-base'
              }`}>
                {stakeholder.title}
              </h3>

              {/* Click indicator */}

            </div>
          ))}
        </div>

        {/* Detailed Card - Full Width */}
        {selectedData && (
          <div className={`w-full bg-white rounded-3xl border-2 border-gray-200 overflow-hidden animate-fadeIn transition-all duration-1000 ease-out delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Steps */}
              <div className={`p-8 md:p-8 ml-2 ${language === 'ar' ? 'lg:order-2' : ''}`}>
                <h3 className="text-3xl font-bold text-primary mb-8">
                  {selectedData.heading}
                </h3>

                <div className="space-y-4">
                  {selectedData.steps.map((step: any, index: number) => (
                    <div key={index} className="flex gap-4">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <div className="w-7 h-7 rounded-full border border-primary text-primary flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="flex-1">
  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-1 leading-snug md:leading-tight">
    {step.title[language as 'en' | 'ar']}
  </h4>

  <p className="text-gray-600 text-sm sm:text-base leading-loose md:leading-loose">
    {step.description[language as 'en' | 'ar']}
  </p>
</div>

                    </div>
                  ))}
                </div>


              </div>

              {/* Right Side - Image */}
              <div className={`relative bg-gradient-to-br from-blue-50 to-blue-100 ${language === 'ar' ? 'lg:order-1' : ''}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={selectedData.detailImg}
                    alt={selectedData.title}
                    className="w-full h-full object-cover shadow-lg rounded-r-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DesignedForAll;
