import React, { useEffect } from 'react'
import LandingHeader from "../components/LandingHeader/LandingHeader";
import LandingWelcome from '../components/LandingWelcome/LandingWelcome';
import LandingTitle from '../components/LandingTitle/LandingTitle';
import LandingCards from '../components/LandingCards/LandingCards';
import ContactUsSection from '../components/ContactUsSection/ContactUsSection';

const LandingPage = () => {

  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div>
      <LandingHeader />
      <LandingWelcome />
      <LandingTitle subTitle='Nuestras especialidades en los campos requeridos' title='Que ofrecemos' />
      <LandingCards />
      <ContactUsSection />

    </div>
  )
}

export default LandingPage