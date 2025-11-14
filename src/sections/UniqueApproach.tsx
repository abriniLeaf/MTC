import { ApproachCard } from "@/components/ui/unique-approach";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/locales/translations.json";

import centralizedVisibility from '../assets/centralizedVisibility.png'
import scalableTalent from '../assets/scalableTalent.png'
import alignedWorkflows from '../assets/alignedWorkflows.png'

const UniqueApproach = () => {
  const { language } = useLanguage();
  const t = translations.uniqueApproach;

  return (
    <section className="py-16 mt-15 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 lg:gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 lg:flex-1 lg:mr-6 xl:mr-10">
            {t.title[language as 'en' | 'ar']}
          </h2>
          <p className="text-lg md:text-xl lg:text-xl xl:text-2xl max-w-2xl lg:flex-shrink-0 text-gray-600">
            {t.subtitle[language as 'en' | 'ar']}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Centralized Visibility */}
          <div className="h-[500px] ">
            <ApproachCard
              imageUrl={centralizedVisibility}
              title={t.centralizedVisibility.title[language as 'en' | 'ar']}
              description={t.centralizedVisibility.description[language as 'en' | 'ar']}
              themeColor="225 25% 75%"
            />
          </div>

          {/* Card 2: Scalable Talent Management */}
          <div className="h-[500px]">
            <ApproachCard
              imageUrl={scalableTalent}
              title={t.scalableTalent.title[language as 'en' | 'ar']}
              description={t.scalableTalent.description[language as 'en' | 'ar']}
              themeColor="220 25% 75%"
            />
          </div>

          {/* Card 3: Aligned Workflows */}
          <div className="h-[500px]">
            <ApproachCard
              imageUrl={alignedWorkflows}
              title={t.alignedWorkflows.title[language as 'en' | 'ar']}
              description={t.alignedWorkflows.description[language as 'en' | 'ar']}
              themeColor="220 25% 75%" // Light shade of #1E2431
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueApproach;
