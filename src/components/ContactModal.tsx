import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useLanguage } from '@/context/LanguageContext';
import translations from '@/locales/translations.json';
import PhoneInput, { getCountryCallingCode } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const t = translations.contactModal;

  const [formData, setFormData] = useState({
    fullName: '',
    companyEmail: '',
    companyName: '',
    phoneNumber: '',
    countryCode: 'JO'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Required';
    if (!formData.companyEmail.trim()) newErrors.companyEmail = 'Required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);
    // Handle form submission here
    onClose();
    setFormData({
      fullName: '',
      companyEmail: '',
      companyName: '',
      phoneNumber: '',
      countryCode: 'JO'
    });
    setErrors({});
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const clearField = (field: string) => {
    setFormData(prev => ({ ...prev, [field]: '' }));
  };

  // Get the dial code for the selected country
  const getDialCode = () => {
    try {
      return `+${getCountryCallingCode(formData.countryCode as any)}`;
    } catch {
      return '+962'; // Default to Jordan
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all relative">
                <div className="grid md:grid-cols-2 relative">
                  {/* Left Side - Form */}
                  <div className="p-8 md:p-10 bg-white relative z-10">
                    <div className="mb-8">
                      <Dialog.Title className="text-3xl font-bold text-gray-900 mb-2">
                        {t.Get_in[language as 'en' | 'ar']}{' '}
                        <span className="text-[#E91E63]">
                          {t.touch[language as 'en' | 'ar']}
                        </span>
                      </Dialog.Title>
                      <Dialog.Description className="text-gray-600 text-base">
                        {t.subtitle[language as 'en' | 'ar']}
                      </Dialog.Description>
                    </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  placeholder=" "
                  className="peer w-full px-5 pt-7 pb-3 border border-gray-300 rounded-full focus:outline-none focus:border-primary text-sm transition-colors"
                />
                <label
                  htmlFor="fullName"
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  {t.fullName[language as 'en' | 'ar']} <span className="text-red-500">*</span>
                </label>
                {formData.fullName && (
                  <button
                    type="button"
                    onClick={() => clearField('fullName')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Company Email */}
              <div className="relative">
                <input
                  type="email"
                  id="companyEmail"
                  value={formData.companyEmail}
                  onChange={(e) => handleChange('companyEmail', e.target.value)}
                  placeholder=" "
                  className="peer w-full px-5 pt-7 pb-3 border border-gray-300 rounded-full focus:outline-none focus:border-primary text-sm transition-colors"
                />
                <label
                  htmlFor="companyEmail"
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  {t.companyEmail[language as 'en' | 'ar']} <span className="text-red-500">*</span>
                </label>
                {formData.companyEmail && (
                  <button
                    type="button"
                    onClick={() => clearField('companyEmail')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Company Name */}
              <div className="relative">
                <input
                  type="text"
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleChange('companyName', e.target.value)}
                  placeholder=" "
                  className="peer w-full px-5 pt-7 pb-3 border border-gray-300 rounded-full focus:outline-none focus:border-primary text-sm transition-colors"
                />
                <label
                  htmlFor="companyName"
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  {t.companyName[language as 'en' | 'ar']} <span className="text-red-500">*</span>
                </label>
                {formData.companyName && (
                  <button
                    type="button"
                    onClick={() => clearField('companyName')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Phone Number */}
              <div className="flex gap-3">
                {/* Country Selector */}
                <div className="relative">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleChange('countryCode', e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  >
                    <option value="JO">Jordan</option>
                    <option value="IN">India</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AE">UAE</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="EG">Egypt</option>
                    <option value="LB">Lebanon</option>
                    <option value="SY">Syria</option>
                    <option value="IQ">Iraq</option>
                  </select>
                  <div className="flex items-center gap-2 p-[10px] border border-gray-300 rounded-full bg-white cursor-pointer hover:border-primary transition-colors pointer-events-none">
                    <PhoneInput
                      international
                      defaultCountry={formData.countryCode as any}
                      value=""
                      onChange={() => {}}
                      className="country-flag-only"
                      numberInputProps={{
                        className: 'hidden'
                      }}
                    />
                    <span className="text-sm font-medium text-gray-700">{getDialCode()}</span>
                  </div>
                </div>

                {/* Phone Number Input */}
                <div className="relative flex-1">
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => handleChange('phoneNumber', e.target.value)}
                    placeholder=" "
                    className="peer w-full px-5 pt-7 pb-3 border border-gray-300 rounded-full focus:outline-none focus:border-primary text-sm transition-colors"
                  />
                  <label
                    htmlFor="phoneNumber"
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    {t.phoneNumber[language as 'en' | 'ar']} <span className="text-red-500">*</span>
                  </label>
                  {formData.phoneNumber && (
                    <button
                      type="button"
                      onClick={() => clearField('phoneNumber')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-[#002952] text-white font-semibold py-3.5 rounded-full transition-colors duration-200"
              >
                {t.send[language as 'en' | 'ar']}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-xs text-gray-500">{t.callUs[language as 'en' | 'ar']}</p>
                    <p className="font-medium text-gray-900">+962 372 187 800</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-xs text-gray-500">{t.chatToSupport[language as 'en' | 'ar']}</p>
                    <p className="font-medium text-gray-900">info@mindtruetech</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
                    </div>
                  </div>

                  {/* Right Side - Image with Dark Blue Background */}
                  <div className="hidden md:block relative bg-secondary overflow-hidden">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="h-full flex items-center justify-center p-8">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80"
                alt="Contact"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
                    </div>
                  </div>

                  {/* Close button for mobile */}
                  <button
                    onClick={onClose}
                    className="md:hidden absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactModal;
