import React from 'react'
import './LandingHeader.css'

const LandingHeader = () => {
  return (
    <nav className='landing-nav'>
      <a href="/home" className="landing-nav-site-title">Home</a>
      <ul>
        <li><a href="/login">Iniciar sesión</a></li>
      </ul>

    </nav>
  )
}

export default LandingHeader