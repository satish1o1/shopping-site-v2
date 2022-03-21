import { createContext } from "react";
import { useState } from "react";
import { createUserProfile } from "../utilities/firebase.utility";
import { onAuthUserStateChange } from "../utilities/firebase.utility";
import { useEffect } from "react";

export const UserContext =  createContext({
   currentUser: null,
   setCurrentUser:()=>null,
})

export const UserProvider = ({ children }) => {
   const [currentUser,setCurrentUser] = useState(null)
   const value = { currentUser, setCurrentUser }
   
   useEffect(() => {
      const unSubscribe = onAuthUserStateChange((user) => {
         if (user) {
           createUserProfile(user)
         }
         setCurrentUser(user)
      })
      return unSubscribe
   },[])
   return <UserContext.Provider value = {value} >{children}</UserContext.Provider>
}