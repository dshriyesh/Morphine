import React from 'react'

const Header = () => {
  return (
    <header className="w-full border border-white/10 bg-black/80 shadow-sm backdrop-blur-md">
      <div className="flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <h1
          className="text-white text-xl sm:text-2xl lg:text-2xl tracking-widest"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          MORPHINE
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 transition">
            Sign In
          </button>
          <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 transition">
            Sign Up
          </button>
        </div>
        

      </div>
    </header>
  )
}

export default Header