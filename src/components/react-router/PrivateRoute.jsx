import React from 'react'
import { Navigate } from 'react-router-dom'
let isAuth = false

const PrivateRoute = ({ element: Component }) => {
  return isAuth ? Component : <Navigate to='/login' />
}

export default PrivateRoute

/**
 * element es el Component a renderizar
 */
