import React from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminTableEntradas from "../../components/AdminTableEntradas/AdminTableEntradas";

const HistorialEntradas = () => {
    return (
        <div>
            <AdminHeader />
            <div className='container'>
                <AdminTableEntradas />
            </div>
        </div>
    );
}

export default HistorialEntradas;