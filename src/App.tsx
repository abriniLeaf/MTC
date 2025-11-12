import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import TrustedCompanies from './sections/TrustedCompanies'

import AboutMTC from './sections/AboutMTC'
import Services from './sections/Services'
import Contact from './sections/Contact'
import UniqueApproach from './sections/UniqueApproach'
import ServiceOfferings from './sections/ServiceOfferings'
import DesignedForAll from './sections/DesignedForAll'
// import DestinationDemo from './sections/DestinationDemo'

function App() {
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
        <Services />
        {/* <DestinationDemo /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
