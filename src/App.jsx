
import './App.css'
import Navbar from './components/layout/Navbar'
import AppCardsSection from './sections/AppCardsSection/AppCardSection'
import BenefitsSection from './sections/BenefitsSection/BenefitsSection'
import Hero from './sections/Hero/Hero'

function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <BenefitsSection/>
    <AppCardsSection/>
    </>
  )
}

export default App
