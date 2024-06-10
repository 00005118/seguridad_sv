import React, {useState} from "react";
import "../AdminHeader/AdminHeader.css";
import { Link, NavLink } from 'react-router-dom'

export const AdminHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
        <Link to='/admin' className="title">
          Admin
        </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul className={menuOpen ? "open" : ""}>
            <li> 
              <NavLink to='/admin/historial-entradas'>Historial de entrada</NavLink>
            </li>
            <li> 
              <NavLink to='/admin/hogares'>Hogares</NavLink>
            </li>
            <li> 
              <NavLink to='/admin/vigilantes'>Vigilantes</NavLink>
            </li>
            <li> 
              <NavLink to='/admin/terminales'>Terminales</NavLink>
            </li>
            <li> 
              <NavLink to='/admin//petRes'>Peticiones de residente</NavLink>
            </li>
            <li>
              <NavLink to='/'><button className='log-out-button'>Log Out</button></NavLink>
            </li>
        </ul>
    </nav>
  );
}

export default AdminHeader;