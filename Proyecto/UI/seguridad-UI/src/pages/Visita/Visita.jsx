import React from 'react'
import VisitaHeader from '../../components/VisitaHeader/VisitaHeader'

const Visita = () => {
  return (
    <div>
        <VisitaHeader />
        <div className="welcome-information">
        <h2>Bienvenido, eres reconocido como visitante</h2>
        <p>Información del usuario...</p>
      </div>
    </div>
  )
}

export default Visita