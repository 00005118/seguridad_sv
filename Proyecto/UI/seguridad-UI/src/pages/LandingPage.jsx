import React, { useEffect } from 'react'
import LandingHeader from "../components/LandingHeader/LandingHeader";
import LandingWelcome from '../components/LandingWelcome/LandingWelcome';
import LandingTitle from '../components/LandingTitle/LandingTitle';
import LandingCards from '../components/LandingCards/LandingCards';

const LandingPage = () => {

  useEffect(() => {
    document.title = 'Home';
}, []); 
  return (
    <div>
        <LandingHeader/>
        <LandingWelcome/>
        <div className="container">
            <LandingTitle subTitle='Nuestras especialidades en los campos requeridos' title='Que ofrecemos'/>      
            <LandingCards/>
        </div> 

    </div>
  )
}

export default LandingPage