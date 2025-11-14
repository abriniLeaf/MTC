import { useLanguage } from '@/context/LanguageContext';

interface PlanCardProps {
  plan: {
    id: string;
    title: { en: string; ar: string };
    description: { en: string; ar: string };
    features: Array<{ en: string; ar: string }>;
    button: { en: string; ar: string };
  };
  onSelect?: (planId: string) => void;
  isSelected?: boolean;
  showScrollableLayout?: boolean;
}

const PlanCard = ({ plan, onSelect, isSelected = false, showScrollableLayout = false }: PlanCardProps) => {
  const { language, isRTL } = useLanguage();

  const PlanIcon = () => (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#4F46E5" fillOpacity="0.1"/>
      <path d="M20 12 L20 28 M12 20 L28 20" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="20" cy="20" r="3" fill="#4F46E5"/>
      <path d="M26 14 L26 26 M14 14 L14 26" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );

  const handleClick = () => {
    if (onSelect) {
      onSelect(plan.id);
    }
  };

  if (showScrollableLayout) {
    // Layout for OurPlans section with scrollable container
    return (
      <div
        className="flex-shrink-0 w-[305px] lg:w-[360px] shadow select-none bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col"
      >
        {/* Icon - Top Left */}
        <div className="mb-8">
          <div className="text-blue-600">
            <PlanIcon />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
          {plan.title[language as 'en' | 'ar']}
        </h3>

        {/* Description */}
        <p className=" mb-10 text-base">
          {plan.description[language as 'en' | 'ar']}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-8 ml-3 flex-grow">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-base ">
              <span className="text-gray-900 mt-0.5">•</span>
              <span>{feature[language as 'en' | 'ar']}</span>
            </li>
          ))}
        </ul>

        {/* Select Button - Bottom Right Aligned */}
        <div className="flex justify-end">
          <button
            onClick={handleClick}
            className={`bg-secondary hover:bg-[#002952] text-white font-semibold ${isRTL ? 'mr-4 pl-1 pr-2 py-1' : 'ml-4 py-1 pl-4 pr-1'} rounded-full transition-all duration-300 flex items-center gap-3 group`}
          >
            <span className="text-sm">{plan.button[language as 'en' | 'ar']}</span>
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
    );
  }

  // Layout for Registration page (grid layout)
  return (
    <div
      onClick={handleClick}
      className={`p-6 border-2 rounded-2xl cursor-pointer transition-all ${
        isSelected
          ? 'border-[#003366] bg-blue-50'
          : 'border-gray-200 hover:border-[#003366]'
      }`}
    >
      <div className="mb-4">
        <div className="text-[#003366]">
          <PlanIcon />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        {plan.title[language as 'en' | 'ar']}
      </h3>
      <p className="text-gray-600 mb-6 text-sm">
        {plan.description[language as 'en' | 'ar']}
      </p>
      <ul className="space-y-2 mb-6">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-gray-900 mt-0.5">•</span>
            <span>{feature[language as 'en' | 'ar']}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2 px-4 rounded-full font-semibold transition-colors ${
          isSelected
            ? 'bg-[#003366] text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {plan.button[language as 'en' | 'ar']}
      </button>
    </div>
  );
};

export default PlanCard;
