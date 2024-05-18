import React from 'react'
import qr_image from '../../assets/qr.jpeg'
import './NResidentQR.css'

const NResidentQR = () => {
    return (
        <div className='container'>
            <div className="qr-container">
                <img src={qr_image} alt="asdasd" className='responsive-img' />
                <div className="status">
                    <p>Estado</p>
                    <p className='status-text'><b>Activo</b></p>
                </div>
                <div className="create-new-qr">
                    <button className="create-new-qr-btn">
                        Generar nuevo código QR
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NResidentQR