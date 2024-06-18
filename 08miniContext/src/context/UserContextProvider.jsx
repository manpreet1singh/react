import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";
import { Children } from "react";
const UserContextProvider=({children})=>{
const [user,setUser]=useState(null);
return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
)

}
export default UserContextProvider;
//children will have access of these values