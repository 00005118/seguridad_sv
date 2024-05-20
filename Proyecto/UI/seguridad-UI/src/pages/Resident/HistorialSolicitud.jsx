import React from 'react'
import NormalResidentHeader from '../../components/NormalResidentHeader/NormalResidentHeader'
import SentSolicitudesTable from '../../components/SentSolicitudesTable/SentSolicitudesTable'

const HistorialSolicitud = () => {
  return (
    <div>
      <NormalResidentHeader />
      <div className='container'>
          <div className="text-table-header">
            <h1>Historial de solicitudes</h1>
          </div>
          <SentSolicitudesTable />
      </div>
    </div>
  )
}

export default HistorialSolicitud