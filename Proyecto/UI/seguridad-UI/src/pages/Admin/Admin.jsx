import React from "react";
import  AdminHeader  from "../../components/AdminHeader/AdminHeader";

const Admin = () => {
    return (
        <div>
        <AdminHeader />
        <div className="welcome-information">
        <h2>Bienvenido, eres reconocido como Administrador</h2>
        <p>Información del usuario...</p>
      </div>
        </div>
    );
}

export default Admin;