import React from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminTerminalTable from "../../components/AdminTerminalTable/AdminTerminalTable";

const Terminales = () => {
    return (
        <div>
            <AdminHeader />
        <div className='container'>
            <AdminTerminalTable />
        </div>

        </div>
    );
}

export default Terminales;