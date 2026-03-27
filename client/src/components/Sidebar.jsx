import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LayoutDashboard, Library, UsersRound, CloudBackup } from 'lucide-react'

const Sidebar = () => {
  const navigate = useNavigate()

  return (
        <div className="flex flex-col justify-between h-full border-r border-gray-200 w-64 px-4 py-6">
  
                <div>
                    <div onClick={() => navigate('/')} className="text-lg font-bold text-gray-900 cursor-pointer">MORPHINE</div>
                    <p className="text-xs text-gray-400 mt-0.5">Media Platform</p>
                    <div className="flex flex-col gap-1 mt-10">

                    <button onClick={() => navigate('/dashboard')} className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
                        <LayoutDashboard/>
                        Dashboard
                    </button>

                    <button onClick={() => navigate('/collection')} className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
                       <Library/>
                        My Collections
                    </button>
                    
                    <button onClick={() => navigate('/spaces')}  className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
                        <UsersRound/>
                        Shared Spaces
                    </button>

                    <button onClick={() => navigate('/storage')} className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100">
                        <CloudBackup/>
                        Storage
                    </button>

                    </div>
                </div>

                <div>
                    <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-all">
                    + Upload
                    </button>
                    <p className="text-xs text-gray-400 mt-3">Storage Usage: 84%</p>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '84%' }} />
                    </div>
                </div>
                
         </div>
  )
}

export default Sidebar