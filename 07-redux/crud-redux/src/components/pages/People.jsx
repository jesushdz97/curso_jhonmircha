import { URL } from '@/env'
import { CREATE } from '@/routes'
import { Link } from 'react-router-dom'
import { PeopleTable, PeopleTemplate } from '../people'
import { Alert } from '..'
import { useDispatch } from 'react-redux'
import { readAllPeople } from '@/features/people/peopleSlice'
import useFetch from '@/hooks/useFetch'

const People = () => {
  const dispatch = useDispatch()

  const { data, error } = useFetch(URL, readAllPeople)

  return (
    <PeopleTemplate>
      <div className='container mt-5'>
        <CreateButton />
        {!error ? <PeopleTable /> : <Alert serverError={error} />}
      </div>
    </PeopleTemplate>
  )
}

const CreateButton = () => (
  <div className='text-end mb-3'>
    <Link to={CREATE} className='btn btn-primary'>
      Crear Persona
    </Link>
  </div>
)

export default People
