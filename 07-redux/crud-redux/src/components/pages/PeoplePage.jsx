import React from 'react'
import { CREATE, EDIT, PEOPLE, ROOT } from '@/routes'
import { Route, Routes } from 'react-router-dom'
import { IndexPeople, PeopleForm } from '../people'
import RouteWithNotFound from '@/helpers/RouteWithNotFound'

const PeoplePage = () => {
  return (
    <RouteWithNotFound>
      <Route index element={<IndexPeople />} />
      <Route path={CREATE} element={<PeopleForm />} />
      <Route path={EDIT} element={<PeopleForm />} />
    </RouteWithNotFound>
  )
}

export default PeoplePage
