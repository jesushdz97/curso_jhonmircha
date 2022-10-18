import { URL } from '@/env'
import { CREATE } from '@/routes'
import { Link } from 'react-router-dom'
import { PeopleTable, PeopleTemplate } from '../people'
import { Alert } from '..'
import { useDispatch } from 'react-redux'
import { readAllPeople } from '@/features/people/peopleSlice'
import { Button } from 'react-bootstrap'
import useFetch from '@/hooks/useFetch'

const IndexPeople = () => {
  const dispatch = useDispatch()

  const { data, error } = useFetch(URL, readAllPeople)

  return (
    <PeopleTemplate>
      <div className='container mt-5'>
        {!error && <CreateButton />}
        {!error ? <PeopleTable /> : <Alert serverError={error} />}
      </div>
    </PeopleTemplate>
  )
}

const CreateButton = () => (
  <Link to={CREATE}>
    <Button variant='primary' className='mb-4'>
      Crear Registro
    </Button>
  </Link>
)

export default IndexPeople
