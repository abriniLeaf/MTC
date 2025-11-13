import { useLanguage } from "@/context/LanguageContext";
import translations from "@/locales/translations.json";
import { useRef, useState } from "react";
import lastBackground from "@/assets/our_plan_bg.png";

const OurPlans = () => {
  const { language } = useLanguage();
   const { isRTL } = useLanguage();
  const t = translations.ourPlans;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Icon component for plans - matching the image
  const PlanIcon = () => (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#4F46E5" fillOpacity="0.1"/>
      <path d="M20 12 L20 28 M12 20 L28 20" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="20" cy="20" r="3" fill="#4F46E5"/>
      <path d="M26 14 L26 26 M14 14 L14 26" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );

  const bgColors = [
    'bg-gradient-to-br from-blue-50 to-indigo-50',
    'bg-gradient-to-br from-purple-50 to-pink-50',
    'bg-gradient-to-br from-cyan-50 to-blue-50'
  ];

  const iconColors = [
    'text-blue-600',
    'text-purple-600',
    'text-cyan-600'
  ];

  const plans = t.plans.map((plan: any, index: number) => ({
    id: plan.id,
    title: plan.title[language as 'en' | 'ar'],
    description: plan.description[language as 'en' | 'ar'],
    features: plan.features.map((feature: { en: string; ar: string }) =>
      feature[language as 'en' | 'ar']
    ),
    buttonText: plan.button[language as 'en' | 'ar'],
    bgColor: bgColors[index],
    iconColor: iconColors[index]
  }));

  return (
    <section id="plans"
      className="py-20 pt-10 bg-gray-50 relative"
      style={{
        backgroundImage: `url(${lastBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {t.title[language as 'en' | 'ar']}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.subtitle[language as 'en' | 'ar']}
          </p>
        </div>
      </div>

      {/* Full Width Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className={`w-full overflow-x-scroll scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex gap-6 pb-4 min-w-max" style={{ paddingLeft: 'max(1rem, calc((100vw - 1280px) / 2))', paddingRight: 'max(1rem, calc((100vw - 1280px) / 2))' }}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="flex-shrink-0 w-[305px] lg:w-[360px] select-none bg-white rounded-2xl p-6  hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Icon - Top Left */}
              <div className="mb-8">
                <div className={plan.iconColor}>
                  <PlanIcon />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                {plan.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-10 text-sm">
                {plan.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-8 ml-3 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-gray-900 mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Select Button - Bottom Right Aligned */}
              <div className="flex justify-end ">
                <button className={`bg-secondary hover:bg-[#002952] text-white font-semibold ${isRTL ? 'mr-4 pl-1 pr-2 py-1' : 'ml-4 py-1 pl-4 pr-1'}  rounded-full transition-all duration-300 flex items-center gap-3 group`}>
                  <span className="text-sm">{plan.buttonText}</span>
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M17 7H7M17 7V17"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      {/* <div className="text-center mt-6 px-4">
        <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>{language === 'en' ? 'Scroll to see more plans' : 'قم بالتمرير لرؤية المزيد من الخطط'}</span>
        </p>
      </div> */}
    </section>
  );
};

export default OurPlans;
