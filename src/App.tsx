import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Hero from './sections/Hero'
import TrustedCompanies from './sections/TrustedCompanies'

import AboutMTC from './sections/AboutMTC'
// import Services from './sections/Services'
// import Contact from './sections/Contact'
import UniqueApproach from './sections/UniqueApproach'
import ServiceOfferings from './sections/ServiceOfferings'
import DesignedForAll from './sections/DesignedForAll'
import WhyChooseOurPlatform from './sections/WhyChooseOurPlatform'
import OurPlans from './sections/OurPlans'
// import DestinationDemo from './sections/DestinationDemo'

function App() {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a scrollTo state from navigation
    if (location.state?.scrollTo) {
      // Small delay to ensure the page is fully rendered
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          const offset = -80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset + offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustedCompanies />
        <AboutMTC />

        <UniqueApproach />
        <DesignedForAll />
        <ServiceOfferings />
        <WhyChooseOurPlatform />
        {/* <Services /> */}
        {/* <DestinationDemo /> */}
        {/* <Contact /> */}
        <OurPlans/>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}

export default App
