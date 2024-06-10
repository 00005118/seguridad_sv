import React from 'react'
import EResidenteHeader from '../../components/EResidenteHeader/EResidenteHeader'

const EResidente = () => {
  return (
    <div>
      <EResidenteHeader />
      <div className="welcome-information">
        <h2>Bienvenido, eres reconocido como residente encargado</h2>
        <p>Información del usuario...</p>
      </div>
    </div>
  )
}

export default EResidente