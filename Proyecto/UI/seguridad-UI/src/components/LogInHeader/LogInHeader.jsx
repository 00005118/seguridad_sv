import React from 'react'
import './LogInHeader.css'
import { Link } from 'react-router-dom'

const LogInHeader = () => {
  return (
    <nav className='login-nav'>
      <Link to='/home'><a className='home-a-tag'>Regresar a Home</a></Link>
    </nav>
  )
}

export default LogInHeader