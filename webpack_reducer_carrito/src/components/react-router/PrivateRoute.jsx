import React from 'react'
import { Navigate } from 'react-router-dom'

/** Simulación de autentificación */
let isAuth = true

const PrivateRoute = ({ element: ReactComponent }) => {
  return isAuth ? ReactComponent : <Navigate to='/login' />
}

export default PrivateRoute

/**
 * element es el Component a renderizar
 */
