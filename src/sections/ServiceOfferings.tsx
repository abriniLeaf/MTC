import { useLanguage } from "@/context/LanguageContext";
import translations from "@/locales/translations.json";

// Service images - using existing assets as placeholders
import outsourcingImg from '../assets/group_talk.png';
import softwareImg from '../assets/solo_talk.png';
import uiuxImg from '../assets/sitting-and-reading_char.png';
import qaImg from '../assets/beautiful-city-view 1.png';
import consultingImg from '../assets/centralizedVisibility.png';
import { ApproachCard } from "@/components/ui/unique-approach";

const ServiceOfferings = () => {
  const { language } = useLanguage();
  const t = translations.serviceOfferings;

  const services = [
    {
      id: 'outsourcingTalent',
      title: t.outsourcingTalent.title[language as 'en' | 'ar'],
      description: t.outsourcingTalent.description[language as 'en' | 'ar'],
      features: t.outsourcingTalent.features,
      image: outsourcingImg,
      imageAlt: 'Outsourcing & Talent Portal'
    },
    {
      id: 'tailoredSoftware',
      title: t.tailoredSoftware.title[language as 'en' | 'ar'],
      description: t.tailoredSoftware.description[language as 'en' | 'ar'],
      features: t.tailoredSoftware.features,
      image: softwareImg,
      imageAlt: 'Tailored Software Solutions'
    },
    {
      id: 'uiuxDesign',
      title: t.uiuxDesign.title[language as 'en' | 'ar'],
      description: t.uiuxDesign.description[language as 'en' | 'ar'],
      features: t.uiuxDesign.features,
      image: uiuxImg,
      imageAlt: 'UI/UX Design Services'
    },
    {
      id: 'qualityAssurance',
      title: t.qualityAssurance.title[language as 'en' | 'ar'],
      description: t.qualityAssurance.description[language as 'en' | 'ar'],
      features: t.qualityAssurance.features,
      image: qaImg,
      imageAlt: 'Quality Assurance Services'
    },
    {
      id: 'businessConsulting',
      title: t.businessConsulting.title[language as 'en' | 'ar'],
      description: t.businessConsulting.description[language as 'en' | 'ar'],
      features: t.businessConsulting.features,
      image: consultingImg,
      imageAlt: 'Business Consulting Services'
    }
  ];

  return (
    <section  id="services" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.title[language as 'en' | 'ar']}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.subtitle[language as 'en' | 'ar']}
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-10">
          {services.map((service, index) => {
            // Determine layout based on index and language
            const isEvenIndex = index % 2 === 0;
            const textOnLeft = language === 'ar' ? !isEvenIndex : isEvenIndex;

            return (
              <div
                key={service.id}
                className={`bg-white rounded-3xl overflow-hidden ${
                  index % 2 === 0 ? '' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Text Content */}
                  <div className={`p-2 flex flex-col justify-center lg:col-span-2 ${
                    textOnLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      {service.title}
                    </h3>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature: any, featureIndex: number) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">
                            {feature[language as 'en' | 'ar']}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div
  className={`relative lg:col-span-1 ${
    textOnLeft ? 'lg:order-2' : 'lg:order-1'
  } flex items-center justify-center`}
>
  <div className="flex items-center justify-center">
  <div className="h-[500px] w-[350px]">
            <ApproachCard
              imageUrl={service.image}
              title={''}
              description={''}
              themeColor=""
            />
          </div>
    {/* <img
      src={service.image}
      alt={service.imageAlt}
      className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] object-contain drop-shadow-2xl rounded-xl"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=${encodeURIComponent(
          service.title
        )}`;
      }}
    /> */}
  </div>
</div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;
