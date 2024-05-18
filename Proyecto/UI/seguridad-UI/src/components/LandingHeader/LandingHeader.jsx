import React, { useState } from 'react'
import './LandingHeader.css'
import { Link, NavLink } from 'react-router-dom'

const LandingHeader = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <nav>
        <Link to="/" className="title">
          Home
        </Link>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/about-us">About</NavLink>
          </li>
          <li>
            <NavLink to="/login"><button className='landing-header-btn'>Log in</button></NavLink>
          </li>
        </ul>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
  )
}

export default LandingHeader