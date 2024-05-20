import React, { useState } from "react";
import "./VisitaHeader.css";
import { Link, NavLink } from "react-router-dom";

const VisitaHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/visitante-landing" className="title">
        Visitante
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/visitaCodQR">Generar código QR</NavLink>
        </li>
        <li>
          <NavLink to="/"><button className="log-out-button">Log out</button></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default VisitaHeader