import React from 'react'
import VigilanteHeader from '../../components/VigilanteHeader/VigilanteHeader'
import FormEntradaAnonima from '../../components/FormEntradaAnonima/FormEntradaAnonima.jsx'

const EntradaAnonima = () => {
  return (
    <div>
      <VigilanteHeader />
      <div className="container">
        <FormEntradaAnonima />

      </div>
    </div>
  )
}

export default EntradaAnonima