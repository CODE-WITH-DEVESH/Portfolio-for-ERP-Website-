
import './App.css'
import CorporateFooter from './components/layout/CorporateFooter'
import Navbar from './components/layout/Navbar'
import AppCardsSection from './sections/AppCardsSection/AppCardSection'
import BenefitsSection from './sections/BenefitsSection/BenefitsSection'
import DemoFormSection from './sections/DemoFormSection/DemoFormSection'
import Hero from './sections/Hero/Hero'

function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <BenefitsSection/>
    <AppCardsSection/>
    <DemoFormSection/>
    <CorporateFooter/>
    </>
  )
}

export default App
