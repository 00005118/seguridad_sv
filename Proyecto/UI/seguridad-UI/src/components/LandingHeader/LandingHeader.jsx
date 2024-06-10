import React, { useState } from 'react'
import '../styles/NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const LandingHeader = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <nav className='container landing-nav'>
        <Link to="/" className="title">
          Home
        </Link>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <a href="#programs">About</a>
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