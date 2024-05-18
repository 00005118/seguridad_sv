import React, { useEffect } from 'react'
import NormalResidentHeader from '../../components/NormalResidentHeader/NormalResidentHeader';

const NormalResident = () => {
  useEffect(() => {
    document.title = 'Resident Home';
  }, []);

  return (
    <div>
      <NormalResidentHeader />
      <div className="welcome-information">
        <h2>Bienvenido, eres reconocido como residente</h2>
        <p>Información del usuario...</p>
      </div>

    </div>
  )
}

export default NormalResident