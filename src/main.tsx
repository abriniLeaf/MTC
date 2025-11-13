import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './i18n'
import App from './App.tsx'
import { LanguageProvider } from './context/LanguageContext'
import CookiesPage from './pages/CookiesPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
