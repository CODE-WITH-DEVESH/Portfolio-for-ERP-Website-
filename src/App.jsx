
import './App.css'
import CorporateFooter from './components/layout/CorporateFooter'
import Navbar from './components/layout/Navbar'
import AppCardsSection from './sections/AppCardsSection/AppCardSection'
import BenefitsSection from './sections/BenefitsSection/BenefitsSection'
import DemoFormSection from './sections/DemoFormSection/DemoFormSection'
import ERPSection from './sections/ERPSection'
import FeatureShowcase from './sections/FeatureShowcase'
import Hero from './sections/Hero/Hero'
import WhyClassSite from './sections/WhyClassSite'
import SmartAppsSection from './sections/SmartAppsSection'
import SmarterSchoolSection from './sections/SmarterSchoolSection'
import UpgradeSchoolSection from './sections/UpgradeSchoolSection'
import AdmissionsVideoSection from './sections/AdmissionsVideoSection'
import SmartFeatures from './sections/SmartFeatures'
import SchoolServices from './sections/SchoolServices'
import FaqSection from './sections/FaqSection'
import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'


function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    {/* <ERPSection/> */}
    <FeatureShowcase/>
    <SmartAppsSection/>

    
    
    <UpgradeSchoolSection/>
    <SmarterSchoolSection/>

    <WhyClassSite/>
    <AdmissionsVideoSection/>

    <SmartFeatures/>
    <SchoolServices/>
    
    <FaqSection/>
    <FinalCTA/>
    <Footer/>
    
    {/* <BenefitsSection/>
    <AppCardsSection/>
    <DemoFormSection/>
    <CorporateFooter/> */}
    </>
  )
}

export default App
