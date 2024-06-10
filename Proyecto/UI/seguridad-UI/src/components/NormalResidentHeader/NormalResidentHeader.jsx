import React, { useState } from "react";
import '../styles/NavBar.css'
import { Link, NavLink } from "react-router-dom";

const NormalResidentHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="user-nav-bar">
      <Link to="/resident-landing" className="title">
        Home
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/crear-solicitud">Realizar solicitudes</NavLink>
        </li>
        <li>
          <NavLink to="/codQR">Código QR</NavLink>
        </li>
        <li>
          <NavLink to="/historial-solicitud">Historial</NavLink>
        </li>
        <li>
          <NavLink to="/"><button className="log-out-button">Log out</button></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NormalResidentHeader