import React from 'react'
import { Navigate } from 'react-router-dom'
import { useContextGlobal } from '../../context/PostContext'

const ClientPrivateRoute = ({children}) => {
    const {Logado} = useContextGlobal()  
    console.log(Logado)
  return (
    (Logado ? children : <Navigate to="/login" />)
  )
}

export default ClientPrivateRoute   