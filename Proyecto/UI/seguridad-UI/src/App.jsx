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
import Admin from './pages/Admin/Admin'
import HistorialEntradas from './pages/Admin/HistorialEntradas'
import Hogares from './pages/Admin/Hogares'
import Vigilantes from './pages/Admin/Vigilantes'
import Terminales from './pages/Admin/Terminales'

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
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/admin/historial-entradas' element={<HistorialEntradas />}></Route>
          <Route path='/admin/hogares' element={<Hogares />}></Route>
          <Route path='/admin/vigilantes' element={<Vigilantes />}></Route>
          <Route path='/admin/terminales' element={<Terminales />}></Route>

          <Route path='*' element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
