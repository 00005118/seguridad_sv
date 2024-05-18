import React from 'react'
import LogInHeader from '../components/LogInHeader/LogInHeader'
import './Styles/LogIn.css'
import LogInForm from '../components/LogInForm/LogInForm'


const LogIn = () => {
  return (
    <div>
      <LogInHeader/>      
      <div className="container">
        <LogInForm/>
      </div>
    </div>
  )
}

export default LogIn