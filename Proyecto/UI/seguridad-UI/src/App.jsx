import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import NoPage from './pages/NoPage'
import './App.css'
import LogIn from './pages/LogIn'
import NormalResident from './pages/Resident/NormalResident'
import ForgotPassword from './pages/ForgotPassword'
import CodQr from './pages/Resident/CodQr'
import CrearSolicitud from './pages/Resident/CrearSolicitud'
import HistorialSolicitud from './pages/Resident/HistorialSolicitud'
import Visita from './pages/Visita/Visita'
import CodQrVisita from './pages/Visita/CodQrVisita'
import Vigilante from './pages/Vigilante/Vigilante'
import ValidarQR from './pages/Vigilante/ValidarQR'
import EntradaAnonima from './pages/Vigilante/EntradaAnonima'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/home' element={<LandingPage />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='/resident-landing' element={<NormalResident />}></Route>
          <Route path='/forgot-password' element={<ForgotPassword />}></Route>
          <Route path='/crear-solicitud' element={<CrearSolicitud />}></Route>
          <Route path='/historial-solicitud' element={<HistorialSolicitud />}></Route>
          <Route path='/codQR' element={<CodQr />}></Route>
          <Route path='/visitante-landing' element={<Visita />}></Route>
          <Route path='/visitaCodQR' element={<CodQrVisita />}></Route>
          <Route path='/vigilante-landing' element={<Vigilante />}></Route>
          <Route path='/validarQR' element={<ValidarQR />}></Route>
          <Route path='/entrada-anonima' element={<EntradaAnonima />}></Route>


          <Route path='*' element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
