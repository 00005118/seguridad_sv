import React from 'react'
import './styles/LandingPage.css'
import { Link } from "react-router-dom";
import LandingHeader from "../components/LandingHeader/LandingHeader";
import LandingWelcome from '../components/LandingWelcome/LandingWelcome';


const LandingPage = () => {
  return (
    <div>
        <LandingHeader/>
        <LandingWelcome/>
        {/* <div className="container">
            <LandingTitle subTitle='Our program' title='What we offer'/>      
            <Programs/>
      </div> */}

    </div>
  )
}

export default LandingPage