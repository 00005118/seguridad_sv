import React from 'react'
import './styles/LandingPage.css'
import { Link } from "react-router-dom";
import LandingHeader from "../components/LandingHeader/LandingHeader";
import LandingWelcome from '../components/LandingWelcome/LandingWelcome';


const LandingPage = () => {
  return (
    <div>
        <LandingHeader/>
        <div className="container">
            <LandingWelcome/>

        </div>
    </div>
  )
}

export default LandingPage