import React from 'react'
import './LogInForm.css'
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'


const LogInForm = () => {
  return (
    <div className='form-container'>
      <form action="POST">
        <div className="header">
          <div className="text">Log in</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" name='user-email' placeholder='Email' required />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" name='user-password' placeholder='Password'  required />
          </div>
          <div className="forgot-password">Lost Password? <span>Click Here</span></div>
          <div className="submit-container">
            <div className="submit">
              <button className='log-in-btn'>Log in</button>
            </div>
          </div>
        </div>
      </form>

    </div>
  )
}

export default LogInForm