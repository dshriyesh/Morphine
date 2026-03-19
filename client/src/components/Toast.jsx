import React, { useContext } from 'react'
import UserContext from '../context/UserContext.jsx'

const Toast = () => {

    const {toast} = useContext(UserContext)

  return (
    <div className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
  toast.visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
}`}>
  
  <div className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg text-white text-sm font-medium ${
    toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
  }`}>
    
    <span className="text-lg">
      {toast.type === 'success' ? '✓' : '✕'}
    </span>

    <p>{toast.message}</p>

  </div>

</div>
  )
}

export default Toast
