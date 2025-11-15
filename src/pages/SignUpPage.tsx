import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to registration page after initial signup
    navigate('/registration');
  };

  const handleGoogleSignUp = () => {
    // Add Google OAuth logic here
    console.log('Google sign up');
  };

  const handleMicrosoftSignUp = () => {
    // Add Microsoft OAuth logic here
    console.log('Microsoft sign up');
  };

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {/* Full Width Background */}
      <div className="absolute inset-0 bg-[#e7f0ff] overflow-hidden">
        {/* Cylinder attached to right side of left container - Hidden on mobile */}
        <div className="hidden lg:block absolute top-12 left-[52.7%] -translate-x-full w-16 xl:w-20 h-40 xl:h-48 rounded-r-xl overflow-hidden z-30">
          <img
            src="/src/assets/cylinder.svg"
            alt="Cylinder 3D"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center gear.svg - Responsive sizing */}
        <div className="hidden lg:block absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] xl:w-[450px] xl:h-[450px]">
          <img
            src="/src/assets/gear.svg"
            alt="Gear 3D"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom-right torus.svg - Responsive sizing */}
        <div className="hidden lg:block absolute bottom-0 right-0 w-48 h-48 xl:w-72 xl:h-72 z-20">
          <img
            src="/src/assets/torus.svg"
            alt="Torus 3D"
            className="w-full relative top-[70px]  h-full object-contain"
          />
        </div>
      </div>

      {/* Left Side - Sign Up Form Container */}
      <div className="mr-auto w-full lg:w-[50%] flex items-center justify-center relative z-10 min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-xl sm:max-w-md lg:max-w-4xl bg-white p-8 sm:p-10 md:p-12 lg:p-16 xl:py-25 xl:px-35 rounded-2xl my-0 relative min-h-[80vh] lg:min-h-[90vh] overflow-y-auto">
          {/* Logo */}
          <div className="absolute top-4 sm:top-6 lg:top-9 start-4 sm:start-6 lg:start-8">
            <img
              src="/src/assets/MTC_logo.png"
              alt="MTC Logo"
              className="h-10 sm:h-12 lg:h-16 xl:h-18"
            />
          </div>

          {/* Language Switcher */}
          <div className="absolute top-4 sm:top-6 lg:top-9 end-4 sm:end-6 lg:end-8">
            <LanguageSwitcher />
          </div>

          {/* Welcome Text */}
          <div className="flex flex-col justify-center min-h-full mt-20">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
                {t('signup.hello')}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl">
                {t('signup.createAccount')}
              </p>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSignUp} className="space-y-6 sm:space-y-8">
              {/* Full Name Input - Floating Label */}
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="peer w-full px-0 pt-6 pb-2 text-sm sm:text-base border-b-2 border-gray-300 focus:border-blue-900 outline-none transition-all bg-transparent"
                  required
                />
                <label
                  htmlFor="fullName"
                  className="absolute start-0 top-5 text-gray-500 font-bold text-xs sm:text-sm transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-900 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  {t('signup.fullName')}
                </label>
              </div>

              {/* Email Input - Floating Label */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer w-full px-0 pt-6 pb-2 text-sm sm:text-base border-b-2 border-gray-300 focus:border-blue-900 outline-none transition-all bg-transparent"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute start-0 top-5 text-gray-500 font-bold text-xs sm:text-sm transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-900 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  {t('signup.companyEmail')}
                </label>
              </div>

              {/* Password Input - Floating Label */}
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="peer w-full px-0 pt-6 pb-2 text-sm sm:text-base border-b-2 border-gray-300 focus:border-blue-900 outline-none transition-all bg-transparent pr-10"
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute start-0 top-5 text-gray-500 font-bold text-xs sm:text-sm transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-900 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  {t('signup.password')}
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute end-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Accept Terms & Conditions */}
              <div className="flex items-center">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="w-4 h-4 text-blue-900 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <span className="ms-2 font-bold text-xs sm:text-sm text-gray-700">
                    {t('signup.acceptTerms')}{' '}
                    <button
                      type="button"
                      className="text-blue-900 hover:text-blue-700 underline"
                    >
                      {t('signup.termsAndConditions')}
                    </button>
                  </span>
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full mt-4 sm:mt-7 bg-secondary text-white py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-semibold hover:bg-primary-800 transition-colors duration-200"
              >
                {t('signup.signUpButton')}
              </button>

              {/* Social Sign Up Buttons */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={handleGoogleSignUp}
                  className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 rounded-full hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{t('signup.google')}</span>
                </button>

                <button
                  type="button"
                  onClick={handleMicrosoftSignUp}
                  className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 rounded-full hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 23 23">
                    <path fill="#f3f3f3" d="M0 0h23v23H0z" />
                    <path fill="#f35325" d="M1 1h10v10H1z" />
                    <path fill="#81bc06" d="M12 1h10v10H12z" />
                    <path fill="#05a6f0" d="M1 12h10v10H1z" />
                    <path fill="#ffba08" d="M12 12h10v10H12z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{t('signup.microsoft')}</span>
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-xs sm:text-sm text-gray-600">
                  {t('signup.alreadyHaveAccount')}{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/login')}
                    className="text-blue-900 hover:text-blue-700 font-semibold"
                  >
                    {t('signup.login')}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
