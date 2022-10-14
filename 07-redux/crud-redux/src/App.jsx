import { Routes, Route, Navigate } from 'react-router-dom'
import { CREATE, EDIT, LOGIN, PEOPLE, ROOT } from '@/routes'
import { PrivateRoutes, PublicRoutes } from '@/components/routers'
import Login from './components/pages/Login'
import { People, PeopleForm } from './components'

const App = () => {
  return (
    <Routes>
      <Route path={ROOT} element={<Navigate to={PEOPLE} />} />

      <Route path={PEOPLE} element={<PrivateRoutes />}>
        <Route index element={<People />} />
        <Route path={CREATE} element={<PeopleForm />} />
        <Route path={EDIT} element={<PeopleForm />} />
      </Route>

      <Route element={<PublicRoutes />}>
        <Route path={LOGIN} element={<Login />} />
      </Route>

      <Route path='*' element={<>NOT FOUND</>}></Route>
    </Routes>
  )
}
export default App
