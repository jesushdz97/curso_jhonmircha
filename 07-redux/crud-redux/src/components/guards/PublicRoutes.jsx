import { useAuthState } from '@/app/store'
import { PEOPLE } from '@/routes'
import { Outlet, Navigate } from 'react-router-dom'

const PublicRoutes = () => {
  const isAuthenticated = useAuthState()
  return !isAuthenticated ? <Outlet /> : <Navigate to={PEOPLE} />
}
export default PublicRoutes
