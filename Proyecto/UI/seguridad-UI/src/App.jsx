import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import NoPage from './pages/NoPage'
import './App.css'
import LogIn from './pages/LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/home' element={<LandingPage />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='*' element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
