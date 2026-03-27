import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
import LoginAndRegister from './pages/loginAndRegister.jsx'
import Toast from './components/Toast.jsx'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import MyCollections from './pages/MyCollections.jsx'
import Spaces from './pages/Spaces.jsx'
import Storage from './pages/Storage.jsx'
import Layout from './components/Layout.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Toast />
    
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginAndRegister/>}/>
      <Route path="/register" element={<LoginAndRegister/>}/>

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/collection" element={<MyCollections/>} />
        <Route path="/spaces" element={<Spaces/>} />
        <Route path="/storage" element={<Storage/>} />
      </Route>

    </Routes>

    </>
  )
}

export default App
