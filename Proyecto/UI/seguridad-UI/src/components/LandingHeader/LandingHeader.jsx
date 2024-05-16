import React from 'react'
import './LandingHeader.css'
import { Link } from 'react-router-dom'

const LandingHeader = () => {
  return (
    <nav className='landing-nav'>
      <Link to='/home'><a className='home-a-tag'>Home</a></Link>
      <ul>
        <li><Link to='/login'><button className='landing-header-btn'>Log in</button></Link></li>
      </ul>
    </nav>
  )
}

export default LandingHeader