import React from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminVigilanteTable from "../../components/AdminVigilanteTable/AdminVigilanteTable";

const Vigilantes = () => {
    return (
        <div>
            <AdminHeader />
        <div className='container'>
            <AdminVigilanteTable />
        </div>

        </div>
    );
}

export default Vigilantes;