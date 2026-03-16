import React, { useState } from 'react'
import { assets } from '../assets/assets.js'
import MosaicTile from '../components/MosaicTile.jsx'
import AuthForm from '../components/AuthForm.jsx'

const loginAndRegister = () => {

    const [activeTab, setActiveTab] = useState('login')

    const images =[
        assets.cats,
        assets.couple,
        assets.friends,
        assets.holi,
        assets.italy,
        assets.monument,
        assets.people1,
        assets.people2,
        assets.traditional,
        assets.travel1,
    ]

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-stone-600 to-zinc-800">

    {/* left panel content goes here */}
   <div className="flex-1 relative">  {/* ← relative here */}
        <div className="absolute inset-1 grid grid-cols-3 grid-rows-4 gap-2 p-2 opacity-45">
            <MosaicTile images={images} initialIndex={0} interval={5000} className="row-span-2" />
            <MosaicTile images={images} initialIndex={2} interval={6000} />
            <MosaicTile images={images} initialIndex={5} interval={5500} />
            <MosaicTile images={images} initialIndex={1} interval={7500} className="col-span-2" />
            <MosaicTile images={images} initialIndex={7} interval={8500} />
            <MosaicTile images={images} initialIndex={4} interval={9800} />
            <MosaicTile images={images} initialIndex={8} interval={5500} />

        </div>

        <div className="absolute bottom-15 left-15 right-0 z-10 p-10">

        {/* small label at top */}
        <p className="text-s tracking-[2px] font-extrabold uppercase text-gray-200 mb-10">
            Cloud Media Sharing
        </p>

        {/* main heading */}
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent leading-snug mb-4">
            Every moment, <br /> shared together.
        </h1>

        {/* subtitle */}
        <p className="text-sm text-gray-200 font-extrabold leading-relaxed max-w-[280px]">
            Upload once. Relive together. All your event photos and videos — 
            in one place, accessible to everyone who was there.
        </p>

        </div>
        </div>

            {/* right panel content goes here */}
        <div className="w-[780px] flex flex-col justify-start px-12 pt-20 pb-20">

            {/*singin and signup area */}
            <div className="flex gap-8 mb-60 border-b border-white/20">
                <button
                    onClick={() => setActiveTab('login')}
                    className={`pb-3 text-sm font-medium transition-all ${
                    activeTab === 'login'
                        ? 'text-white border-b-2 border-white'
                        : 'text-white/40 border-b-2 border-transparent'
                    }`}
                >
                    Sign in
                </button>
                <button
                    onClick={() => setActiveTab('register')}
                    className={`pb-3 text-sm font-medium transition-all ${
                    activeTab === 'register'
                        ? 'text-white border-b-2 border-white'
                        : 'text-white/40 border-b-2 border-transparent'
                    }`}
                >
                    Create account
                </button>
            </div>

           {activeTab === 'login' ? (
                <AuthForm mode="login" />
                ) : (
                <AuthForm mode="register" />
                )}
        </div>

</div>
  )
}

export default loginAndRegister
