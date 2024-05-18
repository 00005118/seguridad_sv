import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './LogInForm.css'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { users } from '../../data/Users.js'

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setError('');
      console.log('Usuario autenticado:', user);
      navigate('/resident-landing');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className='form-container'>
      <form>
        <div className="header">
          <div className="text">Log in</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="error-message">
            {error && <p>{error}</p>}
          </div>

          <div className="input">

            <img src={email_icon} alt="" />
            <input type="email" name='user-email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" name='user-password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className="forgot-password">Lost Password? <Link to='/forgot-password'><span><u>Click Here</u></span></Link></div>


          <div className="submit-container">

            <div className="submit">
              <button className='log-in-btn' onClick={handleLogin}>Log in</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogInForm