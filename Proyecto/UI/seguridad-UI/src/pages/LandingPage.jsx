import React from 'react'
import './styles/LandingPage.css'
import { Link } from "react-router-dom";
import LandingHeader from "../components/LandingHeader/LandingHeader";


const LandingPage = () => {
  return (
    <div>
        <LandingHeader/>
        <h1>Bienvenido</h1>

        {/* <Link to='/about'><button>Go to about!</button></Link> */}
    </div>
  )
}

export default LandingPage