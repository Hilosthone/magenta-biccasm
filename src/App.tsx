import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import BenefitsSection from './components/BenefitsSection'
import PlansSection from './components/PlansSection'
import SupportSection from './components/SupportSection'
import LogosSection from './components/LogosSection'
import Footer from './components/Footer'

const BiccasLanding: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogosSection />
      <SupportSection />
      <FeaturesSection />
      <BenefitsSection />
      <PlansSection />
      <Footer />
    </>
  )
}

export default BiccasLanding
