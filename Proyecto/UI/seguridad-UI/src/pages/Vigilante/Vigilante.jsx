import React from 'react'
import VigilanteHeader from '../../components/VigilanteHeader/VigilanteHeader'

const Vigilante = () => {
  return (
    <div>
        <VigilanteHeader/>
        <div className="welcome-information">
        <h2>Bienvenido, eres reconocido como vigilante</h2>
        <p>Información del usuario...</p>
      </div>
    </div>
  )
}

export default Vigilante