import React, { useEffect } from 'react'
import NormalResidentHeader from '../../components/NormalResidentHeader/NormalResidentHeader';

const NormalResident = () => {
  useEffect(() => {
    document.title = 'Resident Home';
  }, []);

  return (
    <div>
      <NormalResidentHeader />
    </div>
  )
}

export default NormalResident