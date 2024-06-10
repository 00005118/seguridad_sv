import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import EResidente from './pages/SuperResident/EResidente'
import CodQrEResidente from './pages/SuperResident/CodQrEResidente'
import HistorialPermisosEResidente from './pages/SuperResident/HistorialPermisosEResidente'
import NuevoResidente from './pages/SuperResident/NuevoResidente'
import MiHogar from './pages/SuperResident/MiHogar'
import EResidentPermisos from './pages/SuperResident/EResidentPermisos'

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

          <Route path='/residente-encargado-landing' element={<EResidente />}></Route>
          <Route path='/residente-encargado-permisos' element={<EResidentPermisos />}></Route>
          <Route path='/residente-encargado-qr' element={<CodQrEResidente />}></Route>
          <Route path='/residente-encargado-historial' element={<HistorialPermisosEResidente />}></Route>
          <Route path='/residente-encargado-nuevo-residente' element={<NuevoResidente />}></Route>
          <Route path='/residente-encargado-mi-hogar' element={<MiHogar />}></Route>


          <Route path='*' element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
