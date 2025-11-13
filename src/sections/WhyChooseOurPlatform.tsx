import { useLanguage } from "@/context/LanguageContext";
import translations from "@/locales/translations.json";
import whyChooseUpImage from "@/assets/whychooseup.svg";

const WhyChooseOurPlatform = () => {
  const { language } = useLanguage();
  const t = translations.whyChooseOurPlatform;

  // Icon components
  const MonitorIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M8 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 16v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M7 8l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const PlatformIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
      <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
    </svg>
  );

  const EvaluationIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h9l4 4v-4h5z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
    </svg>
  );

  const EscalationIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20.49 9l-1.5 1.5M5.01 15l-1.5 1.5M20.49 15l-1.5-1.5M5.01 9l-1.5-1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const OversightIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
      <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 21c0-1-1-3-3-3s-3 2-3 3 1 3 3 3 3-2 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const QualityIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const features = [
    {
      id: 'realTimeMonitoring',
      title: t.features.realTimeMonitoring.title[language as 'en' | 'ar'],
      description: t.features.realTimeMonitoring.description[language as 'en' | 'ar'],
      icon: <MonitorIcon />,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      id: 'centralizedPlatform',
      title: t.features.centralizedPlatform.title[language as 'en' | 'ar'],
      description: t.features.centralizedPlatform.description[language as 'en' | 'ar'],
      icon: <PlatformIcon />,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500'
    },
    {
      id: 'performanceEvaluation',
      title: t.features.performanceEvaluation.title[language as 'en' | 'ar'],
      description: t.features.performanceEvaluation.description[language as 'en' | 'ar'],
      icon: <EvaluationIcon />,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500'
    },
    {
      id: 'smartEscalation',
      title: t.features.smartEscalation.title[language as 'en' | 'ar'],
      description: t.features.smartEscalation.description[language as 'en' | 'ar'],
      icon: <EscalationIcon />,
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-500'
    },
    {
      id: 'comprehensiveOversight',
      title: t.features.comprehensiveOversight.title[language as 'en' | 'ar'],
      description: t.features.comprehensiveOversight.description[language as 'en' | 'ar'],
      icon: <OversightIcon />,
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-500'
    },
    {
      id: 'qualityControl',
      title: t.features.qualityControl.title[language as 'en' | 'ar'],
      description: t.features.qualityControl.description[language as 'en' | 'ar'],
      icon: <QualityIcon />,
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-500'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.title[language as 'en' | 'ar']}
          </h2>
          <p className="text-xl text-left  leading-relaxed">
            {t.subtitle[language as 'en' | 'ar']}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <div className={feature.iconColor}>
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Get Started Section */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="bg-primary rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {t.getStarted.title[language as 'en' | 'ar']}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.getStarted.description[language as 'en' | 'ar']}
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={whyChooseUpImage}
              alt="Get Started Illustration"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOurPlatform;
