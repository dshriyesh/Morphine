import React, { useState, useContext } from 'react'
import { assets } from '../assets/assets.js'
import axiosInstance from '../utils/axiosInstance.js'
import { UserContext } from '../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'

const AuthForm = ({mode}) => {
    
    const isLogin = mode === 'login'
    const { setUser, showToast } = useContext(UserContext)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [fullname,setFullname] = useState('')
    const [username,setUsername] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate  = useNavigate()

    const handleSubmit = async () => {  
      if (!isLogin && password !== confirmPassword) {
        console.log('Passwords do not match')
        return
      }
      try {
        if (isLogin) {
          console.log('sending data:', { fullname, username, email, password })
          const res = await axiosInstance.post('/users/login', {
            email,
            password
          })
          setUser(res.data.data.user)
          showToast('Signin successfully!', 'success')
          navigate('/') 
          
        } else {
          const res = await axiosInstance.post('/users/register', {
            fullname,
            username,
            email,
            password
          })
          setUser(res.data.data)
          showToast('Account created successfully!', 'success')
          navigate('/login') 
          
        }
      } catch (error) {
        console.log(error.response.data.message)
        showToast('Something went wrong!', 'error')
      }
    }

  return (
    <div className="flex flex-col gap-4">
      
      {!isLogin && (
        <div>
            <label className="text-xs text-white/60 mb-1 block">Full name</label>
          <input className="w-full h-11 rounded-lg bg-white/10 border border-white/20 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/60 transition-all"
            placeholder="Your name"
            value={fullname}
            onChange={(e)=>setFullname(e.target.value)}
            />
        </div>
      )}

      {!isLogin && (
        <div>
          <label className="text-xs text-white/60 mb-1 block">Username</label>
          <input className="w-full h-11 rounded-lg bg-white/10 border border-white/20 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/60 transition-all"
            placeholder="username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
        </div>
      )}

      <div>
        <label className="text-xs text-white/60 mb-1 block">Email address</label>
        <input className="w-full h-11 rounded-lg bg-white/10 border border-white/20 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/60 transition-all" 
        placeholder='@email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="text-xs text-white/60 mb-1 block">Password</label>
        <div className='relative'>
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'} placeholder='••••••••' className="w-full h-11 rounded-lg bg-white/10 border border-white/20 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/60 transition-all pr-10"/>
            <img onClick={() => setShowPassword(prev => !prev)} src={assets.eye} alt="" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer opacity-50 hover:opacity-90 transition-all"/>
        </div>
      </div>

      {!isLogin && (
        <div>
          <label className="text-xs text-white/60 mb-1 block">Confirm password</label>
          <div className='relative'>
            <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type={showConfirmPassword ? 'text' : 'password'} placeholder='••••••••' className="w-full h-11 rounded-lg bg-white/10 border border-white/20 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/60 transition-all pr-10"/>
            <img onClick={() => setShowConfirmPassword(prev => !prev)} src={assets.eye} alt="" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer opacity-50 hover:opacity-90 transition-all"/>
        </div>
        </div>
      )}

       <button className="w-full h-11 rounded-lg bg-white text-neutral-800 text-sm font-medium mt-2 hover:bg-orange-300 transition-all"  onClick={handleSubmit}>
        {isLogin ? 'Sign in' : 'Create account'}
      </button>

    </div>
  )
}

export default AuthForm
