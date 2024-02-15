import React, {useState, useEffect } from  "react"
import { useNavigate } from "react-router-dom"

const AllContext = React.createContext();


const AllContextProvider = ({ children }) => {
    const navigate = useNavigate()
    
    return (
        <AllContext.Provider>{children}</AllContext.Provider>
    )
}

export {AllContext, AllContextProvider};