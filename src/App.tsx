import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import TrustedCompanies from './sections/TrustedCompanies'
import About from './sections/About'
import AboutMTC from './sections/AboutMTC'
import Services from './sections/Services'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustedCompanies />
        <AboutMTC />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
