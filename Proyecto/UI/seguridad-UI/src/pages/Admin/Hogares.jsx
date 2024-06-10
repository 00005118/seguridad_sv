import React from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminHomeTables from "../../components/AdminHomeTables/AdminHomeTables";

const Hogares = () => {
    return (
        <div>
            <AdminHeader />
        <div className='container'>
            <AdminHomeTables />
        </div>

        </div>
    );
}

export default Hogares;