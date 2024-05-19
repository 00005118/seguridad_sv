import React from 'react'
import NormalResidentHeader from '../../components/NormalResidentHeader/NormalResidentHeader'
import SentSolicitudesTable from '../../components/SentSolicitudesTable/SentSolicitudesTable'

const HistorialSolicitud = () => {
  return (
    <div>
      <NormalResidentHeader />
      <div className='container'>
          <SentSolicitudesTable />
      </div>
    </div>
  )
}

export default HistorialSolicitud