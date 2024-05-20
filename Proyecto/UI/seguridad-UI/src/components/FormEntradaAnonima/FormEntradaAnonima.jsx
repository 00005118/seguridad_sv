import React, { useState } from 'react'
import './FormEntradaAnonima.css'
import email_icon from '../../assets/email.png'
import user_icon from '../../assets/person.png'
import dui_icon from '../../assets/DUI.png'
import { users } from '../../data/Users.js'

const FormEntradaAnonima = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setError('');
      console.log('Usuario autenticado:', user);
      console.log(user.role);
      
    } else {
      setError('Llenar todos los campos necesarios');
    }
  };

  return (
    <div className='form-container'>
      <form>
        <div className="header">
          <div className="text">Registrar entrada anónima</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="error-message">
            {error && <p>{error}</p>}
          </div>

          <div className="input">

            <img src={user_icon} alt="" />
            <input type="text" name='name' placeholder='Nombre' required />
          </div>

          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" name='apellido' placeholder='Apellido' required />
          </div>

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="text" name='razon-entrada' placeholder='Razón de entrada' required />
          </div>
          <div className="input">
            <img src={dui_icon} alt="" />
            <input type="text" name='dui' placeholder='DUI' required />
          </div>


          <div className="submit-container">

            <div className="submit">
              <button className='log-in-btn' onClick={handleLogin}>Registrar entrada</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormEntradaAnonima