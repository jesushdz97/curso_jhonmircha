import { useAuthState } from '@/app/store'
import { LOGIN } from '@/routes'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const isAuthenticated = useAuthState()
  return isAuthenticated ? <Outlet /> : <Navigate to={`/${LOGIN}`} />
}
export default PrivateRoutes
