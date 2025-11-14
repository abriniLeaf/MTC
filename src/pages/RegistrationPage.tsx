import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '@/locales/translations.json';
import PlanCard from '@/components/PlanCard';
import whyChooseUpImage from "@/assets/last_step_img.png";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Form state
  const [companyName, setCompanyName] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [department, setDepartment] = useState('');
  const [industry, setIndustry] = useState('');
  const [goals, setGoals] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>('design');

  // Drag scroll state for step 4
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const reg = translations.registration;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete registration
      setCurrentStep(5); // Completion screen
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleGoal = (goal: string) => {
    setGoals(prev =>
      prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]
    );
  };

  const toggleRole = (role: string) => {
    setRoles(prev =>
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
  };

  // Drag scroll handlers for step 4
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
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const Stepper = () => (
    <div className="flex items-center justify-center mb-8 overflow-x-auto">
      <div className="flex items-center min-w-max px-4">
        {[1, 2, 3, 4].map((step, index) => (
          <div key={step} className="flex items-center">
            {/* Double circle design with inner filled circle */}
            <div className="relative flex-shrink-0">
              {/* Outer circle border */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border-3 ${
                  step <= currentStep
                    ? 'border-[#003366]'
                    : 'border-gray-300'
                }`}
              >
                {/* Inner filled circle */}
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                    step <= currentStep
                      ? 'bg-[#003366]'
                      : 'bg-white'
                  }`}
                >
                  {step < currentStep ? (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : step === currentStep ? (
                    <div className="w-1 h-1 rounded-full bg-white" />
                  ) : null}
                </div>
              </div>
            </div>
            {index < 3 && (
              <div
                className={`w-12 sm:w-16 h-0.5 transition-all duration-300 flex-shrink-0 ${
                  step < currentStep ? 'bg-[#003366]' : 'bg-gray-300'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep1 = () => (
    <>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {reg.step1.title[language as 'en' | 'ar']}
        </h2>
        <p className="text-gray-600">
          {reg.step1.subtitle[language as 'en' | 'ar']}
        </p>
      </div>

      <div className="space-y-6 max-w-lg mx-auto">
        <div>
        <label className="block text-sm font-semibold text-secondary mb-2">
          {reg.step1.companyName[language as 'en' | 'ar']}
        </label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder={reg.step1.companyNamePlaceholder[language as 'en' | 'ar']}
          className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-secondary mb-2">
          {reg.step1.companySize[language as 'en' | 'ar']}
        </label>
        <select
          value={companySize}
          onChange={(e) => setCompanySize(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none appearance-none bg-white"
        >
          <option value="">{reg.step1.companySizePlaceholder[language as 'en' | 'ar']}</option>
          <option value="1">Just me</option>
          <option value="2-10">2-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201+">201+ employees</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-secondary mb-2">
          {reg.step1.department[language as 'en' | 'ar']}
        </label>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none appearance-none bg-white"
        >
          <option value="">{reg.step1.departmentPlaceholder[language as 'en' | 'ar']}</option>
          <option value="operations">Operations</option>
          <option value="hr">Human Resources</option>
          <option value="it">IT</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-secondary mb-2">
          {reg.step1.industry[language as 'en' | 'ar']}
        </label>
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#003366] focus:border-transparent outline-none appearance-none bg-white"
        >
          <option value="">{reg.step1.industryPlaceholder[language as 'en' | 'ar']}</option>
          <option value="construction">Construction</option>
          <option value="technology">Technology</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
          <option value="retail">Retail</option>
        </select>
        </div>
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {reg.step2.title[language as 'en' | 'ar']}
        </h2>
        <p className="text-gray-600">
          {reg.step2.subtitle[language as 'en' | 'ar']}
        </p>
      </div>

      <div className="space-y-6 max-w-lg mx-auto">
        <div className="space-y-3">
        {[
          { key: 'findEmployees', label: reg.step2.findEmployees[language as 'en' | 'ar'] },
          { key: 'browseVendors', label: reg.step2.browseVendors[language as 'en' | 'ar'] },
          { key: 'postProject', label: reg.step2.postProject[language as 'en' | 'ar'] },
          { key: 'exploring', label: reg.step2.exploring[language as 'en' | 'ar'] }
        ].map((goal) => (
          <label
            key={goal.key}
            className="flex bg-white items-center p-4 border-2 border-gray-200 rounded-full cursor-pointer hover:border-[#003366] transition-colors"
          >
            <input
              type="checkbox"
              checked={goals.includes(goal.key)}
              onChange={() => toggleGoal(goal.key)}
              className="w-5 h-5 text-[#003366]  border-gray-300 rounded focus:ring-[#003366]"
            />
            <span className="ms-3 text-gray-900">{goal.label}</span>
          </label>
        ))}
        </div>
      </div>
    </>
  );

  const renderStep3 = () => {
    // Define categories with their roles dynamically
    const categories = [
      {
        id: 'design',
        icon: '🎨',
        label: reg.step3.designCreative[language as 'en' | 'ar'],
        roles: [
          { key: 'graphicDesigners', label: reg.step3.graphicDesigners[language as 'en' | 'ar'] },
          { key: 'uiuxDesigners', label: reg.step3.uiuxDesigners[language as 'en' | 'ar'] },
          { key: 'productDesigners', label: reg.step3.productDesigners[language as 'en' | 'ar'] },
          { key: 'motionDesigners', label: reg.step3.motionDesigners[language as 'en' | 'ar'] },
          { key: 'brandingSpecialists', label: reg.step3.brandingSpecialists[language as 'en' | 'ar'] },
          { key: 'videoEditors', label: reg.step3.videoEditors[language as 'en' | 'ar'] }
        ]
      },
      {
        id: 'development',
        icon: '💻',
        label: reg.step3.developmentIT[language as 'en' | 'ar'],
        roles: [
          { key: 'webDevelopers', label: reg.step3.webDevelopers[language as 'en' | 'ar'] },
          { key: 'mobileDevelopers', label: reg.step3.mobileDevelopers[language as 'en' | 'ar'] },
          { key: 'backendDevelopers', label: reg.step3.backendDevelopers[language as 'en' | 'ar'] },
          { key: 'devOpsEngineers', label: reg.step3.devOpsEngineers[language as 'en' | 'ar'] },
          { key: 'dataScientists', label: reg.step3.dataScientists[language as 'en' | 'ar'] },
          { key: 'qaTesters', label: reg.step3.qaTesters[language as 'en' | 'ar'] }
        ]
      },
      {
        id: 'marketing',
        icon: '📊',
        label: reg.step3.marketingSales[language as 'en' | 'ar'],
        roles: [
          { key: 'digitalMarketers', label: reg.step3.digitalMarketers[language as 'en' | 'ar'] },
          { key: 'contentWriters', label: reg.step3.contentWriters[language as 'en' | 'ar'] },
          { key: 'seoSpecialists', label: reg.step3.seoSpecialists[language as 'en' | 'ar'] },
          { key: 'salesReps', label: reg.step3.salesReps[language as 'en' | 'ar'] },
          { key: 'socialMediaManagers', label: reg.step3.socialMediaManagers[language as 'en' | 'ar'] }
        ]
      },
      {
        id: 'admin',
        icon: '📋',
        label: reg.step3.adminOperations[language as 'en' | 'ar'],
        roles: [
          { key: 'projectManagers', label: reg.step3.projectManagers[language as 'en' | 'ar'] },
          { key: 'hrSpecialists', label: reg.step3.hrSpecialists[language as 'en' | 'ar'] },
          { key: 'executiveAssistants', label: reg.step3.executiveAssistants[language as 'en' | 'ar'] },
          { key: 'dataEntryClerk', label: reg.step3.dataEntryClerk[language as 'en' | 'ar'] },
          { key: 'operationsManagers', label: reg.step3.operationsManagers[language as 'en' | 'ar'] }
        ]
      },
      {
        id: 'finance',
        icon: '💰',
        label: reg.step3.financeLegal[language as 'en' | 'ar'],
        roles: [
          { key: 'accountants', label: reg.step3.accountants[language as 'en' | 'ar'] },
          { key: 'financialAnalysts', label: reg.step3.financialAnalysts[language as 'en' | 'ar'] },
          { key: 'legalAdvisors', label: reg.step3.legalAdvisors[language as 'en' | 'ar'] },
          { key: 'complianceOfficers', label: reg.step3.complianceOfficers[language as 'en' | 'ar'] }
        ]
      },
      {
        id: 'support',
        icon: '💬',
        label: reg.step3.customerSupport[language as 'en' | 'ar'],
        roles: [
          { key: 'customerServiceReps', label: reg.step3.customerServiceReps[language as 'en' | 'ar'] },
          { key: 'technicalSupport', label: reg.step3.technicalSupport[language as 'en' | 'ar'] },
          { key: 'chatSupport', label: reg.step3.chatSupport[language as 'en' | 'ar'] },
          { key: 'callCenterAgents', label: reg.step3.callCenterAgents[language as 'en' | 'ar'] }
        ]
      },
      {
        id: 'specialized',
        icon: '🔧',
        label: reg.step3.specializedRoles[language as 'en' | 'ar'],
        roles: [
          { key: 'industryConsultants', label: reg.step3.industryConsultants[language as 'en' | 'ar'] },
          { key: 'businessAnalysts', label: reg.step3.businessAnalysts[language as 'en' | 'ar'] },
          { key: 'supplyChainManagers', label: reg.step3.supplyChainManagers[language as 'en' | 'ar'] },
          { key: 'productManagers', label: reg.step3.productManagers[language as 'en' | 'ar'] }
        ]
      }
    ];

    return (
      <>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {reg.step3.title[language as 'en' | 'ar']}
          </h2>
          <p className="text-gray-600">
            {reg.step3.subtitle[language as 'en' | 'ar']}
          </p>
        </div>

        <div className="space-y-6 max-w-lg mx-auto">
          <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="border-2 border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="font-semibold text-gray-900">
                    {category.label}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${expandedCategory === category.id ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedCategory === category.id && (
                <div className="p-4 bg-gray-50 space-y-2">
                  {category.roles.map((role) => (
                    <label
                      key={role.key}
                      className="flex items-center p-3 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-[#003366] transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={roles.includes(role.key)}
                        onChange={() => toggleRole(role.key)}
                        className="w-5 h-5 text-[#003366] border-gray-300 rounded focus:ring-[#003366]"
                      />
                      <span className="ms-3 text-gray-900">{role.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
          </div>
        </div>
      </>
    );
  };

  const renderStep4 = () => {
    const plans = translations.ourPlans.plans;

    return (
      <>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {reg.step4.title[language as 'en' | 'ar']}
          </h2>
          <p className="text-gray-600">
            {reg.step4.subtitle[language as 'en' | 'ar']}
          </p>
        </div>

        <div className="space-y-6">

        {/* Horizontal Scrollable Container with Drag - Same as OurPlans */}
        <div
          ref={scrollContainerRef}
          className={`w-full overflow-x-scroll scrollbar-hide -mx-5 md:-mx-8 px-5 md:px-8 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex gap-4 md:gap-6 pb-4">
            {plans.map((plan: any) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onSelect={setSelectedPlan}
                isSelected={selectedPlan === plan.id}
                showScrollableLayout={true}
              />
            ))}
          </div>
        </div>
        </div>
      </>
    );
  };

  const renderCompletion = () => {
    const userName = companyName || 'User';

    return (
      <div className="text-center space-y-6">
        <div className="mb-8">

          <h2 className="text-4xl font-bold text-gray-900 mb-2">
          🎉 {reg.completion.title[language as 'en' | 'ar'].replace('{name}', userName)}
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            {reg.completion.subtitle[language as 'en' | 'ar']}
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {reg.completion.description[language as 'en' | 'ar']}
          </p>
        </div>

        <div className="flex justify-center my-12">
          <img
            src={whyChooseUpImage}
            alt="MTC Team"
            className="w-96 h-auto"
          />
        </div>

        <button
          onClick={() => navigate('/')}
          className="bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-[#002952] transition-colors"
        >
          {reg.completion.backToWebsite[language as 'en' | 'ar']}
        </button>
      </div>
    );
  };

  return (
    <div className=" flex relative overflow-hidden bg-[#e7f0ff]">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/30 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="w-full h-[100vh] px-6 md:px-12 lg:px-16 py-8 relative z-10 flex items-center justify-center">
        {/* Main Content */}
        <div className="bg-white rounded-2xl p-6 md:p-10 lg:p-12 w-full flex flex-col min-h-[85vh] [background-image:none] lg:[background-image:url(/src/assets/stepper_bg.svg)] bg-no-repeat lg:bg-cover" style={{ backgroundPosition: 'top left' }}>
          {/* Logo and Language Switcher inside container */}
          <div className="flex justify-between items-center mb-8">
            <img
              src="/src/assets/MTC_logo.png"
              alt="MTC Logo"
              className="h-12 md:h-16"
            /> <div className='hidden md:block'>{currentStep <= totalSteps && <Stepper />}</div>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <span className="text-sm font-medium text-gray-700">
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </button>
          </div>

          <div className="w-full flex-grow flex flex-col">

          <div className='md:hidden'>{currentStep <= totalSteps && <Stepper />}</div>
            <div className={`flex-grow ${currentStep === 4 || currentStep === 5 ? '' : 'overflow-y-auto max-h-[60vh]'}`}>
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              {currentStep === 4 && renderStep4()}
              {currentStep === 5 && renderCompletion()}
            </div>

            {/* Navigation Buttons - Fixed at bottom */}
            {currentStep <= totalSteps && (
              <div className="flex justify-center gap-4 mt-8 pt-6 ">
                <button
                  onClick={currentStep === 1 ? () => navigate('/signup') : handleBack}
                  className="px-10 py-3 lg:px-18 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 transition-colors"
                >
                  {reg.buttons.back[language as 'en' | 'ar']}
                </button>
                <button
                  onClick={handleNext}
                  className={`px-10 py-3 lg:px-18 rounded-full font-semibold transition-colors ${
                    currentStep === 4
                      ? 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white'
                      : 'bg-secondary text-white hover:bg-[#002952]'
                  }`}
                >
                  {currentStep === 4 ? reg.buttons.skipForNow[language as 'en' | 'ar'] : reg.buttons.next[language as 'en' | 'ar']}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
