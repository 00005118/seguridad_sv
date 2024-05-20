import React, { useState } from "react";
import "./VigilanteHeader.css";
import { Link, NavLink } from "react-router-dom";

const VigilanteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/vigilante-landing" className="title">
        Vigilante
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/validarQR">Validar código QR</NavLink>
        </li>
        <li>
          <NavLink to="/entrada-anonima">Registrar entrada anónima</NavLink>
        </li>
        <li>
          <NavLink to="/"><button className="log-out-button">Log out</button></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default VigilanteHeader