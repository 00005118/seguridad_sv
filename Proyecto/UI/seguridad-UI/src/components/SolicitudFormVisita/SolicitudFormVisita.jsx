import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './SolicitudFormVisita.css'
import user_icon from '../../assets/person.png'
import date_icon from '../../assets/date2.png'
import dui_icon from '../../assets/DUI.png'
import clock_icon from '../../assets/clock.png'
import { users } from '../../data/Users.js'

const SolicitudFormVisita = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            setError('');
            console.log('Usuario autenticado:', user);
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="container">
            <div className='form-container'>
                <form>
                    <div className="header">
                        <div className="text">Crear solicitud para visitas</div>
                        <div className="underline"></div>
                    </div>

                    <div className="inputs">
                        <div className="error-message">
                            <p>Por favor llenar todos los campos necesarios</p>
                            {error && <p>{error}</p>}
                        </div>

                        <div className="input">

                            <img src={user_icon} alt="" />
                            <input type="text" name='user-email' placeholder='Nombre del invitado'required />
                        </div>

                        <div className="input">

                            <img src={dui_icon} alt="" />
                            <input type="text" name='user-DUI' placeholder='DUI del invitado'required />

                        </div>
                        <p>Fecha visita</p>
                        <div className="input">
                            <img src={date_icon} alt="" />
                            <input type="date" name='fecha-visita' placeholder='Fecha de la visita' required />
                        </div>
                        <p>Hora de entrada</p>
                        <div className="input">
                            <img src={clock_icon} alt="" />
                            <input type="time" name='hora-entrada-visita' placeholder='Hora de entrada' required />
                        </div>
                        <p>Hora de salida</p>
                        <div className="input">
                            <img src={clock_icon} alt="" />
                            <input type="time" name='hora-salida-visita' placeholder='Hora de salida' required />
                        </div>

                        <div className="submit-container">

                            <div className="submit">
                                <button className='log-in-btn' onClick={handleLogin}>Enviar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default SolicitudFormVisita