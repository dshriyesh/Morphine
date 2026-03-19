import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
import LoginAndRegister from './pages/loginAndRegister.jsx'
import Toast from './components/Toast.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Toast />
    
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginAndRegister/>}/>
      <Route path="/register" element={<LoginAndRegister/>}/>

    </Routes>

    </>
  )
}

export default App
