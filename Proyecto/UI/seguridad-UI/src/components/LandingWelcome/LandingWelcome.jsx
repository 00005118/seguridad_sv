import React from 'react'
import seguridad_nb from '../../assets/logo.png'
import './LandingWelcome.css'

const LandingWelcome = () => {
  return (
    <div className='welcome-information container'>
        <div className="text-welcome">
            <h1>Bienvenido</h1>
            <p>Descubre cómo nuestra solución de seguridad residencial garantiza la protección de tu hogar y la tranquilidad de tu familia, con tecnología avanzada y servicio confiable las 24 horas.</p>
        </div>
        <img src={seguridad_nb} alt="bnbn" className='app-logo'/>
        <div className='google-button'>
            <button className='google-simulator-button'>Sign in with Google</button>
        </div>

    </div>
  )
}

export default LandingWelcome