import React, { useState } from 'react'
import { assets } from '../assets/assets.js'

const AuthForm = ({mode}) => {
    
    const isLogin = mode === 'login'
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      
      {!isLogin && (
        <div>
            <label className="text-xs text-white/60 mb-1 block">Full name</label>
          <input className="w-full h-11 rounded-lg bg-white/10 border border-white/20 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/60 transition-all"
            placeholder="Your name" />
        </div>
      )}

      {!isLogin && (
        <div>
          <label className="text-xs text-white/60 mb-1 block">Username</label>
          <input className="w-full h-11 rounded-lg bg-white/10 border border-white/20 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/60 transition-all"
            placeholder="username" />
        </div>
      )}

      <div>
        <label className="text-xs text-white/60 mb-1 block">Email address</label>
        <input className="w-full h-11 rounded-lg bg-white/10 border border-white/20 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/60 transition-all" 
        placeholder='@email'/>
      </div>

      <div>
        <label className="text-xs text-white/60 mb-1 block">Password</label>
        <div className='relative'>
            <input type={showPassword ? 'text' : 'password'} placeholder='••••••••' className="w-full h-11 rounded-lg bg-white/10 border border-white/20 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/60 transition-all pr-10"/>
            <img onClick={() => setShowPassword(prev => !prev)} src={assets.eye} alt="" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer opacity-50 hover:opacity-90 transition-all"/>
        </div>
      </div>

      {!isLogin && (
        <div>
          <label className="text-xs text-white/60 mb-1 block">Confirm password</label>
          <div className='relative'>
            <input type={showConfirmPassword ? 'text' : 'password'} placeholder='••••••••' className="w-full h-11 rounded-lg bg-white/10 border border-white/20 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/60 transition-all pr-10"/>
            <img onClick={() => setShowConfirmPassword(prev => !prev)} src={assets.eye} alt="" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer opacity-50 hover:opacity-90 transition-all"/>
        </div>
        </div>
      )}

       <button className="w-full h-11 rounded-lg bg-white text-neutral-800 text-sm font-medium mt-2 hover:bg-orange-300 transition-all">
        {isLogin ? 'Sign in' : 'Create account'}
      </button>

    </div>
  )
}

export default AuthForm
