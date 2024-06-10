import React, { useState }from 'react'
import { Link, NavLink } from "react-router-dom";
import './EResidenteHeader.css'


const EResidenteHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <nav>
                <Link to="/residente-encargado-landing" className="title">
                    Home
                </Link>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to="/residente-encargado-permisos">Permisos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/residente-encargado-qr">Código qr</NavLink>
                    </li>
                    <li>
                        <NavLink to="/residente-encargado-historial">Historial</NavLink>
                    </li>
                    <li>
                        <NavLink to="/residente-encargado-nuevo-residente">Añadir residentes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/residente-encargado-mi-hogar">Mi hogar</NavLink>
                    </li>

                    <li>
                        <NavLink to="/"><button className="new-solicitudes-button">Nuevas solicitudes</button></NavLink>
                    </li>

                    <li>
                        <NavLink to="/"><button className="log-out-button">Log out</button></NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default EResidenteHeader