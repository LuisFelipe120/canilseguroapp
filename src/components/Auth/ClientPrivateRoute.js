import React from 'react'
import { Navigate } from 'react-router-dom'
import { useContextGlobal } from '../../context/PostContext'

const ClientPrivateRoute = ({children}) => {

    const {logado} = useContextGlobal()  
    console.log("Valor de logado:", logado);
  return (
    (logado ? children : <Navigate to="/login" />)
  )
}

export default ClientPrivateRoute