import React from 'react'
import seguridad_nb from '../../assets/seguridad2.png'

const LandingWelcome = () => {
  return (
    <div className='welcome-information container'>
        <div className="text">
        <h1>Bienvenido</h1>
        <p>La mejor plataforma de seguridad para residenciales</p>
        </div>

        <img src={seguridad_nb} alt="bnbn"/>
    </div>
  )
}

export default LandingWelcome