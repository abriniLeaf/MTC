import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface AuthDropdownProps {
  variant?: 'client' | 'vendor';
}

const AuthDropdown: React.FC<AuthDropdownProps> = ({ variant = 'vendor' }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const redirect = (path: string) => {
    navigate(path);
  };

  const getButtonStyles = () => {
    if (variant === 'client') {
      return {
        login: 'bg-[#0B3558] hover:bg-[#0a2d47]',
        signup: 'text-[#0B3558] bg-white hover:bg-gray-50 border border-gray-300'
      };
    }
    return {
      login: 'bg-secondary hover:bg-[#0a2d47]',
      signup: 'text-secondary bg-white hover:bg-gray-50 border border-gray-300'
    };
  };

  const styles = getButtonStyles();

  return (
    <div className="absolute top-full mt-2 bg-white rounded-3xl shadow-lg p-8 min-w-[330px] animate-fadeIn">
      <button 
        onClick={() => redirect('/login')} 
        className={`w-full px-6 py-3 text-white ${styles.login} transition-colors duration-200 font-medium rounded-full mb-2`}
      >
        {t('authDropdown.login')}
      </button>
      <button 
        onClick={() => redirect('/signup')} 
        className={`w-full px-6 py-3 ${styles.signup} transition-colors duration-200 font-medium rounded-full`}
      >
        {t('authDropdown.signUp')}
      </button>
    </div>
  );
};

export default AuthDropdown;
