import { CREATE, EDIT } from '@/routes'
import { Route } from 'react-router-dom'
import { IndexPeople, PeopleForm } from '../people'
import RouteWithNotFound from '@/helpers/RouteWithNotFound'

const PeopleRoutes = () => {
  return (
    <RouteWithNotFound>
      <Route index element={<IndexPeople />} />
      <Route path={CREATE} element={<PeopleForm />} />
      <Route path={`${EDIT}/:id`} element={<PeopleForm />} />
    </RouteWithNotFound>
  )
}

export default PeopleRoutes
