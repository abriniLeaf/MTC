import { useLanguage } from "@/context/LanguageContext";
import translations from "@/locales/translations.json";
import whyChooseUpImage from "@/assets/whychooseup.svg";

import MonitorIcon from "../assets/why_choose_our/4.png";
import PlatformIcon from "../assets/why_choose_our/2.png";
import EvaluationIcon from "../assets/why_choose_our/6.png";
import EscalationIcon from "../assets/why_choose_our/3.png";
import OversightIcon from "../assets/why_choose_our/5.png";
import QualityIcon from "../assets/why_choose_our/1.png";

const WhyChooseOurPlatform = () => {
  const { language } = useLanguage();
  const t = translations.whyChooseOurPlatform;

  // Icon components


  const features = [
    {
      id: 'realTimeMonitoring',
      title: t.features.realTimeMonitoring.title[language as 'en' | 'ar'],
      description: t.features.realTimeMonitoring.description[language as 'en' | 'ar'],
      icon: MonitorIcon,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      id: 'centralizedPlatform',
      title: t.features.centralizedPlatform.title[language as 'en' | 'ar'],
      description: t.features.centralizedPlatform.description[language as 'en' | 'ar'],
      icon: PlatformIcon,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500'
    },
    {
      id: 'performanceEvaluation',
      title: t.features.performanceEvaluation.title[language as 'en' | 'ar'],
      description: t.features.performanceEvaluation.description[language as 'en' | 'ar'],
      icon: EvaluationIcon,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500'
    },
    {
      id: 'smartEscalation',
      title: t.features.smartEscalation.title[language as 'en' | 'ar'],
      description: t.features.smartEscalation.description[language as 'en' | 'ar'],
      icon: EscalationIcon,
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-500'
    },
    {
      id: 'comprehensiveOversight',
      title: t.features.comprehensiveOversight.title[language as 'en' | 'ar'],
      description: t.features.comprehensiveOversight.description[language as 'en' | 'ar'],
      icon: OversightIcon,
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-500'
    },
    {
      id: 'qualityControl',
      title: t.features.qualityControl.title[language as 'en' | 'ar'],
      description: t.features.qualityControl.description[language as 'en' | 'ar'],
      icon: QualityIcon,
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-500'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
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
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Icon Container */}
              <div className={`w-13 h-13 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
               <img src={feature.icon} alt={feature.title} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-primary mb-4 text-center leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-primary text-center leading-relaxed text-sm">
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
