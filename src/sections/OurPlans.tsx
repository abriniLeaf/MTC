import { useLanguage } from "@/context/LanguageContext";
import translations from "@/locales/translations.json";
import { useRef, useState } from "react";
import lastBackground from "@/assets/our_plan_bg.png";
import PlanCard from "@/components/PlanCard";

const OurPlans = () => {
  const { language } = useLanguage();
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

  const plans = t.plans;

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
          {plans.map((plan: any) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              showScrollableLayout={true}
            />
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
