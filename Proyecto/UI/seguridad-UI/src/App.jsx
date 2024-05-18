import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import NoPage from './pages/NoPage'
import './App.css'
import LogIn from './pages/LogIn'
import NormalResident from './pages/Resident/NormalResident'
import ForgotPassword from './pages/ForgotPassword'

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
          <Route path='*' element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
