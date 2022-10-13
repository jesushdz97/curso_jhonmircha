import { Routes, Route, Navigate } from 'react-router-dom'
import { CREATE, EDIT, LOGIN, PEOPLE, ROOT } from '@/routes'
import { PrivateRoutes, PublicRoutes } from '@/components/routers'
import { Login, People } from '@/pages'

const App = () => {
  return (
    <Routes>
      <Route path={ROOT} element={<PrivateRoutes />}>
        <Route index element={<Navigate to={PEOPLE} />} />

        <Route path={PEOPLE} element={<People />}>
          <Route path={CREATE} />
          <Route path={EDIT} />
        </Route>
      </Route>

      <Route element={<PublicRoutes />}>
        <Route path={LOGIN} element={<Login />} />
      </Route>

      <Route path='*' element={<>NOT FOUND</>}></Route>
    </Routes>
  )
}
export default App
