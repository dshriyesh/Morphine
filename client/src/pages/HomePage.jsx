import React from 'react'
import Header from '../components/Header.jsx'
import { assets } from '../assets/assets.js'
import Footer from '../components/Footer.jsx'

const images = [
  assets.cats,
  assets.couple,
  assets.friends,
  assets.holi,
  assets.monument,
  assets.traditional,
]

const HomePage = () => {

  return (
    <>
     <Header />

      <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-500 to-orange-100 overflow-hidden">

        {/* Scrolling Strip */}
        <div className="absolute w-full overflow-hidden z-0 top-1/2 -translate-y-1/2">
          <div className="flex items-center gap-5 animate-scroll w-max px-4">
            {[...images, ...images].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border border-white/30 scroll-card"
                style={{
                  transform: i % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)',
                  opacity: 0.72,
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Subtle overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-gray-500/25 to-orange-100/25" />

        {/* Center Text */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="happy-monkey-regular text-4xl md:text-4xl lg:text-5xl bg-gradient-to-r from-gray-900 to-red-400 bg-clip-text text-transparent drop-shadow-sm">
            Share the Moment.
            <br />
            Collect the Memories.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-black font-bold drop-shadow-sm">
            Morphine makes it easy for everyone at the same place to upload, share,
            and access photos instantly in one shared cloud gallery.
          </p>
          <button className="mt-8 px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2">
            Get Started
            <img src={assets.white_arrow} alt="arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>

      <Footer/>
      
    </>
  )
}

export default HomePage