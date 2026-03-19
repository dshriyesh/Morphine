import React, { useState } from 'react'
import { createContext } from 'react'

export const UserContext = createContext(null)

export const UserProvider = (props)=>{

     const [user, setUser] = useState(null)
     
     const [toast,setToast] = useState({visible:false,message:'',type:''})

     const showToast = (message,type='success')=>{
        setToast({visible:true,message,type})
        setTimeout(()=>{
            setToast({visible:false,message:'',type:''})
        },3000)
     }

    return(
       <UserContext.Provider value={{ user, setUser, toast, showToast }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext
