import React, { useState } from "react";

import "./NormalResidentHeader.css";
import { Link, NavLink } from "react-router-dom";

const NormalResidentHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
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
          <NavLink to="/home"><button className="log-out-button">Log out</button></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NormalResidentHeader