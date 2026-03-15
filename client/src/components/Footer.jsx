import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black text-white py-10 px-6">
       <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4">

    <h2 className="text-xl tracking-widest">MORPHINE</h2>

    <p className="text-gray-400 max-w-md">
      Capture and share memories together. Morphine lets everyone at the same
      place upload and access photos instantly.
    </p>

    <div className="flex gap-6 text-gray-400 text-sm">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">Contact</a>
    </div>

    <p className="text-gray-500 text-sm mt-4">
      © 2026 Morphine. All rights reserved.
    </p>

  </div>
    </div>
  )
}

export default Footer
