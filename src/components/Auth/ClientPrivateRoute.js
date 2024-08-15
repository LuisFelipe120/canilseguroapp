import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

const ClientPrivateRoute = ({children}) => {
    const {logado} = useAuthContext()  
    console.log(logado)
  return (
    (logado ? children : <Navigate to="/signin" />)
  )
}

export default ClientPrivateRoute   